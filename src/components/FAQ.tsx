import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import Section from './Section';

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={`border border-white/10 rounded-2xl overflow-hidden transition-all duration-300 ${isOpen ? 'bg-white/10 border-white/20' : 'bg-white/5 hover:bg-white/10'
        }`}
    >
      <button
        className="flex justify-between items-center w-full p-6 text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className={`text-lg font-semibold font-playfair transition-colors ${isOpen ? 'text-white' : 'text-gray-200'}`}>
          {question}
        </h3>
        <span className={`flex-shrink-0 ml-4 p-2 rounded-full transition-colors ${isOpen ? 'bg-purple-500/20 text-purple-400' : 'bg-white/5 text-gray-400'}`}>
          {isOpen ? <Minus size={16} /> : <Plus size={16} />}
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
      >
        <div className="p-6 pt-0 text-gray-400 leading-relaxed border-t border-white/5 mt-2">
          {answer}
        </div>
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
    <Section id="faq" className="bg-black">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4 font-playfair text-white">Frequently Asked Questions</h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Everything you need to know about working with us.
        </p>
      </div>

      <div className="max-w-3xl mx-auto space-y-4">
        {faqs.map((faq, index) => (
          <FAQItem key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </Section>
  );
};

export default FAQ;
