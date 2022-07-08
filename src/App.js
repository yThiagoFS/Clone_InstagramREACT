import React from "react"
import './App.css'

import Header from "./components/header/Header.js"
import Main from "./Main.js"
import Direct from "./components/direct/Direct.js"
import Explore from "./components/explore/Explore.js"
import Perfil from "./components/perfil/Perfil.js"

import "./components/modal/Modal.css"

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  Link
} from "react-router-dom";
// import OpenModal from "./components/modal/Modal"
// import {RiMessengerLine} from 'react-icons/ri'
// import {CgAddR} from 'react-icons/cg'
// import {ImCompass2} from 'react-icons/im'
// import {AiOutlineHeart} from 'react-icons/ai'
// import {MdHomeFilled} from 'react-icons/md' 
// import {VscSearch} from 'react-icons/vsc'
// import {CgClose} from 'react-icons/cg'





function App() {
  
  return (
    <Router>
      
    

      {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
      <Header />
      <Routes>
        
        <Route path="/Perfil" element={<Perfil />}/>
        
        <Route path="/" element={<Main />}/>
          

        <Route path ="/Explore" element={<Explore />}/> 
        
        <Route path ="/Direct" element={<Direct />}/>

      </Routes>
    
  </Router>
       
      
  );
}


export default App;
