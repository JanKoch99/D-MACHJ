
import { Routes, Route, Link } from "react-router-dom";
import Login from './Login';
import Home from './Home';
import Qrcode from "./Qrcode";

function App() {
  return (
    <div >
      <Link to="login">
        Login
      </Link>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="qrcode" element={<Qrcode/>}/>
      </Routes>
    </div>
  );
}

export default App;
