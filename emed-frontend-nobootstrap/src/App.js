import { Routes, Route } from "react-router-dom";
import Login from './Login';
import Home from './Home';
import RezeptForm from "./RezeptForm";
import Qrcode from "./Qrcode";
import QrcodeScanner from "./QrcodeScanner";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="login" element={<Login />} />
      <Route path="rezept-form" element={<RezeptForm />} />
      <Route path="qrcode" element={<Qrcode/>}/>
      <Route path="qrcode-scan" element={<QrcodeScanner/>}/>
    </Routes>
  );
}

export default App;
