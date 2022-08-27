
import { Routes, Route, Link,  } from "react-router-dom";
import Login from './Login';
import Home from './Home';
import Qrcode from "./Qrcode";
import QrcodeScanner from "./QrcodeScanner";


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
        <Route path="qrcode-scan" element={<QrcodeScanner/>}/>
        
      </Routes>
    </div>
  );
}

export default App;
