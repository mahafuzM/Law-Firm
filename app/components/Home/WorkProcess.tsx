"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Handshake, FileText, Gavel } from 'lucide-react';

const steps = [
  { icon: Handshake, title: "Initial Consultation", desc: "Our experienced lawyers thoroughly analyze the facts of each case." },
  { icon: FileText, title: "Case Evaluation", desc: "We prioritize understanding your concerns and aligning with your goals." },
  { icon: Gavel, title: "Legal Strategy", desc: "We develop a customized plan to protect your rights." }
];

const WorkProcess = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="py-16 md:py-24 bg-[#F8F9F8] px-4 md:px-6">
      <div className="max-w-[1445px] mx-auto grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        
        {/* Left Video Section */}
        <div className="relative h-[300px] md:h-[450px] lg:h-[550px] w-full rounded-[30px] md:rounded-[40px] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.2)]">
          <img src="/images/hello 3.jpg" className="w-full h-full object-cover" alt="Video" />
          <div className="absolute inset-0 flex items-center justify-center bg-black/20">
            <button 
              onClick={() => setIsOpen(true)}
              className="w-16 h-16 md:w-24 md:h-24 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border-2 border-white/40 hover:scale-110 transition-all shadow-xl"
            >
              <Play className="text-white fill-white" size={30} />
            </button>
          </div>
        </div>

        {/* Right Content Section */}
        <div>
          <h4 className="text-[#C69D61] font-bold uppercase tracking-[0.2em] mb-4 text-sm md:text-base">Work Process</h4>
          <h2 className="text-3xl md:text-5xl font-bold text-[#081A24] mb-8 md:mb-12 leading-tight">Navigating The Law: Your Assurance Of Peace</h2>
          
          <div className="space-y-8 md:space-y-10 relative">
            {steps.map((step, i) => (
              <div key={i} className="flex gap-4 md:gap-6 relative">
               
                {i !== steps.length - 1 && (
                  <div className="absolute left-[24px] md:left-[28px] top-12 md:top-14 bottom-[-40px] w-[2px] border-l-2 border-dashed border-[#C69D61]/50"></div>
                )}
                
                {/* Step Icon Box */}
                <div className="w-12 h-12 md:w-16 md:h-16 bg-[#C69D61] rounded-full flex items-center justify-center text-white shrink-0 z-10 shadow-lg">
                  <step.icon size={20} className="md:size-[28px]" />
                </div>
                
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-[#081A24] mb-1 md:mb-2">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-base md:text-lg">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Video Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setIsOpen(false)}
          >
            <motion.div 
              initial={{ scale: 0.9 }} animate={{ scale: 1 }} exit={{ scale: 0.9 }}
              className="bg-black p-2 rounded-2xl md:rounded-3xl max-w-4xl w-full aspect-video shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <iframe className="w-full h-full rounded-xl md:rounded-2xl" src="https://www.youtube.com/embed/YOUR_VIDEO_ID" title="Video" allowFullScreen></iframe>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default WorkProcess;