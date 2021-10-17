import './App.css';
import Navbar from './components/Navbar';
import Converter from './components/Converter';
import Alert from './components/Alert'
// import About from './components/About';
import React,{useState} from "react";


function App() {
  const [mode,setMode]=useState("dark");
  const [alert,setAlert]=useState(false);
  
  const toggleMode=()=>{
    if(mode==="dark"){
      setMode("light");
      document.body.style.backgroundColor="white";
      setAlert(true)
    }else{
      setMode("dark");
      document.body.style.backgroundColor="#171717";
      setAlert(true)
    }
  }
  return (
    <>
    
    <Navbar title="Converter" mode={mode} toggleMode={toggleMode} />
    <Alert alert={alert}  />
    <Converter mode={mode} />
 
    </>
  );
}

export default App;
