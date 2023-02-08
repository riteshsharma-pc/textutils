import Navbar from "./components/Navbar";
import Workspace from "./components/Workspace";
import { useState } from 'react'
import './App.css'
function App() {
  const [mode, setMode] = useState('light')
  const [theme, setTheme] = useState()
  const [filter, setFilter] = useState()
  const switchDarkMode = () => {
    if (mode === 'light') {
      setMode('dark')
      themeMode(mode)
      invertStyle(mode)
    }
    else {
      setMode('light')
      themeMode(mode)
      invertStyle(mode)
    }
  }
  const invertStyle = () =>{
    if(mode==='light'){
      setFilter('filter')
    }
    else{
      setFilter('nofilter')
    }
  }
  const themeMode = () => {
    if (mode === 'dark') {
      setTheme({
        color: 'black',
        backgroundColor: 'white'
      })
    }
    else {
      setTheme({
        color: 'white',
        backgroundColor: 'rgb(8 5 28)'
      })
    }
  }

  return (
    <>
      <Navbar title="TextUtils" switchDarkMode={switchDarkMode} mode={mode} filter={filter} />
      <Workspace theme={theme} />
    </>
  );
}
export default App;
