"use client";
import React from 'react';
import Image from 'next/image';

const CaseStudyHero = () => {
  return (
    <section className="relative w-full h-[300px] md:h-[400px]  flex items-center justify-center overflow-hidden">
      
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hello 2.jpg" 
          alt="Case Study Background"
          fill
          className="object-cover transition-transform duration-[3s] scale-105"
          priority
        />
        {/* Deep Navy Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#011C1A] via-[#011C1A]/80 to-[#011C1A]/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-[900px]">
        {/* Meta Tag */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 border border-[#D4AF37]/50 rounded-full mb-6 bg-[#D4AF37]/10 backdrop-blur-sm">
          <span className="w-2 h-2 bg-[#D4AF37] rounded-full animate-pulse"></span>
          <span className="text-[#D4AF37] font-bold uppercase tracking-[0.2em] text-[10px] md:text-xs">Success Story</span>
        </div>

        {/* Title */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 tracking-tight">
          Case <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#8c7426]">Study</span>
        </h1>
        
        {/* Divider */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <div className="h-[1px] w-16 bg-white/30"></div>
          <div className="w-2 h-2 rotate-45 bg-[#D4AF37]"></div>
          <div className="h-[1px] w-16 bg-white/30"></div>
        </div>

        {/* Subtitle */}
        <p className="text-slate-200 text-base md:text-xl font-light tracking-wide max-w-[700px] mx-auto leading-relaxed">
          Explore our successful legal battles where strategy met precision, securing justice for our clients through unwavering commitment.
        </p>
        
        {/* Action Button (Removed) */}
      </div>

    </section>
  );
};

export default CaseStudyHero;