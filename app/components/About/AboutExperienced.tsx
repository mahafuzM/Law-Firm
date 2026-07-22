"use client";
import React from 'react';
import Image from 'next/image';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

const attorneys = [
  { name: "Michel Phelps", title: "Chief Justice", img: "/images/team_2_1.jpg" },
  { name: "Smith Miller", title: "Attorney", img: "/images/team_2_2.jpg" },
  { name: "Sarah Rahman", title: "Attorney", img: "/images/team_2_3.jpg" },
];

export default function AttorneysSection() {
  return (
    <section className="py-24 px-6 bg-white relative">
      <div className="text-center mb-16">
        <h4 className="text-[#D4AF37] font-medium tracking-[0.3em] uppercase text-sm mb-3">Our Attorney</h4>
        <h2 className="text-5xl font-bold text-[#011C1A] mb-6">Meet Our Experienced Attorneys</h2>
        <div className="w-24 h-1 bg-[#D4AF37] mx-auto"></div>
      </div>

      <div className="max-w-[1450px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {attorneys.map((person, index) => (
          <div key={index} className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-500">
            
            {/* Image Wrapper */}
            <div className="h-[350px] w-full overflow-hidden relative">
              <Image 
                src={person.img} 
                alt={person.name} 
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105" 
              />
              {/* গোল্ডেন ওভারলে ইফেক্ট */}
              <div className="absolute inset-0 bg-[#011C1A]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>

            {/* Info Section */}
            <div className="p-8 text-center bg-white transition-colors duration-500 group-hover:bg-[#011C1A]">
              <h3 className="text-2xl font-bold text-[#011C1A] mb-1 transition-colors duration-500 group-hover:text-white">
                {person.name}
              </h3>
              <p className="text-[#D4AF37] font-medium mb-6 text-sm tracking-widest uppercase transition-colors duration-500">
                {person.title}
              </p>

              <div className="flex justify-center gap-3">
                <SocialButton icon={FaFacebookF} />
                <SocialButton icon={FaTwitter} />
                <SocialButton icon={FaLinkedinIn} />
                <SocialButton icon={FaInstagram} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function SocialButton({ icon: Icon }: { icon: any }) {
  return (
    <button className="p-3 bg-gray-100 rounded-full text-[#011C1A] hover:bg-[#D4AF37] hover:text-[#011C1A] transition-all duration-300 ease-in-out">
      <Icon size={16} />
    </button>
  );
}