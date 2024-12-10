import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import toast from 'react-hot-toast';

const AddItemModal = ({ toggleModal, menus, setMenus }) => {
  const [items, setItems] = useState([]);

  const [selectedMenuId, setselectedMenuId] = useState();

  const itemFormik = useFormik({
    initialValues: {
      name: '',
      description: '',
      price: '',
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .required('Item Name is required')
        .min(2, 'Item Name must be at least 2 characters'),
      description: Yup.string()
        .required('Description is required')
        .min(5, 'Description must be at least 5 characters'),
      price: Yup.number()
        .required('Price is required')
        .min(1, 'Price must be at least $1')
        .typeError('Price must be a valid number'),
    }),
    onSubmit: (values, { resetForm }) => {
      setItems([...items, { ...values }]);
      resetForm();
    },
  });

  const handleAddItem = async () => {
    try {
      const response = await axios.put(
        `${import.meta.env.VITE_SERVER_DOMAIN}`,
        {
          id: selectedMenuId,
          items,
        }
      );

      setMenus((prevMenus) =>
        prevMenus.map((menu) =>
          menu._id === selectedMenuId
            ? { ...menu, items: response.data.items }
            : menu
        )
      );

      toast.success('Items added successfully!');
      toggleModal();
    } catch (error) {
      console.error('Error Adding Items:', error);
      toast.error('Error Adding Items.');
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-gray-900 rounded-lg p-6 w-3/4 md:w-1/2 lg:w-1/3 shadow-lg relative">
        <button
          onClick={toggleModal}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
        >
          ✖
        </button>
        <h2 className="text-xl font-bold mb-4 text-white">Add Menu Item</h2>

        <div className="mb-4">
          <label
            htmlFor="menu"
            className="block text-gray-100 font-semibold mb-2"
          >
            Select Menu
          </label>
          <select
            id="menu"
            name="menu"
            className="w-full border border-gray-300 rounded px-3 py-2 text-gray-900"
            value={selectedMenuId || ''}
            onChange={(e) => setselectedMenuId(e.target.value)}
          >
            <option value="" disabled>
              Select a menu
            </option>
            {menus.map((menu) => (
              <option key={menu._id} value={menu._id}>
                {menu.name}
              </option>
            ))}
          </select>
          {!selectedMenuId && (
            <p className="text-red-500 text-sm">Menu selection is required</p>
          )}
        </div>

        <form onSubmit={itemFormik.handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-gray-100 font-semibold mb-2"
            >
              Item Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              className="w-full border border-gray-300 rounded px-3 py-2 text-gray-900"
              placeholder="Enter item name"
              {...itemFormik.getFieldProps('name')}
            />
            {itemFormik.touched.name && itemFormik.errors.name && (
              <p className="text-red-500 text-sm">{itemFormik.errors.name}</p>
            )}
          </div>
          <div className="mb-4">
            <label
              htmlFor="description"
              className="block text-gray-100 font-semibold mb-2"
            >
              Description
            </label>
            <textarea
              id="description"
              name="description"
              className="w-full border border-gray-300 rounded px-3 py-2 text-gray-900"
              placeholder="Enter item description"
              rows="2"
              {...itemFormik.getFieldProps('description')}
            ></textarea>
            {itemFormik.touched.description &&
              itemFormik.errors.description && (
                <p className="text-red-500 text-sm">
                  {itemFormik.errors.description}
                </p>
              )}
          </div>
          <div className="mb-4">
            <label
              htmlFor="price"
              className="block text-gray-100 font-semibold mb-2"
            >
              Price
            </label>
            <input
              id="price"
              name="price"
              type="number"
              className="w-full border border-gray-300 rounded px-3 py-2 text-gray-900"
              placeholder="Enter item price"
              {...itemFormik.getFieldProps('price')}
            />
            {itemFormik.touched.price && itemFormik.errors.price && (
              <p className="text-red-500 text-sm">{itemFormik.errors.price}</p>
            )}
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 w-full"
          >
            Add Item
          </button>
        </form>

        <div className="mt-4">
          <h3 className="text-lg text-white font-bold mb-2">Added Items:</h3>
          {items.length > 0 ? (
            <ul className="space-y-2">
              {items.map((item, index) => (
                <li
                  key={index}
                  className="bg-gray-800 text-gray-100 p-2 rounded"
                >
                  <strong>{item.name}</strong>: {item.description} - ₹
                  {item.price}
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-400">No items added yet.</p>
          )}
        </div>

        <div className="flex justify-end mt-4">
          <button
            type="submit"
            onClick={handleAddItem}
            className="bg-gray-300 text-gray-700 px-4 py-2 rounded mr-2 hover:bg-gray-400"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddItemModal;
