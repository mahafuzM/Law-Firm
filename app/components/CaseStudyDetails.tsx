"use client";
import React, { useState } from 'react';
import { 
  Briefcase, 
  User, 
  MapPin, 
  Clock, 
  CheckCircle2, 
  AlertCircle, 
  ShieldCheck, 
  Quote, 
  ArrowRight, 
  PhoneCall, 
  Share2, 
  Check, 
  Scale,
  Award
} from 'lucide-react';

const relatedCases = [
  {
    id: 2,
    title: "Complete Acquittal in Federal Criminal Defense",
    category: "Criminal Defense",
    result: "Complete dismissal of all charges",
    image: "/images/hello 3.jpg"
  },
  {
    id: 3,
    title: "Favorable Child Custody & Asset Division",
    category: "Family Law",
    result: "Sole physical custody secured",
    image: "/images/blog3.jpg"
  }
];

const CaseDetailsPage = () => {
  const [copied, setCopied] = useState(false);

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-[#F8F9F8] min-h-screen text-gray-800">
      
      {/* ১. পেজের মূল হেডার বা ওভারভিউ সেকশন (Hero Section) */}
      <section className="bg-[#081A24] text-white py-20 md:py-28 px-4 md:px-8 relative overflow-hidden">
        {/* Decorative Background Accent */}
        <div className="absolute -right-20 -top-20 w-96 h-96 bg-[#C69D61]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-[1445px] mx-auto relative z-10">
          
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
            {/* Outcome Badge */}
            <div className="inline-flex items-center gap-2 bg-[#C69D61]/20 border border-[#C69D61] text-[#C69D61] px-4 py-1.5 rounded-full text-xs md:text-sm font-semibold">
              <ShieldCheck size={16} />
              Won: $2M Settlement Secured
            </div>

            {/* Share Button */}
            <button 
              onClick={handleShare}
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-[#C69D61] text-white px-4 py-1.5 rounded-full text-xs md:text-sm font-semibold transition-all border border-white/10"
            >
              {copied ? <Check size={15} className="text-green-400" /> : <Share2 size={15} />}
              {copied ? "Link Copied!" : "Share Case"}
            </button>
          </div>

          {/* Case Title */}
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-8 max-w-4xl leading-tight">
            Securing $2M in a Complex Corporate Dispute
          </h1>

          {/* Meta Info Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 bg-white/5 border border-white/10 p-6 rounded-[22px] backdrop-blur-md shadow-xl">
            
            <div className="flex items-center gap-3.5">
              <div className="w-12 h-12 rounded-2xl bg-[#C69D61]/20 flex items-center justify-center text-[#C69D61] shrink-0">
                <Briefcase size={22} />
              </div>
              <div>
                <p className="text-xs text-gray-400 uppercase tracking-wider font-medium">Practice Area</p>
                <p className="font-bold text-sm md:text-base text-white">Business Law</p>
              </div>
            </div>

            <div className="flex items-center gap-3.5">
              <div className="w-12 h-12 rounded-2xl bg-[#C69D61]/20 flex items-center justify-center text-[#C69D61] shrink-0">
                <User size={22} />
              </div>
              <div>
                <p className="text-xs text-gray-400 uppercase tracking-wider font-medium">Client Type</p>
                <p className="font-bold text-sm md:text-base text-white">Corporate Enterprise</p>
              </div>
            </div>

            <div className="flex items-center gap-3.5">
              <div className="w-12 h-12 rounded-2xl bg-[#C69D61]/20 flex items-center justify-center text-[#C69D61] shrink-0">
                <MapPin size={22} />
              </div>
              <div>
                <p className="text-xs text-gray-400 uppercase tracking-wider font-medium">Location</p>
                <p className="font-bold text-sm md:text-base text-white">New York, USA</p>
              </div>
            </div>

            <div className="flex items-center gap-3.5">
              <div className="w-12 h-12 rounded-2xl bg-[#C69D61]/20 flex items-center justify-center text-[#C69D61] shrink-0">
                <Clock size={22} />
              </div>
              <div>
                <p className="text-xs text-gray-400 uppercase tracking-wider font-medium">Duration</p>
                <p className="font-bold text-sm md:text-base text-white">6 Months</p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Main Content Container */}
      <section className="py-16 md:py-24 px-4 md:px-8">
        <div className="max-w-[1445px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Detailed Case Content */}
          <div className="lg:col-span-8 space-y-12">
            
            {/* Featured Image with Power Overlay Stats */}
            <div className="relative rounded-[25px] overflow-hidden shadow-2xl h-[380px] md:h-[480px] group">
              <img 
                src="/images/hello 2.jpg" 
                alt="Case Study" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#081A24]/90 via-transparent to-transparent flex items-end p-8">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-6 w-full text-white">
                  <div className="bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/20">
                    <p className="text-xs text-gray-300 uppercase">Recovery Amount</p>
                    <p className="text-xl md:text-2xl font-bold text-[#C69D61]">$2,000,000</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/20">
                    <p className="text-xs text-gray-300 uppercase">Success Rate</p>
                    <p className="text-xl md:text-2xl font-bold text-white">100% Protected</p>
                  </div>
                  <div className="hidden md:block bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/20">
                    <p className="text-xs text-gray-300 uppercase">Resolution</p>
                    <p className="text-xl md:text-2xl font-bold text-white">Out-of-Court</p>
                  </div>
                </div>
              </div>
            </div>

            {/* ২. মামলার ব্যাকগ্রাউন্ড ও চ্যালেঞ্জ (The Client’s Challenge) */}
            <div className="bg-white p-8 md:p-12 rounded-[25px] shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <h2 className="text-2xl md:text-3xl font-bold text-[#081A24] mb-4 flex items-center gap-3">
                <span className="w-9 h-9 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center text-sm font-bold">01</span>
                The Client’s Challenge
              </h2>
              <p className="text-gray-600 leading-relaxed text-base md:text-lg mb-6">
                The client faced hostile breach of contract claims initiated by a major market competitor, which severely threatened core company assets, operational stability, and overall brand reputation. The opposing party demanded substantial financial penalties that could have led to sudden corporate insolvency.
              </p>
              <div className="bg-amber-50/80 border-l-4 border-amber-500 p-6 rounded-r-2xl">
                <h4 className="font-bold text-amber-900 mb-3 flex items-center gap-2 text-base">
                  <AlertCircle size={20} className="text-amber-600" /> Key Risks Involved:
                </h4>
                <ul className="space-y-2 text-amber-800 text-sm md:text-base">
                  <li className="flex items-start gap-2">✓ Imminent risk of core company asset liquidation under strict legal orders.</li>
                  <li className="flex items-start gap-2">✓ Severe long-term reputational damage across corporate networks.</li>
                  <li className="flex items-start gap-2">✓ High probability of prolonged, multi-year courtroom litigation expenses.</li>
                </ul>
              </div>
            </div>

            {/* ৩. ল’ ফার্মের আইনি কৌশল ও পদক্ষেপ (Our Strategic Solution) */}
            <div className="bg-white p-8 md:p-12 rounded-[25px] shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <h2 className="text-2xl md:text-3xl font-bold text-[#081A24] mb-4 flex items-center gap-3">
                <span className="w-9 h-9 rounded-xl bg-[#081A24] text-white flex items-center justify-center text-sm font-bold">02</span>
                Our Strategic Legal Solution
              </h2>
              <p className="text-gray-600 leading-relaxed text-base md:text-lg mb-8">
                Our elite legal team stepped in to design a rigorous, multi-layered litigation and defense framework focused on uncovering deep procedural flaws in the opposing claims while cementing our client's commercial position.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-2xl border border-gray-200/80 shadow-sm">
                  <div className="w-10 h-10 rounded-lg bg-[#081A24] text-[#C69D61] flex items-center justify-center mb-4">
                    <Scale size={20} />
                  </div>
                  <h3 className="font-bold text-[#081A24] mb-2 text-lg">Forensic & Evidence Analysis</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Conducted exhaustive forensic audits of historical ledger transactions and digital logs to expose bad-faith maneuvers by the opposing party.
                  </p>
                </div>
                <div className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-2xl border border-gray-200/80 shadow-sm">
                  <div className="w-10 h-10 rounded-lg bg-[#081A24] text-[#C69D61] flex items-center justify-center mb-4">
                    <Award size={20} />
                  </div>
                  <h3 className="font-bold text-[#081A24] mb-2 text-lg">Litigation & Negotiation Strategy</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Deployed aggressive corporate counter-motions while simultaneously establishing high-level confidential settlement mediations.
                  </p>
                </div>
              </div>
            </div>

            {/* ৪. মামলার রায় বা চূড়ান্ত ফলাফল (The Final Outcome & Impact) */}
            <div className="bg-white p-8 md:p-12 rounded-[25px] shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <h2 className="text-2xl md:text-3xl font-bold text-[#081A24] mb-4 flex items-center gap-3">
                <span className="w-9 h-9 rounded-xl bg-[#C69D61]/20 text-[#C69D61] flex items-center justify-center text-sm font-bold">03</span>
                The Final Outcome & Impact
              </h2>
              <p className="text-gray-600 leading-relaxed text-base md:text-lg mb-6">
                Through our uncompromising courtroom presence and razor-sharp settlement architecture, the opposing party completely withdrew their hostile claims.
              </p>
              <div className="bg-[#C69D61]/10 border-l-4 border-[#C69D61] p-6 rounded-r-2xl mb-6">
                <p className="text-[#081A24] font-bold text-lg flex items-center gap-3">
                  <CheckCircle2 className="text-[#C69D61] shrink-0" size={24} />
                  Successfully negotiated a $2M settlement securing full financial compensation and absolute asset protection.
                </p>
              </div>
              <p className="text-gray-600 text-base leading-relaxed">
                <strong className="text-[#081A24]">Long-term Impact:</strong> The client preserved 100% of their critical corporate infrastructure, defended their market valuation, and successfully established a bulletproof internal compliance guideline for future expansions.
              </p>
            </div>

            {/* ৫. ক্লায়েন্টের প্রশংসাপত্র বা রিভিউ (Client Testimonial) */}
            <div className="bg-[#081A24] text-white p-8 md:p-12 rounded-[25px] relative overflow-hidden shadow-xl">
              <div className="absolute right-6 -bottom-6 text-white/5 pointer-events-none">
                <Quote size={150} />
              </div>
              <Quote className="text-[#C69D61] mb-4" size={40} />
              <p className="text-lg md:text-2xl italic font-light leading-relaxed mb-8 text-white/95">
                "LexPro’s legal team literally saved our enterprise from potential total ruin. Their profound depth of knowledge, sharp strategic foresight, and aggressive defense mechanisms yielded outcomes far beyond our highest expectations."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#C69D61] text-[#081A24] font-bold flex items-center justify-center text-lg">
                  JM
                </div>
                <div>
                  <h4 className="font-bold text-[#C69D61] text-lg">J.M.</h4>
                  <p className="text-sm text-gray-400">Chief Executive Officer, Corporate Enterprise</p>
                </div>
              </div>
            </div>

            {/* Legal Disclaimer Box */}
            <div className="bg-gray-100 p-6 rounded-2xl border border-gray-200 text-xs text-gray-500 leading-relaxed">
              <strong>Disclaimer:</strong> Cases handled by LexPro vary according to the unique facts and circumstances of each matter. Past results do not guarantee or predict a similar outcome in future legal cases.
            </div>

          </div>

          {/* Right Column: CTA & Related Case Studies */}
          <div className="lg:col-span-4 space-y-8">
            
            {/* ৬. কল-টু-অ্যাকশন বা পরবর্তী পদক্ষেপ (CTA Section) */}
            <div className="bg-[#081A24] text-white p-8 md:p-10 rounded-[25px] text-center shadow-xl relative overflow-hidden border border-white/10">
              <div className="w-16 h-16 bg-[#C69D61]/20 rounded-full flex items-center justify-center mx-auto mb-6 text-[#C69D61]">
                <PhoneCall size={28} />
              </div>
              <h3 className="text-2xl font-bold mb-3">Facing a Similar Legal Issue?</h3>
              <p className="text-gray-300 text-sm md:text-base mb-8 leading-relaxed">
                Get strict confidential legal counsel from our top-tier trial attorneys today. Let us protect what you've built.
              </p>
              <a 
                href="/contact" 
                className="inline-flex items-center justify-center gap-2 bg-[#C69D61] hover:bg-white hover:text-[#081A24] text-white font-bold w-full py-4 rounded-full transition-all shadow-lg text-base group"
              >
                <span>Schedule a Confidential Consultation</span>
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            {/* সংশ্লিষ্ট অন্যান্য কেস স্টাডি (Related Case Studies) */}
            <div className="bg-white p-6 md:p-8 rounded-[25px] shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold text-[#081A24] mb-6 border-b border-gray-100 pb-4">
                Related Success Stories
              </h3>
              <div className="space-y-6">
                {relatedCases.map((item) => (
                  <div key={item.id} className="flex gap-4 items-center group cursor-pointer p-2 rounded-xl hover:bg-gray-50 transition-colors">
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="w-20 h-20 rounded-xl object-cover shrink-0 shadow-sm" 
                    />
                    <div>
                      <span className="text-[11px] font-bold text-[#C69D61] uppercase tracking-wider">{item.category}</span>
                      <h4 className="font-bold text-sm text-[#081A24] group-hover:text-[#C69D61] transition-colors line-clamp-2 mt-0.5">
                        {item.title}
                      </h4>
                      <p className="text-xs text-gray-500 mt-1">{item.result}</p>
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

export default CaseDetailsPage;