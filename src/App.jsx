import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/home';
import Portfolio from './pages/portfolio';
import Contact from './pages/contact';
import './App.css'
import '@mantine/core/styles.css';

import { MantineProvider } from '@mantine/core';
function App() {
  return (
    <MantineProvider>
    <div className="bg-white min-h-screen text-black overflow-x-hidden ">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
    </MantineProvider>
  );
}

export default App;
