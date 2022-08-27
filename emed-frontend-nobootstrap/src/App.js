import { Routes, Route } from "react-router-dom";
import Login from './Login';
import Home from './Home';
import RezeptForm from "./RezeptForm";
import Qrcode from "./Qrcode";
import QrcodeScanner from "./QrcodeScanner";
import {useState} from "react";

function App() {
    const [token, setToken] = useState();

    return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="login" element={<Login setToken={setToken}/>} />
      <Route path="rezept-form" element={<RezeptForm />} />
      <Route path="qrcode" element={<Qrcode/>}/>
      <Route path="qrcode-scan" element={<QrcodeScanner/>}/>
    </Routes>
  );
}

export default App;
