"use client";
import React from 'react';
import { Clock, PhoneCall, Mail } from 'lucide-react';

const ContactSectionUI = () => {
  return (
    <section className="py-16 md:py-24 bg-[#F4F6F8] px-4 md:px-8">
      <div className="max-w-[1445px] mx-auto grid lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Form Box */}
        <div className="lg:col-span-7 bg-white p-8 md:p-12 rounded-[20px] shadow-sm">
          <h2 className="text-3xl md:text-4xl font-bold text-[#081A24] mb-2">
            Send Us A Message
          </h2>
          <p className="text-gray-500 text-sm md:text-base mb-8">
            Our response time is within 30 minutes during business hours
          </p>

          <form className="space-y-4">
            {/* First Name & Last Name */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input 
                type="text" 
                placeholder="First Name" 
                className="w-full bg-[#F8F9FA] text-gray-800 px-5 py-4 rounded-[10px] border border-gray-200 focus:border-[#C69D61] focus:bg-white outline-none text-sm transition-all" 
              />
              <input 
                type="text" 
                placeholder="Last Name" 
                className="w-full bg-[#F8F9FA] text-gray-800 px-5 py-4 rounded-[10px] border border-gray-200 focus:border-[#C69D61] focus:bg-white outline-none text-sm transition-all" 
              />
            </div>

            {/* Phone Number & Email Address */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input 
                type="tel" 
                placeholder="Phone Number" 
                className="w-full bg-[#F8F9FA] text-gray-800 px-5 py-4 rounded-[10px] border border-gray-200 focus:border-[#C69D61] focus:bg-white outline-none text-sm transition-all" 
              />
              <input 
                type="email" 
                placeholder="Email Address" 
                className="w-full bg-[#F8F9FA] text-gray-800 px-5 py-4 rounded-[10px] border border-gray-200 focus:border-[#C69D61] focus:bg-white outline-none text-sm transition-all" 
              />
            </div>

            {/* Service Type Dropdown */}
            <div>
              <select 
                className="w-full bg-[#F8F9FA] text-gray-500 px-5 py-4 rounded-[10px] border border-gray-200 focus:border-[#C69D61] focus:bg-white focus:text-gray-800 outline-none text-sm transition-all cursor-pointer"
                defaultValue=""
              >
                <option value="" disabled>Service Type</option>
                <option value="business">Business Law</option>
                <option value="family">Family Law</option>
                <option value="criminal">Criminal Defense</option>
                <option value="injury">Personal Injury</option>
              </select>
            </div>

            {/* Message Textarea */}
            <div>
              <textarea 
                placeholder="Message" 
                rows={5} 
                className="w-full bg-[#F8F9FA] text-gray-800 p-5 rounded-[10px] border border-gray-200 focus:border-[#C69D61] focus:bg-white outline-none text-sm transition-all resize-none"
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="pt-2">
              <button 
                type="submit" 
                className="bg-[#C69D61] hover:bg-[#081A24] text-white font-semibold px-8 py-3.5 rounded-full flex items-center gap-3 transition-all shadow-md"
              >
                <span>Subscribe</span>
                <span className="text-lg">→</span>
              </button>
            </div>
          </form>
        </div>

        {/* Right Info Cards */}
        <div className="lg:col-span-5 space-y-4">
          
          {/* Card 1: Contact Us / Address */}
          <div className="bg-white p-6 md:p-8 rounded-[20px] shadow-sm flex items-start gap-5 border border-transparent hover:border-[#C69D61]/30 transition-all">
            <div className="text-[#081A24] bg-[#F8F9FA] p-3.5 rounded-full shrink-0">
              <Clock size={24} className="text-[#C69D61]" />
            </div>
            <div>
              <h3 className="font-bold text-lg text-[#081A24] mb-1">Contact Us</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                8708 Technology Forest Pl Suite 125 –G, The Woodlands, TX 77381
              </p>
            </div>
          </div>

          {/* Card 2: Call Or Text */}
          <div className="bg-white p-6 md:p-8 rounded-[20px] shadow-sm flex items-start gap-5 border border-transparent hover:border-[#C69D61]/30 transition-all">
            <div className="text-[#081A24] bg-[#F8F9FA] p-3.5 rounded-full shrink-0">
              <PhoneCall size={24} className="text-[#C69D61]" />
            </div>
            <div>
              <h3 className="font-bold text-lg text-[#081A24] mb-1">Call Or Text</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                123-456-7890
              </p>
            </div>
          </div>

          {/* Card 3: Email Us Today */}
          <div className="bg-white p-6 md:p-8 rounded-[20px] shadow-sm flex items-start gap-5 border border-transparent hover:border-[#C69D61]/30 transition-all">
            <div className="text-[#081A24] bg-[#F8F9FA] p-3.5 rounded-full shrink-0">
              <Mail size={24} className="text-[#C69D61]" />
            </div>
            <div>
              <h3 className="font-bold text-lg text-[#081A24] mb-1">Email Us Today</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                info@taxvice.com
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default ContactSectionUI;