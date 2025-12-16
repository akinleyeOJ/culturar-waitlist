"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence, Variants } from 'framer-motion';

// --- Custom Icons ---

const InstagramIcon = ({ className }: { className?: string }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const TikTokIcon = ({ className }: { className?: string }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    stroke="none"
    className={className}
  >
    <path d="M19.589 6.686a4.793 4.793 0 0 1-3.77-4.245V2h-3.445v13.672a2.896 2.896 0 0 1-5.201 1.743l-.002-.001.002.001a2.895 2.895 0 0 1 3.183-4.51v-3.5a6.329 6.329 0 0 0-5.394 10.692 6.33 6.33 0 0 0 10.857-4.424V8.687a8.182 8.182 0 0 0 4.773 1.526V6.79a4.831 4.831 0 0 1-1.003-.104z" />
  </svg>
);

const TwitterIcon = ({ className }: { className?: string }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    stroke="none"
    className={className}
  >
    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
  </svg>
);

// --- Animation Variants ---

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.6, 
      ease: [0.22, 1, 0.36, 1] as const
    } 
  }
};

export default function Home() {
  const [userType, setUserType] = useState<'buyer' | 'seller'>('buyer');
  const [origin, setOrigin] = useState('');
  const [location, setLocation] = useState('');

  // --- Scroll Restoration Fix ---
  useEffect(() => {
    if (typeof window !== 'undefined' && 'scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);
    const timeout = setTimeout(() => window.scrollTo(0, 0), 10);
    return () => clearTimeout(timeout);
  }, []);

  const scrollToForm = (type: 'buyer' | 'seller') => {
    setUserType(type);
    const formElement = document.getElementById('join-waitlist');
    formElement?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#050505] text-[#ededed] overflow-x-hidden selection:bg-[#D97C56] selection:text-white">
      {/* Background Glows */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute -top-[20%] -left-[10%] w-[50vw] h-[50vw] bg-[#D97C56] opacity-[0.08] blur-[120px] rounded-full" />
        <div className="absolute top-[40%] -right-[10%] w-[40vw] h-[40vw] bg-[#D97C56] opacity-[0.05] blur-[120px] rounded-full" />
      </div>

      <motion.main 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 flex flex-col items-center w-full"
      >
        
        {/* --- HERO SECTION --- */}
        <motion.section className="w-full max-w-4xl px-6 pt-24 pb-12 flex flex-col items-center text-center">
          
          <motion.h1 variants={itemVariants} className="font-bold text-6xl md:text-8xl tracking-tight text-white mb-4 drop-shadow-2xl">
            CULTURAR
          </motion.h1>

          <motion.div variants={itemVariants} className="flex items-center gap-3 text-[#D97C56] italic text-xl md:text-2xl mb-10">
            <div className="relative w-8 h-8 opacity-90">
              <Image 
                src="/2802682.png" 
                alt="Africa Map Icon" 
                fill
                className="object-contain" 
                priority
              />
            </div>
            <span>Home, Delivered</span>
          </motion.div>

          <motion.h2 variants={itemVariants} className="font-bold text-3xl md:text-5xl text-[#e0e0e0] mb-6 leading-tight">
            The Marketplace for African Diaspora <br className="hidden md:block" /> in Europe
          </motion.h2>

          <motion.p variants={itemVariants} className="text-gray-400 text-lg max-w-2xl mb-10 leading-relaxed tracking-wide">
            Find authentic Nigerian, Zimbabwean, Cameroonian, South African items — anywhere you are.
          </motion.p>

          <motion.div variants={itemVariants} className="bg-[#D97C56]/10 border border-[#D97C56]/30 text-[#D97C56] px-8 py-3 rounded-full font-semibold mb-12 backdrop-blur-md">
            Launching July 2025
          </motion.div>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-6 w-full max-w-lg justify-center">
            <button 
              onClick={() => scrollToForm('buyer')}
              className="px-8 py-4 rounded-full bg-[#D97C56] text-white font-bold text-lg hover:bg-[#c56b46] transition-all shadow-lg hover:shadow-[#D97C56]/40 active:scale-95"
            >
              Join as Buyer
            </button>
            <button 
              onClick={() => scrollToForm('seller')}
              className="px-8 py-4 rounded-full bg-white/5 border-2 border-[#D97C56] text-[#D97C56] font-bold text-lg hover:bg-[#D97C56]/10 transition-all active:scale-95 backdrop-blur-sm"
            >
              Join as Seller
            </button>
          </motion.div>
        </motion.section>

        {/* --- FORM SECTION --- */}
        <motion.section variants={itemVariants} id="join-waitlist" className="w-full max-w-2xl px-6 py-16">
          <div className="bg-[#111111]/80 backdrop-blur-xl rounded-[32px] p-8 md:p-12 shadow-2xl border border-white/5">
            <h3 className="font-bold text-2xl mb-8 text-white">
              {userType === 'buyer' ? 'Get Early Access' : 'Become a Seller'}
            </h3>
            
            <form className="space-y-6">
              <div className="space-y-2">
                <label className="block text-sm font-bold text-gray-300 tracking-wide">Email Address</label>
                <input 
                  type="email" 
                  placeholder="your@email.com" 
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-[#D97C56]/50 focus:border-[#D97C56] transition-all text-white placeholder:text-gray-600"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="block text-sm font-bold text-gray-300 tracking-wide">From</label>
                  <div className="relative">
                    <select 
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-[#D97C56]/50 focus:border-[#D97C56] transition-all appearance-none cursor-pointer text-white"
                      value={origin}
                      onChange={(e) => setOrigin(e.target.value)}
                    >
                      <option value="" disabled>Select Origin</option>
                      <option value="Nigeria">Nigeria</option>
                      <option value="Zimbabwe">Zimbabwe</option>
                      <option value="Cameroon">Cameroon</option>
                      <option value="South Africa">South Africa</option>
                      <option value="Ghana">Ghana</option>
                      <option value="Other">Other</option>
                    </select>
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500">▼</div>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-bold text-gray-300 tracking-wide">Location</label>
                  <div className="relative">
                    <select 
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-[#D97C56]/50 focus:border-[#D97C56] transition-all appearance-none cursor-pointer text-white"
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                    >
                      <option value="" disabled>Select Location</option>
                      <option value="Germany">Germany</option>
                      <option value="United Kingdom">United Kingdom</option>
                      <option value="France">France</option>
                      <option value="Netherlands">Netherlands</option>
                      <option value="Other">Other</option>
                    </select>
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500">▼</div>
                  </div>
                </div>
              </div>

              <AnimatePresence>
                {origin === 'Other' && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="space-y-2 pt-2">
                      <label className="block text-sm font-bold text-gray-300 tracking-wide">Please specify your country</label>
                      <input 
                        type="text" 
                        placeholder="Enter your country" 
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-[#D97C56]/50 focus:border-[#D97C56] transition-all text-white placeholder:text-gray-600"
                      />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <AnimatePresence>
                {location === 'Other' && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="space-y-2 pt-2">
                      <label className="block text-sm font-bold text-gray-300 tracking-wide">Please specify your location</label>
                      <input 
                        type="text" 
                        placeholder="Enter your city/region" 
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-[#D97C56]/50 focus:border-[#D97C56] transition-all text-white placeholder:text-gray-600"
                      />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <button className="w-full bg-[#D97C56] text-white font-bold text-lg py-4 rounded-xl mt-8 hover:bg-[#c56b46] transition-all shadow-lg active:scale-[0.99]">
                Join Waitlist
              </button>
            </form>
          </div>
        </motion.section>

        {/* --- INFO SECTION --- */}
        <motion.section variants={itemVariants} className="w-full max-w-3xl px-6 py-16">
          <div className="bg-[#111111]/50 backdrop-blur-lg p-8 md:p-12 rounded-[32px] border border-white/5">
            <h2 className="font-bold text-4xl text-white mb-8">What is CULTURAR?</h2>
            
            <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
              <p>
                CULTURAR is a platform built to bring people together through their cultural identities, traditions, and shared interests. It acts as a vibrant hub where anyone can buy, sell, or exchange products, foods, and services that reflect the richness of cultures from around the world.
              </p>
              <p>
                From traditional crafts and clothing to spices, regional dishes, workshops, and cultural experiences, the marketplace makes it easier for people to stay connected to their heritage — or explore new ones.
              </p>
              <p className="font-medium text-[#D97C56]">
                At its core, CULTURAR doesn't just support commerce — it strengthens community, preserves traditions, and celebrates global diversity through meaningful connections.
              </p>
            </div>
          </div>
        </motion.section>

        {/* --- FOOTER --- */}
        <motion.footer variants={itemVariants} className="w-full px-6 py-16 flex flex-col items-center border-t border-white/10 mt-8 bg-[#050505]">
          <h4 className="font-xl font-bold text-white mb-8">Follow our journey:</h4>
          <div className="flex gap-4">
            <SocialButton 
              label="Instagram" 
              link="https://instagram.com/culturar.app"
              icon={<InstagramIcon className="w-5 h-5" />} 
            />
            <SocialButton 
              label="TikTok" 
              link="https://tiktok.com/@culturar.app"
              icon={<TikTokIcon className="w-5 h-5" />} 
            />
            <SocialButton 
              label="Twitter" 
              link="#"
              icon={<TwitterIcon className="w-5 h-5" />} 
            />
          </div>
          <div className="mt-12 text-sm text-gray-600">
            © 2025 Culturar. All rights reserved.
          </div>
        </motion.footer>
      </motion.main>
    </div>
  );
}

// Helper component for social buttons
const SocialButton = ({ label, icon, link }: { label: string, icon: React.ReactNode, link: string }) => (
  <a 
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-2 px-6 py-3 rounded-full border border-white/20 text-white font-bold hover:bg-white hover:text-black transition-all hover:scale-105 active:scale-95"
  >
    {icon}
    <span>{label}</span>
  </a>
);