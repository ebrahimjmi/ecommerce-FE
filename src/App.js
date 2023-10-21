import Home from "./pages/Home";
import './App.css'
import { BrowserRouter, Outlet } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Outlet></Outlet>
    </div>
  );
}

export default App;
