"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const plans = [
  { name: "Basic Plan", price: "355", desc: "Consultation with a lawyer for your personal solution with basic plan." },
  { name: "Standard Plan", price: "455", desc: "Consultation with a lawyer for your personal solution with Standard Plan." },
  { name: "Premium Plan", price: "555", desc: "Consultation with a lawyer for your personal solution with Premium Plan." },
];

const PriceSection = () => {
  return (
    <section className="py-24 bg-[#011C1A] px-6">
      <div className="max-w-[1445px] mx-auto">
        <div className="text-center mb-16">
          <h4 className="text-[#B89668] font-bold uppercase tracking-[0.3em] mb-4">Price Plan</h4>
          <h2 className="text-5xl font-bold text-white">Customized Plans Just For You</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, i) => (
            <motion.div 
              key={i}
             
              whileHover={{ backgroundColor: "#314E52" }}
              transition={{ duration: 0.4 }}
              className="bg-white p-8 rounded-[30px] relative group border-b-[8px] border-[#B89668]"
              style={{ boxShadow: "0px 20px 50px rgba(184, 150, 104, 0.3)" }}
            >
          
              <h3 className="text-3xl font-bold mb-4 group-hover:text-white transition-colors">{plan.name}</h3>
              <p className="text-gray-500 mb-8 h-12 group-hover:text-gray-200 transition-colors">{plan.desc}</p>
              
              <div className="mb-8">
                <span className="text-5xl font-bold text-[#B89668] group-hover:text-[#B89668]">$ {plan.price}</span>
                <span className="text-gray-400 ml-2 group-hover:text-gray-300">/ Month</span>
              </div>

              <button className="w-full bg-[#011C1A] text-white py-4 rounded-xl font-bold hover:bg-[#B89668] transition-all mb-8">
                Get Started →
              </button>

              <div className="space-y-4">
                {[1,2,3,4].map((_, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-gray-600 group-hover:text-gray-200 border-b border-gray-100/20 pb-3 transition-colors">
                    <Check className="text-[#B89668] bg-[#B89668]/10 rounded-full p-1" size={20} />
                    Criminal Defense with junior lawyer
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PriceSection;