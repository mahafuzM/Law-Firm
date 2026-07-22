"use client";
import React, { useState } from 'react';
import { 
  Calendar, 
  User, 
  Tag, 
  Share2, 
  Check, 
  ArrowRight, 
  Quote, 
  PhoneCall, 
  Bookmark,
  MessageSquare
} from 'lucide-react';

const relatedBlogs = [
  {
    id: 2,
    title: "Understanding Corporate Law and Compliance",
    category: "Corporate Law",
    date: "10 October 2024",
    image: "/images/hello 3.jpg"
  },
  {
    id: 3,
    title: "Statute Of Limitations In Personal Injury Lawsuits",
    category: "Personal Injury",
    date: "10 October 2024",
    image: "/images/blog3.jpg"
  }
];

const BlogDetailsPage = () => {
  const [copied, setCopied] = useState(false);

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-[#F8F9F8] min-h-screen text-gray-800">
      
      {/* ১. ব্লগ হিরো সেকশন (Blog Hero Section) */}
      <section className="bg-[#081A24] text-white py-20 md:py-28 px-4 md:px-8 relative overflow-hidden">
        <div className="absolute -right-20 -top-20 w-96 h-96 bg-[#C69D61]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-[1000px] mx-auto relative z-10 text-center">
          
          {/* Category Badge */}
          <div className="inline-flex items-center gap-2 bg-[#C69D61]/20 border border-[#C69D61] text-[#C69D61] px-4 py-1.5 rounded-full text-xs md:text-sm font-semibold mb-6">
            <Tag size={15} />
            Family Law & Legal Guidance
          </div>

          {/* Blog Title */}
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-8 leading-tight">
            Navigating Family Legal Issues With Care
          </h1>

          {/* Meta Info Bar (Author, Date, Share) */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-300 border-t border-b border-white/10 py-4 max-w-2xl mx-auto">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-[#C69D61] text-[#081A24] font-bold flex items-center justify-center text-xs">
                LP
              </div>
              <span className="font-semibold text-white">LexPro Legal Team</span>
            </div>

            <div className="flex items-center gap-2">
              <Calendar size={16} className="text-[#C69D61]" />
              <span>10 October 2024</span>
            </div>

            <button 
              onClick={handleShare}
              className="inline-flex items-center gap-1.5 bg-white/10 hover:bg-[#C69D61] text-white px-3 py-1 rounded-full text-xs font-semibold transition-all"
            >
              {copied ? <Check size={14} className="text-green-400" /> : <Share2 size={14} />}
              {copied ? "Copied!" : "Share"}
            </button>
          </div>

        </div>
      </section>

      {/* Main Content Container */}
      <section className="py-16 md:py-24 px-4 md:px-8">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left/Main Column: Blog Article */}
          <div className="lg:col-span-8 space-y-10">
            
            {/* Featured Image */}
            <div className="rounded-[25px] overflow-hidden shadow-xl h-[350px] md:h-[450px]">
              <img 
                src="/images/blog1.jpg" 
                alt="Navigating Family Legal Issues" 
                className="w-full h-full object-cover" 
              />
            </div>

            {/* Article Content Body */}
            <div className="bg-white p-8 md:p-12 rounded-[25px] shadow-sm border border-gray-100 space-y-6 text-gray-600 leading-relaxed text-base md:text-lg">
              
              <p className="font-medium text-xl text-[#081A24] leading-relaxed">
                Family legal matters—ranging from child custody disputes and asset division to formal separation—are often among the most emotionally taxing challenges an individual can experience.
              </p>

              <h2 className="text-2xl md:text-3xl font-bold text-[#081A24] pt-4">
                The Importance of Compassionate Legal Counsel
              </h2>
              <p>
                When dealing with sensitive family dynamics, a purely aggressive legal approach is rarely the best path forward. Our team of dedicated attorneys believes in combining strategic courtroom defense with compassionate, empathetic guidance to protect your family's future.
              </p>

              <h3 className="text-xl md:text-2xl font-bold text-[#081A24] pt-2">
                Key Steps to Protect Your Rights
              </h3>
              <ul className="space-y-3 list-disc list-inside text-gray-700">
                <li>Maintain detailed records of all communications and agreements.</li>
                <li>Prioritize constructive mediation wherever possible before trial.</li>
                <li>Consult with specialized family law experts early in the process.</li>
              </ul>

              {/* Highlight Quote Box */}
              <div className="bg-[#081A24] text-white p-8 rounded-2xl relative my-8 overflow-hidden">
                <Quote className="text-[#C69D61] mb-3" size={32} />
                <p className="text-lg italic font-light text-white/95 leading-relaxed">
                  "Protecting your family’s emotional and financial well-being requires a delicate balance of ironclad legal strategy and deep human understanding."
                </p>
              </div>

              <h2 className="text-2xl md:text-3xl font-bold text-[#081A24] pt-4">
                Moving Forward with Confidence
              </h2>
              <p>
                Navigating the complexities of family law alone can lead to unfavorable agreements and prolonged stress. Having an experienced legal advocate ensures your parental rights and financial assets remain fully protected.
              </p>

            </div>

            {/* Author Bio Box */}
            <div className="bg-white p-6 md:p-8 rounded-[25px] shadow-sm border border-gray-100 flex items-center gap-6">
              <div className="w-16 h-16 rounded-full bg-[#081A24] text-[#C69D61] font-bold text-xl flex items-center justify-center shrink-0">
                LP
              </div>
              <div>
                <h4 className="font-bold text-[#081A24] text-lg">Written by LexPro Editorial Board</h4>
                <p className="text-sm text-gray-500 mt-1 leading-relaxed">
                  Our expert legal writers and senior attorneys share professional insights, corporate updates, and essential legal guides to keep you informed.
                </p>
              </div>
            </div>

          </div>

          {/* Right Column: Sidebar (CTA & Related Posts) */}
          <div className="lg:col-span-4 space-y-8">
            
            {/* Consultation CTA Box */}
            <div className="bg-[#081A24] text-white p-8 rounded-[25px] text-center shadow-xl relative overflow-hidden border border-white/10">
              <div className="w-14 h-14 bg-[#C69D61]/20 rounded-full flex items-center justify-center mx-auto mb-5 text-[#C69D61]">
                <PhoneCall size={24} />
              </div>
              <h3 className="text-2xl font-bold mb-3">Need Legal Advice?</h3>
              <p className="text-gray-300 text-sm mb-6 leading-relaxed">
                Speak directly with our expert legal consultants today for confidential and reliable guidance.
              </p>
              <a 
                href="/contact" 
                className="inline-flex items-center justify-center gap-2 bg-[#C69D61] hover:bg-white hover:text-[#081A24] text-white font-bold w-full py-3.5 rounded-full transition-all shadow-md text-sm"
              >
                <span>Schedule a Consultation</span>
                <ArrowRight size={16} />
              </a>
            </div>

            {/* Related Blog Posts */}
            <div className="bg-white p-6 md:p-8 rounded-[25px] shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold text-[#081A24] mb-6 border-b border-gray-100 pb-4">
                Related Articles
              </h3>
              <div className="space-y-6">
                {relatedBlogs.map((blog) => (
                  <div key={blog.id} className="flex gap-4 items-center group cursor-pointer p-2 rounded-xl hover:bg-gray-50 transition-colors">
                    <img 
                      src={blog.image} 
                      alt={blog.title} 
                      className="w-20 h-20 rounded-xl object-cover shrink-0 shadow-sm" 
                    />
                    <div>
                      <span className="text-[11px] font-bold text-[#C69D61] uppercase tracking-wider">{blog.category}</span>
                      <h4 className="font-bold text-sm text-[#081A24] group-hover:text-[#C69D61] transition-colors line-clamp-2 mt-0.5">
                        {blog.title}
                      </h4>
                      <p className="text-xs text-gray-400 mt-1">{blog.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
};

export default BlogDetailsPage;