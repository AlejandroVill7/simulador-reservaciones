import { useEffect } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Reservar from './pages/Reservar';
import Lenis from '@studio-freight/lenis';

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      smooth: true,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  const toggleDarkMode = () => {
    document.documentElement.classList.toggle('dark');
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white">
      <button
        onClick={toggleDarkMode}
        className="m-4 px-3 py-1 bg-gray-300 dark:bg-gray-700 rounded"
      >
        🌙 Cambiar tema
      </button>

      <nav className="p-4 bg-gray-200 dark:bg-gray-800">
        <Link to="/" className="mr-4">Inicio</Link>
        <Link to="/reservar">Reservar</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/reservar" element={<Reservar />} />
      </Routes>
    </div>
  );
}

export default App;
