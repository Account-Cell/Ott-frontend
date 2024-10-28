import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../styles/Login.css'
const Login = (props) => {
  const navigate = useNavigate();
  

  return(
    <>
      <div className='login-continer'>
        <div className='login-context-container'>
          <div className='login-header-container'>
            <header className='login-header'>로그인</header>
          </div>
          <div className='login-input-container'>
            <input type='text' className='login-id-input' name='login-id' placeholder='아이디'/>
            <input type='text' className='login-password-input' name='login-password' placeholder='비밀번호'/>
          </div>
          <button className='login-button'>로그인</button>
          <div className='sign-up-navigate-container'>
            <div>회원가입</div>
          </div>
        </div>

      </div>
    </>
  )
}
export default Login;