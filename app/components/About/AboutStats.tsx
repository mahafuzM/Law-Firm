import React from 'react';
import { Scale, Users, Star, Award } from 'lucide-react';

const stats = [
  { icon: Scale, count: "10k+", label: "Case Done" },
  { icon: Users, count: "12k+", label: "Expert Attorneys" },
  { icon: Star, count: "15k+", label: "Happy Client" },
  { icon: Award, count: "20k+", label: "Award Winning" },
];

export default function StatsSection() {
  return (
    <section className="max-w-[1445px] mx-auto px-6 py-12  -mt-8 md:-mt-16 lg:-mt-24">
      <div className="bg-[#C19A6B] rounded-3xl p-8 md:p-12 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map((stat, index) => (
          <div key={index} className="flex items-center gap-6 border-r border-white/20 last:border-0">
            {/* Icon Style */}
            <div className="text-white">
              <stat.icon size={48} strokeWidth={1.5} />
            </div>
            
            {/* Text Style */}
            <div>
              <h3 className="text-3xl md:text-4xl font-bold text-white">{stat.count}</h3>
              <p className="text-white/90 font-medium">{stat.label}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}