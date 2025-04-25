// ExampleComponent.jsx
import React from 'react';
import { motion } from 'framer-motion';

const ExampleComponent = () => {
  return (
    <div className="bg-black text-white min-h-screen p-6">
      <header className="flex justify-between items-center">
        <motion.a
          href="https://rombo.co/"
          className="text-2xl font-black"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          Rombo
        </motion.a>

        <nav className="flex gap-6">
          {['Products', 'Learn More', 'Contact Us'].map((item, index) => (
            <motion.a
              href="https://rombo.co/"
              key={item}
              className="font-semibold"
              initial={{ y: -30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 + index * 0.2, duration: 0.6 }}
            >
              {item}
            </motion.a>
          ))}
        </nav>
      </header>
    </div>
  );
};

export default ExampleComponent;
