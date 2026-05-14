"use client"

import { useEffect } from "react"

import { useUser, useClerk } from "@clerk/nextjs"
import { ArrowRight, Gem, Handshake, UserRoundCheck } from "lucide-react"
import Link from "next/link"

import Hero from "@/app/(home)/_components/Hero"

import LiveItThisWeek from "./_components/LiveItThisWeek"

export default function HomePage() {
  const { user, isLoaded } = useUser()
  const { signOut } = useClerk()

  useEffect(() => {
    // Verificamos que Clerk haya cargado y que haya un usuario
    if (isLoaded && user) {
      const userType = user.publicMetadata?.userType

      // Si NO es ADMIN, cerramos la sesión forzosamente
      if (userType === "ADMIN") {
        signOut({ redirectUrl: "/" })
      }
    }
  }, [user, isLoaded, signOut])

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
                category: "Marine",
                title: "Marine",
                desc: "Superyachts, charters, and exclusive maritime experiences.",
                img: "/images/marine.png"
              },
              {
                category: "Estates",
                title: "Estates",
                desc: "Private villas, penthouses, and architectural masterpieces.",
                img: "/images/real-estate.png"
              },
              {
                category: "Gastronomy",
                title: "Gastronomy",
                desc: "Michelin-starred dining, private chefs, and rare vintages.",
                img: "/images/gastronomy.png"
              }
            ].map((item, idx) => (
              <Link
                key={idx}
                className="group relative cursor-pointer overflow-hidden rounded-sm shadow-sm transition-all duration-500 hover:shadow-2xl hover:shadow-deep-brown/10"
                href={`catalog/${item.category}`}>
                <div className="aspect-[3/4] w-full overflow-hidden">
                  <div
                    className="h-full w-full bg-cover bg-center transition-transform duration-1000 group-hover:scale-110"
                    style={{ backgroundImage: `url(${item.img})` }}></div>
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
            <Link
              href="/catalog"
              className="rounded-sm border-2 border-deep-brown bg-transparent px-8 py-4 text-sm font-bold uppercase tracking-widest text-deep-brown transition-all hover:bg-deep-brown hover:text-white hover:shadow-lg active:scale-95">
              Explore All Exclusive Services
            </Link>
          </div>
        </div>
      </section>

      {/* Gold Standard Section */}
      <section className="bg-surface py-24">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <span className="mb-3 block font-display text-sm font-bold uppercase tracking-widest text-primary-gold">
              The Gold Standard
            </span>
            <h2 className="font-serif text-4xl font-medium text-deep-brown md:text-5xl">Why You Trust Us</h2>
          </div>
          <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
            {[
              {
                title: "Total Access",
                icon: <Gem size={30} />,
                desc: "From private villa to domestic staff, yacht and jet transfers, golf and paddle experience, exclusive dining and lifestyle events. Everything arranged seamlessly for you."
              },
              {
                title: "Trusted Partners",
                icon: <UserRoundCheck size={30} />,
                desc: "Every professional we work with meets the highest standards of service, reliability, and discretion."
              },
              {
                title: "Effortless Service",
                icon: <Handshake size={30} />,
                desc: "Our team takes care of every detail, ensuring your experience is smooth, enjoyable, and exactly as you wish."
              }
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center text-center">
                <div className="mb-6 flex size-20 items-center justify-center rounded-full bg-background-light text-primary-gold shadow-sm">
                  {item.icon}
                </div>
                <h3 className="mb-3 font-serif text-2xl font-medium text-deep-brown">{item.title}</h3>
                <p className="font-sans text-text-muted/90 leading-relaxed text-lg">{item.desc}</p>
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
            <p className="mt-4 max-w-2xl font-sans text-lg text-text-muted/90">
              From request to reality in three simple steps.
            </p>
          </div>
          <div className="relative grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="absolute top-12 left-0 hidden w-full px-16 md:block">
              <div className="h-px w-full border-t border-dashed border-deep-brown/20"></div>
            </div>
            {[
              {
                step: "1",
                title: "Request",
                desc: "Tell us your desires. Whether it's a villa for the summer or a last-minute charter."
              },
              {
                step: "2",
                title: "Curate",
                desc: "We match you with our elite partners and present a tailored selection of options."
              },
              {
                step: "3",
                title: "Experience",
                desc: "Confirm your choice and enjoy a flawless experience, managed by professionals."
              }
            ].map((item, i) => (
              <div key={i} className="relative z-10 flex flex-col items-center text-center">
                <div className="mb-6 flex size-24 items-center justify-center rounded-full border border-white bg-surface shadow-md">
                  <div className="font-serif text-5xl font-medium text-primary-gold pb-4">{item.step}</div>
                </div>
                <h3 className="mb-2 font-serif text-lg font-bold uppercase tracking-wider text-deep-brown">
                  {item.title}
                </h3>
                <p className="px-4 font-sans text-md text-text-muted/90">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-16 flex justify-center">
            <Link
              href={"/catalog"}
              className="rounded-sm bg-deep-brown px-8 py-4 text-sm font-bold uppercase tracking-widest text-white transition-all hover:bg-deep-brown/90 hover:shadow-lg active:scale-95">
              Begin Your Luxury Journey
            </Link>
          </div>
        </div>
      </section>

      {/* Weekly Features Section */}
      <LiveItThisWeek />

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
              <p className="mt-1 text-xs font-bold uppercase tracking-wider text-white">Support</p>
            </div>
            <div>
              <p className="font-serif text-3xl font-medium text-white">€500M+</p>
              <p className="mt-1 text-xs font-bold uppercase tracking-wider text-white">Asset Value</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
