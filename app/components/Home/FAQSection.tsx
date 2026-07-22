"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const faqData = [
  { question: "What is the initial consultation process like?", answer: "Our initial consultation is a detailed discussion to understand your legal needs." },
  { question: "Do you handle cases in other cities or states?", answer: "Yes, we are equipped to handle cases across various jurisdictions." },
  { question: "How do you calculate your fees?", answer: "Our fees are transparent and calculated based on the complexity of your case." },
  { question: "Can I speak to a lawyer immediately?", answer: "Yes, we prioritize urgent consultations and try to connect you as soon as possible." },
];

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section 
      className="relative py-16 md:py-24 px-4 md:px-6"
      style={{
        backgroundImage: "url('/images/your-bg-image.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* ডিপ নেভি ওভারলে (#081A24) */}
      <div className="absolute inset-0 bg-[#081A24]/90"></div>

      <div className="relative z-10 max-w-[1445px] mx-auto grid lg:grid-cols-12 gap-10 md:gap-16 items-center">
        
        {/* Left/FAQ Accordion Section */}
        <div className="lg:col-span-8 order-2 lg:order-1 space-y-6">
          <h4 className="text-[#C69D61] font-bold uppercase tracking-[0.2em] text-xs md:text-sm mb-2">Frequently Asked Questions</h4>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 md:mb-12">Have Any Questions?</h2>
          
          <div className="space-y-4">
            {faqData.map((item, i) => (
              <motion.div 
                key={i} 
                className={`overflow-hidden rounded-[10px] md:rounded-[10px] border transition-all duration-300 w-full ${
                  activeIndex === i 
                    ? 'bg-[#C69D61] border-[#C69D61]' 
                    : 'bg-white/5 border-white/10 hover:bg-white/10'
                }`}
              >
                <button 
                  onClick={() => setActiveIndex(i === activeIndex ? -1 : i)}
                  className="w-full flex justify-between items-center px-6 md:px-10 py-5 md:py-6 text-left"
                >
                  <span className="font-semibold text-[16px] md:text-[20px] text-white">
                    {item.question}
                  </span>
                  <span className="text-white ml-4 shrink-0">
                    {activeIndex === i ? <Minus size={18} /> : <Plus size={18} />}
                  </span>
                </button>
                
                <AnimatePresence>
                  {activeIndex === i && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="px-6 md:px-10 pb-5 md:pb-6"
                    >
                      <p className="text-white/90 leading-relaxed border-t border-white/20 pt-3 md:pt-4 text-sm md:text-base">
                        {item.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right Image Section */}
        <div className="lg:col-span-4 order-1 lg:order-2 flex justify-center">
          <div className="relative w-full max-w-[300px] md:max-w-[450px]">
             <div className="relative z-10 w-full aspect-[3/4] overflow-hidden rounded-[10px] md:rounded-[10px]">
               <img 
                 src="/images/hello 2.jpg" 
                 alt="Justice Scale" 
                 className="w-full h-full object-cover" 
               />
             </div>
      
             <div className="absolute top-6 -right-6 md:top-8 md:-right-8 w-full h-full border border-[#C69D61]/40 rounded-[10px] md:rounded-[10px] -z-0"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;