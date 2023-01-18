import { Button } from "react-bootstrap";
import Login from "./components/Login";
import Home from "./components/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element=<Home title="Home Page" description="Mini Absensi App" /> />
        <Route path="/login" element=<Login title="Login Page" /> />
      </Routes>

      {/* mengirim title ke login.js: */}
      {/* <Login title="Login Page Yuhuuuuu" /> */}
    </div>
  );
}

export default App;
