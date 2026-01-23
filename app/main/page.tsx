"use client";

import React, { useState, useEffect, useMemo } from 'react';
import { 
  Search, 
  PlusCircle, ArrowRight, Loader2, Sparkles, CheckCircle, Menu} from 'lucide-react';
import { View, Service, Category } from '../../types';
import { categories, MOCK_SERVICES } from '../../constants';
import Button from '../../components/Button';
import Badge from '../../components/Badge';
import Image from 'next/image';
// import GeminiConcierge from '../components/GeminiConcierge';
// import { generateServiceDescription } from '../services/gemini';

const InquiryModal: React.FC<{ isOpen: boolean; onClose: () => void }> = ({ isOpen, onClose }) => {
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSuccess(true);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-luxury-brown/40 backdrop-blur-sm p-4 overflow-y-auto">
      <div className="relative w-full max-w-md bg-white rounded-sm shadow-2xl overflow-hidden animate-fade-in">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-luxury-gray hover:text-luxury-brown transition-colors p-1 rounded-sm focus:outline-none focus:ring-2 focus:ring-luxury-gold/50"
        >
          <span className="material-symbols-outlined text-[24px]">close</span>
        </button>

        <div className="px-8 py-10 md:px-10 md:py-12">
          {!isSuccess ? (
            <>
              <div className="mb-8 text-center">
                <h2 className="text-[28px] font-serif font-semibold text-luxury-brown leading-tight mb-2">General Inquiry</h2>
                <p className="text-luxury-gray text-base font-normal">How can we assist you today?</p>
              </div>
              <form className="space-y-5" onSubmit={handleSubmit}>
                <div className="relative group">
                  <label className="sr-only" htmlFor="category">Category of Service</label>
                  <div className="flex items-center bg-luxury-input border-b border-luxury-border rounded-sm group-focus-within:border-luxury-gold transition-all duration-300">
                    <span className="pl-4 text-luxury-gray">
                      <span className="material-symbols-outlined text-[20px]">label</span>
                    </span>
                    <select className="w-full bg-transparent border-none focus:ring-0 text-luxury-brown font-medium py-3.5 pl-3 pr-10 text-sm placeholder:text-luxury-gray/60 appearance-none cursor-pointer" id="category" name="category" required defaultValue="">
                      <option disabled value="">Select Category (Concierge, Villas...)</option>
                      <option value="concierge">Concierge Services</option>
                      <option value="villas">Luxury Villas</option>
                      <option value="yachts">Yacht Charters</option>
                      <option value="dining">Fine Dining</option>
                      <option value="events">Private Events</option>
                      <option value="other">Other Services</option>
                    </select>
                    <span className="absolute right-4 pointer-events-none text-luxury-gray">
                      <span className="material-symbols-outlined text-[20px]">expand_more</span>
                    </span>
                  </div>
                </div>

                <div className="relative group">
                  <label className="sr-only" htmlFor="fullname">Full Name</label>
                  <div className="flex items-center bg-luxury-input border-b border-luxury-border rounded-sm group-focus-within:border-luxury-gold transition-all duration-300">
                    <span className="pl-4 text-luxury-gray">
                      <span className="material-symbols-outlined text-[20px]">person</span>
                    </span>
                    <input className="w-full bg-transparent border-none focus:ring-0 text-luxury-brown text-sm py-3.5 pl-3 placeholder:text-luxury-gray/60" id="fullname" name="fullname" placeholder="Full Name" required type="text"/>
                  </div>
                </div>

                <div className="relative group">
                  <label className="sr-only" htmlFor="email">Email Address</label>
                  <div className="flex items-center bg-luxury-input border-b border-luxury-border rounded-sm group-focus-within:border-luxury-gold transition-all duration-300">
                    <span className="pl-4 text-luxury-gray">
                      <span className="material-symbols-outlined text-[20px]">mail</span>
                    </span>
                    <input className="w-full bg-transparent border-none focus:ring-0 text-luxury-brown text-sm py-3.5 pl-3 placeholder:text-luxury-gray/60" id="email" name="email" placeholder="Email Address" required type="email"/>
                  </div>
                </div>

                <div className="relative group">
                  <label className="sr-only" htmlFor="phone">Phone Number</label>
                  <div className="flex items-center bg-luxury-input border-b border-luxury-border rounded-sm group-focus-within:border-luxury-gold transition-all duration-300">
                    <span className="pl-4 text-luxury-gray">
                      <span className="material-symbols-outlined text-[20px]">call</span>
                    </span>
                    <input className="w-full bg-transparent border-none focus:ring-0 text-luxury-brown text-sm py-3.5 pl-3 placeholder:text-luxury-gray/60" id="phone" name="phone" placeholder="Phone Number (Optional)" type="tel"/>
                  </div>
                </div>

                <div className="relative group">
                  <label className="sr-only" htmlFor="message">Your Message</label>
                  <div className="flex items-start bg-luxury-input border-b border-luxury-border rounded-sm group-focus-within:border-luxury-gold transition-all duration-300">
                    <span className="pl-4 pt-3.5 text-luxury-gray">
                      <span className="material-symbols-outlined text-[20px]">chat_bubble_outline</span>
                    </span>
                    <textarea className="w-full bg-transparent border-none focus:ring-0 text-luxury-brown text-sm py-3.5 pl-3 placeholder:text-luxury-gray/60 resize-none" id="message" name="message" placeholder="How can we help you or what are you looking for?" required rows={5}></textarea>
                  </div>
                </div>

                <div className="pt-2 flex flex-col items-center gap-3">
                  <button className="w-full bg-luxury-brown text-white font-medium text-xs tracking-[0.15em] uppercase py-4 rounded-sm hover:bg-[#3e2b05] transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-luxury-brown" type="submit">
                    Send Inquiry
                  </button>
                  <button onClick={onClose} className="text-luxury-gray text-sm hover:text-luxury-brown transition-colors underline-offset-4 hover:underline" type="button">
                    Cancel
                  </button>
                </div>
              </form>
            </>
          ) : (
            <div className="flex flex-col items-center justify-center text-center py-12 space-y-6 animate-fade-in">
              <div className="w-16 h-16 rounded-full bg-luxury-input flex items-center justify-center mb-2">
                <span className="material-symbols-outlined text-4xl text-luxury-gold">check_circle</span>
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl font-serif text-luxury-brown">Inquiry Sent!</h3>
                <p className="text-luxury-gray">Our concierge team will contact you shortly.</p>
              </div>
              <button 
                onClick={onClose}
                className="mt-4 px-8 py-3 bg-transparent border border-luxury-border text-luxury-brown hover:border-luxury-gold transition-colors rounded-sm uppercase tracking-widest text-xs font-medium" 
                type="button"
              >
                Close
              </button>
            </div>
          )}
        </div>
        <div className="h-1 w-full bg-gradient-to-r from-transparent via-luxury-gold/30 to-transparent"></div>
      </div>
    </div>
  );
};

