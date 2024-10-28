import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../styles/Join.css'
const Join = (props) => {
  const navigate = useNavigate();
  

  return(
    <>
      <div className='Join-continer'>
        <div className='Join-context-container'>
          <div className='Join-header-container'>
            <header className='Join-header'>회원가입</header>
          </div>
          <div className='Join-input-container'>
            <input type='text' className='Join-name-input' name='Join-name' placeholder='이름'/>
            <input type='text' className='Join-id-input' name='Join-id' placeholder='아이디'/>
            <input type='text' className='Join-password-input' name='Join-password' placeholder='비밀번호'/>
            <input type='text' className='Join-password-confirm-input' name='Join-password-confirm' placeholder='비밀번호 확인'/>
            <input type='text' className='Join-email-input' name='Join-email' placeholder='이메일'/>
            <input type='text' className='Join-name-birth' name='Join-birth' placeholder='생년월일'/>
          </div>
          <button className='Join-button'>회원가입</button>
        </div>

      </div>
    </>
  )
}
export default Join;