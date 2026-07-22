"use client";
import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import { Phone, Mail, MapPin } from 'lucide-react'; 

const NewsletterFooter = () => {
  return (
    <footer className="bg-[#081A24] text-white py-12 md:py-20">
      <div className="max-w-[1445px] mx-auto px-4 lg:px-8">
        
        {/* Newsletter Section */}
        <div className="text-center mb-16 max-w-2xl md:max-w-4xl mx-auto ">
          <h2 className="text-[26px] md:text-[32px] lg:text-[42px] font-semibold mb-6">Subscribe To Our Newsletter!</h2>
          <p className="text-white/80 text-[16px] md:text-[18px] mb-8 leading-[1.4]">Our culture nurtures and strives to achieve innovation, creativity, legal expertise and is client focused. Daily, we enhance our entrepreneurial environment.</p>
          <div className="flex flex-col sm:flex-row gap-2 bg-white p-1 rounded-sm max-w-lg mx-auto shadow-lg">
            <input 
              type="email" 
              placeholder="Enter your Email" 
              className="flex-1 px-4 py-3 text-gray-800 outline-none bg-transparent"
            />
            <button className="bg-[#C69D61] hover:bg-[#081A24] text-white px-6 py-3 font-semibold transition-all">
              Request Free Consult →
            </button>
          </div>
        </div>

        {/* Links Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-16 border-t border-white/10 pt-16">
          
          {/* Logo & Info */}
          <div>
            <h3 className="text-3xl font-bold mb-6 tracking-tighter">LEX<span className="text-[#C69D61]">PRO</span></h3>
            <p className="text-white/80 text-sm md:text-base mb-6 leading-relaxed">Our dedicated team is here to help you navigate the legal process and fight for the compensation you deserve.</p>
            <div className="flex gap-4">
              {[FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram].map((Icon, i) => (
                <a key={i} href="#" className="bg-white/5 p-3 rounded-sm hover:bg-[#C69D61] hover:text-[#081A24] transition-all">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          {['Company', 'Practice Areas', 'Contact Info'].map((title) => (
            <div key={title}>
              <h4 className="font-bold text-[14px] md:text-[16px] lg:text-[18px] mb-8 text-[#C69D61]">{title}</h4>
              <ul className="text-white/80 space-y-5 text-sm md:text-base">
                {title === 'Company' && ['Home', 'Practice Areas', 'Our Team', 'Blogs', 'Contact'].map(item => <li key={item}><a href="#" className="hover:text-[#C69D61] transition-colors">{item}</a></li>)}
                {title === 'Practice Areas' && ['Business Law', 'Personal Injury', 'Family Law', 'Criminal Defense'].map(item => <li key={item}><a href="#" className="hover:text-[#C69D61] transition-colors">{item}</a></li>)}
                
                {title === 'Contact Info' && (
                  <>
                    <li className="flex items-center gap-3 hover:text-[#C69D61] transition-colors cursor-pointer text-white/80">
                      <Phone size={18} className="text-[#C69D61]" /> +1 (555) 012-3456
                    </li>
                    <li className="flex items-center gap-3 hover:text-[#C69D61] transition-colors cursor-pointer text-white/80">
                      <Mail size={18} className="text-[#C69D61]" /> info@lexpro.com
                    </li>
                    <li className="mt-8 font-bold text-lg text-white">Our Location</li>
                    <li className="flex items-start gap-3 leading-relaxed text-white/80">
                      <MapPin size={20} className="shrink-0 mt-1 text-[#C69D61]" /> 371 7th Ave, New York, United States
                    </li>
                  </>
                )}
              </ul>
            </div>
          ))}
        </div>

        {/* Copyright */}
        <div className="mt-16 text-center text-slate-400 text-xs md:text-sm border-t border-white/10 pt-8">
          © Copyright 2026 LexPro Law Consulting Ltd. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default NewsletterFooter;