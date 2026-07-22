"use client";
import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import { Star, Quote } from 'lucide-react';
import 'swiper/css';
import 'swiper/css/navigation';

const testimonials = [
  { name: "William Hazelip", role: "Ui/Ux Designer", text: "Family law was a constant struggle for me until abc stepped in. They not only solved my problem but also offered invaluable knowledge and support." },
  { name: "Monica D'suza", role: "Ui/Ux Designer", text: "I was struggling with family law for months before I found abc. They not only provided me with the solution I needed, but they also educated me on." },
  { name: "John Doe", role: "Business Owner", text: "LexPro team is incredibly knowledgeable and patient, and they always go the extra mile to ensure the best results." },
];

const ReviewSection = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <section className="py-24 bg-white px-4">
      <div className="max-w-[1445px] mx-auto">
        
        <div className="text-center mb-16">
          <h4 className="text-[#C69D61] font-semibold uppercase tracking-[0.3em] text-sm mb-3">Testimonials</h4>
          <h2 className="text-5xl font-bold text-[#081A24]">What Our Clients Say</h2>
        </div>

        {/* Swiper Wrapper */}
        <Swiper
          modules={[Autoplay, Navigation]}
          spaceBetween={30}
          slidesPerView={1} /* বাই-ডিফল্ট মোবাইলের জন্য ১টি স্লাইড */
          loop={true}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onInit={(swiper: any) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
            swiper.navigation.init();
            swiper.navigation.update();
          }}
          breakpoints={{ 
            768: { slidesPerView: 2 },  /* ট্যাবলেট স্ক্রিন থেকে ২টি করে স্লাইড দেখাবে */
            1024: { slidesPerView: 2 }  /* ডেস্কটপ স্ক্রিনেও ২টি করেই স্লাইড দেখাবে */
          }}
          className="pb-10"
        >
          {testimonials.map((t, i) => (
            <SwiperSlide key={i}>
              <div className="bg-white p-6 rounded-[10px] border border-gray-100 shadow-[0_10px_30px_rgba(0,0,0,0.05)] flex flex-col md:flex-row items-center gap-6 relative overflow-hidden h-full">
                
                <div className="w-full md:w-[220px] h-[220px] shrink-0 rounded-[20px] overflow-hidden relative">
                   <img src="/images/user.jpg" className="w-full h-full object-cover" alt={t.name} />
                </div>

                <div className="flex-1">
                  <p className="text-gray-600 leading-relaxed mb-4 italic">"{t.text}"</p>
                  <h4 className="font-bold text-2xl text-[#081A24]">{t.name}</h4>
                  <p className="text-gray-500 mb-3">{t.role}</p>
                  <div className="flex text-[#C69D61]">
                    {[...Array(5)].map((_, index) => <Star key={index} fill="#C69D61" size={16} />)}
                  </div>
                </div>

                <div className="absolute bottom-0 right-0 bg-[#081A24] rounded-tl-[30px] p-6">
                  <Quote size={40} className="text-[white]" fill="#C69D61" />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default ReviewSection;