//import logo from './logo.svg';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar.js';
import TextForm from './components/TextForm';
import React, {useState} from 'react'
import Alert from './components/Alert';
import {
  BrowserRouter,
  Link,
  Route,
  Routes,
} from "react-router-dom";


function App() {
  const [mode,setMode] = useState('light');
  const [alert,setAlert] = useState(null);
  const showAlert = (message,type) => {
    setAlert({
      message : message,
      type : type
    })
  };
  setTimeout(() => {
    setAlert(null);
  }, 2000);
  const toggleMode = () => {
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#15104e';
      showAlert("Dark Mode Enabled","success");
      document.title = "TextUtils - Dark Mode";
      /*setInterval(() => {
        document.title = "virus is there";
      }, 1000);
      setInterval(() => {
        document.title = "Install - now";
      }, 1500);*/
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Dark Mode Disabled","success");
      document.title = "TextUtils - Light Mode"
    }    
  }
  

 
  return (
    <>
    
    <BrowserRouter>
    <Navbar title = "TextUtils" aboutTitle = "About Us" mode = {mode} toggle = {toggleMode}/>
    <Alert alert = {alert}/>
      <Routes>
        <Route exact path="/" element={<TextForm heading = "Enter your text here" mode = {mode} alert = {showAlert}/>} />
        <Route exact path="/about" element={<About/>} />
        
      </Routes>
    </BrowserRouter>
    

    
    
    
    </>

  );
}

export default App;
