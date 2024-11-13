import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../styles/Login.css'
import { useEffect, useState } from 'react';
const Login = (props) => {
  const navigate = useNavigate();
  const [loginInfo,setLoginInfo] = useState([]);
  const setUsername = (e) =>{
    setLoginInfo({...loginInfo, username: e.target.value});
  }
  const setPassword = (e) =>{
    setLoginInfo({...loginInfo, password: e.target.value});
  }
 useEffect(()=>{
  console.log(loginInfo)
 },[loginInfo])
  const login = () =>{
    axios.post("http://localhost:8080/open-api/user/login",
      loginInfo)
      .then(async(res)=>{
        console.log(res);
        await localStorage.setItem('access_token', res.data.body.access_token)
        await localStorage.setItem('refresh_token', res.data.body.refresh_token)
        await navigate('/profile')
      })
      .catch((error)=>{
        console.log(error);
        alert("ERROR");
      })
  }

  return(
    <>
      <div className='login-continer'>
        <div className='login-context-container'>
          <div className='login-header-container'>
            <header className='login-header'>로그인</header>
          </div>
          <div className='login-input-container'>
            <input type='text' className='login-id-input' name='login-id' placeholder='아이디' onChange={(e)=>setUsername(e)}/>
            <input type='password' className='login-password-input' name='login-password' placeholder='비밀번호' onChange={(e)=>setPassword(e)}/>
          </div>
          <button onClick={login} className='login-button'>로그인</button>
          <div className='sign-up-navigate-container'>
            <div className='join-url' onClick={()=>navigate('/join')}>회원가입</div>
          </div>
        </div>

      </div>
    </>
  )
}
export default Login;