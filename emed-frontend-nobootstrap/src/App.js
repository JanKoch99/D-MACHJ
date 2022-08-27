
import { Routes, Route, Link } from "react-router-dom";
import Login from './Login';
import Home from './Home';

function App() {
  return (
    <div >
      <Link to="login">
        Login
      </Link>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
