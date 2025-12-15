"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Twitter, Instagram, Globe } from 'lucide-react';

// Custom TikTok Icon since Lucide doesn't have a perfect match yet
const TikTokIcon = ({ className }: { className?: string }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
  </svg>
);

export default function Home() {
  const [userType, setUserType] = useState<'buyer' | 'seller'>('buyer');
  
  // Scroll to form function
  const scrollToForm = (type: 'buyer' | 'seller') => {
    setUserType(type);
    const formElement = document.getElementById('join-waitlist');
    formElement?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <main className="min-h-screen flex flex-col items-center overflow-x-hidden text-text-primary">
      
      {/* --- HERO SECTION --- */}
      <section className="w-full max-w-4xl px-6 pt-24 pb-12 flex flex-col items-center text-center">
        
        {/* Logo Title */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-serif font-black text-6xl md:text-8xl tracking-tight text-[#2c221e] mb-4"
        >
          CULTURAR
        </motion.h1>

        {/* Tagline */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="flex items-center gap-2 text-primary-600 font-serif italic text-xl md:text-2xl mb-12"
        >
          <Globe size={20} />
          <span>Home, Delivered</span>
        </motion.div>

        {/* Main Headline */}
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="font-serif font-bold text-3xl md:text-5xl text-[#3d312a] mb-6 leading-tight"
        >
          The Marketplace for African Diaspora <br className="hidden md:block" /> in Europe
        </motion.h2>

        {/* Subtitle */}
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="text-text-secondary text-lg max-w-2xl mb-10 leading-relaxed"
        >
          Find authentic Nigerian, Zimbabwean, Cameroonian, South African items — anywhere you are.
        </motion.p>

        {/* Launch Badge */}
        <motion.div 
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.5 }}
          className="bg-[#D97C56] text-white px-8 py-3 rounded-full font-semibold shadow-lg shadow-orange-200 mb-16"
        >
          Launching July 2025
        </motion.div>

        {/* Action Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-6 w-full max-w-lg justify-center"
        >
          <button 
            onClick={() => scrollToForm('buyer')}
            className="px-8 py-4 rounded-full bg-[#D97C56] text-white font-bold text-lg hover:bg-[#c56b46] transition-all shadow-md active:scale-95"
          >
            Join as Buyer
          </button>
          <button 
            onClick={() => scrollToForm('seller')}
            className="px-8 py-4 rounded-full bg-white border-2 border-[#D97C56] text-[#3d312a] font-bold text-lg hover:bg-orange-50 transition-all shadow-sm active:scale-95"
          >
            Join as Seller
          </button>
        </motion.div>
      </section>

      {/* --- FORM SECTION --- */}
      <section id="join-waitlist" className="w-full max-w-2xl px-6 py-16">
        <div className="bg-[#FFFDFB] rounded-[32px] p-8 md:p-12 shadow-xl shadow-orange-100/50 border border-orange-100">
          <h3 className="font-serif font-bold text-2xl mb-8 text-[#3d312a]">
            {userType === 'buyer' ? 'Get Early Access' : 'Become a Seller'}
          </h3>
          
          <form className="space-y-6">
            {/* Email Input */}
            <div className="space-y-2">
              <label className="block text-sm font-bold text-[#3d312a]">Email Address</label>
              <input 
                type="email" 
                placeholder="your@email.com" 
                className="w-full bg-primary-50/50 border border-primary-200 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-primary-500/50 transition-all placeholder:text-gray-400"
              />
            </div>

            {/* Dropdowns Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="block text-sm font-bold text-[#3d312a]">From</label>
                <div className="relative">
                  <select className="w-full bg-primary-50/50 border border-primary-200 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-primary-500/50 transition-all appearance-none cursor-pointer text-gray-600">
                    <option>Other</option>
                    <option>Nigeria</option>
                    <option>Zimbabwe</option>
                    <option>Cameroon</option>
                    <option>South Africa</option>
                    <option>Ghana</option>
                  </select>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">▼</div>
                </div>
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-bold text-[#3d312a]">Location</label>
                <div className="relative">
                  <select className="w-full bg-primary-50/50 border border-primary-200 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-primary-500/50 transition-all appearance-none cursor-pointer text-gray-600">
                    <option>Select location</option>
                    <option>Germany</option>
                    <option>United Kingdom</option>
                    <option>France</option>
                    <option>Netherlands</option>
                  </select>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">▼</div>
                </div>
              </div>
            </div>

            {/* Country Input */}
            <div className="space-y-2">
              <label className="block text-sm font-bold text-[#3d312a]">Please specify your country</label>
              <input 
                type="text" 
                placeholder="Enter your country" 
                className="w-full bg-primary-50/50 border border-primary-200 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-primary-500/50 transition-all placeholder:text-gray-400"
              />
            </div>

            {/* Submit Button */}
            <button className="w-full bg-[#D97C56] text-white font-bold text-lg py-4 rounded-xl mt-8 hover:bg-[#c56b46] transition-all shadow-md active:scale-[0.99]">
              Join Waitlist
            </button>
          </form>
        </div>
      </section>

      {/* --- INFO SECTION --- */}
      <section className="w-full max-w-3xl px-6 py-16">
        <div className="bg-[#FFFDFB]/50 p-8 md:p-12 rounded-[32px]">
          <h2 className="font-serif font-bold text-4xl text-[#3d312a] mb-8">What is CULTURAR?</h2>
          
          <div className="space-y-6 text-text-secondary text-lg leading-relaxed">
            <p>
              CULTURAR is a platform built to bring people together through their cultural identities, traditions, and shared interests. It acts as a vibrant hub where anyone can buy, sell, or exchange products, foods, and services that reflect the richness of cultures from around the world.
            </p>
            <p>
              From traditional crafts and clothing to spices, regional dishes, workshops, and cultural experiences, the marketplace makes it easier for people to stay connected to their heritage — or explore new ones.
            </p>
            <p>
              Think of it as Etsy or Vinted, but for cultures. Whether you're missing home and need authentic items, going back and need to sell niche items, or simply want to connect with your culture abroad — this app is for you.
            </p>
            <p className="font-medium text-[#3d312a]">
              At its core, CULTURAR doesn't just support commerce — it strengthens community, preserves traditions, and celebrates global diversity through meaningful connections.
            </p>
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="w-full px-6 py-16 flex flex-col items-center border-t border-orange-100 mt-8">
        <h4 className="font-serif text-xl font-bold text-[#3d312a] mb-8">Follow our journey:</h4>
        <div className="flex gap-4">
          <SocialButton label="Instagram" icon={<Instagram size={20} />} />
          <SocialButton label="TikTok" icon={<TikTokIcon className="w-5 h-5" />} />
          <SocialButton label="Twitter" icon={<Twitter size={20} />} />
        </div>
        <div className="mt-12 text-sm text-gray-400">
          © 2025 Culturar. All rights reserved.
        </div>
      </footer>
    </main>
  );
}

// Helper component for social buttons
const SocialButton = ({ label, icon }: { label: string, icon: React.ReactNode }) => (
  <button className="flex items-center gap-2 px-6 py-3 rounded-full border-2 border-[#D97C56] text-[#D97C56] font-bold hover:bg-[#D97C56] hover:text-white transition-all">
    {icon}
    <span>{label}</span>
  </button>
);