import React, { useEffect, useState } from 'react';
import axios from 'axios';

import MenuItemList from './MenuItemList';

const MenuList = ({ menus, setMenus, menuId, setMenuId }) => {
  //   const [menus, setMenus] = useState([]);
  //   const [menuId, setMenuId] = useState(null);
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchMenus = async () => {
      try {
        const response = await axios.get(import.meta.env.VITE_SERVER_DOMAIN);
        setMenus(response.data);

        if (response.data.length > 0) {
          setMenuId(response.data[0]._id);
        }
      } catch (error) {
        console.error('Error fetching menus:', error);
      }
    };

    fetchMenus();
  }, []);

  useEffect(() => {
    if (!menuId) return;

    const fetchMenu = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_SERVER_DOMAIN}/${menuId}`
        );
        setItems(response.data);
      } catch (error) {
        console.error('Error fetching menu:', error);
      }
    };

    fetchMenu();
  }, [menuId]);

  return (
    <>
      <div className="flex justify-center space-x-4 bg-black py-4">
        {menus.map((menu) => (
          <button
            key={menu._id}
            onClick={() => setMenuId(menu._id)}
            className={`text-lg font-semibold px-6 py-2 border rounded transition text-white border-[#0796EF] ${
              menuId === menu._id ? 'bg-[#0796EF]' : 'hover:bg-[#0796EF]'
            }`}
          >
            {menu.name}
          </button>
        ))}
      </div>
      <MenuItemList menuItems={items} />
    </>
  );
};

export default MenuList;
