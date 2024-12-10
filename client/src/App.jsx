import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MenuList from './components/MenuList';
import MenuItemList from './components/MenuItemList';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Hero />

      <MenuList />
      <MenuItemList />
    </Router>
  );
};

export default App;
