"use client"

import { useEffect, useState } from "react"

import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from "@clerk/nextjs"
import { ChevronDown, Menu, X } from "lucide-react"
import { usePathname, useRouter } from "next/navigation"

import MarhabaMarbellaLogo from "@/assets/images/MarhabaMarbellaLogo"
import GoogleTranslate from "@/components/GoogleTranslate"
import { usePublicServices } from "@/context/PublicServicesContext"

const Header = () => {
  const pathname = usePathname()
  const isHome = pathname === "/"
  const [scrolled, setScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const router = useRouter()
  const { categories } = usePublicServices()

  const navigate = (url: string) => {
    setIsMobileMenuOpen(false)
    router.push(url)
  }

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
  }, [isMobileMenuOpen])

  return (
    <>
      <header
        className={`fixed left-0 z-[100] w-full transition-all duration-300 h-24 flex items-center ${
          scrolled || !isHome || isMobileMenuOpen
            ? "bg-page/95 backdrop-blur-md border-b border-brand-border shadow-sm"
            : "bg-transparent"
        }`}>
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 lg:px-8">
          <div className="flex items-center gap-4 cursor-pointer" onClick={() => navigate("/")}>
            <div
              className={`flex items-center justify-center ${
                scrolled || !isHome || isMobileMenuOpen ? "text-deep-brown" : "text-white"
              }`}>
              <MarhabaMarbellaLogo />
            </div>
          </div>

          <nav className="hidden lg:flex gap-6">
            {categories.map((cat) => (
              <div key={cat.id} className="relative group h-24 flex items-center">
                <button
                  className={`text-[11px] uppercase tracking-[0.2em] font-semibold flex items-center gap-1.5 transition-colors duration-300 ${
                    scrolled || !isHome
                      ? "text-brand-secondary hover:text-deep-brown"
                      : "text-white/90 hover:text-white"
                  }`}>
                  {cat.name}
                  <ChevronDown className="w-3 h-3 opacity-50 group-hover:rotate-180 transition-transform duration-300" />
                </button>
                <div className="absolute top-[100%] left-1/2 -translate-x-1/2 w-56 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <div className="bg-white shadow-2xl rounded-sm border border-brand-border overflow-hidden py-3">
                    <div className="absolute top-0 left-0 w-full h-1 bg-primary-gold opacity-30"></div>
                    {cat.serviceTypes.map((type) => (
                      <button
                        key={type.key}
                        onClick={() => navigate(`/catalog/${type.slug}`)}
                        className="w-full text-left px-6 py-3 text-[10px] uppercase tracking-widest text-luxury-gray hover:text-deep-brown hover:bg-page transition-colors">
                        {type.name}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </nav>

          <div className="flex items-center gap-6">
            <GoogleTranslate />
            <div
              className={`h-4 border-l ${scrolled || !isHome ? "border-brand-border" : "border-[#E7E5E4]"} opacity-50`}></div>
            <SignedOut>
              <div className="hidden md:flex items-center gap-4">
                <SignInButton>
                  <button
                    className={`text-sm font-medium transition-colors drop-shadow-md ${
                      scrolled || !isHome
                        ? "text-brand-primary hover:text-primary-gold"
                        : "text-white hover:text-primary-gold"
                    }`}>
                    Log In
                  </button>
                </SignInButton>
                <div
                  className={`h-4 border-l ${scrolled || !isHome ? "border-brand-border" : "border-[#E7E5E4]"} opacity-50`}></div>
                <SignUpButton>
                  <button
                    className={`text-sm font-medium transition-colors drop-shadow-md ${
                      scrolled || !isHome
                        ? "text-brand-primary hover:text-primary-gold"
                        : "text-white hover:text-primary-gold"
                    }`}>
                    Sign Up
                  </button>
                </SignUpButton>
              </div>
            </SignedOut>
            <SignedIn>
              <button
                onClick={() => navigate("/dashboard")}
                className={`h-8 items-center justify-center rounded-sm px-2 text-[11px] uppercase tracking-[0.2em] font-bold transition-all active:scale-95 shadow-lg sm:flex hidden ${
                  scrolled || !isHome
                    ? "bg-brand-primary text-white hover:bg-primary-gold"
                    : "bg-white text-deep-brown hover:bg-primary-gold hover:text-white"
                }`}>
                My Dashboard
              </button>
              <div
                className={`h-4 border-l ${scrolled || !isHome ? "border-brand-border" : "border-[#E7E5E4]"} opacity-50`}></div>
              <UserButton />
            </SignedIn>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`lg:hidden relative z-[110] transition-colors duration-300 ${
                scrolled || !isHome || isMobileMenuOpen ? "text-brand-primary" : "text-white"
              }`}>
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[90] bg-white lg:hidden flex flex-col pt-24">
          <div className="flex-1 overflow-y-auto p-8 space-y-10">
            <SignedIn>
              <button
                onClick={() => navigate("/dashboard")}
                className={`h-11 w-full items-center justify-center rounded-sm px-8 text-[11px] uppercase tracking-[0.2em] font-bold transition-all active:scale-95 shadow-lg flex sm:hidden ${
                  scrolled || !isHome
                    ? "bg-brand-primary text-white hover:bg-primary-gold"
                    : "bg-white text-deep-brown hover:bg-primary-gold hover:text-white"
                }`}>
                My Dashboard
              </button>
            </SignedIn>
            {categories.map((cat) => (
              <div key={cat.id}>
                <h3 className="text-[10px] uppercase tracking-[0.3em] font-bold text-primary-gold mb-6">{cat.name}</h3>
                <div className="flex flex-col gap-5 pl-2">
                  {cat.serviceTypes.map((type) => (
                    <button
                      key={type.key}
                      onClick={() => navigate(`/catalog/${type.slug}`)}
                      className="text-left text-lg font-serif text-deep-brown hover:text-primary-gold transition-colors">
                      {type.name}
                    </button>
                  ))}
                </div>
              </div>
            ))}
            <div className="pt-10 border-t border-brand-border">
              <SignedOut>
                <SignInButton>
                  <button className="text-sm uppercase tracking-widest font-bold text-deep-brown">Log In</button>
                </SignInButton>
              </SignedOut>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Header
