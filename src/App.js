import React from "react";
import Navbar from "./components/Navbar";
import Workspace from "./components/Workspace";
import About from "./components/About";
import { useState } from 'react'
import './App.css'
import Alert from "./components/Alert";
import { Route, BrowserRouter,  Routes } from 'react-router-dom';

function App() {
  const [mode, setMode] = useState('light')
  const [filter, setFilter] = useState()
  const [textarea, setTextarea] = useState()
  const [alert, setAlert] = useState(null)

  const showAlert = (type, message) => {
    setAlert({
      type: type,
      msg: message
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }
  const switchDarkMode = () => {
    if (mode === 'light') {
      setMode('dark')
      invertStyle(mode)
      darkTextArea(mode)
      document.body.style.backgroundColor = 'rgb(8 5 28)'
      document.body.style.color = 'white'
      showAlert('success','Dark mode is enabled')
      document.title = 'TextUtils- Dark Mode'
    }
    else {
      setMode('light')
      invertStyle(mode)
      darkTextArea(mode)
      document.body.style.backgroundColor = 'white'
      document.body.style.color = 'black'
      showAlert('success', 'Dark mode is disabled')
      document.title = 'TextUtils- Light Mode'
    }
  }
  const darkTextArea = () => {
    if (mode === 'dark') {
      setTextarea('textarea-light')
    }
    else {
      setTextarea('textarea-dark')
    }
  }
  const invertStyle = () => {
    if (mode === 'light') {
      setFilter('filter') 
    }
    else {
      setFilter('nofilter')
    }
  }
  return (
    <>
    <BrowserRouter>
    <div style={{height: '100px'}} className="sticky-top">
    <Navbar title="TextUtils" alert={alert} switchDarkMode={switchDarkMode} mode={mode} filter={filter} />
      <Alert alert={alert} />
      </div>
      <Routes>
      <Route path="/" element={<Workspace textarea={textarea} showAlert={showAlert} />} />
      <Route path="/about" element={<About acordianBody={textarea} mode={mode} />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}
export default App;
