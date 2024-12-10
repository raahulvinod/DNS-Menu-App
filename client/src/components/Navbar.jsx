import React, { useState } from 'react';
import Modal from './Modal';
import AddItemModal from './AddItemModal';

const Navbar = ({ menus, setMenus }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAddItemModal, setIsAddItemModal] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const toggleAddItem = () => {
    setIsAddItemModal(!isAddItemModal);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-black text-white p-8 mx-auto">
      <div className="container mx-auto flex justify-between items-center">
        <img
          src="../../src/assets/logo.png"
          alt="Deep Net Soft Logo"
          className="w-32 h-12 text-white"
        />

        <button className="md:hidden text-2xl" onClick={toggleMobileMenu}>
          &#9776;
        </button>

        {/* Destop Nav */}
        <ul className={`hidden md:flex space-x-4`}>
          <li>
            <button className="hover:text-[#0796EF] transition duration-200">
              HOME
            </button>
          </li>
          <li>
            <button
              onClick={toggleModal}
              className="hover:text-[#0796EF] transition duration-200"
            >
              CREATE MENU
            </button>
          </li>
          <li>
            <button
              onClick={toggleAddItem}
              className="hover:text-[#0796EF] transition duration-200"
            >
              ADD ITEMS
            </button>
          </li>
          <li>
            <button className="hover:text-[#0796EF] transition duration-200">
              MAKE RESERVATION
            </button>
          </li>
          <li>
            <button className="hover:text-[#0796EF] transition duration-200">
              CONTACT US
            </button>
          </li>
        </ul>

        {/* Mobile Nav */}
        <ul
          className={`md:hidden ${
            isMobileMenuOpen ? 'block' : 'hidden'
          } bg-black absolute top-16 left-0 w-full p-6 space-y-4`}
        >
          <li>
            <button className="hover:text-[#0796EF] transition duration-200 w-full">
              HOME
            </button>
          </li>

          <li>
            <button
              onClick={toggleModal}
              className="hover:text-[#0796EF] transition duration-200 w-full"
            >
              CREATE MENU
            </button>
          </li>
          <li>
            <button
              onClick={toggleAddItem}
              className="hover:text-[#0796EF] transition duration-200 w-full"
            >
              ADD ITEMS
            </button>
          </li>
          <li>
            <button className="hover:text-[#0796EF] transition duration-200 w-full">
              MAKE RESERVATION
            </button>
          </li>
          <li>
            <button className="hover:text-[#0796EF] transition duration-200 w-full">
              CONTACT US
            </button>
          </li>
        </ul>
      </div>

      {isModalOpen && <Modal toggleModal={toggleModal} setMenus={setMenus} />}
      {isAddItemModal && (
        <AddItemModal
          toggleModal={toggleAddItem}
          menus={menus}
          setMenus={setMenus}
        />
      )}
    </nav>
  );
};

export default Navbar;
