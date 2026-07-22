"use client";
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, FreeMode } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';

const teamMembers = [
  { name: "Samira Dsuza", role: "Attorney", img: "/images/hello 3.jpg" },
  { name: "Michel Phelps", role: "Chief Justice", img: "/images/attorney2.jpg" },
  { name: "Smith Miller", role: "Attorney", img: "/images/attorney1.jpg" },
  { name: "Smith Miller", role: "Attorney", img: "/images/attorney4.jpg" },
  { name: "Samira Dsuza", role: "Attorney", img: "/images/hello 3.jpg" },
  { name: "Michel Phelps", role: "Chief Justice", img: "/images/attorney2.jpg" },
  { name: "Smith Miller", role: "Attorney", img: "/images/attorney1.jpg" },
  { name: "Smith Miller", role: "Attorney", img: "/images/attorney4.jpg" },
];

const Team = () => {
  return (
    <section className="w-full py-24 bg-[#081A24] flex justify-center overflow-hidden">
      <div className="max-w-[1445px] w-full px-6">
        
        {/* Header & Button Section */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-12">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}>
            <h4 className="text-[#C69D61] font-semibold tracking-[0.1em] text-sm mb-2">Our Attorneys</h4>
            <h2 className="text-[22px] md:text-[42px] font-semibold text-white">Trusted Legal Experts</h2>
          </motion.div>
          
          <div className="w-full md:w-auto">
            <button className="border border-[#C69D61] text-white px-8 py-3 rounded-full hover:bg-[#C69D61] hover:text-[#081A24] transition-all w-full md:w-auto text-center font-medium">
              More Attorney →
            </button>
          </div>
        </div>

        {/* Swiper Slider */}
        <Swiper
          slidesPerView={2}
          spaceBetween={16}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            768: { slidesPerView: 3, spaceBetween: 24 },
            1024: { slidesPerView: 4, spaceBetween: 24 },
          }}
          modules={[Autoplay, FreeMode]}
          className="w-full"
        >
          {teamMembers.map((member, i) => (
            <SwiperSlide key={i}>
              <div className="bg-[#122B38] rounded-[24px] md:rounded-[30px] overflow-hidden group cursor-grab border-b-[6px] border-[#C69D61] shadow-lg">
                <div className="relative h-[220px] md:h-[320px] w-full overflow-hidden rounded-[24px] md:rounded-[30px]">
                  <Image 
                    src={member.img} 
                    alt={member.name} 
                    fill 
                    className="object-cover transition-transform duration-700 group-hover:scale-110" 
                  />
                </div>
                <div className="p-4 md:p-5 text-center">
                  <h3 className="text-white text-base md:text-lg font-bold mb-1 tracking-wide truncate">{member.name}</h3>
                  <p className="text-[#C69D61] font-medium uppercase text-[10px] md:text-xs tracking-[0.1em]">{member.role}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Team;