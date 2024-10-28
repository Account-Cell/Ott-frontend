import logo from './logo.svg';
import './App.css';
import { useLocation, Routes, Route } from 'react-router-dom';
import Main from './pages/Main.js'
import Login from './pages/Login.js'
import Join from './pages/Join.js';
import Header from './pages/Header.js';
import Contents from './pages/Contents.js';
function App() {
  const location = useLocation();
  const hideHeaderPaths = ['/login', '/join'];
  return (
    <div className="App">
      {!hideHeaderPaths.includes(location.pathname) && <Header />}
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path='/join' element={<Join/>}/>
        <Route path='/content' element={<Contents/>}/>
      </Routes>
    </div>
  );
}

export default App;
