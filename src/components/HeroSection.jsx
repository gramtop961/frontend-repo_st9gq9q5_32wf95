import React from 'react';
import Spline from '@splinetool/react-spline';

export default function HeroSection() {
  return (
    <section className="relative min-h-[80vh] w-full bg-black text-white overflow-hidden">
      {/* 3D Scene */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/zks9uYILDPSX-UX6/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradient edges so text stays legible */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/80" />

      {/* Centered content */}
      <div className="relative z-10 mx-auto max-w-6xl px-4 py-24 flex flex-col items-center text-center gap-6">
        <p className="text-cyan-400 uppercase tracking-[0.3em] text-xs sm:text-sm">Now Announced</p>
        <h1 className="font-semibold text-4xl sm:text-5xl md:text-6xl leading-tight">
          Experience the Future of the Big Screen
        </h1>
        <p className="max-w-2xl text-white/80 text-base md:text-lg">
          A breathtaking, immersive story brought to life with cutting-edge visuals. Secure your seat today and be among the first to witness it.
        </p>
        <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4">
          <a
            href="#tickets"
            className="inline-flex items-center justify-center rounded-full bg-cyan-500 hover:bg-cyan-400 text-black font-semibold px-6 py-3 transition-colors"
          >
            Book Now
          </a>
          <a
            href="#vendors"
            className="inline-flex items-center justify-center rounded-full border border-white/20 hover:border-white/40 text-white px-6 py-3 transition-colors"
          >
            View Ticket Vendors
          </a>
        </div>
        <p className="mt-2 text-sm text-white/70">Release Date: <span className="text-white font-semibold">June 21, 2026</span></p>
      </div>
    </section>
  );
}
