import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../styles/FriendAddList.css'
import { HiMiniXMark } from "react-icons/hi2";
import FriendAddItem from './FriendAddItem';
const FriendAddList = (props) => {
  const navigate = useNavigate();
  

  return(
    <>
      <div className='friend-add-list-container'>
        <div className='friend-list-sub-container'>
        <HiMiniXMark size={30} className='deleteIcon' onClick={()=>props.onOff(false)}/>
          <div className='friend-header'>
            친구 추가
          </div>
          <div className='friend-search'>
            <input type='text'/>
            <button className='friend-search-button'>
              검색
            </button>
          </div>
          <div className='friend-list-item-container'>
            <FriendAddItem onOff={props.onOff} add={true}/>
            <FriendAddItem onOff={props.onOff} add={true}/>
            <FriendAddItem onOff={props.onOff} add={true}/>
            <FriendAddItem onOff={props.onOff} add={true}/>
            <FriendAddItem onOff={props.onOff} add={true}/>
            <FriendAddItem onOff={props.onOff} add={true}/>
            <FriendAddItem onOff={props.onOff} add={true}/>
          </div>
        </div>
      </div>
    </>
  )
}
export default FriendAddList;