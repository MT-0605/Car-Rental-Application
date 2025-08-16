import React from "react";

const HelpSupport = () => {
  const faqs = [
    {
      question: "How do I book a car?",
      answer: "Simply browse available cars, select your desired vehicle, choose dates, and complete the booking process online."
    },
    {
      question: "What documents are required?",
      answer: "You need a valid driver’s license and a government-issued ID at the time of pickup."
    },
    {
      question: "Can I cancel my booking?",
      answer: "Yes, bookings can be canceled before the pickup date. Refund policies may apply."
    },
    {
      question: "Is insurance included?",
      answer: "Yes, all cars come with basic insurance coverage. Additional coverage options are available at checkout."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-16 px-6">
      <h1 className="text-4xl font-bold text-center mb-12">Help & Support</h1>
      <div className="max-w-4xl mx-auto space-y-6">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition"
          >
            <h2 className="text-xl font-semibold mb-2">{faq.question}</h2>
            <p className="text-gray-600">{faq.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HelpSupport;
