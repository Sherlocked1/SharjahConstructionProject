import './App.css';
import Home from '../home/home';
import Login from '../auth/login/login';
import { BrowserRouter, Route, Router, Routes, useNavigate } from 'react-router-dom';
import Register from '../auth/register/register';

function App() {

  const isLoggedIn: boolean = false

  return (
    <div className='app'>
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/*' element={<Home />} />
        </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
