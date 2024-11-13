import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../styles/Main.css'
import ContentItem from '../components/ContentItem';
import BannerItem from '../components/BannerItem';
import CreateRoom from '../components/CreateRoom';
import { useEffect, useState } from 'react';
const Main = (props) => {
  const navigate = useNavigate();
  const [createRommComponent,setCreateRommComponent] = useState(false);
  const access_token = localStorage.getItem('access_token');
  const [videoIdToComponent,setVideoIdToComponent] = useState(0);
  
  const userInfo = () => {
    if(!access_token){
      navigate('/login')
    }
  }

  useEffect(()=>{
    userInfo()
  },[])

  const setCreateRoom = (videoId)=>{
    console.log("adsfadfs")
    setCreateRommComponent(true);
    setVideoIdToComponent(videoId);
  }

  return(
    <>
      <div className='main-container'>
        {createRommComponent ? <CreateRoom onOff={setCreateRommComponent} /> :null}
        <div className='main-sub-continer'>
          <div className='main-banner'>
            <BannerItem/>
          </div>
        </div>
        <div className='content-container'>
          <div className='content-category-name'>
            드라마
          </div>
          <div className='content-item-container'>
            <ContentItem click={setCreateRoom} videoId={1}/>
            <ContentItem/>
            <ContentItem/>
            <ContentItem/>
            <ContentItem/>
            <ContentItem/>
          </div>
        </div>
        <div className='content-container'>
          <div className='content-category-name'>
            예능
          </div>
          <div className='content-item-container'>
            <ContentItem/>
            <ContentItem/>
            <ContentItem/>
            <ContentItem/>
            <ContentItem/>
            <ContentItem/>
          </div>
        </div>
        <div className='content-container'>
          <div className='content-category-name'>
            영화
          </div>
          <div className='content-item-container'>
            <ContentItem/>
            <ContentItem/>
            <ContentItem/>
            <ContentItem/>
            <ContentItem/>
            <ContentItem/>
          </div>
        </div>
      </div>
    </>
  )
}
export default Main;