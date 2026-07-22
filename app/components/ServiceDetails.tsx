"use client";
import React, { useState } from 'react';
import { CheckCircle2, ChevronDown, ChevronUp } from 'lucide-react';

export default function PracticeDetailSection() {
  const chooseUsPoints = [
    "Legal Expertise",
    "Personalized Approach",
    "Emotional Support & Guidance",
    "Focus on Recovery",
    "Track Record of Success",
    "Advocacy and Representation"
  ];

  const faqs = [
    {
      question: "Do You Have Examples Of Past Case Results?",
      answer: "Yes, we have a proven track record of successful defenses and positive outcomes across various complex legal cases. You can review our case studies for more details."
    },
    {
      question: "Do You Offer Consulting For International Cases?",
      answer: "Yes, our firm provides expert legal consultation and cross-border representation for international legal matters and cases."
    },
    {
      question: "What Brands Does Your Agency Work With?",
      answer: "We work with a diverse range of corporate clients, businesses, and individual plaintiffs/defendants across multiple industries."
    },
    {
      question: "Can I Get A Free Case Consultation?",
      answer: "We offer an initial consultation to discuss the details of your situation and evaluate the best possible legal strategies moving forward."
    },
    {
      question: "How Long Has This Law Firm Been Active For?",
      answer: "Our law firm has been actively delivering dedicated legal advocacy, defense support, and trusted counseling for over a decade."
    }
  ];

  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <section className="max-w-[1445px] mx-auto px-6 py-16 space-y-20">
      
      {/* ১. মূল ক্রিমিনাল ডিফেন্স সেকশন */}
      <div className="w-full">
        {/* Featured Image - ফুল উইডথ এবং চমৎকার হাইট */}
        <div className="w-full h-[450px] md:h-[600px] rounded-xl overflow-hidden mb-12 shadow-lg">
          <img 
            src="https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=1400&h=800&auto=format&fit=crop" 
            alt="Criminal Defense Legal Team" 
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content Section - পুরো উইডথের মধ্যে প্রফেশনাল লেআউট */}
        <div className="w-full">
          <h2 className="text-4xl md:text-5xl font-bold text-[#233630] mb-6">
            Criminal Defense
          </h2>
          
          <p className="text-gray-600 leading-relaxed text-lg mb-6">
            Our seasoned team of criminal defense lawyers brings forth a wealth of experience in lawyer defending individuals facing various criminal charges. We understand the gravity of these & situations and offer unwavering support and strategic guidance from the onset of your case.
          </p>

          <p className="text-gray-600 leading-relaxed text-lg">
            With a deep understanding of the legal system and a track record of successful defenses, we stand by your side, safeguarding your rights, and crafting a robust defense strategy law.
          </p>
        </div>
      </div>

      {/* ২. "Why Choose Us?" সেকশন */}
      <div className="w-full">
        {/* হেডার ও বর্ণনা */}
        <div className="mb-10">
          <h3 className="text-3xl md:text-4xl font-bold text-[#233630] mb-4">
            Why Choose Us?
          </h3>
          <p className="text-gray-600 text-lg max-w-4xl leading-relaxed">
            Beyond our legal expertise, we foster a culture of compassion and support. We recognize that facing criminal charges can be one of life's most challenging experiences, and we are lawyer:
          </p>
        </div>

        {/* ৬টি পয়েন্ট - ৩ কলাম গ্রিড */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {chooseUsPoints.map((point, index) => (
            <div key={index} className="flex items-center gap-3">
              <CheckCircle2 className="text-[#f26522] shrink-0" size={24} />
              <span className="text-[#233630] font-semibold text-lg">{point}</span>
            </div>
          ))}
        </div>

        {/* নিচের দুটি ছবি - ২ কলাম গ্রিড */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="w-full h-[350px] md:h-[450px] rounded-xl overflow-hidden shadow-md">
            <img 
              src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=800&h=600&auto=format&fit=crop" 
              alt="Legal Consultation 1" 
              className="w-full h-full object-cover hover:scale-105 transition duration-500"
            />
          </div>
          <div className="w-full h-[350px] md:h-[450px] rounded-xl overflow-hidden shadow-md">
            <img 
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&h=600&auto=format&fit=crop" 
              alt="Legal Consultation 2" 
              className="w-full h-full object-cover hover:scale-105 transition duration-500"
            />
          </div>
        </div>
      </div>

      {/* ৩. নতুন যোগ করা "Analysing Business Law" FAQ Accordion সেকশন */}
      <div className="w-full">
        <div className="mb-10">
          <h3 className="text-3xl md:text-4xl font-bold text-[#233630] mb-4">
            Analysing Business Law
          </h3>
          <p className="text-gray-600 text-lg max-w-4xl leading-relaxed">
            Our goal is not only to secure favorable outcomes but also provide unwavering support un guidance, alleviating the stress and anxiety associated with criminal proceedings.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="bg-[#f4f7f8] rounded-xl overflow-hidden border border-gray-100 transition-all duration-300"
            >
              <button
                onClick={() => toggleFaq(index)}
                className="w-full px-6 py-5 text-left flex justify-between items-center font-bold text-[#233630] text-lg hover:text-[#f26522] transition"
              >
                <span>{faq.question}</span>
                {openFaq === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
              </button>
              
              {openFaq === index && (
                <div className="px-6 pb-5 text-gray-600 text-base leading-relaxed border-t border-gray-200/60 pt-3">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}