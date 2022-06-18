import Login from './components/Login';
import Signup from './components/Signup';
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
    </Routes>
    </BrowserRouter>
  );
}

export default App;
