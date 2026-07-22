"use client";
import React from 'react';

const ContactMap = () => {
  return (
    <section className="w-full bg-[#F4F6F8] py-8 px-4 md:px-8">
      <div className="max-w-[1445px] mx-auto">
        <div className="w-full h-[400px] md:h-[500px] rounded-[20px] overflow-hidden shadow-sm border border-gray-200 relative">
          
          {/* Google Maps Embed Iframe */}
          <iframe 
            title="Location Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14602.25412497677!2d89.1234567!3d23.456789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDI3JzI0LjQiTiA4OWD0cnBsaWNhdGVk!5e0!3m2!1sen!2sbd!4v1234567890123!5m2!1sen!2sbd" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen={true} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full grayscale-[20%] contrast-[105%]"
          ></iframe>

        </div>
      </div>
    </section>
  );
};

export default ContactMap;