import React from 'react';
import { Link } from 'react-router-dom';

const ButtonHome = () => {
  return (
    <Link
      to="/"
      className="bg-blue-500 text-white py-2 px-6 rounded-full font-semibold shadow-lg hover:bg-blue-600 transition duration-300"
    >
      Go to Home Page
    </Link>
  );
};

export default ButtonHome;
