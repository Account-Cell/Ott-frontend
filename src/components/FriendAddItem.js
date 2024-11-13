import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../styles/FriendItem.css'

const FriendAddItem = (props) => {
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
        <div className='friend-add-button-container'>
          {
            props.add ?
            <button className='friend-item-add-button'>
              친구 추가
            </button> :
            <button className='friend-item-add-button'>
              친구 초대
            </button>
          }
        </div>

      </div>
    </>
  )
}
export default FriendAddItem;