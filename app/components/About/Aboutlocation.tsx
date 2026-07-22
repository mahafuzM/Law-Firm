"use client";
import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

const contactData = [
  { icon: MapPin, title: "Location", line1: "371 7th Ave, New York,", line2: "NY 10001" },
  { icon: Phone, title: "Phone", line1: "+ 152-6485-5467", line2: "+ 152-6485-5467" },
  { icon: Mail, title: "Email", line1: "info@ensaf.com", line2: "info@ensaf.com" },
];

export default function ContactInfoSection() {
  return (
    <section className="bg-[#011C1A] py-24 px-6 relative overflow-hidden">
      {/* Decorative Background Pattern */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#D4AF37]/5 rounded-full blur-[100px]"></div>

      <div className="max-w-[1445px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {contactData.map((item, index) => (
          <div 
            key={index} 
            className="group relative p-8 rounded-3xl border border-white/5 bg-white/5 hover:bg-[#0A2927] transition-all duration-500 ease-out hover:-translate-y-2 cursor-pointer"
          >
            <div className="flex items-start gap-6">
              {/* Icon Box with Pulse Effect */}
              <div className="relative p-5 bg-[#011C1A] rounded-2xl text-[#D4AF37] shadow-xl group-hover:scale-110 transition-transform duration-500">
                <item.icon size={32} strokeWidth={1.5} />
                <div className="absolute inset-0 border border-[#D4AF37]/30 rounded-2xl animate-pulse"></div>
              </div>

              {/* Text Content */}
              <div>
                <h4 className="text-white font-bold text-xl mb-2 tracking-wide">{item.title}</h4>
                <p className="text-gray-400 leading-relaxed group-hover:text-gray-200 transition-colors">
                  {item.line1} <br /> {item.line2}
                </p>
              </div>
            </div>

            {/* Subtle Bottom Line Effect */}
            <div className="absolute bottom-0 left-0 w-0 h-1 bg-[#D4AF37] group-hover:w-full transition-all duration-700 rounded-b-3xl"></div>
          </div>
        ))}
      </div>
    </section>
  );
}