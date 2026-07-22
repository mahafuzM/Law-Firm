"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Briefcase, CheckCircle2, AlertCircle } from 'lucide-react';

const caseStudiesData = [
  {
    id: 1,
    title: "Securing $2M in a Complex Corporate Dispute",
    category: "Business Law",
    challenge: "The client faced hostile breach of contract claims that threatened core company assets and market reputation.",
    solution: "Conducted exhaustive forensic audits and deployed aggressive corporate litigation defense strategies.",
    result: "Successfully negotiated an out-of-court settlement securing full compensation and asset protection.",
    image: "/images/hello 2.jpg"
  },
  {
    id: 2,
    title: "Complete Acquittal in Federal Criminal Defense",
    category: "Criminal Defense",
    challenge: "Severe federal charges with a high risk of long-term imprisonment and restricted bail conditions.",
    solution: "Identified critical procedural errors by investigative authorities and cross-examined key witnesses.",
    result: "Proved lack of substantial evidence, leading to a complete dismissal of all charges.",
    image: "/images/hello 3.jpg"
  },
  {
    id: 3,
    title: "Favorable Child Custody & Asset Division",
    category: "Family Law",
    challenge: "A highly contentious divorce proceeding involving multi-million dollar assets and custody disputes.",
    solution: "Mediated cooperative restructuring of assets while prioritizing the client's parental rights.",
    result: "Achieved sole physical custody and protected 100% of the client's pre-marital assets.",
    image: "/images/blog3.jpg"
  },
  {
    id: 4,
    title: "Maximum Injury Compensation Settlement",
    category: "Personal Injury",
    challenge: "Insurance companies denied liability following a severe commercial transport accident.",
    solution: "Reconstructed the accident scene with expert testimony and medical documentation.",
    result: "Awarded full medical coverage plus a substantial compensation settlement for trauma.",
    image: "/images/hello 3.jpg"
  },
  {
    id: 5,
    title: "Intellectual Property Trademark Defense",
    category: "Business Law",
    challenge: "Unauthorized commercial use and copyright infringement threatening the firm's brand identity.",
    solution: "Filed immediate federal injunctions and negotiated strict licensing terms.",
    result: "Secured full proprietary rights and recovered damages for brand infringement.",
    image: "/images/blog1.jpg"
  },
  {
    id: 6,
    title: "White-Collar Fraud Case Dismissal",
    category: "Criminal Defense",
    challenge: "Complex financial auditing discrepancies leading to aggressive federal indictments.",
    solution: "Re-analyzed financial transaction logs alongside independent forensic accountants.",
    result: "Demonstrated complete financial compliance, resulting in case dismissal.",
    image: "/images/blog2.jpg"
  }
];

const categories = ["All", "Business Law", "Criminal Defense", "Family Law", "Personal Injury"];

const CaseStudySection = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredCases = activeCategory === "All" 
    ? caseStudiesData 
    : caseStudiesData.filter(item => item.category === activeCategory);

  return (
    <section className="py-20 md:py-28 bg-[#F8F9F8] px-4 md:px-6">
      <div className="max-w-[1445px] mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h4 className="text-[#C69D61] font-bold uppercase tracking-[0.2em] text-xs md:text-sm mb-3">
            Our Success Stories
          </h4>
          <h2 className="text-3xl md:text-5xl font-bold text-[#081A24]">
            Recent Case Studies
          </h2>
        </div>

        {/* Category Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat, index) => (
            <button
              key={index}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all ${
                activeCategory === cat
                  ? 'bg-[#081A24] text-white shadow-md'
                  : 'bg-white text-gray-600 border border-gray-200 hover:border-[#C69D61]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Case Studies Grid - হোম পেজের জন্য এক লাইনে ৩টি কার্ড (lg:grid-cols-3) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCases.map((item) => (
            <div 
              key={item.id} 
              className="bg-white rounded-[25px] overflow-hidden shadow-lg border border-gray-100 flex flex-col justify-between transition-transform duration-300 hover:scale-[1.01]"
            >
              {/* Image & Category Badge */}
              <div className="relative h-[220px] md:h-[240px] overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" 
                />
                <span className="absolute top-4 left-4 bg-[#081A24]/90 backdrop-blur-md text-[#C69D61] font-semibold text-xs px-4 py-1.5 rounded-full flex items-center gap-1.5 shadow-sm">
                  <Briefcase size={13} />
                  {item.category}
                </span>
              </div>

              {/* Content Body */}
              <div className="p-6 md:p-7 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-[#081A24] mb-4 leading-snug">
                    {item.title}
                  </h3>

                  {/* Challenge */}
                  <div className="mb-4 bg-gray-50 p-3.5 rounded-xl border-l-4 border-gray-400">
                    <p className="text-xs uppercase font-bold text-gray-500 mb-1 flex items-center gap-1">
                      <AlertCircle size={14} className="text-amber-600" /> The Challenge
                    </p>
                    <p className="text-gray-600 text-sm leading-relaxed">{item.challenge}</p>
                  </div>

                  {/* Solution */}
                  <div className="mb-4 bg-gray-50 p-3.5 rounded-xl border-l-4 border-[#081A24]">
                    <p className="text-xs uppercase font-bold text-[#081A24] mb-1">The Legal Solution</p>
                    <p className="text-gray-600 text-sm leading-relaxed">{item.solution}</p>
                  </div>

                  {/* Result */}
                  <div className="mb-6 bg-[#C69D61]/10 p-3.5 rounded-xl border-l-4 border-[#C69D61]">
                    <p className="text-xs uppercase font-bold text-[#C69D61] mb-1 flex items-center gap-1">
                      <CheckCircle2 size={14} className="text-[#C69D61]" /> Final Outcome
                    </p>
                    <p className="text-[#081A24] font-medium text-sm leading-relaxed">{item.result}</p>
                  </div>
                </div>

                {/* Read More Link (Linked to casestudy-details page) */}
                <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                  <Link 
                    href={`/casestudy-details`} 
                    className="inline-flex items-center gap-2 font-bold text-sm text-[#081A24] hover:text-[#C69D61] transition-colors group"
                  >
                    <span>View Case Details</span>
                    <span className="w-8 h-8 rounded-full bg-[#081A24] text-white flex items-center justify-center group-hover:bg-[#C69D61] transition-all">
                      <ArrowRight size={16} />
                    </span>
                  </Link>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* নিচের দিকে অতিরিক্ত বাটন (View All Case Studies Button) */}
        <div className="mt-16 text-center">
          <Link 
            href="/case-studies" 
            className="inline-flex items-center gap-3 bg-[#081A24] hover:bg-[#C69D61] text-white font-semibold px-8 py-4 rounded-full transition-all shadow-md group"
          >
            <span>View All Case Studies</span>
            <span className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center group-hover:translate-x-1 transition-transform">
              <ArrowRight size={16} />
            </span>
          </Link>
        </div>

      </div>
    </section>
  );
};

export default CaseStudySection;