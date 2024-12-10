import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import toast from 'react-hot-toast';

const Modal = ({ toggleModal, setMenus }) => {
  const formik = useFormik({
    initialValues: {
      name: '',
      description: '',
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .required('Menu Name is required')
        .min(3, 'Menu Name must be at least 3 characters long'),
      description: Yup.string()
        .required('Description is required')
        .min(5, 'Description must be at least 5 characters long'),
    }),
    onSubmit: async (values) => {
      try {
        const response = await axios.post(
          `${import.meta.env.VITE_SERVER_DOMAIN}`,
          {
            name: values.name,
            description: values.description,
          }
        );

        setMenus((prevMenus) => [...prevMenus, response.data]);

        toast.success('Menu created successfully!');
        toggleModal();
      } catch (error) {
        console.error('Error creating menu:', error);
        toast.error('Error creating menu.');
      }
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
        <h2 className="text-xl font-bold mb-4 text-white">Create Menu</h2>
        <form onSubmit={formik.handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-gray-100 font-semibold mb-2"
            >
              Menu Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              className="w-full border border-gray-300 rounded px-3 py-2 text-gray-900"
              placeholder="Enter menu name"
              {...formik.getFieldProps('name')}
            />
            {formik.touched.name && formik.errors.name && (
              <p className="text-red-500 text-sm">{formik.errors.name}</p>
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
              placeholder="Enter menu description"
              rows="4"
              {...formik.getFieldProps('description')}
            ></textarea>
            {formik.touched.description && formik.errors.description && (
              <p className="text-red-500 text-sm">
                {formik.errors.description}
              </p>
            )}
          </div>
          <div className="flex justify-end">
            <button
              type="button"
              onClick={toggleModal}
              className="bg-gray-300 text-gray-700 px-4 py-2 rounded mr-2 hover:bg-gray-400"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Add Menu
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;
