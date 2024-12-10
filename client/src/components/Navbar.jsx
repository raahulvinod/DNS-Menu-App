import React, { useState } from 'react';
import Modal from './Modal';

const Navbar = ({ menus, setMenus }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <nav className="bg-black text-white p-8 mx-auto">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-lg font-bold">Deep Net Soft</h1>
        <ul className="flex space-x-4">
          <li>
            <button>Menu</button>
          </li>
          <li>
            <button onClick={toggleModal}>Create Menu</button>
          </li>
          <li>
            <button>Make a Reservation</button>
          </li>
          <li>
            <button>Contact Us</button>
          </li>
        </ul>
      </div>

      {isModalOpen && <Modal toggleModal={toggleModal} setMenus={setMenus} />}
    </nav>
  );
};

export default Navbar;
