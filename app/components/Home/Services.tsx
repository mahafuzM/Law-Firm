"use client";
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const services = [
  { title: "Criminal Law", desc: "Defense representations for various criminal charges. " },
  { title: "Corporate Law", desc: "Legal advocacy for diverse corporate matters." },
  { title: "Family Law", desc: "Expert defense strategies for family cases." },
  { title: "Real Estate Law", desc: "Representation in property matters." },
  { title: "Personal Injury Law", desc: "Professional legal defense for injury accusations." },
  { title: "Health Care Policy", desc: "Skilled advocacy for health care related charges." },
];

const Services = () => {
  return (
    <section className="w-full py-12 md:py-24 bg-white flex justify-center">
      <div className="max-w-[1445px] w-full px-4 md:px-6">
        
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-[28px] md:text-[42px] font-bold text-[#081A24]">
            Legal Services We Offer
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -10 }}
              className="relative p-6 md:p-10 rounded-[10px] md:rounded-[30px] bg-[#F9F9F9] border border-gray-100 overflow-hidden group cursor-pointer shadow-sm hover:shadow-2xl transition-all duration-500"
            >
              {/* হোভার করলে পুরো কার্ডে ডিপ নেভি (#081A24) ব্যাকগ্রাউন্ড আসবে */}
              <div className="absolute inset-0 bg-[#081A24] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-700 ease-in-out"></div>

              <div className="relative z-10">
                {/* আইকন বক্স */}
                <div className="w-14 h-14 md:w-16 md:h-16 bg-[#F3EFE9] rounded-2xl flex items-center justify-center mb-6 md:mb-8 transition-colors duration-300 group-hover:bg-[#C69D61]">
                  <span className="text-[#C69D61] text-xl md:text-2xl group-hover:text-white transition-colors duration-300">⚖</span>
                </div>
                
                {/* টাইটেল */}
                <h3 className="text-[16px] md:text-[20px] font-semibold text-[#081A24] mb-3 md:mb-4 group-hover:text-white transition-colors duration-300">
                  {service.title}
                </h3>
                
                {/* ডেসক্রিপশন */}
                <p className="text-[12px] md:text-[16px] text-black mb-6 md:mb-8 group-hover:text-gray-300 transition-colors duration-300 leading-relaxed">
                  {service.desc}
                </p>
                
                {/* রিড মোর বাটন */}
                <Link 
                  href="/service-details" 
                  className="inline-flex items-center justify-center gap-2 font-semibold text-[#081A24] group-hover:text-white bg-transparent border border-[#C69D61] hover:bg-[#C69D61] group-hover:bg-[#C69D61] group-hover:border-[#C69D61] px-5 py-2.5 rounded-full transition-all text-[12px] md:text-[14px]"
                >
                  Read More →
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;