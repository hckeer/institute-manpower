import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import aa from './Images/1745546644732.jpg';
import aaa from './Images/Leonardo_Phoenix_10_A_vibrant_illustration_depicting_a_fusion_3.jpg';
import aaaa from './Images/ai2.jpg';
import { Link } from 'react-router-dom';

const NewsSection = ({ButtonHome}) => {
  useEffect(() => {
    AOS.init({ duration: 1600 });
  }, []);

  const newsItems = [
    {
      id: 1,
      title: 'New UAE Work Visa Policies',
      excerpt: 'Latest updates on employment regulations for foreign workers...',
      image: aa,
      link: '#',
    },
    {
      id: 2,
      title: 'Qatar Labor Rights Update',
      excerpt: 'Recent changes in worker protection laws and heat stress guidelines...',
      image: aaa,
      link: '#',
    },
    {
      id: 3,
      title: 'Pre-Departure Training Tips',
      excerpt: 'Essential cultural orientation programs for Nepali workers...',
      image: aaaa,
      link: '#',
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-10" data-aos="fade-up">
      

      <h2 className="text-center text-3xl font-bold text-gray-800 mb-10">Latest News & Updates</h2>
      {ButtonHome && (
        <Link
          to="/"
          className="bg-blue-500 text-white py-2 px-6 rounded-full font-semibold shadow-lg hover:bg-blue-600 transition duration-300"
        >
          Go to Home Page
        </Link>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {newsItems.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition duration-300"
          >
            <div className="w-36 h-36 rounded-full overflow-hidden mx-auto border-4 border-blue-500 mb-4">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">{item.title}</h3>
            <p className="text-gray-600 mb-4">{item.excerpt}</p>
            <a
              href={item.link}
              className="text-blue-500 font-semibold hover:underline"
            >
              Read Full Article →
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsSection;
