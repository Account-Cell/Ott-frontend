import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../styles/ContentItem.css'

const ContentItem = (props) => {
  const navigate = useNavigate();
  

  return(
    <>
      <div className='content-item'>
        <img src='img/test.jpeg'/>
      </div>
    </>
  )
}
export default ContentItem;