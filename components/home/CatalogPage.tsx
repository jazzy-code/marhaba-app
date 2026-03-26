"use client"

import { useState } from "react"

import { useRouter } from "next/navigation"

import SearchBar from "../fields/SearchBar"

import CatalogServicesResults from "./CatalogServicesResults"
import ServicesList from "./ServicesList"

const CatalogPage = ({ services }: any) => {
  const router = useRouter()
  const [searchQuery, setSearchQuery] = useState("")

  return (
    <div className="bg-page min-h-screen pt-32 pb-20 flex flex-col">
      <div className="flex-1 max-w-[1400px] mx-auto px-0 lg:px-12 flex flex-col">
        <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] mb-3 text-primary-gold block">
              The Elite Collection
            </span>
            <h2 className="font-serif text-4xl text-deep-brown">Available Offerings</h2>
          </div>
          <div className="relative w-full md:w-80">
            <SearchBar
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onClear={() => setSearchQuery("")}
            />
          </div>
        </div>

        <div className="flex flex-1 flex-col md:flex-row gap-12 max-h-[calc(100vh-200px)]">
          <ServicesList />

          <div className="flex-1 overflow-y-auto">
            {services?.data && services.data.length ? (
              <CatalogServicesResults services={services} />
            ) : (
              <div className="text-center py-32 bg-white border border-dashed border-brand-border">
                <span className="material-symbols-outlined text-[48px] text-brand-border mx-auto mb-4 icon-thin">
                  search
                </span>
                <p className="text-brand-secondary text-sm">No exclusive services found matching your criteria.</p>
                <button
                  onClick={() => router.push("/catalog")}
                  className="mt-4 text-primary-gold font-bold text-[10px] uppercase tracking-widest hover:underline">
                  Clear all filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default CatalogPage
