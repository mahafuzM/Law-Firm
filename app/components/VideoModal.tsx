// components/VideoModal.tsx
"use client";
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoUrl: string; // YouTube Embed URL
}

const VideoModal: React.FC<VideoModalProps> = ({ isOpen, onClose, videoUrl }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose} // Background-এ ক্লিক করলে বন্ধ হবে
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 md:p-10 backdrop-blur-sm"
        >
          {/* Modal Container */}
          <motion.div
            initial={{ scale: 0.9, y: 30 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, y: 30 }}
            transition={{ type: "spring", damping: 20 }}
            className="relative w-full max-w-6xl aspect-video bg-black rounded-2xl shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()} // Modal-এর ভেতরে ক্লিক করলে বন্ধ হবে না
          >
            {/* Close Button (X) */}
            <button
              onClick={onClose}
              className="absolute -top-2 -right-2 md:-top-10 md:-right-10 z-10 p-2 bg-white/10 hover:bg-white/20 rounded-full text-white transition-all"
              aria-label="Close video"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-8 w-8 md:h-10 md:w-10" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* YouTube Iframe */}
            <iframe
              className="absolute inset-0 w-full h-full"
              src={`${videoUrl}?autoplay=1&modestbranding=1&rel=0`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
            
            {/* YouTube "Watch on YouTube" link (Optional, for authentic feel) */}
            <div className="absolute bottom-4 left-4 z-10 text-white text-xs flex items-center gap-1 bg-black/50 px-2 py-1 rounded">
                <svg height="16" viewBox="0 0 20 16" width="20"><path d="M19.6 3.5s-.2-1.4-.8-2C18 .9 17.2.9 16.9.9 13.8.7 10 .7 10 .7s-3.8 0-6.9.2c-.3 0-1.1 0-1.9.7-.6.6-.8 2-.8 2S.2 5.1.2 6.7v2.6c0 1.6.2 3.2.8 3.8s1.1.7 1.9.7c2.2.2 7.1.2 7.1.2s3.8 0 6.9-.2c.3 0 1.1 0 1.9-.7.6-.6.8-2.8-2.8V6.7c0-1.6-.2-3.2-.8-3.2z" fill="#ff0000"></path><path d="M8 11.4l6-3.4-6-3.4v6.8z" fill="#fff"></path></svg>
                <span>Watch on YouTube</span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default VideoModal;