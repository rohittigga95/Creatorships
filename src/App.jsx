import './App.css';
import Hero from './Components/Hero';
import { Footer } from './Components/Footer';
import { Navbar } from './Components/Navbar';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
