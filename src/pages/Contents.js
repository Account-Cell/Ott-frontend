import React, { useEffect, useRef, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import VideoItem from '../components/VideoItem';
import { Stomp } from '@stomp/stompjs';
import SockJS from 'sockjs-client';
import '../styles/Contents.css';

const Contents = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const videoRef = useRef(null);
  const stompClientRef = useRef(null);
  const seekingRef = useRef(false);
  const seekTimeoutRef = useRef(null);
  const [connected, setConnected] = useState(false);
  const [error, setError] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isInitialized, setIsInitialized] = useState(false);

  const access_token = localStorage.getItem('access_token');
  const { roomId = 'defaultRoom', videoId = 1 } = location.state || {};

  const userInfo = () => {
    if (!access_token) {
      navigate('/login');
    }
  };

  useEffect(() => {
    userInfo();
  }, []);

  useEffect(() => {
    const connectWebSocket = () => {
      try {
        const socket = new SockJS('http://localhost:8080/ws');
        const stompClient = Stomp.over(socket);
        stompClientRef.current = stompClient;

        const headers = {
          Authorization: `Bearer ${access_token}`,
          'X-Requested-With': 'XMLHttpRequest',
        };

        stompClient.connect(
          headers,
          () => {
            console.log("WebSocket connected");
            setConnected(true);
            setError(null);

            stompClient.send(
              `/app/room/${roomId}/video-state-request`,
              headers,
              JSON.stringify({ requesterId: access_token })
            );

            stompClient.subscribe(`/user/queue/room/${roomId}/video-state`, (message) => {
              const data = JSON.parse(message.body);
              if (videoRef.current && !isInitialized) {
                videoRef.current.currentTime = data.currentTime;
                setIsPlaying(data.isPlaying);
                if (data.isPlaying) {
                  videoRef.current.play().catch(() => {
                    console.log("Playback failed due to autoplay policy");
                  });
                }
                setIsInitialized(true);
              }
            });

            stompClient.subscribe(`/topic/room/${roomId}/video-action`, (message) => {
              const data = JSON.parse(message.body);
              if (videoRef.current && !seekingRef.current) {
                switch (data.action) {
                  case 'play':
                    if (videoRef.current.paused) {
                      videoRef.current.play().catch(() => {
                        console.log("Playback failed due to autoplay policy");
                      });
                      setIsPlaying(true);
                    }
                    break;
                  case 'pause':
                    if (!videoRef.current.paused) {
                      videoRef.current.pause();
                      setIsPlaying(false);
                    }
                    break;
                  case 'seek':
                    const timeDiff = Math.abs(videoRef.current.currentTime - data.time);
                    if (timeDiff > 0.5) {
                      seekingRef.current = true;
                      videoRef.current.currentTime = data.time;
                      if (data.shouldPlay) {
                        videoRef.current.play().catch(() => {
                          console.log("Playback failed after seeking");
                        });
                        setIsPlaying(true);
                      } else {
                        videoRef.current.pause();
                        setIsPlaying(false);
                      }
                      setTimeout(() => {
                        seekingRef.current = false;
                      }, 100);
                    }
                    break;
                }
              }
            });
          },
          (error) => {
            console.error("WebSocket connection error:", error);
            setError("WebSocket 연결 실패. 잠시 후 다시 시도합니다.");
            setConnected(false);
            setTimeout(connectWebSocket, 5000);
          }
        );
      } catch (err) {
        console.error("Error creating WebSocket connection:", err);
        setError("WebSocket 연결 생성 실패");
      }
    };

    connectWebSocket();

    return () => {
      if (stompClientRef.current && stompClientRef.current.connected) {
        stompClientRef.current.disconnect(() => {
          console.log("WebSocket disconnected");
          setConnected(false);
        });
      }
      if (seekTimeoutRef.current) {
        clearTimeout(seekTimeoutRef.current);
      }
    };
  }, [roomId, access_token, isInitialized]);

  const sendMessage = (action, time = 0, shouldPlay = false) => {
    if (stompClientRef.current && stompClientRef.current.connected) {
      stompClientRef.current.send(
        `/app/room/${roomId}/video-action`,
        { Authorization: `Bearer ${access_token}` },
        JSON.stringify({ action, time, shouldPlay })
      );
    }
  };

  const handlePlay = () => {
    if (!seekingRef.current) {
      sendMessage('play');
    }
  };

  const handlePause = () => {
    if (!seekingRef.current) {
      sendMessage('pause');
    }
  };

  const handleSeeking = () => {
    if (!seekingRef.current) {
      seekingRef.current = true;
      if (seekTimeoutRef.current) {
        clearTimeout(seekTimeoutRef.current);
      }
    }
  };

  const handleSeeked = () => {
    if (seekTimeoutRef.current) {
      clearTimeout(seekTimeoutRef.current);
    }

    seekTimeoutRef.current = setTimeout(() => {
      if (videoRef.current) {
        const wasPlaying = isPlaying;
        const time = videoRef.current.currentTime;
        sendMessage('seek', time, wasPlaying);

        setTimeout(() => {
          seekingRef.current = false;
        }, 100);
      }
    }, 200);
  };

  return (
    <div className='contents-container'>
      <div className='contents-sub-continer'>
        <div className='contents-banner'>
          {error && <div className="error-message">{error}</div>}
          <video
            ref={videoRef}
            src={`http://localhost:8080/stream/video/${videoId}`}
            controls
            onPlay={handlePlay}
            onPause={handlePause}
            onSeeking={handleSeeking}
            onSeeked={handleSeeked}
            width="100%"
            height="100%" // 비디오가 div 영역을 채우도록 설정
            style={{ display: connected ? 'block' : 'none', borderRadius: '10px' }}
          />
          {!connected && !error && <div>연결 중...</div>}
        </div>
        <div className='contents-explanation'>
          해당 영상 설명
        </div>

        <div className='contents-video-container'>
          <VideoItem />
          <VideoItem />
          <VideoItem />
          <VideoItem />
          <VideoItem />
          <VideoItem />
        </div>
      </div>
    </div>
  );
};

export default Contents;
