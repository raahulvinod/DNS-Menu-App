import React from 'react';

const MenuItemList = ({ menuItems, isLoading }) => {
  if (isLoading) {
    return (
      <div className="bg-black text-white py-10 px-12 flex justify-center items-center min-h-screen">
        <div className="loader border-t-4 border-blue-500 rounded-full w-12 h-12 animate-spin"></div>
        <p className="text-gray-400 text-xl ml-4">Loading menu items...</p>
      </div>
    );
  }

  if (!menuItems.items || menuItems.items.length === 0) {
    return (
      <div className="bg-black text-white py-10 px-12">
        <div className="container mx-auto px-4">
          <p className="text-center text-gray-400 text-xl">
            No menu items available.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-black text-white py-10 px-12">
      <div className="container mx-auto px-4">
        {menuItems.items && (
          <div className="border border-white rounded-md p-6">
            <h2 className="text-center text-3xl font-bold tracking-wider uppercase mb-10">
              {menuItems.description || 'Menu Items'}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-6 md:gap-8 md:p-12">
              {menuItems.items.map((item, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center border-b border-gray-700 pb-2 md:pb-4"
                >
                  <div>
                    <h3 className="text-base md:text-xl font-semibold tracking-wider">
                      {item.name}
                    </h3>
                    <p className="text-gray-400 text-xs md:text-sm mt-1">
                      {item.description}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm md:text-lg font-bold">
                      ₹{item.price}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MenuItemList;
