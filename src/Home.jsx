import React, { useState, useEffect } from 'react';
import Logo from "./Images/Logo.jpg"
import { Link } from 'react-router-dom'
import Uae from "./Images/Uae.jpg"
import News from "./News"
import ExampleComponent from './contentssss';
import "./index.css";
import AOS from 'aos';
import "aos/dist/aos.css"
import Headerbg from "./Images/Nepal.jpg"
import Nepal from "./Nepal.jpg"
import Ai from "./Images/Leonardo_Phoenix_10_A_vibrant_illustration_depicting_a_fusion_3.jpg"
import ai4 from "./Images/ai4.jpg"
import Contact from './Contact';
import Driver from "./Images/qatardriver.jpg"
import Going from "./Images/Going-abroad-Feb16.jpg"

const HomePage = () => {
  useEffect(() => {
    AOS.init({duration: 1600})
  })
 const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = () => {
    if (typeof window !== 'undefined') {
      if (window.scrollY > lastScrollY) {
        setShowNavbar(false); // scroll down
      } else {
        setShowNavbar(true); // scroll up
      }
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar);
      return () => {
        window.removeEventListener('scroll', controlNavbar);
      };
    }
  }, [lastScrollY]);

  
  return (
    <div className="font-sans">
      {/* Hero Section */}
      
      
      <header
  className={`fixed top-0 left-0 w-full z-50 transition-transform duration-300 ${
    showNavbar ? 'translate-y-0' : '-translate-y-full'
  } bg-white shadow-md`}
>
  <div className="flex items-center justify-between px-6 py-1" data-aos="fade-up" style={{
        backgroundImage: `linear-gradient(rgba(4, 9, 30, 0.7), rgba(4, 9, 30, 0.7)), url(${ai4})`, // Using imported image
        backgroundPosition: 'top',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}>
    <div className="flex items-center space-x-3" data-aos="fade-up">
      <img
        src={Logo}
        alt="School Logo"
        className="w-10 h-10 rounded"
      />
      <h2 className="text-xl font-bold text-gray-800">Manpower</h2>
    </div>
    {/* Optional: Nav links */}
    <nav className="hidden md:flex space-x-6 text-gray-600 font-medium " >
  <ul className="flex space-x-4">
    <li>
      <Link
        to="/"
        className="relative group inline-block px-3 py-1 text-white font-bold transition duration-300 rounded-md hover:text-blue-600 hover:bg-pink-100"
      >
        HOME
        <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
      </Link>
    </li>
    <li>
      <Link
        to="/about"
        className="relative group inline-block px-3 py-1 text-white font-bold transition duration-300 rounded-md hover:text-green-600 hover:bg-green-100"
      >
        ABOUT
        <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-green-500 transition-all duration-300 group-hover:w-full"></span>
      </Link>
    </li>
    <li>
      <Link
        to="/courses"
        className="relative group inline-block px-3 py-1 text-white font-bold transition duration-300 rounded-md hover:text-yellow-600 hover:bg-yellow-100"
      >
        COURSES
        <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-yellow-500 transition-all duration-300 group-hover:w-full"></span>
      </Link>
    </li>
    <li>
      <Link
        to="/blog"
        className="relative group inline-block px-3 py-1 text-white font-bold transition duration-300 rounded-md hover:text-purple-600 hover:bg-purple-100"
      >
        BLOG
        <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-purple-500 transition-all duration-300 group-hover:w-full"></span>
      </Link>
    </li>
    <li>
      <Link
        to="/contact"
        className="relative group inline-block px-3 py-1 text-white font-bold transition duration-300 rounded-md hover:text-red-600 hover:bg-red-100"
      >
        CONTACT
        <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-red-500 transition-all duration-300 group-hover:w-full"></span>
      </Link>
    </li>
  </ul>
  </nav>

  </div>
</header>

  <section className="text-white text-center py-20 px-6 bg-cover bg-center bg-no-repeat relative left-1/2 right-1/2 min-h-[80vh] -mx-[50vw] w-[100vw]"
  data-aos="fade-up"
  style={{
    backgroundImage: `linear-gradient(rgba(4, 9, 30, 0.7), rgba(4, 9, 30, 0.7)), url(${ai4})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  }}>
        <div className="absolute inset-0 flex items-center justify-center">
    <div className="text-center px-4">
      <h1 className="text-4xl md:text-5xl font-bold mb-10">
        नेपाल देखी <span className='animate-slidein [--slidein-delay:900ms] font-extrabold text-amber-400'> दुबई कतार </span>10 देखी 15 दिनमै ✈️
      </h1>
      <p className="mt-10 px-30 mb-6 font-bold text-white font-thin">
  वैदेशिक रोजगारिको लागि भर्पर्दो मेनपावर कम्पनिको खोजीमा हुनुहुन्छ भने हामिलाई सम्जनुहोला सम्पर्क को लागि <br /> 
  
    9764575701/9767548941 कृष्ण प्रसाद खतिवडा
  
</p>

    </div>
  </div>
        <Link
  to="/contact"
  className="absolute bottom-10 left-1/2 transform -translate-x-1/2 
             bg-gradient-to-r from-pink-100 via-white to-blue-100 
             text-blue-900 py-2 px-6 rounded-full font-semibold shadow-lg 
             hover:from-blue-200 hover:to-pink-200 
             transition duration-100 ease-in-out"
>
  Visit us to know moreeee
</Link>


  </section>

      {/* Courses Section */}
      <News ButtonHome={false}></News>
      
      
      <section className="py-16 px-6 text-center" data-aos="fade-up">
        <h1 className="text-3xl font-bold mb-4">Courses we provide</h1>
        <p className="mb-10 max-w-xl mx-auto">
        हामीले प्रदान गर्ने पाठ्यक्रमहरू तपाईंको व्यक्तिगत प्राथमिकता अनुसार धेरै फरक हुन सक्छन्। थप विवरणहरू चाँडै आउँदैछन्।
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {['Cleaning', 'Housekeeping', 'Security'].map((title, idx) => (
            <div key={idx} className="p-6 shadow-md border rounded">
              <h3 className="text-xl font-semibold mb-2">{title}</h3>
              <p>काम गर्दा ध्यान दिनुपर्ने कुराहरूको लागि हामी सुरुदेखि नै प्रदान गर्दछौं।</p>
            </div>
          ))}
        </div>
      </section>

      {/* Campus Section */}
      <section className="py-16 px-6 text-center" data-aos="fade-up">
        <h1 className="text-3xl font-bold mb-4">Our Facilities</h1>
        <p className="mb-10 max-w-xl mx-auto font-medium">
        हामी मानिसहरूलाई असाधारण सुविधाहरू प्रदान गर्ने ठाउँमा तपाईंहरू सबैलाई स्वागत छ।

        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              img: `${Logo}`,
              title: 'Training Center',
              desc: 'ट्रेनिङ्ग केन्द्रले वैदेशिक रोजगारीको लागि आवश्यक सबै आधारभूत कुराहरू प्रदान गर्दछ।',
            },
            {
              img: `${Driver}`,
              title: 'Visa Provide for foreign employment',
              desc: 'वैदेशिक रोजगारका लागि भिसा प्रदान',
            },
            {
              img: `${Going}`,
              title: 'Motivation and Counselling',
              desc: 'प्रेरणा र परामर्श, वैदेशिक रोजगारको लागि उत्प्रेरित गर्ने र उचित मार्गदर्शन दिने उद्देश्यले।',
            },
          ].map((facility, idx) => (
            <div key={idx} className="p-4 shadow-md border rounded">
              <img src={facility.img} alt={facility.title} className="w-full h-48 object-cover rounded mb-4" />
              <h3 className="text-xl font-semibold">{facility.title}</h3>
              <p>{facility.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      {/* Head of School Section */}
<section className="w-full py-16 text-center bg-gray-50" data-aos="fade-up">
  <h1 className="text-3xl font-bold mb-2">Years of experience🎆</h1>
  <p className="mb-10 text-lg">
    <strong>with 100+ success stories</strong><br />
  </p>
  <div className="max-w-xl mx-auto text-center px-4">
    <img
      src={Logo}
      alt=""
      className="w-48 h-48 object-cover rounded-full mx-auto mb-4"
    />
    <p className="italic">
      "That's what unions do. They can get money, they can get support, they can get manpower.."
    </p>
  </div>

</section>
<Contact ButtonHome={false}></Contact>



{/* CTA Section */}
<section className="w-full bg-blue-900 text-white text-center py-16 mt-auto" data-aos="fade-up">
  <h1 className="text-2xl md:text-3xl font-semibold mb-6">
    Enroll for our Institute Anywhere from the world
  </h1>
  <Link
    to="/contact" // This is the path to your Contact page
    className="bg-white text-blue-900 py-2 px-6 rounded-full font-semibold hover:bg-gray-100"
  >
    CONTACT US
  </Link>
</section>



      
      
    </div>
  );
};

export default HomePage;
