import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Hero from './Components/Hero';
import { Footer } from './Components/Footer';
import { Features } from './Components/Features';
import { CtaComponent } from './Components/CtaComponent';
import { Navbar } from './Components/Navbar';
import { NewsLetter } from './Components/NewsLetter';
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
