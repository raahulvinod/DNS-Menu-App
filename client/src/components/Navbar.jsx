import React, { useState } from 'react';
import Modal from './Modal';
import AddItemModal from './AddItemModal';

const Navbar = ({ menus, setMenus }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAddItemModal, setIsAddItemModal] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const toggleAddItem = () => {
    setIsAddItemModal(!isAddItemModal);
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
            <button onClick={toggleAddItem}>Add Items</button>
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
