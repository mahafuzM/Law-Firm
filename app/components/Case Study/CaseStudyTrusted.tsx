"use client";
import React from 'react';
import Image from 'next/image';

const logos = [
  { id: 1, name: "Brand 1", src: "/images/hello 3.jpg" },
  { id: 2, name: "Brand 2", src: "/images/hello 3.jpg" },
  { id: 3, name: "Brand 3", src: "/images/hello 3.jpg" },
  { id: 4, name: "Brand 4", src: "/images/hello 3.jpg" },
  { id: 5, name: "Brand 5", src: "/images/hello 3.jpg" },
];

const TrustedBy = () => {
  return (
    <section className="py-20 bg-white border-b border-gray-100">
      <div className="max-w-[1445px] mx-auto px-6 text-center">
        <h2 className="text-[26px] md:text-[32px] lg:text-[42px] font-poppins text-[#011C1A] mb-12">
          Chosen by <span className="text-[#D4AF37]">millions</span> around the globe
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-12 items-center">
          {logos.map((logo) => (
            <div 
              key={logo.id} 
              className="relative flex justify-center grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
            >
              <Image 
                src={logo.src} 
                alt={logo.name} 
                width={150} 
                height={80} 
                className="object-contain mix-blend-multiply"
                style={{ 
                  filter: 'brightness(0) saturate(100%) invert(8%) sepia(43%) saturate(4336%) hue-rotate(148%) brightness(95%) contrast(101%)' 
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;