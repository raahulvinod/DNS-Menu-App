import React, { useEffect, useState } from 'react';
import axios from 'axios';

import MenuItemList from './MenuItemList';

const MenuList = ({ menus, setMenus, menuId, setMenuId }) => {
  const [selectedItems, setSelectedItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchMenus = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(import.meta.env.VITE_SERVER_DOMAIN);
        setMenus(response.data);

        if (response.data.length > 0) {
          setMenuId(response.data[0]._id);
          setSelectedItems(response.data[0].items || []);
        }
      } catch (error) {
        console.error('Error fetching menus:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMenus();
  }, []);

  useEffect(() => {
    const selectedMenu = menus.find((menu) => menu._id === menuId);
    setSelectedItems(selectedMenu ? selectedMenu || [] : []);
  }, [menuId, menus]);

  return (
    <>
      <div className="flex flex-wrap justify-center space-x-0 space-y-0 md:space-y-0 md:space-x-4 bg-black py-4">
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
      <MenuItemList menuItems={selectedItems} isLoading={isLoading} />
    </>
  );
};

export default MenuList;
