import './App.css';
import Home from '../home/home';
import Login from '../auth/login/login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Register from '../auth/register/register';
import Checkout from '../sub_routes/requests/payment/checkout/checkout';

function App() {
  return (
    <div className='app'>
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/*' element={<Home />} />
          <Route path='/payment/:title/:description/:location' element={<Checkout/>}/>
        </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
