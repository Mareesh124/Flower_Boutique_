'use client'; // Only needed if you're in /app directory

import React, { useState } from 'react';

export default function HelpPage() {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: 'How can I reset my password?',
      answer: 'To reset your password, go to the login page and click on "Forgot Password". Follow the instructions sent to your registered email.',
    },
    {
      question: 'Where can I find my order history?',
      answer: 'You can find your order history under the "My Account" section after logging in.',
    },
    {
      question: 'How do I contact customer support?',
      answer: 'You can contact customer support via the "Contact Us" page or by emailing support@example.com.',
    },
    {
    question: 'Can I change my email address?',
    answer: 'Yes, you can change your email address in the "Profile Settings" section after logging in to your account.',
    },
    {
      question: 'What payment methods are accepted?',
      answer: 'We accept credit/debit cards, UPI, net banking, and popular digital wallets like Paytm and Google Pay.',
    },
    {
      question: 'How do I track my order?',
      answer: 'You can track your order by going to the "Order History" section in your account.',
    }
];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="w-screen min-h-screen p-4 bg-gray-50">
      <div>
        <h1 className="text-5xl text-amber-500 text-center">Help Page</h1>
        <p className="text-xl mt-1 text-center">
          Find answers to your questions and get support.
        </p>
      </div>

      <div className="mt-8 max-w-2xl mx-auto">
        <h2 className="text-2xl font-bold mb-4 text-center">Frequently Asked Questions</h2>
        <ul className="space-y-4">
          {faqs.map((faq, index) => (
            <li
              key={index}
              className="bg-white border rounded-lg p-4 shadow transition-all duration-200"
            >
              <button
                className="flex justify-between items-center w-full text-left text-lg font-semibold text-blue-700"
                onClick={() => toggleFAQ(index)}
              >
                <span>Q: {faq.question}</span>
                <span>{activeIndex === index ? '−' : '+'}</span>
              </button>

              {activeIndex === index && (
                <p className="mt-2 text-gray-700">A: {faq.answer}</p>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
