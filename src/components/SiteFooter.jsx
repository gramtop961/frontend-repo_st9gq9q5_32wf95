import React from 'react';
import { Instagram, Twitter, Youtube } from 'lucide-react';

export default function SiteFooter() {
  return (
    <footer className="bg-black text-white border-t border-white/10">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <h4 className="text-lg font-semibold">Contact</h4>
            <p className="text-white/70 text-sm">support@holoticket.film</p>
          </div>
          <nav className="flex items-center gap-6 text-sm">
            <a href="#" className="text-white/70 hover:text-white">Terms & Conditions</a>
            <a href="#" className="text-white/70 hover:text-white">Privacy Policy</a>
          </nav>
          <div className="flex items-center gap-4">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center justify-center size-9 rounded-full bg-white/5 hover:bg-white/10 border border-white/10"
            >
              <Twitter className="size-5" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center justify-center size-9 rounded-full bg-white/5 hover:bg-white/10 border border-white/10"
            >
              <Instagram className="size-5" />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center justify-center size-9 rounded-full bg-white/5 hover:bg-white/10 border border-white/10"
            >
              <Youtube className="size-5" />
            </a>
          </div>
        </div>
        <p className="mt-8 text-xs text-white/50">© {new Date().getFullYear()} HoloTicket Films. All rights reserved.</p>
      </div>
    </footer>
  );
}
