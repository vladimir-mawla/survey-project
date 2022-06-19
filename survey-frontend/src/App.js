import Login from './components/Login';
import Signup from './components/Signup';
import AdminPage from './components/AdminPage';
import UserPage from './components/UserPage';
import QuestionComponent from './components/QuestionComponent'
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AddQuestionComponent from './components/AddQuestionComponent';

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
      <Route path="/questioncomponent" element={<QuestionComponent />}></Route>
      <Route path="/addquestioncomponent" element={<AddQuestionComponent />}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
