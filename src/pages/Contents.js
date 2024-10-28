import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../styles/Contents.css'
import VideoItem from '../components/VideoItem';
const Contents = (props) => {
  const navigate = useNavigate();
  

  return(
    <>
      <div className='contents-container'>
        <div className='contents-sub-continer'>
          <div className='contents-banner'>
            <img src='img/test4.jpg'/>
          </div>
          <div className='contents-explanation'>
            해당 영상 설명
          </div>

          <div className='contents-video-container'>
            <VideoItem/>
            <VideoItem/>
            <VideoItem/>
            <VideoItem/>
            <VideoItem/>
            <VideoItem/>
          </div>
        </div>
      </div>
    </>
  )
}
export default Contents;