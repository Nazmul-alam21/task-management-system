import {BrowserRouter, Routes, Route, Link} from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";


function App() {

  return (

    <BrowserRouter>

    <nav>
      
      <Link to="/">Dashboard</Link>
      <br />

      <Link to="/login">Login</Link>
      <br />

      <Link to="/register">Register</Link>
      <br />

    </nav>

    <Routes>

      <Route path="/" element={<Dashboard />} />

      <Route path="/login" element={<Login />} />

      <Route path="/register" element={<Register />} />

    </Routes>

    </BrowserRouter>
  );
}

export default App;