import Navbar from "./components/Navbar";
import Workspace from "./components/Workspace";
import { useState } from 'react'
import './App.css'
function App() {
  const [mode, setMode] = useState('light')
  const [filter, setFilter] = useState()
  const [textarea, setTextarea] = useState()
  const switchDarkMode = () => {
    if (mode === 'light') {
      setMode('dark')
      invertStyle(mode)
      darkTextArea(mode)
      document.body.style.backgroundColor = 'rgb(8 5 28)'
      document.body.style.color = 'white'
    }
    else {
      setMode('light')
      invertStyle(mode)
      darkTextArea(mode)
      document.body.style.backgroundColor = 'white'
      document.body.style.color = 'black'
    }
  }
  const darkTextArea = () =>{
    if(mode==='dark'){
      setTextarea('textarea-light')
    }
    else{
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
      <Navbar title="TextUtils" switchDarkMode={switchDarkMode} mode={mode} filter={filter} />
      <Workspace textarea={textarea} />
    </>
  );
}
export default App;
