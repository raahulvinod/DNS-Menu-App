import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

import MenuList from './components/MenuList';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

const App = () => {
  const [menus, setMenus] = useState([]);
  const [menuId, setMenuId] = useState(null);
  return (
    <Router>
      <Toaster position="top-center" reverseOrder={false} />
      <Navbar setMenus={setMenus} menus={menus} />
      <Hero />
      <MenuList
        menus={menus}
        setMenus={setMenus}
        menuId={menuId}
        setMenuId={setMenuId}
      />
    </Router>
  );
};

export default App;
