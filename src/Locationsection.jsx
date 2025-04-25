import React from 'react';

const LocationSection = () => {
  return (
    <section className="py-16 px-6 text-center bg-gray-50" data-aos="fade-up">
      <h1 className="text-3xl font-bold mb-2">Our Location</h1>
      <p className="mb-10 text-lg">Visit us at the following location: just at side of Embassy of Norway</p>
      {/* Google Maps Embed */}
      <div className="w-full h-80">
        <iframe
        title='Location Map'
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d451.27650512859964!2d85.31520302626932!3d27.683604722726127!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19b5136e5117%3A0x87aefc0530ca48f1!2sM8M8%2B94F%2C%20Lalitpur%2044600!5e0!3m2!1sen!2snp!4v1745568586804!5m2!1sen!2snp"
          width="100%"
          height="100%"
          frameBorder="0"
          style={{ border: 0 }}
          allowFullScreen=""
          aria-hidden="false"
          tabIndex="0"
        ></iframe>
      </div>
    </section>
  );
};

export default LocationSection;
