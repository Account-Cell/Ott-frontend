import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../styles/Join.css'
import { useEffect, useState } from 'react';
const Master = (props) => {
  const navigate = useNavigate();
  const [joinInfo, setJoinInfo] = useState([]);
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [video, setVideo] = useState(null);


  const setName = (e) =>{
    setJoinInfo({...joinInfo, name: e.target.value});
  }
  const setUsername = (e) =>{
    setJoinInfo({...joinInfo, username: e.target.value});
  }
  const setPassword = (e) =>{
    setJoinInfo({...joinInfo, password: e.target.value});
  }
  const setEmail = (e)=>{
    setJoinInfo({...joinInfo, email: e.target.value});
  }

  const handleFileChange = (e) => {
    setVideo(e.target.files[0]);
  };

  useEffect(()=>{
    console.log(joinInfo)
  },[joinInfo])
  const join = () =>{
    // axios.post("http://localhost:8080/open-api/user/join",
    //   joinInfo)
    //   .then((res)=>{
    //     console.log(res);
    //     navigate('/login')
    //   })
    //   .catch((error)=>{
    //     console.log(error);
    //     alert("ERROR");
    //   })
  }

  return(
    <>
      <div className='Join-continer'>
        <div className='Join-context-container'>
          <div className='Join-header-container'>
            <header className='Join-header'>영상 저장</header>
          </div>
          <div className='Join-input-container'>
            <input type='text' className='Join-name-input' name='Join-name' placeholder='제목' onChange={(e)=>setName(e)}/>
            비디오 업로드 <input type="file" className="file-upload" onChange={handleFileChange} />
            미리보기 사진 업로드 <input type="file" className="file-upload" />
            <textarea className='Join-email-input' name='Join-email' placeholder='영상 설명' onChange={(e)=>setEmail(e)}/>
            <select className='list'>
                <option value="all">all</option>
                <option value="12세">12세</option>
                <option value="15세">15세</option>
                <option value="19세">19세</option>
            </select>
            </div>
          <button onClick={join} className='Join-button'>업로드</button>
        </div>

      </div>
    </>
  )
}
export default Master;