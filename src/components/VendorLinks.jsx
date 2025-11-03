import React from 'react';
import { ExternalLink } from 'lucide-react';

const vendors = [
  {
    name: 'Fandango',
    href: 'https://www.fandango.com',
    color: 'from-cyan-500/20 to-cyan-300/10',
  },
  {
    name: 'AMC Theatres',
    href: 'https://www.amctheatres.com',
    color: 'from-fuchsia-500/20 to-fuchsia-300/10',
  },
  {
    name: 'Regal Cinemas',
    href: 'https://www.regmovies.com',
    color: 'from-violet-500/20 to-violet-300/10',
  },
  {
    name: 'Cinemark',
    href: 'https://www.cinemark.com',
    color: 'from-emerald-500/20 to-emerald-300/10',
  },
];

export default function VendorLinks() {
  return (
    <section id="tickets" className="bg-black text-white">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold">Book Your Tickets</h2>
            <p className="text-white/70">Choose your preferred vendor or theater</p>
          </div>
          <a
            href="#vendors"
            className="hidden sm:inline-flex text-sm text-cyan-400 hover:text-cyan-300"
          >
            See all
          </a>
        </div>

        <div id="vendors" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {vendors.map((v) => (
            <a
              key={v.name}
              href={v.href}
              target="_blank"
              rel="noreferrer noopener"
              className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br ${v.color} p-5 hover:border-white/20 transition`}
            >
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-semibold">{v.name}</h3>
                  <p className="text-xs text-white/70">External website</p>
                </div>
                <ExternalLink className="size-5 text-white/70 group-hover:text-white transition" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
