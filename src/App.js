
import './App.css';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Home from './components/pages/home/Home';
import Register from './components/pages/user/register/Register';
import ErrorPage from './components/pages/error/Error';
import Gallery from './components/pages/places/gallery/Gallery';
import Details from './components/pages/places/details/Details';
import Login from './components/pages/user/login/Login';
import { useState } from 'react';

import Logout from './components/pages/user/logout/Logout';

function App() {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(false);

  const setLogin = () =>{
    const local = localStorage.getItem('id');
    if(local){
      setIsLogin(true);
    }else {
      setIsLogin(false);
    }
    navigate('/')
  }

  return (
    <>

      <Header isLogin={isLogin}/>
      <Routes>
        <Route path='/' element={<Home isLogin={isLogin} />} />
        <Route path='/places' element={<Gallery />} />
        <Route path='/login' element={<Login setLogin={setLogin} />} />
        <Route path='/registration' element={<Register setLogin={setLogin} />} />
        <Route path='/logout' element={<Logout setLogin={setLogin} />} />
        <Route path='/profile' element={<h1> profile </h1>} />
        <Route path='/about' element={<h1> about </h1>} />
        <Route path='/contact' element={<h1> contact </h1>} />
        <Route path="/places/:id" element={<Details />}></Route>
        <Route path='*' element={<ErrorPage />} />


      </Routes>
      <Footer />
    </>
  );
}

export default App;
