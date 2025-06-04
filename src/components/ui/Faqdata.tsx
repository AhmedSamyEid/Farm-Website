import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface Question {
  id: number;
  category: string;
  question: string;
  answer: string;
}

const faqData: Question[] = [
  {
    id: 1,
    category: 'General Questions',
    question: 'What is Agricultural Biotechnology?',
    answer:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    id: 2,
    category: 'General Questions',
    question: 'Can the products be applied during rainy season?',
    answer: 'Yes, they are designed to withstand weather changes.',
  },
  {
    id: 3,
    category: 'General Questions',
    question: 'What agriculture crops can I grow in my greenhouse?',
    answer: 'You can grow vegetables, herbs, and small fruits.',
  },
  {
    id: 4,
    category: 'Other Questions',
    question: 'What is modern agriculture?',
    answer:
      'Modern agriculture involves innovations such as smart irrigation systems and precision farming technologies.',
  },
  {
    id: 5,
    category: 'Other Questions',
    question: 'What are the 3 main types of farming?',
    answer: 'Arable farming, pastoral farming, and mixed farming.',
  },
  {
    id: 6,
    category: 'Other Questions',
    question: 'What are the different types of greenhouse?',
    answer: 'Glass greenhouse, polycarbonate greenhouse, tunnel greenhouse.',
  },
  {
    id: 7,
    category: 'Expert Panel',
    question: 'What are the ideal temperature and humidity conditions for strawberry farming?',
    answer:
      'Strawberries thrive in mild temperature with moderate humidity, ideally around 18-25°C and 60-70% RH.',
  },
  {
    id: 8,
    category: 'Expert Panel',
    question: 'What are the common diseases and pests that affect strawberry plants?',
    answer: 'Powdery mildew, aphids, and spider mites are common.',
  },
  {
    id: 9,
    category: 'Expert Panel',
    question: 'What are the government initiatives for agriculture sector?',
    answer: 'Subsidies, training programs, and modern tech support.',
  },
  {
    id: 10,
    category: 'Expert Panel',
    question: 'Can farmers use modern practices in the face of climate change?',
    answer: 'Yes, with resilient crops, precision tech, and data-driven farming.',
  },
  {
    id: 11,
    category: 'Expert Panel',
    question: 'What can be done to reduce greenhouse gas emissions from agriculture?',
    answer: 'Sustainable practices like crop rotation and soil management help.',
  },
];

const categories = [
  'General Questions',
  'Other Questions',
  'Expert Panel',
];

const FAQSection: React.FC = () => {
  const [openId, setOpenId] = useState<number | null>(1);

  const toggle = (id: number) => {
    setOpenId(prev => (prev === id ? null : id));
  };

  return (
    <div className="max-w-6xl mx-auto py-16 px-4">
      {categories.map(category => (
        <div key={category} className="mb-12">
          <h2 className="text-2xl font-bold mb-6">{category}</h2>
          <div className="bg-white rounded-lg shadow divide-y">
            {faqData
              .filter(item => item.category === category)
              .map(item => (
                <div
                  key={item.id}
                  className="px-4 py-3 cursor-pointer hover:bg-green-600"
                  onClick={() => toggle(item.id)}
                >
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-medium">{item.question}</h3>
                    <ChevronDown
                      className={`w-5 h-5 transition-transform duration-200 ${
                        openId === item.id ? 'rotate-180' : ''
                      }`}
                    />
                  </div>
                  {openId === item.id && (
                    <p className="mt-2 text-gray-600 text-sm">{item.answer}</p>
                  )}
                </div>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default FAQSection;
