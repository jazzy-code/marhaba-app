"use client";

import { categories, MOCK_SERVICES } from "@/constants";
import { Category, Service } from "@/types";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { use, useMemo, useState } from "react";

export default function CatalogPage({ params }: { params: Promise<{ category: Category }> }) {
  const { category } = use(params);
  const router = useRouter();
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [activeCategoryFilter, setActiveCategoryFilter] = useState(category || 'all');
  const [searchQuery, setSearchQuery] = useState('');
  const filteredServices = useMemo(() => {
    return MOCK_SERVICES.filter(s => {
      const matchesSearch = s.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        s.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        s.location.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = activeCategoryFilter === 'all' || s.category === activeCategoryFilter;
      return matchesSearch && matchesCategory && s.status === 'Approved';
    });
  }, [searchQuery, activeCategoryFilter]);

  const handleSelect = (service: Service) => {
    setSelectedService(service);
    router.push(`/catalog/${service.id}`);
  }

  const navigate = (path: string) => {
    router.push(path);
  }

  return (
    <div className="bg-page min-h-screen pt-32 pb-20">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] mb-3 text-primary-gold block">The Elite Collection</span>
            <h2 className="font-serif text-4xl text-deep-brown">Available Offerings</h2>
            <p className="text-luxury-gray text-xs mt-2 uppercase tracking-widest">Currently showing: {activeCategoryFilter}</p>
          </div>
          <div className="relative w-full md:w-80">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-brand-secondary/40 text-[20px]">search</span>
            <div className="relative w-full md:w-80">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-brand-secondary/40 text-[20px]">search</span>
              <input type="text" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} placeholder="Filter results..." className="w-full pl-10 pr-4 py-2 bg-white border border-brand-border outline-none text-sm focus:border-primary-gold rounded-sm" />
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          <aside className="w-full lg:w-64 shrink-0 space-y-8 h-fit lg:sticky lg:top-32">
            <div>
              <h3 className="text-[10px] font-bold uppercase tracking-widest text-deep-brown mb-4 border-b border-brand-border pb-2">Categories</h3>
              <div className="flex flex-col gap-2">
                {categories.map(c => (
                  <button
                    key={c.slug}
                    onClick={() => navigate(c.slug)}
                    className={`text-left py-1 text-xs uppercase tracking-widest transition-colors ${activeCategoryFilter === c.slug ? 'text-primary-gold font-bold' : 'text-text-muted hover:text-primary-gold'
                      }`}
                  >
                    {c.name}
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
                        <button className="text-[11px] uppercase tracking-widest font-medium text-deep-brown flex items-center gap-2 group/btn" onClick={() => handleSelect(service)}>
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
}