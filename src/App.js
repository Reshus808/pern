import logo from './logo.svg';
import React, { useState } from "react";
import './App.css';
import  TextForm from './Components/TextForm'
import Navbar from "./Components/Navbar";
import About from "./Components/About";
import Alert from "./Components/Alert";
import { BrowserRouter, Routes, Router, Route} from "react-router-dom";


function App() {
    const [mode, setMode] = useState('light'); // Whether dark mode is enabled or not
    const [alert, setAlert] = useState(null);

    const showAlert = (message, type) => {
        setAlert({
            msg: message,
            type: type
        })
        setTimeout(() => {
            setAlert(null);
        }, 1500);
    }

    const toggleMode = () => {
        if(mode === 'light'){
            setMode('dark');
            document.body.style.backgroundColor = '#042743';
            showAlert('Dark mode has been enabled', "success");
        }
        else{
            setMode('light');
            document.body.style.backgroundColor ='white';
            showAlert('Light mode has been enabled', 'success');
        }
    }
  return (
    <>
        <BrowserRouter>
            <Navbar title='TextForm' mode={mode} toggleMode={toggleMode} />
            <Alert alert={alert} />
            <div className="container my-3">
        <Routes>
            <Route path='/' element={<TextForm showAlert={showAlert} heading="Try TextForm - word counter, character counter, remove extra spaces, copy text, clear text etc." mode={mode}/>}/>
            <Route path='/about' element={<About mode={mode} />}/>
        </Routes>
            </div>
        </BrowserRouter>
    </>
  );
}

export default App;
