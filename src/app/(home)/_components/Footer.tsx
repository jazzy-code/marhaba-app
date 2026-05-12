import Link from "next/link"

import MarhabaMarbellaLogo from "@/assets/images/MarhabaMarbellaLogo"

const Footer = () => {
  return (
    <footer className="border-t border-[#2A1A08] bg-[#140D05] text-white">
      <div className="mx-auto max-w-7xl px-6 pt-16 pb-6 lg:px-8">
        {/* TOP */}
        <div className="grid gap-14 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          {/* BRAND */}

          <div className="space-y-6">
            <div className="flex items-center gap-3">
              {/* <img src="/images/logo-gold.svg" alt="Marhaba Marbella" className="h-10 w-auto" /> */}

              <MarhabaMarbellaLogo />
            </div>

            <p className="max-w-md text-sm leading-7 text-white/70">
              Curated luxury experiences, premium services and elite lifestyle connections in Marbella and the Costa del
              Sol.
            </p>

            <div className="flex items-center gap-4">
              <Link
                href="#"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-sm text-white/80 transition-all duration-300 hover:border-primary-gold hover:bg-primary-gold/10 hover:text-primary-gold">
                IG
              </Link>

              <Link
                href="#"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-sm text-white/80 transition-all duration-300 hover:border-primary-gold hover:bg-primary-gold/10 hover:text-primary-gold">
                FB
              </Link>

              <Link
                href="#"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-sm text-white/80 transition-all duration-300 hover:border-primary-gold hover:bg-primary-gold/10 hover:text-primary-gold">
                IN
              </Link>
            </div>
          </div>

          <div className="space-y-6"></div>

          {/* EXPLORE */}
          <div className="space-y-6">
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-primary-gold">Explore</h3>

            <ul className="space-y-4 text-sm text-white/70">
              <li>
                <Link href="/catalog/real-estate" className="transition-colors hover:text-primary-gold">
                  Living
                </Link>
              </li>

              <li>
                <Link href="/catalog/luxury-car" className="transition-colors hover:text-primary-gold">
                  Mobility
                </Link>
              </li>

              <li>
                <Link href="/catalog/beauty-spa" className="transition-colors hover:text-primary-gold">
                  Lifestyle
                </Link>
              </li>

              <li>
                <Link href="/catalog/private-staff" className="transition-colors hover:text-primary-gold">
                  Personal Services
                </Link>
              </li>
            </ul>
          </div>

          {/* COMPANY */}
          {/* <div className="space-y-6">
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-primary-gold">Company</h3>

            <ul className="space-y-4 text-sm text-white/70">
              <li>
                <Link href="/about" className="transition-colors hover:text-primary-gold">
                  About Us
                </Link>
              </li>

              <li>
                <Link href="/supplier-register" className="transition-colors hover:text-primary-gold">
                  Become a Provider
                </Link>
              </li>

              <li>
                <Link href="#" className="transition-colors hover:text-primary-gold">
                  Contact
                </Link>
              </li>

              <li>
                <Link href="#" className="transition-colors hover:text-primary-gold">
                  FAQ
                </Link>
              </li>
            </ul>
          </div> */}

          {/* LEGAL */}
          <div className="space-y-6">
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-primary-gold">Legal</h3>

            <ul className="space-y-4 text-sm text-white/70">
              <li>
                <Link href="/privacy-policy" className="transition-colors hover:text-primary-gold">
                  Privacy Policy
                </Link>
              </li>

              <li>
                <Link href="/cookies-policy" className="transition-colors hover:text-primary-gold">
                  Cookies Policy
                </Link>
              </li>

              <li>
                <Link href="/legal-notice" className="transition-colors hover:text-primary-gold">
                  Legal Notice
                </Link>
              </li>

              <li>
                <Link href="/terms-and-conditions" className="transition-colors hover:text-primary-gold">
                  Terms & Conditions
                </Link>
              </li>

              <li>
                <Link href="/terms-and-conditions-providers" className="transition-colors hover:text-primary-gold">
                  Terms & Conditions for Providers
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* MIDDLE LINE */}
        <div className="my-6 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        {/* BOTTOM */}
        <div className="flex gap-6 justify-center">
          <p className="text-xs tracking-wide text-white/50">© 2026 Marhaba Marbella. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
