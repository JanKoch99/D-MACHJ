import { Routes, Route } from "react-router-dom";
import Login from './Login';
import Home from './Home';
import RezeptForm from "./RezeptForm";
import Qrcode from "./Qrcode";
import QrcodeScanner from "./QrcodeScanner";
import ScanFail from "./pharmacy/scanFail";
import ScanVerify from "./pharmacy/scanVerify";
import Recipe from "./pharmacy/recipe";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="login" element={<Login />} />
      <Route path="rezept-form" element={<RezeptForm />} />
      <Route path="qrcode" element={<Qrcode/>}/>
      <Route path="qrcode-scan" element={<QrcodeScanner/>}/>
      <Route path="pharmacy/scan-fail" element={<ScanFail/>}/>
      <Route path="pharmacy/scan-verify" element={<ScanVerify/>}/>
      <Route path="pharmacy/recipe" element={<Recipe/>}/>
    </Routes>
  );
}

export default App;
