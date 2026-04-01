"use client"

import { useEffect, useState } from "react"

import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from "@clerk/nextjs"
import { ChevronDown, Menu, X } from "lucide-react"
import { usePathname, useRouter } from "next/navigation"

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
        className={`fixed top-0 left-0 z-[100] w-full transition-all duration-300 h-24 flex items-center ${
          scrolled || !isHome || isMobileMenuOpen
            ? "bg-page/95 backdrop-blur-md border-b border-brand-border shadow-sm"
            : "bg-transparent"
        }`}>
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 lg:px-8">
          <div className="flex items-center gap-4 cursor-pointer" onClick={() => navigate("/")}>
            <div
              className={`flex size-10 items-center justify-center ${
                scrolled || !isHome || isMobileMenuOpen ? "text-deep-brown" : "text-white"
              }`}>
              <svg
                className="h-full w-full drop-shadow-md"
                fill="none"
                viewBox="0 0 48 48"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M42.1739 20.1739L27.8261 5.82609C29.1366 7.13663 28.3989 10.1876 26.2002 13.7654C24.8538 15.9564 22.9595 18.3449 20.6522 20.6522C18.3449 22.9595 15.9564 24.8538 13.7654 26.2002C10.1876 28.3989 7.13663 29.1366 5.82609 27.8261L20.1739 42.1739C21.4845 43.4845 24.5355 42.7467 28.1133 40.548C30.3042 39.2016 32.6927 37.3073 35 35C37.3073 32.6927 39.2016 30.3042 40.548 28.1133C42.7467 24.5355 43.4845 21.4845 42.1739 20.1739Z"
                  fill="currentColor"></path>
                <path
                  clipRule="evenodd"
                  d="M7.24189 26.4066C7.31369 26.4411 7.64204 26.5637 8.52504 26.3738C9.59462 26.1438 11.0343 25.5311 12.7183 24.4963C14.7583 23.2426 17.0256 21.4503 19.238 19.238C21.4503 17.0256 23.2426 14.7583 24.4963 12.7183C25.5311 11.0343 26.1438 9.59463 26.3738 8.52504C26.5637 7.64204 26.4411 7.31369 26.4066 7.24189C26.345 7.21246 26.143 7.14535 25.6664 7.1918C24.9745 7.25925 23.9954 7.5498 22.7699 8.14278C20.3369 9.32007 17.3369 11.4915 14.4142 14.4142C11.4915 17.3369 9.32007 20.3369 8.14278 22.7699C7.5498 23.9954 7.25925 24.9745 7.1918 25.6664C7.14534 26.143 7.21246 26.345 7.24189 26.4066ZM29.9001 10.7285C29.4519 12.0322 28.7617 13.4172 27.9042 14.8126C26.465 17.1544 24.4686 19.6641 22.0664 22.0664C19.6641 24.4686 17.1544 26.465 14.8126 27.9042C13.4172 28.7617 12.0322 29.4519 10.7285 29.9001L21.5754 40.747C21.6001 40.7606 21.8995 40.931 22.8729 40.7217C23.9424 40.4916 25.3821 39.879 27.0661 38.8441C29.1062 37.5904 31.3734 35.7982 33.5858 33.5858C35.7982 31.3734 37.5904 29.1062 38.8441 27.0661C39.879 25.3821 40.4916 23.9425 40.7216 22.8729C40.931 21.8995 40.7606 21.6001 40.747 21.5754L29.9001 10.7285ZM29.2403 4.41187L43.5881 18.7597C44.9757 20.1473 44.9743 22.1235 44.6322 23.7139C44.2714 25.3919 43.4158 27.2666 42.252 29.1604C40.8128 31.5022 38.8165 34.012 36.4142 36.4142C34.012 38.8165 31.5022 40.8128 29.1604 42.252C27.2666 43.4158 25.3919 44.2714 23.7139 44.6322C22.1235 44.9743 20.1473 44.9757 18.7597 43.5881L4.41187 29.2403C3.29027 28.1187 3.08209 26.5973 3.21067 25.2783C3.34099 23.9415 3.8369 22.4852 4.54214 21.0277C5.96129 18.0948 8.43335 14.7382 11.5858 11.5858C14.7382 8.43335 18.0948 5.9613 21.0277 4.54214C22.4852 3.8369 23.9415 3.34099 25.2783 3.21067C26.5973 3.08209 28.1187 3.29028 29.2403 4.41187Z"
                  fill="currentColor"
                  fillRule="evenodd"></path>
              </svg>
            </div>
            <h2
              className={`font-display text-lg font-bold tracking-widest drop-shadow-md ${
                scrolled || !isHome || isMobileMenuOpen ? "text-deep-brown" : "text-white"
              }`}>
              MARHABA
            </h2>
          </div>

          <nav className="hidden lg:flex gap-10">
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
            <div className="hidden md:flex items-center gap-4">
              <SignedOut>
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
              </SignedOut>
            </div>
            <SignedIn>
              <button
                onClick={() => navigate("/dashboard")}
                className={`h-11 items-center justify-center rounded-sm px-8 text-[11px] uppercase tracking-[0.2em] font-bold transition-all active:scale-95 shadow-lg sm:flex hidden ${
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
