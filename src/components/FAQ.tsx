import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-800 last:border-b-0">
      <button
        className="flex justify-between items-center w-full py-6 text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="text-xl font-semibold">{question}</h3>
        <span className="text-purple-400">
          {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-96 pb-6' : 'max-h-0'
        }`}
      >
        <p className="text-gray-400">{answer}</p>
      </div>
    </div>
  );
};

const FAQ = () => {
  const faqs = [
    {
      question: 'What services does TECHLOGX offer?',
      answer: 'TECHLOGX offers a comprehensive range of digital services including web development, UI/UX design, app development, branding, video production, and social media management. We tailor our solutions to meet the specific needs of your business.'
    },
    {
      question: 'How long does a typical project take to complete?',
      answer: 'Project timelines vary depending on the scope and complexity. A simple website might take 2-4 weeks, while a complex web application could take 2-3 months. During our initial consultation, we will provide you with a detailed timeline based on your specific requirements.'
    },
    {
      question: 'Do you offer ongoing maintenance and support?',
      answer: 'Yes, we offer various maintenance and support packages to ensure your digital products continue to perform optimally. Our support includes regular updates, security patches, performance optimization, and technical assistance.'
    },
    {
      question: 'What is your design process like?',
      answer: 'Our design process begins with understanding your business goals and target audience. We then create wireframes and prototypes, gather feedback, and refine the designs. We believe in collaborative design, keeping you involved throughout the process to ensure the final product aligns with your vision.'
    },
    {
      question: 'How do you handle project pricing?',
      answer: 'We offer transparent pricing based on project requirements. Depending on the nature of the project, we may work on a fixed-price model or an hourly rate. We provide detailed quotes after understanding your specific needs during the initial consultation.'
    },
    {
      question: 'Can you help with an existing project that needs improvements?',
      answer: 'Absolutely! We specialize in improving and optimizing existing digital products. Whether you need a redesign, performance improvements, or additional features, our team can analyze your current project and recommend the best approach to enhance it.'
    }
  ];

  return (
    <section id="faq" className="py-24 bg-black relative">
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Find answers to common questions about our services and process.
          </p>
        </div>

        <div className="max-w-3xl mx-auto bg-gray-900/30 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/10">
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;