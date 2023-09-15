import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import Service from './Service';
import Contact from './Contact';
import Support from './Support';
import Menu from './Menu';
import User from './User';

const App= ()=> {


  return (
    <>
      <Menu/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/support' element={<Support/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/service' element={<Service/>}/>
        <Route path='/user/:name/:lname' element={<User/>}/>             {/*name: is known as parameter */}
      </Routes>
    </>
  );
}

export default App;
