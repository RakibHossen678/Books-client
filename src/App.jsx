import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <footer>footer</footer>
    </>
  );
}

export default App;
