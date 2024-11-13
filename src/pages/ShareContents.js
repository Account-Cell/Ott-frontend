import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../styles/ShareContents.css'
import VideoItem from '../components/VideoItem';
const ShareContents = (props) => {
  const navigate = useNavigate();
  

  return(
    <>
      <div className='share-contents-container'>
        <div className='share-contents-sub-continer'>
          <div className='share-contents-video-chat-container'>
            <img src='http://localhost:3000/img/test4.jpg'/>
            <div className='share-contents-chat-container'>
              <div className='friend-add-button-container'>
                
                <button>
                  추가
                </button>
              </div>
            </div>
          </div>
          <div className='share-contents-explanation'>
            해당 영상 설명
          </div>

          <div className='share-contents-video-container'>
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
export default ShareContents;