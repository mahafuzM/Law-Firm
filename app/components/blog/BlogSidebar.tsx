import React from 'react';
import { Quote, Phone, Play } from 'lucide-react';

export default function BlogLayout() {
  return (
    <section className="max-w-[1445px] mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-3 gap-12">
      
      {/* বাম দিকের Sidebar */}
      <div className="lg:col-span-1 space-y-8">
        {/* Author Section */}
        <div className="bg-[#f4f7f8] p-8 rounded-lg">
          <h3 className="text-xl font-bold text-[#233630] mb-6">Our Author</h3>
          <div className="flex gap-2">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="w-12 h-12 rounded-full bg-gray-300 border-2 border-white shadow-md" />
            ))}
          </div>
        </div>

        {/* Tags Section */}
        <div className="bg-[#f4f7f8] p-8 rounded-lg">
          <h3 className="text-xl font-bold text-[#233630] mb-6">Our Popular Tags</h3>
          <div className="flex flex-wrap gap-3">
            {["#Legal Warriors", "#Legal Defense Expert", "#Your Legal Guardians", "Legal Shield", "#Strong Legal Defense", "Legal Lawyers"].map((tag) => (
              <span key={tag} className="px-4 py-2 bg-white text-gray-600 rounded text-sm font-medium shadow-sm hover:text-[#D4AF37] cursor-pointer transition">
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Contact Section */}
        <div className="bg-[#f4f7f8] p-8 rounded-lg">
          <h3 className="text-xl font-bold text-[#233630] mb-4">If You Need Any Help Contact With Us</h3>
          <button className="flex items-center gap-3 bg-[#f26522] text-white px-6 py-3 rounded font-bold hover:bg-[#d6571a] transition">
            <Phone size={20} /> +91 705 2101 786
          </button>
        </div>
      </div>

      {/* ডান দিকের Main Content */}
      <div className="lg:col-span-2 space-y-10">
        {/* Quote Box */}
        <div className="bg-[#fdf5f2] p-8 border-l-4 border-[#D4AF37] rounded-r-lg">
          <Quote className="text-[#D4AF37] mb-4" size={40} />
          <p className="text-gray-700 italic text-lg mb-6">"Navigating the complexities of divorce law requires a lawyer legal compassionate advocate who understands your unique law to best service situation, our dedicated divorce lawyers."</p>
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-full bg-gray-400" />
            <div>
              <h4 className="font-bold text-[#233630]">Alexander Arnold</h4>
              <p className="text-sm text-gray-500">Owner Lawsy Lawyer</p>
            </div>
          </div>
        </div>

        {/* Article */}
        <div>
          <h2 className="text-4xl font-bold text-[#233630] mb-6">Exploring Negligence in Personal Injury Claims</h2>
          <p className="text-gray-600 leading-relaxed mb-8">Personal injury law encompasses a wide spectrum of cases where individuals have suffered harm due to the negligence, recklessness, or intentional actions of others. From car accidents and slip-and-fall incidents to medical malpractice and product liability claims, these cases.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="h-64 bg-gray-300 rounded-lg" />
            <div className="h-64 bg-gray-300 rounded-lg flex items-center justify-center relative">
               <div className="w-16 h-16 bg-[#f26522] rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition">
                 <Play className="text-white fill-white" />
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}