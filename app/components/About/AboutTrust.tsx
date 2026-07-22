"use client";
import React, { useEffect, useState } from 'react';
import { Users, Award, Scale, Globe, ShieldCheck, CheckCircle } from 'lucide-react';

const Counter = ({ end, duration = 2000 }: { end: number; duration?: number }) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let start = 0;
    const step = end / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [end, duration]);
  return <span>{count}</span>;
};

const AboutExpertise = () => {
  return (
    <section className="py-16 md:py-24 px-4 md:px-6 bg-[#F9F9F9] relative overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute top-0 right-0 w-[400px] md:w-[800px] h-[400px] md:h-[800px] bg-gradient-to-br from-[#D4AF37]/10 to-transparent blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-[1445px] mx-auto">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16 md:mb-24">
          <div className="inline-flex items-center gap-2 px-5 py-1.5 bg-white border border-[#D4AF37]/20 rounded-full shadow-sm mb-6">
            <ShieldCheck className="text-[#D4AF37]" size={16} />
            <h4 className="text-[#011C1A] font-bold uppercase tracking-[0.15em] text-[10px] md:text-xs">Established Excellence Since 1965</h4>
          </div>
          <h2 className="text-[26px] md:text-[32px] lg:text-[42px] font-extrabold text-[#011C1A] leading-[1.1] max-w-[900px] tracking-tight px-4">
            Melbourne’s <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#B8860B]">Leading</span> Legal Authority
          </h2>
        </div>

        {/* Content Section */}
        <div className="grid lg:grid-cols-2 gap-10 md:gap-16 mb-16 md:mb-24 items-start">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-[#D4AF37] to-[#011C1A] rounded-[2rem] opacity-10 blur-xl group-hover:opacity-20 transition duration-700"></div>
            <div className="relative bg-white/80 backdrop-blur-md p-8 md:p-12 rounded-[2rem] border border-white shadow-2xl">
              <p className="text-xl md:text-2xl text-[#011C1A] font-medium leading-relaxed mb-8">
                With over <strong className="text-[#D4AF37]">30 years of courtroom mastery</strong>, we provide unparalleled legal defense.
              </p>
              
              <div className="space-y-4 mb-8">
                {["Certified Criminal Law Specialists", "Aggressive Advocacy for Clients", "Strategic Vision & Legal Foresight"].map((point, i) => (
                  <div key={i} className="flex items-center gap-3 text-[#011C1A] font-semibold text-sm md:text-base">
                    <CheckCircle className="text-[#D4AF37] shrink-0" size={20} />
                    {point}
                  </div>
                ))}
              </div>
              <p className="text-gray-600 italic border-l-4 border-[#D4AF37] pl-6 text-sm md:text-base">
                "Our practice is built on the foundation of unwavering commitment to securing your rights and your future."
              </p>
            </div>
          </div>

          {/* Progress Section */}
          <div className="space-y-6 md:space-y-10">
            <h3 className="text-2xl md:text-3xl font-bold text-[#011C1A]">Core Legal Expertise</h3>
            {[
              { label: "Litigation", val: 71 },
              { label: "Criminal Law", val: 85 },
              { label: "Criminal Defence", val: 93 }
            ].map((item, i) => (
              <div key={i} className="group">
                <div className="flex justify-between mb-3 font-black text-[#011C1A] uppercase text-xs">
                  <span>{item.label}</span>
                  <span className="text-[#D4AF37]">{item.val}%</span>
                </div>
                <div className="w-full bg-gray-200 h-3 rounded-full overflow-hidden">
                  <div 
                    className="bg-gradient-to-r from-[#011C1A] to-[#1a3a37] h-3 rounded-full transition-all duration-[2000ms] ease-out group-hover:from-[#D4AF37] group-hover:to-[#B8860B]" 
                    style={{ width: `${item.val}%` }}>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {[
            { icon: Users, count: 409, label: "Qualified Lawyers" },
            { icon: Award, count: 275, label: "Awards Won" },
            { icon: Scale, count: 26, label: "Cases Dismissed" },
            { icon: Globe, count: 139, label: "Global Presence" }
          ].map((stat, i) => (
            <div key={i} className="bg-white p-4 md:p-10 rounded-2xl md:rounded-3xl border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 text-center group">
              <stat.icon className="mx-auto text-[#D4AF37] mb-4 md:mb-6 group-hover:scale-110 transition-transform" size={40} strokeWidth={1.5} />
              <h3 className="text-3xl md:text-5xl font-black text-[#011C1A] mb-1 md:mb-2">
                <Counter end={stat.count} />+
              </h3>
              <p className="text-gray-400 font-bold  tracking-widest text-[9px] md:text-xs">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutExpertise;