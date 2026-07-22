"use client";
import React from 'react';
import Image from 'next/image';

const AboutHero = () => {
  return (
    <section className="relative w-full h-[300px] md:h-[400px]  flex items-center justify-center overflow-hidden">
      
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hello 2.jpg" 
          alt="About Us Background"
          fill
          className="object-cover"
          priority
        />
        {/* Dark Overlay for readability */}
        <div className="absolute inset-0 bg-[#011C1A]/80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4">
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
          About Us
        </h1>
        <div className="w-16 h-1 bg-[#D4AF37] mx-auto mb-4"></div>
        <p className="text-slate-300 text-lg uppercase tracking-[0.2em]">
          Building trust through legal excellence
        </p>
      </div>

    </section>
  );
};

export default AboutHero;