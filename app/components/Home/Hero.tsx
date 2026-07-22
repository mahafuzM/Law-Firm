"use client";

import Image from "next/image";
import { ArrowRight, Play, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#07131D]">

      {/* Background Grid */} 
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.03)_1px,transparent_1px)] bg-[size:70px_70px]" />

      {/* Background Glow */}
      <div className="absolute -left-40 top-10 h-[450px] w-[450px] rounded-full bg-[#B68C5A]/20 blur-[150px]" />
      <div className="absolute right-0 top-0 h-[600px] w-[600px] rounded-full bg-cyan-500/10 blur-[180px]" />
      <div className="absolute bottom-0 left-1/2 h-[350px] w-[350px] -translate-x-1/2 rounded-full bg-[#B68C5A]/10 blur-[150px]" />

      <div className="relative mx-auto flex min-h-screen max-w-[1440px] items-center px-6 py-24 lg:flex-row flex-col lg:px-12">

        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: .8 }}
          className="w-full lg:w-1/2"
        >

          {/* Badge */}
          <div className="inline-flex items-center gap-3 rounded-full border border-[#B68C5A]/30 bg-white/5 px-5 py-2 backdrop-blur-xl">

            <ShieldCheck className="text-[#B68C5A]" size={18} />

            <span className="text-sm tracking-wide text-[#E8D4B0]">
              Trusted By 2,000+ Clients Worldwide
            </span>

          </div>
           
          {/* Heading */}
          <h1 className="mt-8 text-5xl md:text-6xl font-black leading-[0.9] text-white lg:text-7xl">
            Justice
            <span className="block bg-gradient-to-r from-[#F5D58B] via-[#D7AF6D] to-[#B68C5A] bg-clip-text text-transparent">
              Starts Here.
            </span>
            Protecting
           
              Your Future.
            
          </h1>

          {/* Description */}
          <p className="mt-8 max-w-xl text-lg leading-8 text-gray-300">
            We combine decades of courtroom experience with strategic legal
            representation to protect your rights and achieve the best possible
            outcome for every client.
          </p>

          {/* Buttons */}
         <div className="mt-10 flex flex-row gap-5">
  
           {/* Free Consultation Button */}
            <button className="group flex items-center justify-center gap-2 rounded-[10px] bg-gradient-to-r from-[#D8B06A] to-[#B68C5A] px-6 md:px-8 py-3 md:py-4 font-semibold text-[14px] md:text-[16px] shadow-[0_0_40px_rgba(182,140,90,.45)] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_60px_rgba(182,140,90,.7)] whitespace-nowrap">
              Free Consultation
             <ArrowRight
              size={18}
             className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </button>

            {/* Watch Story Button */}
             <button className="group flex text-[14px] md:text-[15px] items-center justify-center gap-3 rounded-[10px] border border-white/20 bg-white/5 px-6 md:px-8 py-3 md:py-4 text-white backdrop-blur-xl transition-all duration-300 hover:bg-white/10 whitespace-nowrap">
             <Play size={18} />
               Watch Story
              </button>

              </div>
          
          {/* Premium Stats */}
          <div className="mt-16 grid grid-cols-3 gap-5 sm:grid-cols-3">

            <div className="rounded-[10px] border border-white/10 bg-white/5 p-6 backdrop-blur-2xl transition-all duration-300 hover:-translate-y-2 hover:border-[#B68C5A]/40">
              <h2 className="text-[20px] md:text-[26px] font-semibold text-[#D8B06A]">
                500+
              </h2>
              <p className="mt-2 text-[12px] md:text-[15px] text-white">
                Successful Cases
              </p>
            </div>

            <div className="rounded-[10px] border border-white/10 bg-white/5 p-6 backdrop-blur-2xl transition-all duration-300 hover:-translate-y-2 hover:border-[#B68C5A]/40">
              <h2 className="text-[20px] md:text-[26px] font-semibold text-[#D8B06A]">
                98%
              </h2>
              <p className="mt-2 text-[12px] md:text-[15px] text-white">
                Winning Rate
              </p>
            </div>

            <div className="rounded-[10px] border border-white/10 bg-white/5 p-6 backdrop-blur-2xl transition-all duration-300 hover:-translate-y-2 hover:border-[#B68C5A]/40">
              <h2 className="text-[20px] md:text-[26px] font-semibold text-[#D8B06A]">
                25+
              </h2>
              <p className="mt-2 text-[12px] md:text-[15px] text-white">
                Years Experience
              </p>
            </div>

          </div>

        </motion.div>

        {/* RIGHT */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: .8 }}
          className="relative mt-20 flex w-full justify-center lg:mt-0 lg:w-1/2"
        >

          {/* Gold Glow */}
          <div className="absolute h-[550px] w-[620px] rounded-[10px] bg-[#B68C5A]/15 blur-[120px]" />

          {/* Image Border */}
          <div className="relative overflow-hidden w-[400px] h-[300px] md:w-[600px] md:h-[700px] rounded-[10px] border border-white/10 bg-white/5 p-3 backdrop-blur-xl shadow-[0_30px_80px_rgba(0,0,0,.45)]">
           <Image
             src="/images/hello 5.png"
             alt="Lawyer"
             fill 
             className="rounded-[10px] object-cover"
            />
          </div>

          {/* Review Card */}
          <div className="absolute -top-5 right-0 rounded-[10px] border border-white/10 bg-white/10 p-2 md:p-3 backdrop-blur-2xl shadow-xl">
            <div className="text-yellow-400 text-lg">
              ★★★★★
            </div>
            <h3 className="mt-2 text-[12px] md:text-[15px] font-semibold text-white">
              4.9/5
            </h3>
            <p className="text-[12px] md:text-[15px] text-white">
              Client Reviews
            </p>
          </div>

          {/* Experience */}
          <div className="absolute bottom-10 -left-4 rounded-[10px] bg-gradient-to-r from-[#D8B06A] to-[#B68C5A] p-2 md:p-3 shadow-[0_0_40px_rgba(182,140,90,.45)]">
            <h2 className="text-[12px] md:text-[15px] font-semibold text-black">
              25+
            </h2>
            <p className="text-[12px] md:text-[15px] font-medium text-black">
              Years Experience
            </p>
          </div>

          {/* Success */}
          <div className="absolute top-1/2 -right-6 rounded-[10px] border border-white/10 bg-[#0F1F2B]/90 p-2 md:p-3 backdrop-blur-2xl">
            <h2 className="text-[12px] md:text-[15px] font-bold text-[#D8B06A]">
              98%
            </h2>
            <p className="mt-2 text-[12px] md:text-[15px] text-white">
              Success Rate
            </p>
          </div>

        </motion.div>

      </div>
    </section>
  );
}