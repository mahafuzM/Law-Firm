"use client";
import React from 'react';
import { CalendarDays, UserCheck, Handshake } from 'lucide-react';

const steps = [
  { id: "01", icon: CalendarDays, title: "Schedule A Time", desc: "Choose a convenient date and time that works best for you." },
  { id: "02", icon: UserCheck, title: "Meet with a Consultation", desc: "During your consultation, you'll have the opportunity to discuss your case." },
  { id: "03", icon: Handshake, title: "Plan for Success", desc: "Based on the information gathered, we'll develop a tailored strategy." },
];

export default function ConsultationSteps() {
  return (
    <section className="max-w-[1445px] mx-auto px-6 py-24 bg-white">
      <div className="text-center mb-20">
        <h4 className="text-[#D4AF37] font-semibold uppercase tracking-[0.3em] text-sm mb-4">Schedule Consultation</h4>
        <h2 className="text-4xl md:text-6xl font-bold text-[#233630] mb-6">Schedule A Free Consultation</h2>
        <div className="w-24 h-1 bg-[#D4AF37] mx-auto rounded-full transition-all duration-500 hover:w-40"></div>
      </div>

      {/* Grid container */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-8 relative group">
        
        {/* Animated Dashed Line (Tailwind Only) */}
        <div className="hidden md:block absolute top-[80px] left-[18%] w-[64%] h-[2px] border-t-2 border-dashed border-gray-200 group-hover:border-[#D4AF37] transition-colors duration-500 overflow-hidden">
          <div className="h-full w-full animate-[move_2s_linear_infinite] bg-[#D4AF37] opacity-0 group-hover:opacity-100"></div>
        </div>

        {steps.map((step, index) => (
          <div key={index} className="flex flex-col items-center text-center relative z-10 p-6 group/card">
            
            {/* Icon Circle */}
            <div className="relative w-40 h-40 bg-[#233630] rounded-full flex items-center justify-center border-[3px] border-dashed border-[#D4AF37] mb-8 shadow-xl transition-all duration-500 group-hover/card:scale-110 group-hover/card:shadow-[0_20px_40px_-5px_rgba(212,175,55,0.4)]">
              <step.icon size={50} className="text-[#D4AF37] transition-transform duration-700 group-hover/card:rotate-[360deg]" strokeWidth={1.5} />
              
              <div className="absolute top-0 right-2 bg-[#D4AF37] text-[#233630] font-black w-10 h-10 rounded-full flex items-center justify-center text-xl shadow-lg border-2 border-white">
                {step.id}
              </div>
            </div>

            {/* Content */}
            <h3 className="text-2xl font-bold text-[#233630] mb-4 transition-colors duration-300 group-hover/card:text-[#D4AF37]">
              {step.title}
            </h3>
            <p className="text-gray-500 leading-relaxed max-w-[280px] transition-transform duration-300 group-hover/card:translate-y-1">
              {step.desc}
            </p>
          </div>
        ))}
      </div>

      {/* Tailwind custom animation definition - tailwind.config.js এ যোগ করতে হবে অথবা এখানে style হিসেবে রাখা যায় */}
      <style>{`
        @keyframes move {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
      `}</style>
    </section>
  );
}