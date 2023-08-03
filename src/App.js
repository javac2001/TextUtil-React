import './App.css';
import Alert from './Components/Alert';
import About from './Components/About';
import Navbar from './Components/Navbar';
import Textform from './Components/Textform';

import React, { useState } from 'react'

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


function App() {
  const [mode, setMode] = useState("light");
  const togglemode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#343a40"
      showAlert("Dark mode activate", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "#f8f9fa"
      showAlert("Light mode activate", "success");
    }
  }
  const [alert, setAlert] = useState(null);

  let showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }


  return (

    <>
      <Router>
        <Navbar title="TextUtils" mode={mode} togglemode={togglemode} />
        <Alert Alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route path="/" element={<Textform heading="ENTER YOUR TEXT HERE" mode={mode} textFormAlert={showAlert} />}>
              
            </Route>
            <Route path="/about" element={<About mode={mode}/>}>
              
            </Route>
          </Routes>

        </div>
      </Router>
    </>

  );
}

export default App;
