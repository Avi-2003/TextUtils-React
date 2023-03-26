import './App.css';
// import About from './components/About';
import TestForm from './components/TestForm';
import Navbar from './components/Navbar';
import React, { useState } from 'react';
import Alert from './components/Alert';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link
// } from "react-router-dom";



function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = '#042743'
      showAlert(":Dark mode has been Enabled", "success")
    }
    else {
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert(":Light mode has been Enabled", "success")

    }
  }
  return (
    <>
      {/* <Router> */}
        <Navbar title='TextUtils' mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-4">
          {/* <Routes>
          <Route path='/about' element={<About/>} >
             
            </Route> */}
            {/* <Route path='/' element= */}
            
              <TestForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode} />
            
            {/* </Route> */}
          {/* </Routes> */}
        </div>
      {/* </Router> */}
    </>
  );
}



export default App;

