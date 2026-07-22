"use client";
import React from 'react';
import Image from 'next/image';

const ServiceHero = () => {
  return (
    <section className="relative w-full h-[450px] flex items-center justify-center overflow-hidden">
      
      {/* Background Image with subtle zoom effect */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hello 2.jpg" 
          alt="Service Background"
          fill
          className="object-cover transition-transform duration-[2s] hover:scale-105"
          priority
        />
        {/* Dark Overlay for readability (LexPro Deep Navy) */}
        <div className="absolute inset-0 bg-[#011C1A]/85"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-[800px]">
        <h4 className="text-[#D4AF37] font-semibold uppercase tracking-[0.3em] text-sm mb-4">
          Professional Solutions
        </h4>
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 font-serif">
          Our Legal Services
        </h1>
        <div className="w-20 h-1 bg-[#D4AF37] mx-auto mb-6"></div>
        <p className="text-slate-300 text-base md:text-lg tracking-wide max-w-[600px] mx-auto">
          We provide comprehensive legal expertise tailored to protect your interests and guide you toward successful resolutions.
        </p>
      </div>

    </section>
  );
};

export default ServiceHero;