import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../styles/Header.css'
import { FaUser } from "react-icons/fa";
const Header = (props) => {
  const navigate = useNavigate();
  

  return(
    <>
      <div className='header-container'>
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
            <FaUser className='user-url'/>
          </div>
        </div>
      </div>
    </>
  )
}
export default Header;