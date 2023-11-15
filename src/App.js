import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import DairyList from './pages/DairyList'
import Header from './components/Header';
import MyPage from './pages/MyPage';
import Home from './pages/Home';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/MyPage" element={<MyPage />} />
          <Route path="Login" element={<Login />} />
          <Route path="Register" element={<Register />} />
          <Route path="DairyList" element={<DairyList />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
