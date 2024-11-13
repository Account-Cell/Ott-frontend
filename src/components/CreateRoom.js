import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../styles/ProfileAdd.css'
import { HiMiniXMark } from "react-icons/hi2";
import { useEffect, useState } from 'react';
const CreateRoom = (props) => {
  const navigate = useNavigate();
  const [roomInfo,setRoomInfo] = useState([])

  
  const setRoom = (e) =>{
    setRoomInfo({...roomInfo, name: e.target.value});
  }

  return(
    <>
      <div className='profile-add-container'>
        <div className='profile-sub-container'>
        <HiMiniXMark size={30} className='deleteIcon' onClick={()=>props.onOff(false)}/>
          <div className='profile-header'>
            방 생성
          </div>
          <div className='profile-input-container'>
            <input type='text' className='profile-name' placeholder='방번호를 적어주세요.' onChange={setRoom}/>
            <button className='profile-add-button'>
              추가
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
export default CreateRoom;