import './App.css';
import Navbar from './components/Navbar';
import Converter from './components/Converter';
import Alert from './components/Alert'
import { useState } from 'react/cjs/react.development';
// import About from './components/About';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

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
    {/* <Router> */}
    <Navbar title="Converter" mode={mode} toggleMode={toggleMode} />
    <Alert alert={alert}  />
      {/* <Switch> */}
          {/* <Route exact path="/"> */}
            <Converter mode={mode} />
          {/* </Route> */}
          {/* <Route exact path="/about">
            <About />
          </Route>
      </Switch>
    </Router> */}
    
    
    </>
  );
}

export default App;
