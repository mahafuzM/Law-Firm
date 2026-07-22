import { Phone, Mail, MapPin } from "lucide-react";
import { FaFacebook, FaTwitter, FaYoutube, FaLinkedin } from "react-icons/fa";

const TopBar = () => {
  return (
    <div className="w-full bg-[#08171F] py-2.5 md:py-3 text-white text-[11px] md:text-[13px] font-poppins">
      <div className="max-w-[1445px] mx-auto px-4 lg:px-8 flex justify-between items-center">
        
        {/* Contact Info */}
        <div className="flex items-center gap-4 md:gap-8 text-slate-300">
          <div className="flex items-center gap-2 hover:text-[#EC665E] transition-colors cursor-pointer">
            <Phone size={14} className="md:size-[16px]" />
            <span className="hidden sm:inline">+1 555-012-3456</span>
          </div>
          
          <div className="flex items-center gap-2 hover:text-[#EC665E] transition-colors cursor-pointer">
            <Mail size={14} className="md:size-[16px]" />
            <span className="hidden sm:inline">info@lexpro.com</span>
          </div>

          <div className="hidden md:flex items-center gap-2 hover:text-[#EC665E] transition-colors cursor-pointer">
            <MapPin size={14} className="md:size-[16px]" />
            <span>371 7th Ave, New York</span>
          </div>
        </div>

        {/* Social Icons */}
        <div className="flex items-center gap-4 md:gap-6 text-slate-300">
          {[FaFacebook, FaTwitter, FaYoutube, FaLinkedin].map((Icon, i) => (
            <a 
              key={i} 
              href="#" 
              className="hover:text-[#EC665E] transition-all"
            >
              <Icon size={14} className="md:size-[16px]" />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopBar;