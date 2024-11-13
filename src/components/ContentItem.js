import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../styles/ContentItem.css'

const ContentItem = (props) => {
  const navigate = useNavigate();
  const click = ()=>{
    props.click(props.videoId);
  }

  return(
    <>
      <div onClick={()=>{click();}} className='content-item'>
        {/* <img src='img/test.jpeg'/> */}
        video
      </div>
    </>
  )
}
export default ContentItem;