import React, { useState } from 'react';
import { Toaster } from 'react-hot-toast';

import MenuList from './components/MenuList';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';

const App = () => {
  const [menus, setMenus] = useState([]);
  const [menuId, setMenuId] = useState(null);

  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <Navbar setMenus={setMenus} menus={menus} />
      <Hero />
      <MenuList
        menus={menus}
        setMenus={setMenus}
        menuId={menuId}
        setMenuId={setMenuId}
      />
      <Footer />
    </>
  );
};

export default App;
