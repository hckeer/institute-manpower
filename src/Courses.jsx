import react from 'react'
import { Link } from 'react-router-dom'
import ButtonHome from './ButtonHome'
const Courses = ({ButtonHome}) => {
    return (
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
          {ButtonHome && (
        <Link
          to="/"
          className="bg-blue-500 text-white py-2 px-6 rounded-full font-semibold shadow-lg hover:bg-blue-600 transition duration-300"
        >
          Go to Home Page
        </Link>
      )}
        </div>
      </section>
      
    )
}
export default Courses