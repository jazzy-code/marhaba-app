import Hero from "@/components/Hero";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function HomePage () {
  return (
    <>
      <Hero />

      {/* Category Section */}
      <section className="bg-background-light py-24">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 flex flex-col items-center text-center">
            <h2 className="font-serif text-4xl font-bold text-deep-brown md:text-5xl lg:text-6xl tracking-tight">
              Curated for the Elite
            </h2>
            <p className="mt-6 max-w-2xl font-sans text-lg text-text-muted leading-relaxed">
              Discover our meticulously selected portfolio of premium services, tailored for the discerning few.
            </p>
            <div className="mt-8 h-px w-24 bg-primary-gold/40"></div>
          </div>
          
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3 lg:gap-8">
            {[
              { 
                category: 'Marine', 
                title: 'Marine', 
                desc: 'Superyachts, charters, and exclusive maritime experiences.',
                img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAKqtc55lgoFB9nQEZ4xr45KBWwOXDXsE7glySNiKUhyGoIP3rgwybX1l8gJo_cE_1fdDFES4zEygkee3GDW3aebKcxlDRnGGJdJwWQDl4XaT2K7SS82lorHD1fZ9hzQx46rqNDiK-u7W_Z4a7YHpNsbb8kq9_j6NPf7QamfcJZn64RuepHdjxldIaDNwAR01ko0E5Qnrb0Cz-OnsYl96cjo0vQPpEkBIUmSxzFjQ-PbuJOLcfhar7saESvqD6sUU6jmVPH_cEjUSw'
              },
              { 
                category: 'Estates', 
                title: 'Estates', 
                desc: 'Private villas, penthouses, and architectural masterpieces.',
                img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAJ3aFVnzR8PfOFYEwRP0p7KGXmaH2X_u14veGqaiTM2pQQOfqQPuW7hjouIqpa9jCysM3WvXSgMmsG8T422AUrKwbUDfVfU_q5bPWVdh-ndRtR7jXa6WJgoI7IwJbGH3xOwM_ReiM3OlNZIsjqDdrQe42b6f0QJ8t4b5v_-lEp2cBjaendcz9nm_ONfixOAIxAG_ciLGVdg-2uAVLpTCaFvnGDOgiQESMBdI1RBPlpfUqJwg1bNnIYrRHSboalx-2-yyzoTX25Qns'
              },
              { 
                category: 'Gastronomy', 
                title: 'Gastronomy', 
                desc: 'Michelin-starred dining, private chefs, and rare vintages.',
                img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCyXspzyLcH2gkJyWNu0s0spCTJqkb_R4Y_Z-LNher-UtJv1wgLEEv7XZ-FPISrD_0ZMVY5gxzA0xTn6FxiBXWkHS9PSIbaw1jMGxncWJ_DnR3P_EbZxW7uJYsmFsCi1kXLOUg4ww-U9_fnwY04Rw18N0O4_22FXZ-KHjtDnr4nYZn6tWTPeXQSHruy-tYG-mP_1PO9k63BYi054koWZ-eCHULryN0sDWBvUDhH3K3TpWRDD_CdmZb9QmfsBcN9qqPxqI6ZA0SlpOU'
              }
            ].map((item, idx) => (
              <Link 
                key={idx} 
                className="group relative cursor-pointer overflow-hidden rounded-sm shadow-sm transition-all duration-500 hover:shadow-2xl hover:shadow-deep-brown/10"
                href={`catalog/${item.category}`}
              >
                <div className="aspect-[3/4] w-full overflow-hidden">
                  <div className="h-full w-full bg-cover bg-center transition-transform duration-1000 group-hover:scale-110" style={{ backgroundImage: `url(${item.img})` }}></div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-deep-brown/90 via-deep-brown/20 to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-80"></div>
                <div className="absolute bottom-0 left-0 w-full p-8">
                  <h3 className="font-serif text-3xl font-medium text-white tracking-wide mb-2">{item.title}</h3>
                  <p className="translate-y-4 font-sans text-sm text-white/90 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                    {item.desc}
                  </p>
                  <div className="mt-6 flex items-center gap-3 text-primary-gold opacity-0 transition-opacity delay-100 duration-300 group-hover:opacity-100">
                    <span className="text-xs font-bold tracking-widest uppercase">Explore</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
          
          <div className="mt-16 flex justify-center">
            <Link href="/catalog"
              className="rounded-sm border-2 border-deep-brown bg-transparent px-8 py-4 text-sm font-bold uppercase tracking-widest text-deep-brown transition-all hover:bg-deep-brown hover:text-white hover:shadow-lg active:scale-95"
            >
              Explore All Exclusive Services
            </Link>
          </div>
        </div>
      </section>

      {/* Gold Standard Section */}
      <section className="bg-surface py-24">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <span className="mb-3 block font-display text-sm font-bold uppercase tracking-widest text-primary-gold">The Gold Standard</span>
            <h2 className="font-serif text-4xl font-medium text-deep-brown md:text-5xl">Why the Elite Choose Us</h2>
          </div>
          <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
            {[
              { title: 'Unrivaled Access', icon: 'diamond', desc: 'Gain entry to off-market properties, private yachts, and exclusive events not available to the public.' },
              { title: 'Vetted Excellence', icon: 'verified_user', desc: 'Every partner is rigorously screened to ensure they meet our uncompromising standards of luxury and service.' },
              { title: 'Bespoke Concierge', icon: 'handshake', desc: 'A dedicated team orchestrates every detail, ensuring your experience is seamless, personalized, and discreet.' }
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center text-center">
                <div className="mb-6 flex size-16 items-center justify-center rounded-full bg-background-light text-primary-gold shadow-sm">
                  <span className="material-symbols-outlined text-3xl">{item.icon}</span>
                </div>
                <h3 className="mb-3 font-serif text-2xl text-deep-brown">{item.title}</h3>
                <p className="font-sans text-text-muted/80 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Orchestration Section */}
      <section className="bg-background-light py-24 border-t border-deep-brown/5">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 flex flex-col items-center text-center">
            <h2 className="font-serif text-4xl font-bold text-deep-brown md:text-5xl">Seamless Orchestration</h2>
            <p className="mt-4 max-w-2xl font-sans text-text-muted/80">From request to reality in three simple steps.</p>
          </div>
          <div className="relative grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="absolute top-12 left-0 hidden w-full px-16 md:block">
              <div className="h-px w-full border-t border-dashed border-deep-brown/20"></div>
            </div>
            {[
              { step: '1', title: 'Request', desc: "Tell us your desires. Whether it's a villa for the summer or a last-minute charter." },
              { step: '2', title: 'Curate', desc: 'We match you with our elite partners and present a tailored selection of options.' },
              { step: '3', title: 'Experience', desc: 'Confirm your choice and enjoy a flawless experience, managed by professionals.' }
            ].map((item, i) => (
              <div key={i} className="relative z-10 flex flex-col items-center text-center">
                <div className="mb-6 flex size-24 items-center justify-center rounded-full border border-white bg-surface shadow-md">
                  <span className="font-serif text-4xl font-medium text-primary-gold">{item.step}</span>
                </div>
                <h3 className="mb-2 font-display text-lg font-bold uppercase tracking-wider text-deep-brown">{item.title}</h3>
                <p className="px-4 font-sans text-sm text-text-muted/90">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-16 flex justify-center">
            <Link 
              href={'/catalog'}
              className="rounded-sm bg-deep-brown px-8 py-4 text-sm font-bold uppercase tracking-widest text-white transition-all hover:bg-deep-brown/90 hover:shadow-lg active:scale-95"
            >
              Begin Your Luxury Journey
            </Link>
          </div>
        </div>
      </section>

      {/* Weekly Features Section */}
      <section className="bg-[#F9F8F6] py-24 border-t border-deep-brown/10 relative overflow-hidden">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="mb-14 text-center">
            <h2 className="font-serif text-3xl text-deep-brown md:text-4xl lg:text-5xl">Weekly Curated Experiences</h2>
            <div className="mx-auto mt-4 h-px w-16 bg-primary-gold"></div>
          </div>
          
          <div className="scrollbar-hide flex snap-x snap-mandatory gap-6 overflow-x-auto pb-8 px-2 -mx-2">
            {[
              { type: 'Villa Special', title: 'Sunset Palace Estate', desc: "Exclusive weekend access to the Golden Mile's finest property.", img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCtILZOPLCHEuwmQo5Xj3zd9XtU1ucWg3Dajt0x_bl0L1LbTgyYQPeKTyvoGgTKsbcd0rzA1U2IO1YXQ5up8dmHjJIv9SzhKAzemL7fCPujoY5AXNKx0iaVMbxp8NEXsuygv6OeJvXAsywXY1HvBlkunoFf0rAJ5JDNx5IU3vBiV84JIkH3yHzCM1MdFyJ3oeLjm7vdz51C6NGiHgbQi03VksJxIf58y-QcLyfJL06mwD4rfPzQuTQPf7EXF9eP11JHRIgoK0aSQF8' },
              { type: 'Gastronomy', title: "Chef's Table: Dani García", desc: 'Private tasting menu for 8 guests with wine pairing.', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCyXspzyLcH2gkJyWNu0s0spCTJqkb_R4Y_Z-LNher-UtJv1wgLEEv7XZ-FPISrD_0ZMVY5gxzA0xTn6FxiBXWkHS9PSIbaw1jMGxncWJ_DnR3P_EbZxW7uJYsmFsCi1kXLOUg4ww-U9_fnwY04Rw18N0O4_22FXZ-KHjtDnr4nYZn6tWTPeXQSHruy-tYG-mP_1PO9k63BYi054koWZ-eCHULryN0sDWBvUDhH3K3TpWRDD_CdmZb9QmfsBcN9qqPxqI6ZA0SlpOU' },
              { type: 'Yacht Charter', title: 'The Mediterranean Pearl', desc: '3-day charter to Ibiza including crew and catering.', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAKqtc55lgoFB9nQEZ4xr45KBWwOXDXsE7glySNiKUhyGoIP3rgwybX1l8gJo_cE_1fdDFES4zEygkee3GDW3aebKcxlDRnGGJdJwWQDl4XaT2K7SS82lorHD1fZ9hzQx46rqNDiK-u7W_Z4a7YHpNsbb8kq9_j6NPf7QamfcJZn64RuepHdjxldIaDNwAR01ko0E5Qnrb0Cz-OnsYl96cjo0vQPpEkBIUmSxzFjQ-PbuJOLcfhar7saESvqD6sUU6jmVPH_cEjUSw' },
              { type: 'Wellness', title: 'Holistic Retreat', desc: 'Full spa takeover and personalized therapy sessions.', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAJ3aFVnzR8PfOFYEwRP0p7KGXmaH2X_u14veGqaiTM2pQQOfqQPuW7hjouIqpa9jCysM3WvXSgMmsG8T422AUrKwbUDfVfU_q5bPWVdh-ndRtR7jXa6WJgoI7IwJbGH3xOwM_ReiM3OlNZIsjqDdrQe42b6f0QJ8t4b5v_-lEp2cBjaendcz9nm_ONfixOAIxAG_ciLGVdg-2uAVLpTCaFvnGDOgiQESMBdI1RBPlpfUqJwg1bNnIYrRHSboalx-2-yyzoTX25Qns' }
            ].map((item, idx) => (
              <div key={idx} className="min-w-[300px] md:min-w-[360px] snap-center flex flex-col gap-6">
                <Link 
                  href="/catalog" 
                  className="group relative aspect-[16/9] w-full cursor-pointer overflow-hidden rounded-sm shadow-md transition-all hover:shadow-lg"
                >
                  <div className="h-full w-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105" style={{ backgroundImage: `url(${item.img})` }}></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-deep-brown/90 to-transparent opacity-60 group-hover:opacity-75 transition-opacity"></div>
                  <div className="absolute bottom-0 p-6 text-left">
                    <span className="mb-1 block text-xs font-bold uppercase tracking-widest text-primary-gold">{item.type}</span>
                    <h3 className="font-serif text-xl text-white">{item.title}</h3>
                    <p className="mt-1 text-sm text-white/80 line-clamp-2">{item.desc}</p>
                  </div>
                </Link>
              </div>
            ))}
          </div>

          <div className="mt-4 flex justify-center gap-2">
            <div className="h-1.5 w-8 rounded-full bg-deep-brown"></div>
            <div className="h-1.5 w-1.5 rounded-full bg-deep-brown/30"></div>
            <div className="h-1.5 w-1.5 rounded-full bg-deep-brown/30"></div>
          </div>
          
          <div className="mt-12 flex justify-center">
            <Link href="/catalog"
              className="rounded-sm border border-deep-brown bg-transparent px-8 py-3 text-sm font-bold uppercase tracking-widest text-deep-brown transition-all hover:bg-deep-brown hover:text-white hover:shadow-md active:scale-95"
            >
              View All Weekly Features
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="border-y border-deep-brown/10 bg-deep-brown py-12">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4 text-center">
            <div>
              <p className="font-serif text-3xl font-medium text-white">50+</p>
              <p className="mt-1 text-xs font-bold uppercase tracking-wider text-white">Global Partners</p>
            </div>
            <div>
              <p className="font-serif text-3xl font-medium text-white">100%</p>
              <p className="mt-1 text-xs font-bold uppercase tracking-wider text-white">Verified Luxury</p>
            </div>
            <div>
              <p className="font-serif text-3xl font-medium text-white">24/7</p>
              <p className="mt-1 text-xs font-bold uppercase tracking-wider text-white">Concierge Support</p>
            </div>
            <div>
              <p className="font-serif text-3xl font-medium text-white">€500M+</p>
              <p className="mt-1 text-xs font-bold uppercase tracking-wider text-white">Asset Value</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}