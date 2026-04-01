import { getCategories } from "@/api/categories/categories.server"
import { getPublicServiceTypes } from "@/api/services/services.server"
import Header from "@/app/(home)/_components/Header"
import { PublicServicesProvider } from "@/context/PublicServicesContext"

export default async function HomeLayout({ children }: { children: React.ReactNode }) {
  const serviceTypes = await getPublicServiceTypes()
  const categories = await getCategories()

  return (
    <PublicServicesProvider value={{ serviceTypes, categories }}>
      <Header />
      {children}
    </PublicServicesProvider>
  )
}
