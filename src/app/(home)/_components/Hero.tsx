"use client"

import { useState } from "react"

import { Search } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"

import { usePublicServices } from "@/context/PublicServicesContext"

const Hero = () => {
  const { categories } = usePublicServices()

  const router = useRouter()
  const [search, setSearch] = useState("")

  const handleSearch = () => {
    router.push(`/catalog?title=${search}`)
  }
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <div className="absolute inset-0 z-0 scale-105 animate-[slow-zoom_20s_infinite_alternate]">
        <img
          src="/images/marbella-hero.jpg"
          alt="Cinematic luxury villa with pool at sunset in Marbella"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center">
        <div className="w-full max-w-5xl animate-fade-in flex flex-col items-center">
          <h1 className="my-6 font-serif text-6xl font-medium leading-tight tracking-tight text-white drop-shadow-lg md:text-7xl lg:text-8xl">
            Marbella in one click
          </h1>
          <h2 className="mb-14 font-sans text-lg font-light text-white/90 md:text-2xl lg:text-3xl tracking-wide max-w-2xl">
            Your Luxury Services. Built on trust. Delivered with excellence.
          </h2>
          <div className="w-full max-w-4xl flex flex-wrap gap-6 mb-8 justify-center">
            {categories.map((category) => (
              <Link
                key={category.id}
                href="/catalog"
                className="rounded-sm border-2 border-white text-white hover:border-deep-brown bg-deep-brown/70 px-8 py-4 text-sm font-bold uppercase tracking-widest text-deep-brown transition-all hover:bg-deep-brown hover:text-white hover:shadow-lg active:scale-95">
                {category.name}
              </Link>
            ))}
          </div>

          <div className="w-full max-w-3xl bg-white rounded-sm mt-8 shadow-2xl flex flex-col sm:flex-row gap-2 p-2">
            <div className="flex-1 flex items-center px-4">
              <Search className="w-6 h-6 text-deep-brown" />
              <input
                className="w-full border-none bg-transparent px-4 py-3 text-deep-brown placeholder-deep-brown/50 focus:ring-0 font-sans text-lg outline-none"
                placeholder="What are you looking for?"
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSearch()}
              />
            </div>
            <button
              type="button"
              onClick={handleSearch}
              className="h-14 sm:w-auto w-full rounded-sm bg-primary-gold px-10 text-sm font-bold tracking-widest text-white transition-all hover:bg-[#967645] hover:shadow-lg active:scale-95 uppercase">
              DISCOVER
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
