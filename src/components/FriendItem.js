import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../styles/FriendItem.css'

const FriendItem = (props) => {
  const navigate = useNavigate();
  

  return(
    <>
      <div className='friend-item-container'>
        <div className='friend-name'>
          이름
        </div>
        <div className='friend-id'>
          친구 고유키
        </div>

      </div>
    </>
  )
}
export default FriendItem;