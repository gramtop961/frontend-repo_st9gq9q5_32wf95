import React from 'react';

export default function ReleaseBanner() {
  return (
    <div className="w-full bg-black text-white">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <p className="text-sm md:text-base font-medium tracking-wide">
          Official Release Date: <span className="text-cyan-400">June 21, 2026</span>
        </p>
        <a
          href="#tickets"
          className="hidden sm:inline-flex items-center gap-2 rounded-full bg-cyan-500 hover:bg-cyan-400 text-black font-semibold px-4 py-2 transition-colors"
        >
          Book Now
        </a>
      </div>
    </div>
  );
}
