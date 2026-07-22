import React from 'react';
import Image from 'next/image';
import { Search, ChevronRight, Calendar, Tag, MessageSquare } from 'lucide-react';

const BlogLayout = () => {
  const services = [
    "Criminal Defense", "Personal Injury law", "Education Law", 
    "Law Master Support", "Injury Rights Partners", "Reclaim Legal Service"
  ];

  return (
    <div className="max-w-[1440px] mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-3 gap-12 text-white">
      
      {/* বাম পাশ: Sidebar */}
      <aside className="lg:col-span-1 space-y-8">
        {/* Search Box */}
        <div className="bg-[#0A1A26] p-6 rounded-[10px] border border-white/10 shadow-2xl">
          <h3 className="text-xl font-bold mb-4">Search</h3>
          <div className="flex">
            <input 
              type="text" 
              placeholder="Search....." 
              className="w-full p-3 bg-white/5 border border-white/10 text-white placeholder-gray-500 outline-none focus:border-[#B68C5A] transition-all" 
            />
            <button className="bg-gradient-to-r from-[#D8B06A] to-[#B68C5A] p-3 text-black hover:brightness-110 transition-all">
              <Search size={20} />
            </button>
          </div>
        </div>

        {/* Services Menu */}
        <div className="bg-[#0A1A26] p-6 rounded-[10px] border border-white/10 shadow-2xl">
          <h3 className="text-xl font-bold mb-6 border-l-4 border-[#B68C5A] pl-3">Our Services</h3>
          <ul className="space-y-3">
            {services.map((service, index) => (
              <li key={index} className="flex justify-between items-center bg-white/5 p-4 border border-white/5 hover:bg-white/10 hover:border-[#B68C5A]/50 transition-all cursor-pointer group rounded-[8px]">
                <span className="font-medium text-white/90 group-hover:text-white transition-colors">{service}</span>
                <ChevronRight size={18} className="text-[#B68C5A] opacity-0 group-hover:opacity-100 transition-all translate-x-[-10px] group-hover:translate-x-0" />
              </li>
            ))}
          </ul>
        </div>
      </aside>

      {/* ডান পাশ: Main Content */}
      <main className="lg:col-span-2">
        <div className="relative h-[450px] w-full mb-8 overflow-hidden rounded-[10px] group">
          <Image 
            src="/images/hello 2.jpg" 
            alt="Blog Post" 
            fill 
            className="object-cover transition-transform duration-700 group-hover:scale-105" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#07131D] to-transparent/20" />
        </div>

        {/* Meta Info */}
        <div className="flex flex-wrap items-center gap-6 text-sm text-gray-300 mb-6 bg-white/5 p-4 rounded-[10px] border border-white/5">
          <div className="flex items-center gap-2 font-semibold"><div className="w-8 h-8 rounded-full bg-[#B68C5A]/30 border border-[#B68C5A]/50"></div> Alex Robartson</div>
          <div className="flex items-center gap-2"><Calendar size={16} className="text-[#B68C5A]" /> 8/01/2023</div>
          <div className="flex items-center gap-2"><Tag size={16} className="text-[#B68C5A]" /> Legal Defense Expert</div>
          <div className="flex items-center gap-2"><MessageSquare size={16} className="text-[#B68C5A]" /> 2 Comments</div>
        </div>

        <h1 className="text-4xl md:text-5xl font-black text-white mb-6 leading-[1.1] tracking-tight">
          Statute of Limitations Personal Injury Lawsuits
        </h1>
        
        <div className="space-y-6 text-black text-lg leading-relaxed">
          <p>
            Our practice encompasses an extensive array of criminal charges, ranging from our best law misdemeanors to serious felonies. Whether it’s DUI offenses, drug-related charges, assault of allegations, white-collar crimes, or more complex cases, our attorneys bring forth a wealth.
          </p>
          <p className="border-l-2 border-[#B68C5A] pl-6  text-black">
            "We prioritize open communication, ensuring that our clients are fully informed about their legal options, potential consequences, and the strategic pathways we chart for their defense."
          </p>
          <p>
            With decades of combined experience, we are dedicated to protecting your future and ensuring that your voice is heard throughout the legal proceedings.
          </p>
        </div>
      </main>
    </div>
  );
};

export default BlogLayout;