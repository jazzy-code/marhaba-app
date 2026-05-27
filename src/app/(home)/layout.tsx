import Script from "next/script"

import { getCategories } from "@/api/categories/categories.server"
import { getLatestServices, getPublicServiceTypes } from "@/api/services/services.server"
import Header from "@/app/(home)/_components/Header"
import { PublicServicesProvider } from "@/context/PublicServicesContext"

import Footer from "./_components/Footer"
import SupportButton from "./_components/SupportButton"

export default async function HomeLayout({ children }: { children: React.ReactNode }) {
  const serviceTypes = await getPublicServiceTypes()
  const categories = await getCategories()
  const latestServices = await getLatestServices()

  return (
    <PublicServicesProvider value={{ serviceTypes, categories, latestServices }}>
      <Header />
      {children}
      <SupportButton />
      <Footer />
      {process.env.NODE_ENV === "production" && (
        <Script
          id="cookieyes"
          src="https://cdn-cookieyes.com/client_data/5a5b3fdc5ec26bd009a62d6131eeeccb/script.js"
          strategy="afterInteractive"
        />
      )}
    </PublicServicesProvider>
  )
}
