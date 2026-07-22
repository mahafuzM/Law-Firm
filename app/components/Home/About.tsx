"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import VideoModal from "../VideoModal";

const Counter = ({ target }: { target: number }) => {
  const [count, setCount] = useState(1);
  useEffect(() => {
    if (count < target) {
      const timer = setInterval(() => {
        setCount((prev) => (prev < target ? prev + 1 : prev));
      }, 50);
      return () => clearInterval(timer);
    }
  }, [count, target]);
  return (
    <span className="text-3xl md:text-4xl font-bold text-white">{count}+</span>
  );
};

const About = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const youtubeEmbedUrl = "https://www.youtube.com/embed/dQw4w9WgXcQ";

  return (
    <>
      <section className="w-full py-12 md:py-24 bg-white flex justify-center overflow-hidden">
        <div className="max-w-[1445px] w-full px-4 lg:px-8 grid lg:grid-cols-2 gap-2 md:gap-24 items-center">
          {/* Left Side: Image Section */}
          <div className="relative w-full h-[400px] md:h-[550px]">
            {/* Main Image */}
            <div className="absolute top-0 left-0 w-[60%] h-[300px] md:w-[360px] md:h-[450px] rounded-[30px] md:rounded-[40px] overflow-hidden shadow-2xl">
              <Image
                src="/images/hello 3.jpg"
                alt="Lawyer"
                fill
                className="object-cover"
              />
            </div>

            {/* Experience Badge */}
            <div className="absolute top-[20px] left-[65%] md:left-[400px] z-20 bg-[#C69D61] hover:bg-[#08171F] text-white p-4 md:p-6 rounded-[20px] md:rounded-[25px] w-[100px] h-[100px] md:w-[150px] md:h-[150px] flex flex-col items-center justify-center shadow-xl">
              <Counter target={49} />
              <p className="text-[9px] md:text-[11px]  mt-1 opacity-90 font-medium text-center">
                Years Experience
              </p>
            </div>

            {/* Clickable Video Section */}
            <div
              className="absolute top-[150px] left-[20%] md:top-[200px] md:left-[200px] w-[75%] h-[180px] md:w-[400px] md:h-[280px] rounded-[30px] md:rounded-[40px] overflow-hidden shadow-2xl cursor-pointer group"
              onClick={() => setIsModalOpen(true)}
            >
              <Image
                src="/images/hello 2.jpg"
                alt="Meeting"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                <div className="w-12 h-12 md:w-20 md:h-20 bg-[#C69D61] rounded-full flex items-center justify-center backdrop-blur-md group-hover:scale-110 transition-transform">
                  <div className="w-0 h-0 border-t-[8px] md:border-t-[10px] border-t-transparent border-l-[14px] md:border-l-[18px] border-l-white border-b-[8px] md:border-b-[10px] border-b-transparent ml-1"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Content */}
          <div className="space-y-6 md:space-y-8 mt-10 md:mt-0">
            <div>
              <h2 className="text-[26px] md:text-[32px] lg:text-[42px] font-semibold text-black leading-[1.2] mb-4 md:mb-6">
                Ensaf Protecting Your Rights, Every Step Of The Way.
              </h2>
              <p className="text-black leading-relaxed text-[16px] md:text-[18px] mb-4 md:mb-6">
                Our team of experienced attorneys has a diverse range of
                expertise, covering a wide spectrum of legal areas. We
                specialize in corporate law, family law, real estate law, and
                criminal law.
              </p>
              <p className="text-black  text-[14px] md:text-[16px]">
                "Our mission is to uphold justice and provide clear, strategic
                guidance to help you navigate complex legal challenges with
                confidence."
              </p>
            </div>

            <ul className="space-y-3 md:space-y-4">
              {[
                "Committed to excellence in legal practice.",
                "Act with honesty and uphold ethical principles.",
                "Strategic planning with 98% case success rate.",
                "24/7 support for all legal emergencies.",
              ].map((item, i) => (
                <li
                  key={i}
                  className="flex items-center gap-3 text-gray-800 font-medium text-[12px] md:text-[14px]"
                >
                  <span className="text-[#C69D61] text-lg md:text-xl font-bold">
                    ✓
                  </span>{" "}
                  {item}
                </li>
              ))}
            </ul>

            <button className="bg-[#C69D61] w-full md:w-auto text-white px-8 md:px-12 py-4 md:py-5 rounded-[10px] font-bold hover:bg-[#08171F] transition-all transform hover:scale-105">
              More About Us →
            </button>
          </div>
        </div>
      </section>

      <VideoModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        videoUrl={youtubeEmbedUrl}
      />
    </>
  );
};

export default About;
