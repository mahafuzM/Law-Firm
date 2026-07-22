"use client";
import React, { useRef } from 'react';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import { ArrowLeft, ArrowRight, User, Calendar, MessageSquare } from 'lucide-react';
import 'swiper/css';
import 'swiper/css/navigation';

const blogs = [
  { title: "Affordable legal representation with experience, knowledge,", author: "By Ensaf", date: "Dec 17, 2024", comments: "3 Comments", img: "/hello 3.jpg" },
  { title: "Experienced criminal defense ensures expert strategy,", author: "By Ensaf", date: "Dec 17, 2024", comments: "3 Comments", img: "/blog2.jpg" },
  { title: "Experienced criminal defense ensures expert strategy,", author: "By Ensaf", date: "Dec 22, 2024", comments: "1 Comment", img: "/blog3.jpg" },
  { title: "Top strategies for winning complex litigation cases,", author: "By Ensaf", date: "Jan 05, 2025", comments: "2 Comments", img: "/blog1.jpg" },
];

const BlogSection = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <section className="py-16 md:py-24 bg-[#F8F9F8]">
      <div className="max-w-[1445px] mx-auto px-4 md:px-6">
        
        {/* Section Header & Navigation Buttons */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-end mb-10 gap-6">
          <div>
            <h4 className="text-[#C69D61] font-bold uppercase tracking-[0.2em] text-xs md:text-sm mb-2">News & Blog</h4>
            <h2 className="text-[22px] md:text-[42px] font-semibold text-[#081A24]">Our News & Update</h2>
          </div>
          <div className="flex gap-4">
            <button ref={prevRef} className="w-12 h-12 rounded-full bg-[#C69D61] text-white flex items-center justify-center hover:bg-[#081A24] transition-all"><ArrowLeft size={20}/></button>
            <button ref={nextRef} className="w-12 h-12 rounded-full bg-[#C69D61] text-white flex items-center justify-center hover:bg-[#081A24] transition-all"><ArrowRight size={20}/></button>
          </div>
        </div>

        {/* Swiper Slider */}
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          grabCursor={true}
          breakpoints={{ 768: { slidesPerView: 2, spaceBetween: 30 }, 1024: { slidesPerView: 3, spaceBetween: 30 } }}
          autoplay={{ delay: 3500, disableOnInteraction: false }}
          loop={true}
          navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
          onBeforeInit={(swiper: any) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
          }}
        >
          {blogs.map((blog, i) => (
            <SwiperSlide key={i} className="h-auto">
              <div className="bg-white rounded-[25px] overflow-hidden shadow-md border-b-4 border-[#C69D61] h-full flex flex-col justify-between transition-transform hover:scale-[1.02] duration-300">
                
                <div>
                  <img src={blog.img} alt="blog" className="w-full h-[220px] md:h-[250px] object-cover" />
                  <div className="p-5 md:p-6">
                    <div className="flex flex-wrap gap-x-4 gap-y-2 text-xs md:text-sm text-gray-500 mb-4">
                      <div className="flex items-center gap-1.5">
                        <User size={14} className="text-[#C69D61]"/> 
                        <span>{blog.author}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Calendar size={14} className="text-[#C69D61]"/> 
                        <span>{blog.date}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <MessageSquare size={14} className="text-[#C69D61]"/> 
                        <span>{blog.comments}</span>
                      </div>
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-[#081A24] leading-snug">
                      {blog.title}
                    </h3>
                  </div>
                </div>

                {/* Card Learn More Button */}
                <div className="px-5 md:px-6 pb-6 pt-2">
                  <Link 
                    href="/blog-details" 
                    className="inline-flex items-center gap-2 font-bold text-sm text-[#081A24] hover:text-[#C69D61] transition-colors group"
                  >
                    <span>Learn More</span>
                    <span className="w-7 h-7 rounded-full bg-[#081A24] text-white flex items-center justify-center group-hover:bg-[#C69D61] transition-all">
                      <ArrowRight size={14} />
                    </span>
                  </Link>
                </div>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Bottom "View All Blogs" Button */}
        <div className="mt-16 text-center">
          <Link 
            href="/blog" 
            className="inline-flex items-center gap-3 bg-[#081A24] hover:bg-[#C69D61] text-white font-semibold px-8 py-4 rounded-full transition-all shadow-md group"
          >
            <span>View All Blogs</span>
            <span className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center group-hover:translate-x-1 transition-transform">
              <ArrowRight size={16} />
            </span>
          </Link>
        </div>

      </div>
    </section>
  );
};

export default BlogSection;