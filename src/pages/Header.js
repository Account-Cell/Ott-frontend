import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../styles/Header.css'
import { FaUser } from "react-icons/fa";
import { useEffect, useState } from 'react';
import JoinRoom from '../components/JoinRoom';
const Header = (props) => {
  const navigate = useNavigate();
  const [friend,setFriend] = useState(false);
  const access_token = localStorage.getItem('access_token');
  
  const join = () => {
    if(!access_token){
      navigate('/login')
    }
    setFriend(true);
  }

  const logout = () =>{
    localStorage.removeItem('access_token'); 
    localStorage.removeItem('refresh_token'); 
    navigate('/login')
  }

  return(
    <>
      <div className='header-container'>
        {friend ? <JoinRoom onOff={setFriend}/> : null}
        <div className='header-sub-container'>
          <div className='logo'>
            Logo
          </div>
          <div className='category-container'>
            <div className='category-name'>드라마</div>
            <div className='category-name'>예능</div>
            <div className='category-name'>영화</div>
            <div className='category-name'>해외 시리즈</div>
            <div className='category-name'>키즈</div>
          </div>

          <div className='user-info-url-container'>
            <div onClick={join} className='friend'>참여하기</div>
            <div className='logout' onClick={logout}>로그아웃</div>
            <FaUser onClick={()=>navigate('/profile')} className='user-url'/>
          </div>
        </div>
      </div>
    </>
  )
}
export default Header;