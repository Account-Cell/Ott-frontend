import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../styles/Contents.css'
import VideoItem from '../components/VideoItem';
import ReactPlayer from 'react-player'
import { useEffect } from 'react';
const Contents = (props) => {
  const navigate = useNavigate();
  
  const access_token = localStorage.getItem('access_token');
  
  const userInfo = () => {
    if(!access_token){
      navigate('/login')
    }
  }

  useEffect(()=>{
    userInfo()
  },[])

  return(
    <>
      <div className='contents-container'>
        <div className='contents-sub-continer'>
          <div className='contents-banner'>
            <ReactPlayer/>
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