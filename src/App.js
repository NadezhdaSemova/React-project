
import './App.css';
import { useEffect, useState } from 'react';
import { getAll } from './service/homeService';
import {Routes, Route} from 'react-router-dom';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Home from './components/pages/home/Home';
import Register from './components/pages/user/register/Register';
import ErrorPage from './components/pages/error/Error';
import Gallery from './components/pages/places/gallery/Gallery';
import Details from './components/pages/places/details/Details';

function App() {

  const [places, setPlaces] = useState([]);

    useEffect(() => {
        getAll().then(place => {
            setPlaces(Object.values(place));
        })
            .catch(err => {
                console.log(err)
            })
    }, []);

    
  return (
    <>

    <Header />
    <Routes>
    <Route path='/' element={<Home places={places}/>} />
    <Route path='/places' element={<Gallery places={places}/>} />
    <Route path='/login' element={<h1> Login </h1>} />
    <Route path='/registration' element={<Register/>} />
    <Route path='/logout' element={<h1> logout </h1>} />
    <Route path='/profile' element={<h1> profile </h1>} />
    <Route path='/about' element={<h1> about </h1>} />
    <Route path='/contact' element={<h1> contact </h1>} />
    <Route path="/places/:id" element={<Details places={places}/> }></Route>
    <Route path='*' element={<ErrorPage/>} />
    
      
    </Routes>
    <Footer />
    </>
  );
}

export default App;
