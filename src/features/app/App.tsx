import { useState } from 'react';
import './App.css';
import Sidebar from '../home/home';
import Login from '../auth/login/login';
import { Route, Routes, useLocation } from 'react-router-dom';
import Register from '../auth/register/register';

function App() {

  const [currentTab, setCurrentTab] = useState<number>(0);

  const isLoggedIn: boolean = false

  return (
    <div className='app'>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/*' element={<Sidebar currentTab={currentTab} setCurrentTab={setCurrentTab} />}/>
      </Routes>
    </div>
  );
}

export default App;