const App: React.FC = () => {
  const [view, setView] = useState<View>('view');
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [services, setServices] = useState<Service[]>(MOCK_SERVICES);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategoryFilter, setActiveCategoryFilter] = useState<Category | 'All'>('All');
  const [isInquiryModalOpen, setIsInquiryModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [view]);

  const filteredServices = useMemo(() => {
    return services.filter(s => {
      const matchesSearch = s.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                           s.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           s.location.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = activeCategoryFilter === 'All' || s.category === activeCategoryFilter;
      return matchesSearch && matchesCategory && s.status === 'Approved';
    });
  }, [services, searchQuery, activeCategoryFilter]);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setView('catalog');
  };

  const handleAddService = (newService: Partial<Service>) => {
    const fullService: Service = {
      id: Math.random().toString(36).substr(2, 9),
      title: newService.title || 'Untitled Service',
      category: (newService.category as Category) || 'Marine',
      location: newService.location || 'Marbella',
      price: newService.price || 0,
      unit: newService.unit || 'unit',
      image: newService.image || 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=1000',
      rating: 5.0,
      provider: 'Current Partner',
      status: 'Pending',
      description: newService.description || '',
    };
    setServices([fullService, ...services]);
    alert('Offering submitted for approval. You can see it in your dashboard as "Pending".');
    setView('provider');
  };

  const PublicHeader = () => (
    <header className={`fixed top-0 left-0 z-50 w-full transition-all duration-300 h-24 flex items-center ${
      (scrolled || view !== 'home') ? 'bg-page/95 backdrop-blur-md border-b border-brand-border shadow-sm' : 'bg-transparent'
    }`}>
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 lg:px-8">
        <div className="flex items-center gap-4 cursor-pointer" onClick={() => setView('home')}>
          <div className={`flex size-10 items-center justify-center ${scrolled || view !== 'home' ? 'text-deep-brown' : 'text-white'}`}>
            <svg className="h-full w-full drop-shadow-md" fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
              <path d="M42.1739 20.1739L27.8261 5.82609C29.1366 7.13663 28.3989 10.1876 26.2002 13.7654C24.8538 15.9564 22.9595 18.3449 20.6522 20.6522C18.3449 22.9595 15.9564 24.8538 13.7654 26.2002C10.1876 28.3989 7.13663 29.1366 5.82609 27.8261L20.1739 42.1739C21.4845 43.4845 24.5355 42.7467 28.1133 40.548C30.3042 39.2016 32.6927 37.3073 35 35C37.3073 32.6927 39.2016 30.3042 40.548 28.1133C42.7467 24.5355 43.4845 21.4845 42.1739 20.1739Z" fill="currentColor"></path>
              <path clipRule="evenodd" d="M7.24189 26.4066C7.31369 26.4411 7.64204 26.5637 8.52504 26.3738C9.59462 26.1438 11.0343 25.5311 12.7183 24.4963C14.7583 23.2426 17.0256 21.4503 19.238 19.238C21.4503 17.0256 23.2426 14.7583 24.4963 12.7183C25.5311 11.0343 26.1438 9.59463 26.3738 8.52504C26.5637 7.64204 26.4411 7.31369 26.4066 7.24189C26.345 7.21246 26.143 7.14535 25.6664 7.1918C24.9745 7.25925 23.9954 7.5498 22.7699 8.14278C20.3369 9.32007 17.3369 11.4915 14.4142 14.4142C11.4915 17.3369 9.32007 20.3369 8.14278 22.7699C7.5498 23.9954 7.25925 24.9745 7.1918 25.6664C7.14534 26.143 7.21246 26.345 7.24189 26.4066ZM29.9001 10.7285C29.4519 12.0322 28.7617 13.4172 27.9042 14.8126C26.465 17.1544 24.4686 19.6641 22.0664 22.0664C19.6641 24.4686 17.1544 26.465 14.8126 27.9042C13.4172 28.7617 12.0322 29.4519 10.7285 29.9001L21.5754 40.747C21.6001 40.7606 21.8995 40.931 22.8729 40.7217C23.9424 40.4916 25.3821 39.879 27.0661 38.8441C29.1062 37.5904 31.3734 35.7982 33.5858 33.5858C35.7982 31.3734 37.5904 29.1062 38.8441 27.0661C39.879 25.3821 40.4916 23.9425 40.7216 22.8729C40.931 21.8995 40.7606 21.6001 40.747 21.5754L29.9001 10.7285ZM29.2403 4.41187L43.5881 18.7597C44.9757 20.1473 44.9743 22.1235 44.6322 23.7139C44.2714 25.3919 43.4158 27.2666 42.252 29.1604C40.8128 31.5022 38.8165 34.012 36.4142 36.4142C34.012 38.8165 31.5022 40.8128 29.1604 42.252C27.2666 43.4158 25.3919 44.2714 23.7139 44.6322C22.1235 44.9743 20.1473 44.9757 18.7597 43.5881L4.41187 29.2403C3.29027 28.1187 3.08209 26.5973 3.21067 25.2783C3.34099 23.9415 3.8369 22.4852 4.54214 21.0277C5.96129 18.0948 8.43335 14.7382 11.5858 11.5858C14.7382 8.43335 18.0948 5.9613 21.0277 4.54214C22.4852 3.8369 23.9415 3.34099 25.2783 3.21067C26.5973 3.08209 28.1187 3.29028 29.2403 4.41187Z" fill="currentColor" fillRule="evenodd"></path>
            </svg>
          </div>
          <h2 className={`font-display text-lg font-bold tracking-widest drop-shadow-md ${scrolled || view !== 'home' ? 'text-deep-brown' : 'text-white'}`}>MARHABA</h2>
        </div>

        <nav className="hidden gap-8 md:flex">
          {['Concierge', 'Villas', 'Yachts', 'Dining', 'Events'].map((item) => (
            <button 
              key={item} 
              onClick={() => {
                if (item === 'Dining') setActiveCategoryFilter('Gastronomy');
                else if (item === 'Villas') setActiveCategoryFilter('Estates');
                else if (item === 'Yachts') setActiveCategoryFilter('Marine');
                else if (item === 'Events') setActiveCategoryFilter('Events');
                else setActiveCategoryFilter('All');
                setView('catalog');
              }}
              className={`text-sm font-medium transition-colors duration-200 drop-shadow-sm tracking-wide ${
                scrolled || view !== 'home' ? 'text-brand-secondary hover:text-deep-brown' : 'text-white/90 hover:text-white'
              }`}
            >
              {item}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-6">
          <div className="hidden md:flex items-center gap-4">
            <button className={`${scrolled || view !== 'home' ? 'text-brand-primary' : 'text-white'} hover:opacity-80 transition-colors`}>
              <Search className="w-5 h-5" />
            </button>
            <div className={`h-4 border-l ${scrolled || view !== 'home' ? 'border-brand-border' : 'border-[#E7E5E4]'} opacity-50`}></div>
            <button 
              onClick={() => setView('login')}
              className={`text-sm font-medium transition-colors drop-shadow-md ${
                scrolled || view !== 'home' ? 'text-brand-primary hover:text-primary-gold' : 'text-white hover:text-primary-gold'
              }`}
            >
              Log In
            </button>
          </div>
          <button 
            onClick={() => setIsInquiryModalOpen(true)}
            className={`hidden md:flex h-10 items-center justify-center rounded-sm px-6 text-sm font-bold transition-all active:scale-95 shadow-lg ${
              scrolled || view !== 'home' ? 'bg-brand-primary text-white hover:bg-primary-gold' : 'bg-white text-deep-brown hover:bg-primary-gold hover:text-white'
            }`}
          >
            <span>Inquire</span>
          </button>
          <button className={`md:hidden ${scrolled || view !== 'home' ? 'text-brand-primary' : 'text-white'}`}>
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>
    </header>
  );

  const Hero = () => (
    <section className="relative h-screen w-full overflow-hidden">
      <div className="absolute inset-0 z-0 scale-105 animate-[slow-zoom_20s_infinite_alternate]">
        <img 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCtILZOPLCHEuwmQo5Xj3zd9XtU1ucWg3Dajt0x_bl0L1LbTgyYQPeKTyvoGgTKsbcd0rzA1U2IO1YXQ5up8dmHjJIv9SzhKAzemL7fCPujoY5AXNKx0iaVMbxp8NEXsuygv6OeJvXAsywXY1HvBlkunoFf0rAJ5JDNx5IU3vBiV84JIkH3yHzCM1MdFyJ3oeLjm7vdz51C6NGiHgbQi03VksJxIf58y-QcLyfJL06mwD4rfPzQuTQPf7EXF9eP11JHRIgoK0aSQF8" 
          alt="Cinematic luxury villa with pool at sunset in Marbella"
          className="w-full h-full object-cover" 
        />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center">
        <div className="w-full max-w-5xl animate-fade-in flex flex-col items-center">
          <h1 className="mb-6 font-serif text-6xl font-medium leading-tight tracking-tight text-white drop-shadow-lg md:text-7xl lg:text-8xl">
            Unlock Marbella's Finest: <br/><span className="italic font-light">Exclusive Access Awaits</span>
          </h1>
          <h2 className="mb-14 font-sans text-lg font-light text-white/90 md:text-xl lg:text-2xl tracking-wide max-w-2xl">
            Curated luxury services for discerning clientele. Start your journey now.
          </h2>
          <form onSubmit={handleSearchSubmit} className="w-full max-w-3xl bg-white rounded-sm shadow-2xl flex flex-col sm:flex-row gap-2 p-2">
            <div className="flex-1 flex items-center px-4">
              <span className="material-symbols-outlined text-deep-brown/60 text-2xl">search</span>
              <input 
                className="w-full border-none bg-transparent px-4 py-3 text-deep-brown placeholder-deep-brown/50 focus:ring-0 font-sans text-lg outline-none" 
                placeholder="What are you looking for?" 
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <button type="submit" className="h-14 sm:w-auto w-full rounded-sm bg-primary-gold px-10 text-sm font-bold tracking-widest text-white transition-all hover:bg-[#967645] hover:shadow-lg active:scale-95 uppercase">
              DISCOVER
            </button>
          </form>
        </div>
      </div>
    </section>
  );

  const HomeView = () => (
    <div className="bg-page">
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
              <div 
                key={idx} 
                className="group relative cursor-pointer overflow-hidden rounded-sm shadow-sm transition-all duration-500 hover:shadow-2xl hover:shadow-deep-brown/10"
                onClick={() => {
                  setActiveCategoryFilter(item.category as any);
                  setView('catalog');
                }}
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
              </div>
            ))}
          </div>
          
          <div className="mt-16 flex justify-center">
            <button 
              onClick={() => setView('catalog')}
              className="rounded-sm border-2 border-deep-brown bg-transparent px-8 py-4 text-sm font-bold uppercase tracking-widest text-deep-brown transition-all hover:bg-deep-brown hover:text-white hover:shadow-lg active:scale-95"
            >
              Explore All Exclusive Services
            </button>
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
            <button 
              onClick={() => setView('catalog')}
              className="rounded-sm bg-deep-brown px-8 py-4 text-sm font-bold uppercase tracking-widest text-white transition-all hover:bg-deep-brown/90 hover:shadow-lg active:scale-95"
            >
              Begin Your Luxury Journey
            </button>
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
                <div 
                  className="group relative aspect-[16/9] w-full cursor-pointer overflow-hidden rounded-sm shadow-md transition-all hover:shadow-lg"
                  onClick={() => setView('catalog')}
                >
                  <div className="h-full w-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105" style={{ backgroundImage: `url(${item.img})` }}></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-deep-brown/90 to-transparent opacity-60 group-hover:opacity-75 transition-opacity"></div>
                  <div className="absolute bottom-0 p-6 text-left">
                    <span className="mb-1 block text-xs font-bold uppercase tracking-widest text-primary-gold">{item.type}</span>
                    <h3 className="font-serif text-xl text-white">{item.title}</h3>
                    <p className="mt-1 text-sm text-white/80 line-clamp-2">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-4 flex justify-center gap-2">
            <div className="h-1.5 w-8 rounded-full bg-deep-brown"></div>
            <div className="h-1.5 w-1.5 rounded-full bg-deep-brown/30"></div>
            <div className="h-1.5 w-1.5 rounded-full bg-deep-brown/30"></div>
          </div>
          
          <div className="mt-12 flex justify-center">
            <button 
              onClick={() => setView('catalog')}
              className="rounded-sm border border-deep-brown bg-transparent px-8 py-3 text-sm font-bold uppercase tracking-widest text-deep-brown transition-all hover:bg-deep-brown hover:text-white hover:shadow-md active:scale-95"
            >
              View All Weekly Features
            </button>
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
    </div>
  );

  const CatalogView = () => (
    <div className="bg-page min-h-screen pt-32 pb-20">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] mb-3 text-primary-gold block">The Elite Collection</span>
            <h2 className="font-serif text-4xl text-deep-brown">Available Offerings</h2>
          </div>
          <div className="relative w-full md:w-80">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-brand-secondary/40 text-[20px]">search</span>
            <input 
              type="text" 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Filter results..."
              className="w-full pl-10 pr-4 py-2 bg-white border border-brand-border outline-none text-sm focus:border-primary-gold transition-colors rounded-sm"
            />
          </div>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-12">
          <aside className="w-full lg:w-64 shrink-0 space-y-8 h-fit lg:sticky lg:top-32">
            <div>
              <h3 className="text-[10px] font-bold uppercase tracking-widest text-deep-brown mb-4 border-b border-brand-border pb-2">Categories</h3>
              <div className="flex flex-col gap-2">
                {categories.map(c => (
                  <button 
                    key={c} 
                    onClick={() => setActiveCategoryFilter(c)}
                    className={`text-left py-1 text-xs uppercase tracking-widest transition-colors ${
                      activeCategoryFilter === c ? 'text-primary-gold font-bold' : 'text-text-muted hover:text-primary-gold'
                    }`}
                  >
                    {c}
                  </button>
                ))}
              </div>
            </div>
          </aside>

          <div className="flex-1">
            {filteredServices.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredServices.map(service => (
                  <div key={service.id} className="group bg-white rounded-sm shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden flex flex-col border border-brand-border animate-fade-in">
                    <div className="relative h-64 overflow-hidden">
                      <img src={service.image} alt={service.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                      <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1">
                        <span className="text-[10px] uppercase font-bold tracking-wider text-primary-gold">{service.category}</span>
                      </div>
                    </div>
                    <div className="p-6 flex flex-col flex-1">
                      <h3 className="font-serif text-xl text-deep-brown mb-2">{service.title}</h3>
                      <div className="flex items-center gap-2 text-[10px] text-text-muted uppercase tracking-wider mb-6">
                        <span className="material-symbols-outlined text-primary-gold text-[14px] icon-filled">location_on</span> {service.location}
                      </div>
                      <div className="mt-auto pt-6 border-t border-brand-border/20 flex justify-between items-center">
                        <div>
                          <span className="text-[10px] text-text-muted uppercase block">Starting from</span>
                          <span className="font-serif text-lg text-primary-gold">€{service.price.toLocaleString()}</span>
                        </div>
                        <button className="text-[11px] uppercase tracking-widest font-medium text-deep-brown flex items-center gap-2 group/btn" onClick={() => { setSelectedService(service); setView('detail'); }}>
                          Explore <ArrowRight className="w-3 h-3 group-hover/btn:translate-x-1 transition-transform" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-32 bg-white border border-dashed border-brand-border">
                 <span className="material-symbols-outlined text-[48px] text-brand-border mx-auto mb-4 icon-thin">search</span>
                 <p className="text-brand-secondary text-sm">No exclusive services found matching your criteria.</p>
                 <button onClick={() => { setSearchQuery(''); setActiveCategoryFilter('All'); }} className="mt-4 text-primary-gold font-bold text-[10px] uppercase tracking-widest hover:underline">Clear all filters</button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );

  const ServiceDetail = () => {
    const [isBooking, setIsBooking] = useState(false);
    const [isBooked, setIsBooked] = useState(false);

    const handleSecureBooking = () => {
      setIsBooking(true);
      setTimeout(() => {
        setIsBooking(false);
        setIsBooked(true);
      }, 2000);
    };

    if (!selectedService) return null;
    const isGastronomy = selectedService.category === 'Gastronomy';
    const isEvents = selectedService.category === 'Events';

    return (
      <main className="max-w-[1400px] mx-auto px-6 lg:px-12 py-10 lg:py-16 animate-fade-in mt-20">
        <div className="mb-12">
          <button 
            onClick={() => setView('catalog')}
            className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.15em] text-brand-secondary hover:text-brand-primary transition-colors group"
          >
            <span className="material-symbols-outlined icon-thin text-[16px] group-hover:-translate-x-1 transition-transform">arrow_back</span>
            Back to {isGastronomy ? 'Restaurants' : isEvents ? 'Events' : 'Collection'}
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 relative">
          <div className="lg:col-span-8 flex flex-col gap-16">
            <div className="space-y-8">
              <h1 className="font-serif text-4xl md:text-5xl lg:text-[3.5rem] text-brand-primary leading-[1.15]">
                {selectedService.title} <br/>
                <span className="text-brand-secondary/60 italic font-light">{isEvents ? 'Noche de Estrellas en Marbella' : selectedService.location}</span>
              </h1>
              <div className="flex flex-wrap items-center gap-8 pt-4 border-t border-brand-border/40 w-fit pr-12">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined icon-filled text-primary-gold text-[18px]">
                    {isGastronomy ? 'verified' : isEvents ? 'event' : 'star'}
                  </span>
                  <span className="text-brand-primary font-medium font-serif text-lg">
                    {isGastronomy ? 'Michelin Star' : isEvents ? 'August 15, 2024' : selectedService.rating}
                  </span>
                  <span className="text-xs text-brand-secondary border-b border-brand-border pb-0.5">
                    {isGastronomy ? 'Signature Experience' : isEvents ? '20:00 - Late' : '84 reviews'}
                  </span>
                </div>
                <div className="w-px h-6 bg-brand-border"></div>
                <div className="flex items-center gap-2.5">
                  <span className="material-symbols-outlined icon-filled text-primary-gold text-[18px]">location_on</span>
                  <span className="text-xs font-sans tracking-wide text-brand-secondary uppercase">{selectedService.location}</span>
                </div>
                <div className="w-px h-6 bg-brand-border"></div>
                <div className="flex items-center gap-2.5">
                  <span className="material-symbols-outlined icon-thin text-brand-secondary text-[20px]">
                    {selectedService.category === 'Marine' ? 'directions_boat' : 
                     selectedService.category === 'Estates' ? 'home' : 
                     selectedService.category === 'Gastronomy' ? 'restaurant' : 
                     selectedService.category === 'Events' ? 'confirmation_number' : 'event'}
                  </span>
                  <span className="text-xs font-sans tracking-wide text-brand-secondary uppercase">
                    {isGastronomy ? 'Ref: JS-2024' : isEvents ? 'Ref: EVT-STRLGHT' : selectedService.category}
                  </span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 grid-rows-2 md:grid-rows-2 gap-3 h-[550px] rounded-sm overflow-hidden shadow-sm">
              <div className="md:col-span-2 md:row-span-2 relative group overflow-hidden cursor-pointer">
                <img alt="Primary" className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105" src={selectedService.image}/>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500"></div>
                <div className="absolute bottom-4 left-4 bg-brand-surface/90 backdrop-blur-sm px-3 py-1 text-[10px] uppercase tracking-widest text-brand-primary rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {isGastronomy ? 'Terraza Principal' : isEvents ? 'Escenario Principal' : 'Exterior View'}
                </div>
              </div>
              <div className="relative group overflow-hidden cursor-pointer hidden md:block">
                <img alt="Secondary" className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105" src={selectedService.image}/>
                <div className="absolute bottom-4 left-4 bg-brand-surface/90 backdrop-blur-sm px-3 py-1 text-[10px] uppercase tracking-widest text-brand-primary rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {isGastronomy ? 'Salón Privado' : isEvents ? 'Experiencia Gastronómica' : 'Interior View'}
                </div>
              </div>
              <div className="relative group overflow-hidden cursor-pointer hidden md:block">
                <img alt="Tertiary" className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105" src={selectedService.image}/>
                <div className="absolute inset-0 bg-brand-primary/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="bg-white/90 backdrop-blur text-brand-primary text-[10px] uppercase tracking-widest px-5 py-2.5 rounded-sm font-medium shadow-sm">
                    {isGastronomy ? 'View Menu & Gallery' : 'View Gallery'}
                  </button>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between py-10 border-y border-brand-border">
              <div className="flex items-center gap-6">
                <div className="h-16 w-16 rounded-full overflow-hidden border border-brand-border ring-4 ring-page relative">
                  <img alt="Host" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB5pl4cbt7VtD6w3fLvtG_NIc1--Zv8mJNI8WBS3lLCJ4MetARSqJL-xDNy3CIn3NLrPlrY9otCmvfAPHlIoEbfmwxxCivpZWItW0GC5gGEKOYR-F3KgazSHdDC9mXLQ93obqSZjXbgURV4eOOGqL_J_Z0Cv_QkqumxFcRaX4hVc-m8fxmIBLsJre7RFdBaq-u6GFJfQ6B4hTjWlgKODCs5O7iGzGaB0bB_ENwf34Ndx9hcSjaMg9ktHvXf6a3IEI7aQf2DGrZXHlQ"/>
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-brand-secondary mb-1">{isGastronomy ? 'Managed by' : isEvents ? 'Organized by' : 'Curated by'}</p>
                  <p className="font-serif text-2xl text-brand-primary">{selectedService.provider}</p>
                </div>
              </div>
              <div className="hidden sm:flex items-center gap-2 px-5 py-2 bg-brand-accent/5 border border-brand-accent/20 rounded-sm">
                <span className="material-symbols-outlined icon-filled text-primary-gold text-[16px]">verified</span>
                <span className="text-[10px] uppercase tracking-widest font-semibold text-brand-primary">{isEvents ? 'Certified Organizer' : 'Premier Partner'}</span>
              </div>
            </div>

            <div>
              <h3 className="font-serif text-3xl text-brand-primary mb-6">{isGastronomy ? 'About the Experience' : isEvents ? 'About the Event' : 'About this experience'}</h3>
              <div className="text-brand-secondary/90 text-lg leading-relaxed font-light space-y-6 max-w-3xl">
                <p className="text-xl italic font-serif text-brand-primary/80 mb-6">
                  {isGastronomy ? '"Discover a culinary sanctuary in the heart of Marbella."' : 
                   isEvents ? '"Participe en la exclusiva Gala Benéfica Starlight, una noche mágica dedicada a la solidaridad y el glamour."' :
                   '"Our dedication to excellence ensures that every moment of your journey is curated to perfection."'}
                </p>
                <p>{selectedService.description}</p>
              </div>
            </div>

            <div className="pt-10 border-t border-brand-border">
              <h3 className="font-serif text-3xl text-brand-primary mb-12">{isGastronomy ? 'Features & Amenities' : isEvents ? 'Highlights & Amenities' : 'Amenities'}</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-y-12 gap-x-8">
                {isGastronomy ? (
                  <>
                    <div className="flex flex-col gap-3 group">
                      <span className="material-symbols-outlined icon-thin text-[32px] text-brand-primary group-hover:text-primary-gold transition-colors">soup_kitchen</span>
                      <div className="border-t border-brand-border/50 pt-3">
                        <h4 className="text-sm font-medium text-brand-primary">Cocina Mediterránea</h4>
                        <p className="text-[11px] uppercase tracking-wider text-brand-secondary/70 mt-1">Fusión</p>
                      </div>
                    </div>
                    <div className="flex flex-col gap-3 group">
                      <span className="material-symbols-outlined icon-thin text-[32px] text-brand-primary group-hover:text-primary-gold transition-colors">workspace_premium</span>
                      <div className="border-t border-brand-border/50 pt-3">
                        <h4 className="text-sm font-medium text-brand-primary">Estrella Michelin</h4>
                        <p className="text-[11px] uppercase tracking-wider text-brand-secondary/70 mt-1">2024 Award</p>
                      </div>
                    </div>
                    <div className="flex flex-col gap-3 group">
                      <span className="material-symbols-outlined icon-thin text-[32px] text-brand-primary group-hover:text-primary-gold transition-colors">favorite</span>
                      <div className="border-t border-brand-border/50 pt-3">
                        <h4 className="text-sm font-medium text-brand-primary">Cena Romántica</h4>
                        <p className="text-[11px] uppercase tracking-wider text-brand-secondary/70 mt-1">Intimate Setting</p>
                      </div>
                    </div>
                    <div className="flex flex-col gap-3 group">
                      <span className="material-symbols-outlined icon-thin text-[32px] text-brand-primary group-hover:text-primary-gold transition-colors">deck</span>
                      <div className="border-t border-brand-border/50 pt-3">
                        <h4 className="text-sm font-medium text-brand-primary">Terraza Exterior</h4>
                        <p className="text-[11px] uppercase tracking-wider text-brand-secondary/70 mt-1">Garden View</p>
                      </div>
                    </div>
                  </>
                ) : isEvents ? (
                  <>
                    <div className="flex flex-col gap-3 group">
                      <span className="material-symbols-outlined icon-thin text-[32px] text-brand-primary group-hover:text-primary-gold transition-colors">restaurant_menu</span>
                      <div className="border-t border-brand-border/50 pt-3">
                        <h4 className="text-sm font-medium text-brand-primary">Cena de Gala</h4>
                        <p className="text-[11px] uppercase tracking-wider text-brand-secondary/70 mt-1">Gourmet Menu</p>
                      </div>
                    </div>
                    <div className="flex flex-col gap-3 group">
                      <span className="material-symbols-outlined icon-thin text-[32px] text-brand-primary group-hover:text-primary-gold transition-colors">piano</span>
                      <div className="border-t border-brand-border/50 pt-3">
                        <h4 className="text-sm font-medium text-brand-primary">Actuación en Vivo</h4>
                        <p className="text-[11px] uppercase tracking-wider text-brand-secondary/70 mt-1">Live Music</p>
                      </div>
                    </div>
                    <div className="flex flex-col gap-3 group">
                      <span className="material-symbols-outlined icon-thin text-[32px] text-brand-primary group-hover:text-primary-gold transition-colors">campaign</span>
                      <div className="border-t border-brand-border/50 pt-3">
                        <h4 className="text-sm font-medium text-brand-primary">Subasta Exclusiva</h4>
                        <p className="text-[11px] uppercase tracking-wider text-brand-secondary/70 mt-1">Silent Auction</p>
                      </div>
                    </div>
                    <div className="flex flex-col gap-3 group">
                      <span className="material-symbols-outlined icon-thin text-[32px] text-brand-primary group-hover:text-primary-gold transition-colors">checkroom</span>
                      <div className="border-t border-brand-border/50 pt-3">
                        <h4 className="text-sm font-medium text-brand-primary">Dress Code</h4>
                        <p className="text-[11px] uppercase tracking-wider text-brand-secondary/70 mt-1">Black Tie</p>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="flex flex-col gap-3 group">
                      <span className="material-symbols-outlined icon-thin text-[32px] text-brand-primary group-hover:text-primary-gold transition-colors">verified_user</span>
                      <div className="border-t border-brand-border/50 pt-3">
                        <h4 className="text-sm font-medium text-brand-primary">Dedicated Concierge</h4>
                        <p className="text-[11px] uppercase tracking-wider text-brand-secondary/70 mt-1">24/7 Professional Support</p>
                      </div>
                    </div>
                    <div className="flex flex-col gap-3 group">
                      <span className="material-symbols-outlined icon-thin text-[32px] text-brand-primary group-hover:text-primary-gold transition-colors">wine_bar</span>
                      <div className="border-t border-brand-border/50 pt-3">
                        <h4 className="text-sm font-medium text-brand-primary">Luxury Welcome</h4>
                        <p className="text-[11px] uppercase tracking-wider text-brand-secondary/70 mt-1">Champagne Service</p>
                      </div>
                    </div>
                    <div className="flex flex-col gap-3 group">
                      <span className="material-symbols-outlined icon-thin text-[32px] text-brand-primary group-hover:text-primary-gold transition-colors">security</span>
                      <div className="border-t border-brand-border/50 pt-3">
                        <h4 className="text-sm font-medium text-brand-primary">Elite Security</h4>
                        <p className="text-[11px] uppercase tracking-wider text-brand-secondary/70 mt-1">Privacy Guaranteed</p>
                      </div>
                    </div>
                    <div className="flex flex-col gap-3 group">
                      <span className="material-symbols-outlined icon-thin text-[32px] text-brand-primary group-hover:text-primary-gold transition-colors">wifi</span>
                      <div className="border-t border-brand-border/50 pt-3">
                        <h4 className="text-sm font-medium text-brand-primary">Starlink Wi-Fi</h4>
                        <p className="text-[11px] uppercase tracking-wider text-brand-secondary/70 mt-1">High-speed Connectivity</p>
                      </div>
                    </div>
                  </>
                )}
              </div>
              <button className="mt-14 border border-brand-primary/20 text-brand-primary px-8 py-3.5 rounded-sm text-[11px] uppercase tracking-[0.15em] font-medium hover:bg-brand-primary hover:text-white transition-all">
                {isGastronomy ? 'Descargar Carta de Vinos' : isEvents ? 'Descargar Programa del Evento' : 'View all amenities'}
              </button>
            </div>

            <div className="pt-10 border-t border-brand-border mb-8">
              <h3 className="font-serif text-3xl text-brand-primary mb-8">{isEvents ? 'Venue Location' : 'Location'}</h3>
              <div className="w-full h-[400px] bg-brand-border/30 rounded-sm relative overflow-hidden group border border-brand-border">
                <div className="w-full h-full bg-[#EAE8E4] opacity-80" style={{backgroundImage: "url('https://images.unsplash.com/photo-1548678967-f1fc5d33934f?q=80&w=2568&auto=format&fit=crop')", backgroundSize: 'cover', backgroundPosition: 'center'}}></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center z-10">
                  <div className="relative group-hover:-translate-y-2 transition-transform duration-500">
                    <div className="bg-brand-primary text-white p-3 rounded-full shadow-2xl relative z-20">
                      <span className="material-symbols-outlined icon-filled text-primary-gold">{isGastronomy ? 'restaurant' : isEvents ? 'location_on' : 'location_on'}</span>
                    </div>
                    <div className="absolute top-0 left-0 w-full h-full bg-brand-primary rounded-full animate-ping opacity-20 z-10"></div>
                  </div>
                </div>
                <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm px-8 py-6 rounded-sm shadow-lg border border-brand-border/50 min-w-[280px]">
                  <h4 className="font-serif text-xl text-brand-primary">{isGastronomy ? 'Casco Antiguo' : isEvents ? 'Finca Besaya' : selectedService.location}</h4>
                  <p className="text-[11px] uppercase tracking-widest text-brand-secondary mt-1.5">{isGastronomy || isEvents ? 'Marbella, Málaga, Spain' : 'Marbella, Costa del Sol, Spain'}</p>
                  <a className="inline-block mt-4 text-[10px] uppercase tracking-widest text-primary-gold font-bold border-b border-primary-gold/30 hover:border-primary-gold pb-0.5 transition-colors" href="#">View on Map</a>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 relative">
            <div className="sticky top-28 space-y-6">
              <div className="bg-brand-surface border border-brand-border/80 p-8 rounded-sm shadow-[0_4px_40px_-10px_rgba(47,32,3,0.06)]">
                {isBooked ? (
                  <div className="text-center py-12 animate-fade-in">
                    <CheckCircle className="w-16 h-16 text-primary-gold mx-auto mb-6" />
                    <h3 className="font-serif text-2xl text-brand-primary mb-3">Reservation Initiated</h3>
                    <p className="text-xs text-brand-secondary leading-relaxed mb-8">Our concierge team will contact you within 30 minutes to finalize your bespoke experience.</p>
                    <button onClick={() => setIsBooked(false)} className="text-[10px] uppercase font-bold tracking-widest text-primary-gold hover:underline">New Inquiry</button>
                  </div>
                ) : (
                  <>
                    <div className="flex items-baseline justify-between mb-8 pb-6 border-b border-brand-border/50">
                      <div>
                        <span className="text-4xl font-serif text-primary-gold">€{selectedService.price.toLocaleString()}</span>
                        <span className="text-brand-secondary text-sm font-light ml-1">
                          {isGastronomy ? 'Menú Degustación desde' : isEvents ? 'Entrada desde' : `/ ${selectedService.unit}`}
                        </span>
                      </div>
                      {!isGastronomy && !isEvents && (
                        <div className="flex items-center gap-1 bg-primary-gold/10 px-2 py-1 rounded-sm">
                          <span className="material-symbols-outlined icon-filled text-primary-gold text-[14px]">star</span>
                          <span className="text-xs font-semibold text-brand-primary">{selectedService.rating}</span>
                        </div>
                      )}
                    </div>
                    
                    {isGastronomy || isEvents ? (
                      <div className="border border-brand-border rounded-sm overflow-hidden mb-8 bg-page/30">
                        <div className="p-4 border-b border-brand-border">
                          <div className="flex items-center gap-3">
                            <div className="h-10 w-10 rounded-full overflow-hidden shrink-0">
                              <img alt="Concierge" className="h-full w-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB5pl4cbt7VtD6w3fLvtG_NIc1--Zv8mJNI8WBS3lLCJ4MetARSqJL-xDNy3CIn3NLrPlrY9otCmvfAPHlIoEbfmwxxCivpZWItW0GC5gGEKOYR-F3KgazSHdDC9mXLQ93obqSZjXbgURV4eOOGqL_J_Z0Cv_QkqumxFcRaX4hVc-m8fxmIBLsJre7RFdBaq-u6GFJfQ6B4hTjWlgKODCs5O7iGzGaB0bB_ENwf34Ndx9hcSjaMg9ktHvXf6a3IEI7aQf2DGrZXHlQ"/>
                            </div>
                            <div>
                              <p className="text-xs font-bold uppercase tracking-widest text-brand-primary">Elena Rodriguez</p>
                              <p className="text-[10px] text-brand-secondary">{isEvents ? 'VIP Events Manager' : 'Head of Reservations'}</p>
                            </div>
                          </div>
                        </div>
                        <div className="p-4 flex flex-col gap-3">
                          <div className="flex items-center gap-2 text-brand-secondary">
                            <span className="material-symbols-outlined icon-thin text-[16px]">call</span>
                            <span className="text-xs font-medium">{isEvents ? '+34 952 111 222' : '+34 952 000 000'}</span>
                          </div>
                          <div className="flex items-center gap-2 text-brand-secondary">
                            <span className="material-symbols-outlined icon-thin text-[16px]">mail</span>
                            <span className="text-xs font-medium">{isEvents ? 'events@marbellacreators.com' : 'reservas@eljardin.com'}</span>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <>
                        <div className="border border-brand-border rounded-sm overflow-hidden mb-4">
                          <div className="grid grid-cols-2 border-b border-brand-border">
                            <div className="p-3 border-r border-brand-border bg-page/30 hover:bg-page transition-colors cursor-pointer">
                              <label className="block text-[9px] uppercase tracking-widest font-bold text-brand-secondary mb-1">Check-in</label>
                              <div className="text-sm font-medium text-brand-primary">Oct 14</div>
                            </div>
                            <div className="p-3 bg-page/30 hover:bg-page transition-colors cursor-pointer">
                              <label className="block text-[9px] uppercase tracking-widest font-bold text-brand-secondary mb-1">Check-out</label>
                              <div className="text-sm font-medium text-brand-primary">Oct 14</div>
                            </div>
                          </div>
                          <div className="p-3 bg-page/30 hover:bg-page transition-colors cursor-pointer flex justify-between items-center">
                            <div>
                              <label className="block text-[9px] uppercase tracking-widest font-bold text-brand-secondary mb-1">Guests</label>
                              <div className="text-sm font-medium text-brand-primary">Elite Party</div>
                            </div>
                            <span className="material-symbols-outlined icon-thin text-brand-secondary text-[20px]">expand_more</span>
                          </div>
                        </div>
                        <div className="space-y-4 mb-8">
                          <div className="flex justify-between text-sm text-brand-secondary/80 font-light">
                            <span className="underline decoration-brand-border cursor-help underline-offset-4 decoration-1">€{selectedService.price.toLocaleString()} x 1</span>
                            <span>€{selectedService.price.toLocaleString()}</span>
                          </div>
                          <div className="flex justify-between text-sm text-brand-secondary/80 font-light">
                            <span className="underline decoration-brand-border cursor-help underline-offset-4 decoration-1">Concierge Fee</span>
                            <span>€150</span>
                          </div>
                          <div className="flex justify-between text-sm text-brand-secondary/80 font-light">
                            <span>Private Access</span>
                            <span className="text-primary-gold text-[10px] uppercase font-bold tracking-widest">Included</span>
                          </div>
                        </div>
                        <div className="flex justify-between items-end pt-6 border-t border-brand-border mb-8">
                          <span className="font-medium text-brand-primary text-sm">Total</span>
                          <span className="font-serif text-2xl text-brand-primary">€{(selectedService.price + 150).toLocaleString()}</span>
                        </div>
                      </>
                    )}

                    <button 
                      onClick={handleSecureBooking}
                      disabled={isBooking}
                      className="w-full bg-brand-primary text-white py-4 rounded-sm text-xs uppercase tracking-[0.2em] font-medium hover:bg-brand-secondary transition-all mb-3 shadow-md shadow-brand-primary/10 flex items-center justify-center gap-2"
                    >
                      {isBooking ? <Loader2 className="w-4 h-4 animate-spin" /> : isEvents ? 'Adquirir Entrada' : isGastronomy ? 'Reservar Mesa' : 'Request Booking'}
                    </button>
                    <button className="w-full bg-transparent border border-brand-border text-brand-primary py-3.5 rounded-sm text-xs uppercase tracking-[0.2em] font-medium hover:bg-page transition-colors">
                      {isEvents ? 'Contactar Organizador' : isGastronomy ? 'Contactar Restaurante' : 'Contact Partner'}
                    </button>
                    <div className="mt-6 flex justify-center gap-2 items-center text-[9px] uppercase tracking-widest text-brand-secondary/60">
                      <span className="material-symbols-outlined text-[12px]">{isGastronomy || isEvents ? 'verified_user' : 'lock'}</span>
                      {isGastronomy || isEvents ? (isEvents ? 'Secure Booking' : 'Confirmed Availability') : 'Encrypted Transaction'}
                    </div>
                  </>
                )}
              </div>
              <div className="bg-white border border-brand-border/60 p-6 rounded-sm shadow-sm flex items-start gap-5">
                <div className="bg-page p-2.5 rounded-full text-primary-gold shrink-0 border border-brand-border/50">
                  <span className="material-symbols-outlined text-[20px] icon-thin">{isGastronomy ? 'room_service' : isEvents ? 'diamond' : 'diamond'}</span>
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-widest text-brand-primary mb-2">{isGastronomy ? 'Concierge Service' : isEvents ? 'VIP Concierge' : 'Platinum Concierge'}</h4>
                  <p className="text-xs text-brand-secondary leading-relaxed mb-4 font-light">
                    {isEvents ? 'Custom seating arrangements and private transport services available upon request.' :
                     isGastronomy ? 'Dietary restrictions and special occasions like anniversaries handled with utmost care.' : 
                     'Custom itinerary? Catering? Our team is available 24/7 to tailor your experience.'}
                  </p>
                  <a className="text-[10px] font-bold uppercase tracking-widest text-brand-primary border-b border-brand-primary/30 hover:border-brand-primary pb-0.5 transition-colors" href="#">
                    {isGastronomy || isEvents ? 'Learn More' : 'Chat with Concierge'}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  };

  const CreateServiceView = () => {
    const [title, setTitle] = useState('');
    const [cat, setCat] = useState<Category>('Marine');
    const [desc, setDesc] = useState('');
    const [location, setLocation] = useState('Marbella');
    const [price, setPrice] = useState<number>(0);
    const [unit, setUnit] = useState('day');
    const [isGenerating, setIsGenerating] = useState(false);

    const handleAIGenerate = async () => {
      if (!title) return alert("Please enter a title first.");
      setIsGenerating(true);
      const res = ""
      setDesc(res);
      setIsGenerating(false);
    };

    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      handleAddService({
        title,
        category: cat,
        description: desc,
        location,
        price,
        unit
      });
    };

    return (
      <div className="bg-page min-h-screen pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="mb-8 flex items-center justify-between">
             <h1 className="font-serif text-3xl text-brand-primary">Register New Luxury Offering</h1>
             <Button variant="ghost" onClick={() => setView('provider')}>Discard & Exit</Button>
          </div>

          <form onSubmit={handleSubmit} className="bg-white border border-brand-border rounded-sm p-8 shadow-sm space-y-8 text-left">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[10px] uppercase font-bold tracking-widest text-brand-secondary">Service Title</label>
                <input 
                  required
                  type="text" 
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="e.g. Riva Rivale 52 Private Charter" 
                  className="w-full border border-brand-border p-3 rounded-sm focus:border-primary-gold outline-none" 
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase font-bold tracking-widest text-brand-secondary">Category</label>
                <select 
                  value={cat}
                  onChange={(e) => setCat(e.target.value as Category)}
                  className="w-full border border-brand-border p-3 rounded-sm focus:border-primary-gold outline-none bg-white"
                >
                  <option value="Marine">Marine</option>
                  <option value="Estates">Estates</option>
                  <option value="Gastronomy">Gastronomy</option>
                  <option value="Transport">Transport</option>
                  <option value="Events">Events</option>
                </select>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <label className="text-[10px] uppercase font-bold tracking-widest text-brand-secondary">Description</label>
                <button 
                  type="button"
                  onClick={handleAIGenerate} 
                  disabled={isGenerating}
                  className="inline-flex items-center gap-2 text-[10px] uppercase tracking-widest text-primary-gold border border-primary-gold/20 px-3 py-1 rounded-sm hover:bg-primary-gold/5"
                >
                  {isGenerating ? <Loader2 className="w-3 h-3 animate-spin" /> : <Sparkles className="w-3 h-3" />}
                  Generate with AI
                </button>
              </div>
              <textarea 
                rows={6} 
                required
                value={desc}
                onChange={(e) => setDesc(e.target.value)}
                placeholder="Compose a compelling description for elite guests..."
                className="w-full border border-brand-border p-3 rounded-sm focus:border-primary-gold outline-none resize-none"
              ></textarea>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-2">
                <label className="text-[10px] uppercase font-bold tracking-widest text-brand-secondary">Location</label>
                <input 
                  type="text" 
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  placeholder="Marbella, Puerto Banús..." 
                  className="w-full border border-brand-border p-3 rounded-sm focus:border-primary-gold outline-none" 
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase font-bold tracking-widest text-brand-secondary">Starting Price (€)</label>
                <input 
                  type="number" 
                  value={price}
                  onChange={(e) => setPrice(Number(e.target.value))}
                  className="w-full border border-brand-border p-3 rounded-sm focus:border-primary-gold outline-none" 
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase font-bold tracking-widest text-brand-secondary">Billing Unit</label>
                <input 
                  type="text" 
                  value={unit}
                  onChange={(e) => setUnit(e.target.value)}
                  placeholder="day, week, per guest..."
                  className="w-full border border-brand-border p-3 rounded-sm focus:border-primary-gold outline-none" 
                />
              </div>
            </div>

            <div className="flex justify-end gap-4 pt-6 border-t border-brand-border">
              <button type="submit" className="bg-brand-primary text-white text-[11px] uppercase tracking-widest px-10 py-4 rounded-sm hover:opacity-90">Submit Offering</button>
            </div>
          </form>
        </div>
      </div>
    );
  };

  const ProviderDashboard = () => (
    <div className="bg-page min-h-screen pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-12 gap-6">
          <div className="text-left">
            <h1 className="font-serif text-4xl text-brand-primary">Partner Portal</h1>
            <p className="text-brand-secondary text-sm mt-1 uppercase tracking-widest">Managing exclusive luxury listings</p>
          </div>
          <Button variant="accent" icon={PlusCircle} onClick={() => setView('create-service')}>New Luxury Listing</Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {[
            { label: 'Projected Revenue', val: '€142,500' },
            { label: 'Unread Inquiries', val: '12' },
            { label: 'Account Health', val: 'Elite' }
          ].map((s, i) => (
            <div key={i} className="bg-white p-8 border border-brand-border shadow-sm flex flex-col items-center text-center">
              <span className="text-[10px] uppercase font-bold text-primary-gold tracking-widest mb-2">{s.label}</span>
              <div className="font-serif text-4xl text-brand-primary">{s.val}</div>
            </div>
          ))}
        </div>

        <div className="bg-white border border-brand-border overflow-hidden rounded-sm shadow-sm text-left">
          <div className="px-8 py-6 border-b border-brand-border bg-page/50 flex justify-between items-center">
             <h3 className="font-serif text-xl text-brand-primary">Active Portfolio</h3>
             <span className="text-[10px] uppercase tracking-widest text-brand-secondary">{services.length} Listings</span>
          </div>
          <div className="divide-y divide-brand-border">
            {services.map(s => (
              <div key={s.id} className="flex justify-between items-center p-6 hover:bg-page transition-colors group">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-gray-200 rounded-sm overflow-hidden border border-brand-border">
                    <img src={s.image} alt="" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                  </div>
                  <div>
                    <span className="font-serif text-brand-primary block text-lg">{s.title}</span>
                    <span className="text-[10px] text-brand-secondary uppercase tracking-wider">{s.category} • {s.location}</span>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                   <div className="hidden md:block text-right">
                      <p className="text-[10px] text-brand-secondary uppercase mb-1">Price</p>
                      <p className="font-serif text-brand-primary">€{s.price.toLocaleString()}</p>
                   </div>
                   <Badge status={s.status} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const AdminDashboard = () => (
    <div className="bg-page min-h-screen pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="font-serif text-4xl text-brand-primary mb-12 text-left">System Oversight</h1>
        <div className="bg-white border border-brand-border rounded-sm overflow-hidden shadow-xl text-left">
          <table className="w-full text-left">
            <thead className="bg-page text-[10px] uppercase font-bold text-brand-secondary border-b border-brand-border">
              <tr>
                <th className="px-8 py-6">Listing Name</th>
                <th className="px-8 py-6">Provider Entity</th>
                <th className="px-8 py-6">Compliance Status</th>
                <th className="px-8 py-6 text-right">Moderation Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-brand-border">
              {services.map(s => (
                <tr key={s.id} className="hover:bg-page/50 transition-colors">
                  <td className="px-8 py-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-sm bg-cover overflow-hidden border border-brand-border" style={{backgroundImage: `url(${s.image})`}} />
                      <span className="font-serif text-brand-primary text-lg">{s.title}</span>
                    </div>
                  </td>
                  <td className="px-8 py-6 text-xs uppercase tracking-widest text-brand-secondary">{s.provider}</td>
                  <td className="px-8 py-6"><Badge status={s.status} /></td>
                  <td className="px-8 py-6 text-right">
                    <button className="text-[10px] font-bold uppercase tracking-widest text-green-700 hover:text-green-900 transition-colors mr-6">Approve</button>
                    <button className="text-[10px] font-bold uppercase tracking-widest text-red-700 hover:text-red-900 transition-colors">Reject</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  const LoginView = () => {
    const [role, setRole] = useState<'provider' | 'admin'>('provider');
    const handleLogin = (e: React.FormEvent) => {
      e.preventDefault();
      if (role === 'admin') setView('admin');
      else setView('provider');
    };

    return (
      <div className="bg-page min-h-screen flex items-center justify-center px-6">
        <div className="w-full max-w-md bg-white border border-brand-border p-10 rounded-sm shadow-xl animate-fade-in">
          <div className="text-center mb-10">
            <h1 className="font-serif text-3xl text-brand-primary mb-2">Partner Login</h1>
            <p className="text-brand-secondary text-xs uppercase tracking-[0.2em]">Secure Access Required</p>
          </div>
          <form onSubmit={handleLogin} className="space-y-6 text-left">
            <div className="space-y-2">
              <label className="text-[10px] uppercase font-bold tracking-widest text-brand-secondary">Access Key / Email</label>
              <input type="email" required className="w-full border border-brand-border p-3 rounded-sm focus:border-primary-gold outline-none" />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] uppercase font-bold tracking-widest text-brand-secondary">Security Password</label>
              <input type="password" required className="w-full border border-brand-border p-3 rounded-sm focus:border-primary-gold outline-none" />
            </div>
            <div className="pt-4 flex flex-col gap-4">
               <button type="submit" className="w-full bg-brand-primary text-white py-4 text-xs uppercase tracking-widest font-bold hover:opacity-90 transition-opacity">
                 Sign In
               </button>
               <button type="button" onClick={() => setView('apply')} className="text-[10px] uppercase font-bold tracking-widest text-primary-gold hover:underline text-center">
                 Apply for Partnership
               </button>
               <button type="button" onClick={() => setView('home')} className="text-[10px] uppercase font-bold tracking-widest text-brand-secondary hover:text-brand-primary text-center">
                 Return to Main Page
               </button>
            </div>
          </form>
          <div className="mt-8 pt-8 border-t border-brand-border flex justify-center gap-4">
             <button onClick={() => setRole('provider')} className={`text-[10px] uppercase font-bold tracking-widest ${role === 'provider' ? 'text-primary-gold' : 'text-brand-secondary'}`}>Partner</button>
             <button onClick={() => setRole('admin')} className={`text-[10px] uppercase font-bold tracking-widest ${role === 'admin' ? 'text-primary-gold' : 'text-brand-secondary'}`}>Admin</button>
          </div>
        </div>
      </div>
    );
  };

  const ApplyView = () => {
    const [submitted, setSubmitted] = useState(false);

    return (
      <div className="bg-page min-h-screen flex items-center justify-center px-6 py-20">
        <div className="w-full max-w-2xl bg-white border border-brand-border p-12 rounded-sm shadow-xl animate-fade-in">
          {!submitted ? (
            <>
              <div className="text-center mb-12">
                <h1 className="font-serif text-4xl text-brand-primary mb-3">Marhaba Partnership</h1>
                <p className="text-brand-secondary text-xs uppercase tracking-[0.2em]">Excellence through collaboration</p>
              </div>
              <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="space-y-8 text-left">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase font-bold tracking-widest text-brand-secondary">Entity Name</label>
                    <input required type="text" className="w-full border border-brand-border p-3 rounded-sm focus:border-primary-gold outline-none" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase font-bold tracking-widest text-brand-secondary">Contact Person</label>
                    <input required type="text" className="w-full border border-brand-border p-3 rounded-sm focus:border-primary-gold outline-none" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase font-bold tracking-widest text-brand-secondary">Professional Portfolio / Website</label>
                  <input required type="url" className="w-full border border-brand-border p-3 rounded-sm focus:border-primary-gold outline-none" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase font-bold tracking-widest text-brand-secondary">Excellence Statement</label>
                  <textarea required rows={4} className="w-full border border-brand-border p-3 rounded-sm focus:border-primary-gold outline-none resize-none" placeholder="How does your service define luxury in Marbella?"></textarea>
                </div>
                <div className="pt-6 flex flex-col items-center gap-6">
                  <button type="submit" className="w-full bg-brand-primary text-white py-4 text-xs uppercase tracking-widest font-bold hover:opacity-90 transition-opacity">
                    Submit Application
                  </button>
                  <button type="button" onClick={() => setView('login')} className="text-[10px] uppercase font-bold tracking-widest text-brand-secondary hover:text-brand-primary">
                    Back to Login
                  </button>
                </div>
              </form>
            </>
          ) : (
            <div className="text-center py-12 space-y-8">
              <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle className="w-10 h-10 text-green-600" />
              </div>
              <div className="space-y-4">
                <h2 className="font-serif text-3xl text-brand-primary">Application Received</h2>
                <p className="text-brand-secondary text-sm leading-relaxed max-w-md mx-auto">
                  Our vetting team will review your portfolio and reach out within 48 hours to discuss the integration of your services into our elite collection.
                </p>
              </div>
              <button 
                onClick={() => setView('home')}
                className="inline-flex items-center gap-2 text-[10px] uppercase font-bold tracking-widest text-primary-gold border-b border-primary-gold/30 hover:border-primary-gold pb-1 transition-all"
              >
                Return to Homepage <ArrowRight className="w-3 h-3" />
              </button>
            </div>
          )}
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen flex flex-col font-sans selection:bg-primary-gold selection:text-white">
      {view !== 'login' && view !== 'apply' && <PublicHeader />}
      
      <main className="flex-grow">
        {view === 'home' && <HomeView />}
        {view === 'catalog' && <CatalogView />}
        {view === 'detail' && <ServiceDetail />}
        {view === 'provider' && <ProviderDashboard />}
        {view === 'create-service' && <CreateServiceView />}
        {view === 'admin' && <AdminDashboard />}
        {view === 'login' && <LoginView />}
        {view === 'apply' && <ApplyView />}
      </main>

      {view !== 'login' && view !== 'apply' && (
        <footer className="border-t border-[#e6e0db] bg-surface py-16">
          <div className="container mx-auto flex max-w-7xl flex-col items-center px-4">
            <div className="mb-8 flex items-center gap-3 text-deep-brown opacity-80 cursor-pointer" onClick={() => setView('home')}>
              <div className="size-6 text-primary-gold">
                <svg className="h-full w-full" fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                  <path d="M42.1739 20.1739L27.8261 5.82609C29.1366 7.13663 28.3989 10.1876 26.2002 13.7654C24.8538 15.9564 22.9595 18.3449 20.6522 20.6522C18.3449 22.9595 15.9564 24.8538 13.7654 26.2002C10.1876 28.3989 7.13663 29.1366 5.82609 27.8261L20.1739 42.1739C21.4845 43.4845 24.5355 42.7467 28.1133 40.548C30.3042 39.2016 32.6927 37.3073 35 35C37.3073 32.6927 39.2016 30.3042 40.548 28.1133C42.7467 24.5355 43.4845 21.4845 42.1739 20.1739Z" fill="currentColor"></path>
                  <path clipRule="evenodd" d="M7.24189 26.4066C7.31369 26.4411 7.64204 26.5637 8.52504 26.3738C9.59462 26.1438 11.0343 25.5311 12.7183 24.4963C14.7583 23.2426 17.0256 21.4503 19.238 19.238C21.4503 17.0256 23.2426 14.7583 24.4963 12.7183C25.5311 11.0343 26.1438 9.59463 26.3738 8.52504C26.5637 7.64204 26.4411 7.31369 26.4066 7.24189C26.345 7.21246 26.143 7.14535 25.6664 7.1918C24.9745 7.25925 23.9954 7.5498 22.7699 8.14278C20.3369 9.32007 17.3369 11.4915 14.4142 14.4142C11.4915 17.3369 9.32007 20.3369 8.14278 22.7699C7.5498 23.9954 7.25925 24.9745 7.1918 25.6664C7.14534 26.143 7.21246 26.345 7.24189 26.4066ZM29.9001 10.7285C29.4519 12.0322 28.7617 13.4172 27.9042 14.8126C26.465 17.1544 24.4686 19.6641 22.0664 22.0664C19.6641 24.4686 17.1544 26.465 14.8126 27.9042C13.4172 28.7617 12.0322 29.4519 10.7285 29.9001L21.5754 40.747C21.6001 40.7606 21.8995 40.931 22.8729 40.7217C23.9424 40.4916 25.3821 39.879 27.0661 38.8441C29.1062 37.5904 31.3734 35.7982 33.5858 33.5858C35.7982 31.3734 37.5904 29.1062 38.8441 27.0661C39.879 25.3821 40.4916 23.9425 40.7216 22.8729C40.931 21.8995 40.7606 21.6001 40.747 21.5754L29.9001 10.7285ZM29.2403 4.41187L43.5881 18.7597C44.9757 20.1473 44.9743 22.1235 44.6322 23.7139C44.2714 25.3919 43.4158 27.2666 42.252 29.1604C40.8128 31.5022 38.8165 34.012 36.4142 36.4142C34.012 38.8165 31.5022 40.8128 29.1604 42.252C27.2666 43.4158 25.3919 44.2714 23.7139 44.6322C22.1235 44.9743 20.1473 44.9757 18.7597 43.5881L4.41187 29.2403C3.29027 28.1187 3.08209 26.5973 3.21067 25.2783C3.34099 23.9415 3.8369 22.4852 4.54214 21.0277C5.96129 18.0948 8.43335 14.7382 11.5858 11.5858C14.7382 8.43335 18.0948 5.9613 21.0277 4.54214C22.4852 3.8369 23.9415 3.34099 25.2783 3.21067C26.5973 3.08209 28.1187 3.29028 29.2403 4.41187Z" fill="currentColor" fillRule="evenodd"></path>
                </svg>
              </div>
              <span className="font-display font-bold">LUXURY B2B</span>
            </div>
            <div className="mb-8 flex flex-wrap justify-center gap-8 text-center md:gap-12">
              <button className="text-sm font-medium text-text-muted transition-colors hover:text-deep-brown">Privacy Policy</button>
              <button className="text-sm font-medium text-text-muted transition-colors hover:text-deep-brown">Terms of Service</button>
              <button className="text-sm font-medium text-text-muted transition-colors hover:text-deep-brown">Contact Support</button>
            </div>
            <div className="mb-8 flex gap-6">
              <button className="text-text-muted transition-colors hover:text-primary-gold">
                <span className="material-symbols-outlined">star</span>
              </button>
              <button className="text-text-muted transition-colors hover:text-primary-gold">
                <span className="material-symbols-outlined">public</span>
              </button>
            </div>
            <p className="text-center text-sm text-text-muted/60">
              © 2026 Marhaba Marbella. All rights reserved. Excellence is standard.
            </p>
          </div>
        </footer>
      )}

      {/* {view !== 'login' && view !== 'apply' && <GeminiConcierge />} */}
      <InquiryModal isOpen={isInquiryModalOpen} onClose={() => setIsInquiryModalOpen(false)} />
    </div>
  );
};

export default App;
