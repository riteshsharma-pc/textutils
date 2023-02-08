import Navbar from "./components/Navbar";
import Workspace from "./components/Workspace";
import { useState } from 'react'
function App() {
  const [mode, setMode] = useState('light')
  const [theme, setTheme] = useState()
  const switchDarkMode = () => {
    if (mode === 'light') {
      setMode('dark')
      themeMode(mode)
    }
    else {
      setMode('light')
      themeMode(mode)
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
      <Navbar title="TextUtils" switchDarkMode={switchDarkMode} mode={mode} />
      <Workspace theme={theme} />
    </>
  );
}
export default App;
