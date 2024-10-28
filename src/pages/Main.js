import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../styles/Main.css'
import ContentItem from '../components/ContentItem';
import BannerItem from '../components/BannerItem';
const Main = (props) => {
  const navigate = useNavigate();
  

  return(
    <>
      <div className='main-container'>
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