import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Reservar from './pages/Reservar';

function App() {
  return (
    <div>
      <nav style={{ padding: "1rem", backgroundColor: "#f2f2f2" }}>
        <Link to="/" style={{ marginRight: "1rem" }}>Inicio</Link>
        <Link to="/reservar" style={{ marginRight: "1rem" }}>Reservar</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/reservar" element={<Reservar />} />
      </Routes>
    </div>
  );
}

export default App;
