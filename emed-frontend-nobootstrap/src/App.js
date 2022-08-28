import { Routes, Route } from "react-router-dom";
import Login from './Login';
import Home from './Home';
import RezeptForm from "./RezeptForm";
import Qrcode from "./QR/Qrcode";
import QrcodeScanner from "./QR/QrcodeScanner";
import ScanFail from "./pharmacy/scanFail";
import ScanVerify from "./pharmacy/scanVerify";
import Confirm from "./pharmacy/confirm";
import Recipe from "./pharmacy/recipe";
import Finish from "./pharmacy/finish";
import {useState} from "react";

function App() {
    const [token, setToken] = useState(-1);
    const [qrscann, setQrscann] = useState();
    return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="login" element={<Login setToken={setToken}/>} />
      <Route path="rezept-form" element={<RezeptForm />} />
      <Route path="qrcode" element={<Qrcode/>}/>
      <Route path="qrcode-scan/" element={<QrcodeScanner setQrscann={setQrscann} overallRole={token.role}/>}/>
      <Route path="pharmacy/scan-fail" element={<ScanFail/>}/>
      <Route path="pharmacy/scan-verify" element={<ScanVerify token={token}/>}/>
      <Route path="pharmacy/recipe" element={<Recipe/>}/>
      <Route path="pharmacy/confirm" element={<Confirm/>}/>
      <Route path="pharmacy/finish" element={<Finish/>}/>
    </Routes>
  );
}

export default App;
