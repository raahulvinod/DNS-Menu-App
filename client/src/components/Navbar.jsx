import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-black text-white p-8 mx-auto">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-lg font-bold">Deep Net Soft</h1>
        <ul className="flex space-x-4">
          <li>
            <a href="#menu">Menu</a>
          </li>
          <li>
            <a href="#reservation">Make a Reservation</a>
          </li>
          <li>
            <a href="#contact">Contact Us</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
