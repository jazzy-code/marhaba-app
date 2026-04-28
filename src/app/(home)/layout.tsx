import { getCategories } from "@/api/categories/categories.server"
import { getLatestServices, getPublicServiceTypes } from "@/api/services/services.server"
import Header from "@/app/(home)/_components/Header"
import { PublicServicesProvider } from "@/context/PublicServicesContext"

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
    </PublicServicesProvider>
  )
}
