import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../styles/ProfileAdd.css'
import { HiMiniXMark } from "react-icons/hi2";
import { useEffect, useState } from 'react';
const CreateRoom = (props) => {
  const navigate = useNavigate();
  const [joinRoomInfo,setJoinRoomInfo] = useState([])

  const join = () =>{
    
  }
  const setVideoNumber = (e) =>{
    setJoinRoomInfo({...joinRoomInfo, name: e.target.value});
  }
  const setRoomNumber = (e) =>{
    setJoinRoomInfo({...joinRoomInfo, password: e.target.value});
  }

  return(
    <>
      <div className='profile-add-container'>
        <div className='profile-sub-container'>
        <HiMiniXMark size={30} className='deleteIcon' onClick={()=>props.onOff(false)}/>
          <div className='profile-header'>
            방 참여
          </div>
          <div className='profile-input-container'>
            <input type='text' className='profile-name' placeholder='비디오 번호를 적어주세요.' onChange={setVideoNumber}/>
            <input type='text' className='profile-password' placeholder='방번호를 적어주세요.' onChange={setRoomNumber}/>
            <button className='profile-add-button' onClick={()=>{join();}}>
              추가
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
export default CreateRoom;