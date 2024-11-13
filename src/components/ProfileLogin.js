import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../styles/ProfileAdd.css'
import { HiMiniXMark } from "react-icons/hi2";
import { useEffect, useState } from 'react';
const ProfileLogin = (props) => {
  const navigate = useNavigate();
  const [profileInfo,setProfileInfo] = useState("")
  useEffect(()=>{
    setProfileInfo({...profileInfo, id: props.id});
    console.log(props.id)
  },[])
  const profileLogin = () =>{
    axios.post("http://localhost:8080/api/profile/login",
      profileInfo,{
        headers:{
          Authorization: `Bearer ${localStorage.getItem('access_token')}`
        }
      }
    ).then((res)=>{
      console.log(res);
      localStorage.setItem('profile_token', res.data.body.profile_token)
      navigate('/')
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
            <input type='text' className='profile-password' placeholder='프로필 비밀번호를 적어주세요.' onChange={setPassword}/>
            <button className='profile-add-button' onClick={()=>{profileLogin();}}>
              로그인
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
export default ProfileLogin;