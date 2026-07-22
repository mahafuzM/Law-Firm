"use client";
import React from 'react';
import Image from 'next/image';

const NewsletterSection = () => {
  return (
    <section className="w-full py-6 lg:py-8 px-4 relative overflow-hidden">
      {/* Background Layer */}
      <div className="absolute inset-0 flex w-full h-full -z-10">
        <div className="relative w-full lg:w-1/2 h-full">
          <Image src="/images/hello 2.jpg" alt="Background" fill className="object-cover" />
          <div className="absolute inset-0 bg-[#011C1A]/90"></div>
        </div>
        <div className="hidden lg:block relative w-1/2 h-full">
          <Image src="/images/hello 3.jpg" alt="Background" fill className="object-cover" />
          <div className="absolute inset-0 bg-[#011C1A]/85"></div>
        </div>
      </div>

      {/* Content Layer */}
      <div className="max-w-[1445px] mx-auto flex flex-col lg:flex-row items-center h-auto lg:h-[200px]  overflow-hidden">
        
        
        <div className="w-full lg:w-1/2 flex flex-col justify-center px-6 md:px-16 py-8 lg:py-0">
          <h4 className="text-[#D4AF37] font-semibold uppercase tracking-[0.2em] text-[10px] mb-1">Newsletter</h4>
          <h2 className="text-2xl md:text-3xl font-semibold text-white leading-tight">Sign Up To Get Latest Update</h2>
        </div>

       
        <div className="w-full lg:w-1/2 flex items-center justify-center lg:justify-end px-6 pb-8 lg:py-0 lg:pr-16">
          <div className="w-full max-w-sm bg-white/10 backdrop-blur-md p-1 rounded-full flex items-center shadow-xl">
            <input 
              type="email" 
              placeholder="Enter your Email" 
              className="w-full bg-transparent text-white placeholder-gray-300 px-4 py-2.5 outline-none border-none text-sm"
            />
            <button className="bg-[#D4AF37] text-[#011C1A] px-5 py-2.5 rounded-full font-bold text-sm hover:bg-white transition-all whitespace-nowrap">
              Subscribe →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;