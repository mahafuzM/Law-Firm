import React from 'react';
import Link from 'next/link';
import { Calendar, ArrowRight } from 'lucide-react';

const blogs = [
  {
    date: "10 October 2024",
    title: "The Role Of A Criminal Defense Our Best Attorney",
    desc: "Our team of dedicated criminal defense attorneys is here to has provide unwavering support and expert legal guidance lawyer.",
    img: "/images/hello 3.jpg",
  },
  {
    date: "10 October 2024",
    title: "Stay Informed About Criminal Law Updates",
    desc: "Our team of dedicated criminal defense attorneys is here to has provide unwavering support and expert legal guidance lawyer.",
    img: "/images/team_2_1.jpg",
  },
  {
    date: "10 October 2024",
    title: "The Role Of Evidence In Winning Personal Injury",
    desc: "Our team of dedicated criminal defense attorneys is here to has provide unwavering support and expert legal guidance lawyer.",
    img: "/images/hello 3.jpg",
  },
  {
    date: "10 October 2024",
    title: "Statute Of Limitations In Personal Injury Lawsuits",
    desc: "Our team of dedicated criminal defense attorneys is here to has provide unwavering support and expert legal guidance lawyer.",
    img: "/images/team_2_1.jpg",
  },
  {
    date: "10 October 2024",
    title: "Understanding Corporate Law and Compliance",
    desc: "Our team of dedicated criminal defense attorneys is here to has provide unwavering support and expert legal guidance lawyer.",
    img: "/images/hello 3.jpg",
  },
  {
    date: "10 October 2024",
    title: "Navigating Family Legal Issues With Care",
    desc: "Our team of dedicated criminal defense attorneys is here to has provide unwavering support and expert legal guidance lawyer.",
    img: "/images/team_2_1.jpg",
  }
];

export default function BlogSection() {
  return (
    <section className="py-16 md:py-24 bg-[#F8F9F8]">
      <div className="max-w-[1445px] mx-auto px-4 md:px-6">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h4 className="text-[#C69D61] font-bold uppercase tracking-[0.2em] text-xs md:text-sm mb-2">News & Blog</h4>
          <h2 className="text-3xl md:text-5xl font-bold text-[#081A24]">
            Read Our More Blog
          </h2>
        </div>

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <div 
              key={index} 
              className="bg-white rounded-[25px] overflow-hidden shadow-md border-b-4 border-[#C69D61] h-full flex flex-col justify-between transition-transform hover:scale-[1.02] duration-300 group"
            >
              <div>
                {/* Image */}
                <div className="h-[220px] md:h-[250px] overflow-hidden">
                  <img 
                    src={blog.img} 
                    alt={blog.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                  />
                </div>

                {/* Content */}
                <div className="p-5 md:p-6">
                  <div className="flex items-center gap-2 text-xs md:text-sm text-gray-500 mb-4">
                    <Calendar size={16} className="text-[#C69D61]" />
                    <span>{blog.date}</span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-[#081A24] group-hover:text-[#C69D61] transition-colors leading-snug mb-3 line-clamp-2">
                    {blog.title}
                  </h3>
                  <p className="text-gray-600 text-sm md:text-base leading-relaxed line-clamp-3 mb-4">
                    {blog.desc}
                  </p>
                </div>
              </div>

              {/* Learn More Button */}
              <div className="px-5 md:px-6 pb-6 pt-0">
                <Link 
                  href="/blog-details" 
                  className="inline-flex items-center gap-2 font-bold text-sm text-[#081A24] hover:text-[#C69D61] transition-colors group/btn"
                >
                  <span>Learn More</span>
                  <span className="w-7 h-7 rounded-full bg-[#081A24] text-white flex items-center justify-center group-hover/btn:bg-[#C69D61] transition-all">
                    <ArrowRight size={14} />
                  </span>
                </Link>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}