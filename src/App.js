import Navbar from "./components/Navbar";
import Workspace from "./components/Workspace";

function App() {
  return (
    <>
      <Navbar title="TextUtils" />
      <div className="container">
        <Workspace />
      </div>
    </>
  );
}

export default App;
