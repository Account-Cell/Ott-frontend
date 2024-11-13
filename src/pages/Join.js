import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../styles/Join.css'
import { useEffect, useState } from 'react';
const Join = (props) => {
  const navigate = useNavigate();
  const [joinInfo, setJoinInfo] = useState([]);
  const [passwordConfirm, setPasswordConfirm] = useState("");


  const setName = (e) =>{
    setJoinInfo({...joinInfo, name: e.target.value});
  }
  const setUsername = (e) =>{
    setJoinInfo({...joinInfo, username: e.target.value});
  }
  const setPassword = (e) =>{
    setJoinInfo({...joinInfo, password: e.target.value});
  }
  const setPasswordCon = (e) =>{
    setPasswordConfirm(e.target.value);
  }

  const setBirth = (e)=>{
    setJoinInfo({...joinInfo, birth: e.target.value});
  }
  const setEmail = (e)=>{
    setJoinInfo({...joinInfo, email: e.target.value});
  }

  useEffect(()=>{
    console.log(joinInfo)
  },[joinInfo])
  const join = () =>{
    axios.post("http://localhost:8080/open-api/user/join",
      joinInfo)
      .then((res)=>{
        console.log(res);
        navigate('/login')
      })
      .catch((error)=>{
        console.log(error);
        alert("ERROR");
      })
  }

  return(
    <>
      <div className='Join-continer'>
        <div className='Join-context-container'>
          <div className='Join-header-container'>
            <header className='Join-header'>회원가입</header>
          </div>
          <div className='Join-input-container'>
            <input type='text' className='Join-name-input' name='Join-name' placeholder='이름' onChange={(e)=>setName(e)}/>
            <input type='text' className='Join-id-input' name='Join-id' placeholder='아이디' onChange={(e)=>setUsername(e)}/>
            <input type='text' className='Join-password-input' name='Join-password' placeholder='비밀번호' onChange={(e)=>setPassword(e)}/>
            <input type='text' className='Join-password-confirm-input' name='Join-password-confirm' placeholder='비밀번호 확인' onChange={(e)=>setPasswordCon(e)}/>
            <input type='text' className='Join-email-input' name='Join-email' placeholder='이메일' onChange={(e)=>setEmail(e)}/>
            <input type='text' className='Join-name-birth' name='Join-birth' placeholder='생년월일' onChange={(e)=>setBirth(e)}/>
          </div>
          <button onClick={join} className='Join-button'>회원가입</button>
        </div>

      </div>
    </>
  )
}
export default Join;