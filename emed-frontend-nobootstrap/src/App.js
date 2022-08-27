
import { Routes, Route, Link } from "react-router-dom";
import Login from './Login';
import Home from './Home';
import { IconUser, IconMenu2 } from '@tabler/icons';
import logo from './logo.svg';
import Qrcode from "./Qrcode";

function App() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="content py-4">
        <div className="flex items-center">
          <div className="flex-1 w-22">
            <Link className="text-gray-800" to="login">
              <IconMenu2 />
            </Link>
          </div>
          <div className="flex justify-center">
            <Link to="/">
              <img className="h-5" src={logo} alt="Logo EMed" />
            </Link>
          </div>
          <div className="flex-1 flex justify-end w-22">
            <Link className="text-gray-800" to="login">
              <IconUser />
            </Link>
          </div>
        </div>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="qrcode" element={<Qrcode/>}/>
      </Routes>
    </div>
  );
}

export default App;
