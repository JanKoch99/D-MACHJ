
import { Routes, Route, Link } from "react-router-dom";
import Login from './Login';
import Home from './Home';
import { IconUser } from '@tabler/icons';
import logo from './logo.svg';

function App() {
  return (
    <div>
      <div className="flex items-center">
        <Link to="login">
          <IconUser />
        </Link>
        <Link to="/">
          <img src={logo} alt="Logo EMed" />
        </Link>
        <Link to="login">
          <IconUser />
        </Link>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
