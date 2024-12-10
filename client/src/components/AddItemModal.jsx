import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const AddItemModal = ({ toggleModal, menus }) => {
  const [items, setItems] = useState([]);

  const [selectedMenuId, setselectedMenuId] = useState();

  console.log('selectedMenuId', selectedMenuId);

  const itemFormik = useFormik({
    initialValues: {
      itemName: '',
      itemDescription: '',
      itemPrice: '',
    },
    validationSchema: Yup.object({
      itemName: Yup.string()
        .required('Item Name is required')
        .min(2, 'Item Name must be at least 2 characters'),
      itemDescription: Yup.string()
        .required('Description is required')
        .min(5, 'Description must be at least 5 characters'),
      itemPrice: Yup.number()
        .required('Price is required')
        .min(1, 'Price must be at least $1')
        .typeError('Price must be a valid number'),
    }),
    onSubmit: (values, { resetForm }) => {
      setItems([...items, { ...values }]);
      resetForm();
    },
  });

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
              htmlFor="itemName"
              className="block text-gray-100 font-semibold mb-2"
            >
              Item Name
            </label>
            <input
              id="itemName"
              name="itemName"
              type="text"
              className="w-full border border-gray-300 rounded px-3 py-2 text-gray-900"
              placeholder="Enter item name"
              {...itemFormik.getFieldProps('itemName')}
            />
            {itemFormik.touched.itemName && itemFormik.errors.itemName && (
              <p className="text-red-500 text-sm">
                {itemFormik.errors.itemName}
              </p>
            )}
          </div>
          <div className="mb-4">
            <label
              htmlFor="itemDescription"
              className="block text-gray-100 font-semibold mb-2"
            >
              Description
            </label>
            <textarea
              id="itemDescription"
              name="itemDescription"
              className="w-full border border-gray-300 rounded px-3 py-2 text-gray-900"
              placeholder="Enter item description"
              rows="2"
              {...itemFormik.getFieldProps('itemDescription')}
            ></textarea>
            {itemFormik.touched.itemDescription &&
              itemFormik.errors.itemDescription && (
                <p className="text-red-500 text-sm">
                  {itemFormik.errors.itemDescription}
                </p>
              )}
          </div>
          <div className="mb-4">
            <label
              htmlFor="itemPrice"
              className="block text-gray-100 font-semibold mb-2"
            >
              Price
            </label>
            <input
              id="itemPrice"
              name="itemPrice"
              type="number"
              className="w-full border border-gray-300 rounded px-3 py-2 text-gray-900"
              placeholder="Enter item price"
              {...itemFormik.getFieldProps('itemPrice')}
            />
            {itemFormik.touched.itemPrice && itemFormik.errors.itemPrice && (
              <p className="text-red-500 text-sm">
                {itemFormik.errors.itemPrice}
              </p>
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
                  <strong>{item.itemName}</strong>: {item.itemDescription} - $
                  {item.itemPrice} (Menu: {item.menu})
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
            className="bg-gray-300 text-gray-700 px-4 py-2 rounded mr-2 hover:bg-gray-400"
          >
            Add Item
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddItemModal;
