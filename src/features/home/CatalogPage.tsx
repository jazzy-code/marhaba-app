"use client"

import { useState } from "react"

import { useAuth } from "@clerk/nextjs"
import { useQuery } from "@tanstack/react-query"
import { Search } from "lucide-react"
import { useSearchParams } from "next/navigation"

import { setAuthToken } from "@/api/apiClient"
import { getPublicServices } from "@/api/services/services.client"

import SearchBar from "../../components/fields/SearchBar"

import CatalogServicesResults from "./components/CatalogServicesResults"
import ServicesList from "./components/ServicesList"

interface CatalogPageProps {
  initialData: any[]
  slug?: string
}

const CatalogPage = ({ initialData, slug }: CatalogPageProps) => {
  const searchParams = useSearchParams()
  const { getToken } = useAuth()

  const [searchQuery, setSearchQuery] = useState(searchParams.get("search") || "")
  const [servicesParams, setServicesParams] = useState({
    page: 1,
    size: 100,
    sort: "createdAt",
    order: "desc",
    slug,
    search: searchParams.get("search")
  })

  const { data: services } = useQuery({
    queryKey: ["publicServices", servicesParams],
    queryFn: async () => {
      const token = await getToken()
      setAuthToken(token)
      return getPublicServices({ ...servicesParams })
    },
    initialData: initialData,
    refetchOnMount: false
  })

  return (
    <div className="bg-page min-h-screen pt-32 pb-20 flex flex-col">
      <div className="flex-1 max-w-[1400px] mx-auto px-4 lg:px-12 flex flex-col w-full">
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
              onClear={() => [setSearchQuery(""), setServicesParams({ ...servicesParams, search: "" })]}
              onKeyDown={(e) => e.key === "Enter" && setServicesParams({ ...servicesParams, search: searchQuery })}
            />
          </div>
        </div>

        <div className="flex flex-1 flex-col md:flex-row gap-12 md:max-h-[calc(100vh-200px)] w-full">
          <ServicesList />

          <div className="flex-1 overflow-y-auto">
            {services?.data && services.data.length ? (
              <CatalogServicesResults services={services} />
            ) : (
              <div className="text-center py-32 bg-white border border-dashed border-brand-border">
                <Search size={40} className="text-primary-gold mx-auto mb-4" />
                <p className="text-brand-secondary text-lg">No services found.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default CatalogPage
