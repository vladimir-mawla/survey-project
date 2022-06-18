import Login from './components/Login';
import Signup from './components/Signup';
import AdminPage from './components/AdminPage';
import UserPage from './components/UserPage';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    {/* <Login />
    <Signup /> */}
    <Routes>
      <Route path="/" element={<Login />}></Route>
      <Route path="/signup" element={<Signup />}></Route>
      <Route path="/adminpage" element={<AdminPage />}></Route>
      <Route path="/userpage" element={<UserPage />}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
