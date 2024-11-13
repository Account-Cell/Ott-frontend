// JoinRoom.js
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../styles/ProfileAdd.css';
import { HiMiniXMark } from "react-icons/hi2";
import { useState } from 'react';

const JoinRoom = (props) => {
  const navigate = useNavigate();
  const [joinRoomInfo, setJoinRoomInfo] = useState({ videoId: '', roomId: '' });

  const joinRoom = () => {
    const token = localStorage.getItem('access_token');
    if (joinRoomInfo.roomId && joinRoomInfo.videoId) {
      navigate('/video', { state: { roomId: joinRoomInfo.roomId, videoId: joinRoomInfo.videoId, token } });
    } else {
      console.error('Video ID and Room ID are required');
    }
  };

  const setVideoNumber = (e) => {
    setJoinRoomInfo({ ...joinRoomInfo, videoId: e.target.value });
  };
  const setRoomNumber = (e) => {
    setJoinRoomInfo({ ...joinRoomInfo, roomId: e.target.value });
  };

  return (
    <>
      <div className='profile-add-container'>
        <div className='profile-sub-container'>
          <HiMiniXMark size={30} className='deleteIcon' onClick={() => props.onOff(false)} />
          <div className='profile-header'>방 참여</div>
          <div className='profile-input-container'>
            <input
              type='text'
              className='profile-name'
              placeholder='비디오 번호를 적어주세요.'
              onChange={setVideoNumber}
            />
            <input
              type='text'
              className='profile-password'
              placeholder='방 번호를 적어주세요.'
              onChange={setRoomNumber}
            />
            <button className='profile-add-button' onClick={joinRoom}>
              추가
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default JoinRoom;
