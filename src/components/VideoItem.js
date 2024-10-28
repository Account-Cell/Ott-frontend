import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../styles/VideoItem.css'

const VideoItem = (props) => {
  const navigate = useNavigate();
  

  return(
    <>
      <div className='video-item-container'>
        <img src='img/test5.jpeg'/>
        <div className='video-exp'>
          1화 솰라솰라솰라
        </div>
      </div>
    </>
  )
}
export default VideoItem;