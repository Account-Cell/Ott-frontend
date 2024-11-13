import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../styles/Profile.css'
import { useEffect, useState } from 'react';
import { IoAddCircle } from "react-icons/io5";
import { HiMiniXMark } from "react-icons/hi2";  // 삭제 아이콘 추가
import ProfileAdd from '../components/ProfileAdd';
import ProfileLogin from '../components/ProfileLogin';

const Profile = (props) => {
  const navigate = useNavigate();
  const [profileAdd, setProfileAdd] = useState(false);
  const [profileList, setProfileList] = useState([]);
  const [profileAddFT, setProfileAddFT] = useState(true);
  const [loginComponent,setLoginComponent] = useState(false);
  const [profileClickId,setProfileClickId] = useState("");
  const access_token = localStorage.getItem('access_token');
  
  const userInfo = () => {
    if (!access_token) {
      navigate('/login');
    }
  }

  useEffect(() => {
    userInfo();
  }, []);

  const getProfileList = () => {
    axios.get('http://localhost:8080/api/profile', {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('access_token')}`
      }
    })
      .then(res => {
        setProfileList(res.data.body.profile_list);
        if (res.data.body.profile_list.length >= 5) {
          setProfileAddFT(false);
        }else{
          setProfileAddFT(true);
        }
      })
      .catch(err => {
        console.log(err);
      });
  }

  const deleteProfile = (profileId) => {
    axios.delete(`http://localhost:8080/api/profile/${profileId}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('access_token')}`
      }
    })
      .then(res => {
        // 삭제 후 프로필 목록 갱신
        getProfileList();
      })
      .catch(err => {
        console.log(err);
      });
  }

  useEffect(() => {
    console.log("test")
    getProfileList();
  }, [profileAdd]);


  return (
    <>
      <div className='profile-container'>
        {profileAdd ? <ProfileAdd onOff={setProfileAdd} get={getProfileList} /> : null}
        {loginComponent ? <ProfileLogin onOff={setLoginComponent} id={profileClickId}/> :null }
        <div className='profile-sub-container'>
          <div className='profile-list-container'>
            {
              profileList.map((item) => {
                return (
                  <div key={item.id} className='profile-item-container'>
                    <div className='profile-img-container' onClick={() => {setProfileClickId(item.id); setLoginComponent(true)}}>
                      <img src='img/profile.png' className='progile-img' />
                    </div>
                    <div>{item.name}</div>
                    <div className='delete' onClick={() => deleteProfile(item.id)}>
                      <HiMiniXMark className='delete-button' />
                    </div>
                  </div>
                );
              })
            }

            {
              profileAddFT ?
                <div className='profile-add-item-container' onClick={() => setProfileAdd(true)}>
                  <div className='profile-img-container'>
                    <IoAddCircle className='add-button' />
                  </div>
                  <div>프로필 추가</div>
                </div>
                : null
            }
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;