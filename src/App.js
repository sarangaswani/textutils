import { useState } from "react";
import "./App.css";
import Alert from "./components/Alert";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";

import {
  BrowserRouter, 
  Routes,
  Route,
} from "react-router-dom";


function App() {
  const [Mode, setMode] = useState ('light');

  const [alert, setAlert] = useState(null);

  

  const showAlert = (message, type) => {
           setAlert({
            msg: message,
            type: type
           })
           setTimeout(() => {
            setAlert(null);
           }, 1000);
  }

  const toggleMode = () => {
    if(Mode==="light") {
      setMode("dark");
      document.body.style.backgroundColor = "rgb(58 78 99)";
      showAlert("Dark Mode Enabled","success");
      // document.title= 'TextUtils - DarkMode';
    
    }
    else{
      setMode("light")
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode Enabled","success");
      // document.title= 'TextUtils - LightMode';
    }
  }
 

  return (
    <>
      <BrowserRouter>
      <Navbar title="TextUtils" aboutext="About-Us" mode={Mode} togglemode={toggleMode}/>
      <Alert alert={alert} showAlert={showAlert}/> 
      <Textform heading="Try TextUtils - word counter, character counter, remove extra spaces" mode={Mode} togglemode={toggleMode} showAlert={showAlert} />
      <div className="container">
      <Routes>
        <Route exact path="/" element={ <Textform heading="Try TextUtils - word counter, character counter, remove extra spaces" mode={Mode} togglemode={toggleMode} showAlert={showAlert} />} />
        <Route exact path="/About-Us" element={<About mode={Mode}/>} />
      </Routes> 
      </div>
      </BrowserRouter>

    </>
  );
}

export default App;
