import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navitems from './Navitems';
import Home from './Home';
import Login from './Login';
import React from 'react';
import Signup from './Signup';
import Aboutus from './Aboutus';
import Profile from './Profile';
import Plantsproducts from './Plantsproducts';
import Bouqutesproducts from './Bouqutesproducts';
function App() {
  return (
    <div>
      <>
        <BrowserRouter>
           <Routes>
             <Route path='/' element={<Navitems/>}>
               <Route path='home' element={<Home/>}/>
               <Route index element={<Login/>}/>
               <Route path='signup' element={<Signup/>}/>
               <Route path='profile' element={<Profile/>}/>
               <Route path='aboutus' element={<Aboutus/>}/>
               <Route path='plantsshop' element={<Plantsproducts/>}/>
               <Route path='bouquetsshop' element={<Bouqutesproducts/>}/>
             </Route>
           </Routes>
        </BrowserRouter>
      </>
    </div>
  );
}

export default App;
