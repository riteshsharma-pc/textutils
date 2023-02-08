import Navbar from "./components/Navbar";
import Workspace from "./components/Workspace";
import { useState } from 'react'
import './App.css'
import Alert from "./components/Alert";
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
    }
    else {
      setMode('light')
      invertStyle(mode)
      darkTextArea(mode)
      document.body.style.backgroundColor = 'white'
      document.body.style.color = 'black'
      showAlert('success', 'Dark mode is disabled')
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
      <Navbar title="TextUtils" switchDarkMode={switchDarkMode} mode={mode} filter={filter} />
      <Alert alert={alert} />
      <Workspace textarea={textarea} showAlert={showAlert} />
    </>
  );
}
export default App;
