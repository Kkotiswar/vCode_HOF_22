import './App.css';
import React, { useState } from 'react';

import  NavbarTop  from './components/NavbarTop';
import NavbarSec from './components/NavbarSec';
import Caraousel from './components/Caraousel';
import Auth from './components/forms/Auth';
import About from './components/aboutus/about'


function App() {

  const [form,setForm] = useState(false);
  // const [about, setAbout] = useState(false);

  function handleBtnClick(){
      setForm(prev =>{
        return !prev;
      })
  }

  // function handleClick(){
  //   return 
  // }
  
  return (
    
    <div className="App">
      
     
     <NavbarTop 
       handleBtnClick={handleBtnClick}
     />
     { <NavbarSec
       handleBtnClick={handleBtnClick}
     />}

    { form === true ? <Auth /> : <Caraousel />} 

     <About/>
      
    </div>
  );
}

export default App;
