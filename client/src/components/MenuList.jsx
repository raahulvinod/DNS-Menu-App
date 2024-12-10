import React from 'react';

const MenuList = () => {
  return (
    <div className="flex justify-center space-x-4 bg-black py-4">
      <button className="text-lg font-semibold px-6 py-2 border border-[#0796EF] rounded hover:bg-[#0796EF] text-white transition">
        FOOD
      </button>
      <button className="text-lg font-semibold px-6 py-2 border border-[#0796EF] rounded hover:bg-[#0796EF] text-white transition">
        DRINKS
      </button>
      <button className="text-lg font-semibold px-6 py-2 border border-[#0796EF] rounded hover:bg-[#0796EF] text-white transition">
        BRUNCH
      </button>
    </div>
  );
};

export default MenuList;
