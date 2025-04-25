import React, { useState } from 'react';
import LocationSection from './Locationsection';

import { Link } from 'react-router-dom';

const Contact = ({ButtonHome}) => {
  const managers = [
    { name:'Krishna Prasad', phone: '+977 9764575701/9708161184', email: 'Khatiwadak52@example.com' },
    
  ];
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Message sent successfully!');
      } else {
        alert('Error sending message!');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error sending message!');
    }
  };


  return (
    <div className="p-8 max-w-6xl mx-auto text-gray-800 font-sans">
      <h1 className="text-4xl font-bold text-center mb-8 text-blue-700">Contact Us</h1>

      {/* Manager Cards */}
      <div className={`grid ${managers.length === 1 ? 'place-items-center' : 'grid-cols-1 md:grid-cols-3'} gap-6 mb-12`}>
  {managers.map((manager, index) => (
    <div key={index} className="bg-white shadow-lg rounded-xl p-6 text-center">
      <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gray-300"></div>
      <h3 className="text-xl font-semibold">{manager.name}</h3>
      <p className="text-sm text-gray-600">{manager.phone}</p>
      <p className="text-sm text-gray-600">{manager.email}</p>
    </div>
  ))}
</div>

      
      
      <LocationSection></LocationSection>

      {/* Get in Touch Form */}
      <div className="bg-white shadow-md rounded-lg p-8">
      {ButtonHome && (
              <Link
                to="/"
                className="bg-blue-500 text-white py-2 px-6 rounded-full font-semibold shadow-lg hover:bg-blue-600 transition duration-300"
              >
                Go to Home Page
              </Link>
      )}
        <h2 className="text-2xl font-semibold mb-6 text-blue-600">Get in Touch</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <input 
              type="text" 
              name="name" 
              value={formData.name} 
              onChange={handleChange} 
              placeholder="Your Name" 
              className="p-3 border rounded-md w-full" 
            />
            <input 
              type="email" 
              name="email" 
              value={formData.email} 
              onChange={handleChange} 
              placeholder="Your Email" 
              className="p-3 border rounded-md w-full" 
            />
          </div>
          <input 
            type="text" 
            name="subject" 
            value={formData.subject} 
            onChange={handleChange} 
            placeholder="Subject" 
            className="p-3 border rounded-md w-full" 
          />
          <textarea 
            name="message" 
            value={formData.message} 
            onChange={handleChange} 
            placeholder="Your Message" 
            rows="5" 
            className="p-3 border rounded-md w-full" 
          />
          <button 
            type="submit" 
            className="bg-blue-600 text-white py-2 px-6 rounded-md hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
