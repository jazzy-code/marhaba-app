import { getServiceTypes } from "@/api/services/services.server"
import Header from "@/components/Header"
import { PublicServicesProvider } from "@/context/PublicServicesContext"

export default async function HomeLayout({ children }: { children: React.ReactNode }) {
  const serviceTypes = await getServiceTypes()
  return (
    <PublicServicesProvider value={{ serviceTypes }}>
      <Header />
      {children}
    </PublicServicesProvider>
  )
}
