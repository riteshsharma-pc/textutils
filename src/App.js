import { useState } from "react";
import Navbar from "./components/Navbar";
import Workspace from "./components/Workspace";
function App() {
  const [themeMode, setthemeMode] = useState({
    color: 'black',
    backgroundColor: 'white'
  })
  const [themeBtnText, setThemeBtnText] = useState('Enable Dark Mode')

  const theme = () => {
    if (themeMode.color === 'black') {
      setthemeMode({
        color: 'white',
        backgroundColor: 'black'
      })
      setThemeBtnText('Enable Light Mode')

    }
    else {
      setthemeMode({
        color: 'black',
        backgroundColor: 'white'
      })
      setThemeBtnText('Enable Dark Mode')
    }
  }

  return (
    <><div style={themeMode}>
      <Navbar title="TextUtils"/>
      <button className="btn btn-primary" onClick={theme}>{themeBtnText}</button>
      <div className="container">
        <Workspace />
      </div>
      </div></>
  );
}
export default App;
