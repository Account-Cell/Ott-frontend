import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../styles/ProfileAdd.css'
import { HiMiniXMark } from "react-icons/hi2";
import { useEffect, useState } from 'react';
const ProfilePassword = (props) => {
  const navigate = useNavigate();
  const [profileInfo,setProfileInfo] = useState([])

  const addProfile = () =>{
    axios.post("http://localhost:8080/api/profile",
      profileInfo,{
        headers:{
          Authorization: `Bearer ${localStorage.getItem('access_token')}`
        }
      }
    ).then((res)=>{
      console.log(res);
      props.onOff(false);
    })
    .catch((error)=>{
      console.log(error);
      alert("ERROR");
    })
  }
  const setPassword = (e) =>{
    setProfileInfo({...profileInfo, password: e.target.value});
  }
  return(
    <>
      <div className='profile-add-container'>
        <div className='profile-sub-container'>
        <HiMiniXMark size={30} className='deleteIcon' onClick={()=>props.onOff(false)}/>
          <div className='profile-header'>
            프로필 추가
          </div>
          <div className='profile-input-container'>
            <input type='text' className='profile-password' placeholder='프로필 비밀번호를 설정해 주세요.' onChange={setPassword}/>
            <button className='profile-add-button' onClick={()=>{addProfile();}}>
              추가
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
export default ProfilePassword;