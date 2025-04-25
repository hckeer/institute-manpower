import React from 'react'
const Aboutus = () => {
    return (
        <div className="py-10 bg-gray-800 text-white text-center">
        <h4 className="text-xl font-semibold mb-2">About Us</h4>
        <p className="mb-4 max-w-lg mx-auto">
          We are helpers of government to build successful careers.
        </p>
        <div className="flex justify-center space-x-4 text-xl">
          <a href="https://www.facebook.com/amarss.edu.np" target="_blank" rel="noreferrer">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="https://www.instagram.com/your-instagram-account" target="_blank" rel="noreferrer">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
        <p className="mt-4">Have a great time ahead❤️</p>
      </div>
     )
    
}
export default Aboutus;