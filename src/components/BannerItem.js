import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../styles/BannerItem.css'

const BannerItem = (props) => {
  const navigate = useNavigate();
  

  return(
    <>
      <div className='banner-item'>
        <img src='img/test4.jpg'/>
      </div>
    </>
  )
}
export default BannerItem;