import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10 px-16">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 border-b border-gray-700 pb-6">
        <div className="text-center border border-white p-4 rounded-sm">
          <h4 className="text-lg font-semibold mb-2">CONNECT WITH US</h4>
          <p className="text-gray-400 text-sm">+91 9581263430</p>
          <p className="text-gray-400 text-sm">info@deepnetsoft.com</p>
        </div>

        <div className="text-center border border-white p-4 rounded-sm">
          <div className="flex justify-center items-center">
            <img src="" alt="Deep Net Soft Logo" className="w-12 h-12" />
          </div>
          <h4 className="text-lg font-semibold mt-2">DEEP NET SOFT</h4>
          <div className="flex justify-center space-x-4 mt-2">
            <a href="#" className="text-gray-400 hover:text-white">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>

        <div className="text-center border border-white p-4 rounded-sm">
          <h4 className="text-lg font-semibold mb-2">FIND US</h4>
          <p className="text-gray-400 text-sm">First Floor, Geo Infopark,</p>
          <p className="text-gray-400 text-sm">Infopark P.O, Kakkanad</p>
        </div>
      </div>

      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center pt-4">
        <p className="text-sm text-gray-400">
          © 2024 Deepnetsoft Solutions. All rights reserved.
        </p>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a
            href="#"
            className="text-gray-400 text-sm hover:text-white transition"
          >
            Terms & Conditions
          </a>
          <a
            href="#"
            className="text-gray-400 text-sm hover:text-white transition"
          >
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
