import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../styles/ProfileAdd.css';
import { HiMiniXMark } from "react-icons/hi2";
import { useState } from 'react';

const CreateRoom = (props) => {
  const navigate = useNavigate();
  const [roomInfo, setRoomInfo] = useState({ name: '' });

  const createRoom = async () => {
    try {
      const token = localStorage.getItem('access_token');
      const response = await axios.post(
        'http://localhost:8080/video-groups',
        { name: roomInfo.name }, // 본문(body)으로 전달
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      navigate('/video', { state: { roomId: response.data.id, token } });
    } catch (error) {
      console.error('Failed to create room:', error);
    }
  };

  const setRoom = (e) => {
    setRoomInfo({ ...roomInfo, name: e.target.value });
  };

  return (
    <>
      <div className='profile-add-container'>
        <div className='profile-sub-container'>
          <HiMiniXMark size={30} className='deleteIcon' onClick={() => props.onOff(false)} />
          <div className='profile-header'>방 생성</div>
          <div className='profile-input-container'>
            <input
              type='text'
              className='profile-name'
              placeholder='방 이름을 적어주세요.'
              onChange={setRoom}
            />
            <button className='profile-add-button' onClick={createRoom}>
              추가
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateRoom;
