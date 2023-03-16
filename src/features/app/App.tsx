import { useState } from 'react';
import './App.css';
import Sidebar from '../home/home';
import Login from '../auth/login/login';
import { Route, Routes, useLocation } from 'react-router-dom';
import Register from '../auth/register/register';
import { auth } from '../../firebase';
import Logout from '../auth/logout/logout';

function App() {

  const isLoggedIn: boolean = false

  return (
    <div className='app'>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/signout' element={<Logout/>}/>
        <Route path='/*' element={<Sidebar/>} />
      </Routes>
    </div>
  );
}

export default App;
