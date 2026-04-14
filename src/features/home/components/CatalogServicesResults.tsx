"use client"

import { ArrowRight } from "lucide-react"
import { useRouter } from "next/navigation"

const CatalogServicesResults = ({ services }: { services: any }) => {
  const { data = [] } = services
  console.log("data", data)
  const router = useRouter()
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {data.map((service: any) => (
        <div
          key={service.id}
          className="group bg-white rounded-sm shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden flex flex-col border border-brand-border animate-fade-in">
          <div className="relative h-64 overflow-hidden">
            <img
              src={service.heroImageUrl}
              alt={service.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1">
              <span className="text-[10px] uppercase font-bold tracking-wider text-primary-gold">
                {service.serviceType.name}
              </span>
            </div>
          </div>
          <div className="p-6 flex flex-col flex-1">
            <h3 className="font-serif text-xl text-deep-brown mb-2">{service.title}</h3>
            <div className="flex items-center gap-2 text-[10px] text-text-muted uppercase tracking-wider mb-6">
              <span className="material-symbols-outlined text-primary-gold text-[14px] icon-filled">location_on</span>
              {service.city?.name}, {service.district}
            </div>
            <div className="mt-auto pt-6 border-t border-brand-border/20 flex justify-between items-center">
              <div>
                <span className="text-[10px] text-text-muted uppercase block">Starting from</span>
                <span className="font-serif text-lg text-primary-gold">€{service.price.toLocaleString()}</span>
              </div>
            </div>
            <div className="flex justify-end mt-2">
              <button
                className="text-[11px] uppercase tracking-widest font-medium text-deep-brown flex items-center gap-2 group/btn"
                onClick={() => router.push(`/service/${service.id}`)}>
                Explore <ArrowRight className="w-3 h-3 group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default CatalogServicesResults
