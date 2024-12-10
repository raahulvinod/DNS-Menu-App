import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import MenuList from './components/MenuList';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Hero />
      <MenuList />
    </Router>
  );
};

export default App;
