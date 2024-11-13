import { useEffect } from 'react';
import { useLocation, useNavigate, Routes, Route } from 'react-router-dom';
import Main from './pages/Main.js';
import Login from './pages/Login.js';
import Join from './pages/Join.js';
import Header from './pages/Header.js';
import Contents from './pages/Contents.js';
import ShareContents from './pages/ShareContents.js';
import Profile from './pages/Profile.js';
import Master from './pages/Master.js';

function App() {
  const location = useLocation();
  const navigate = useNavigate();
  const hideHeaderPaths = ['/login', '/profile','/join']; // Join은 헤더를 숨기지 않음

  // useEffect(() => {
  //   const accessToken = localStorage.getItem('access_token');
  //   const profileToken = localStorage.getItem('profile_token');

  //   // /login과 /join 경로에서는 토큰 여부와 관계없이 리다이렉트 하지 않음
  //   if (location.pathname !== '/join' && !accessToken) {
  //     navigate('/login'); // access_token 없으면 login으로 리다이렉트
  //   } else if (accessToken && !profileToken && location.pathname !== '/profile') {
  //     navigate('/profile'); // access_token 있고 profile_token 없으면 profile로 리다이렉트
  //   }
  // }, [location, navigate]);

  return (
    <div className="App">
      {!hideHeaderPaths.includes(location.pathname) && <Header />} {/* hideHeaderPaths에 포함된 경로에는 Header 숨김 */}
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/master" element={<Master />} />
        <Route path="/join" element={<Join />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/content/:contentId" element={<Contents />} />
        <Route path="/content/share/:contentId" element={<ShareContents />} />
      </Routes>
    </div>
  );
}

export default App;