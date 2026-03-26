import { getServicesBySlug } from "@/api/services/services.server"
import CatalogPage from "@/components/home/CatalogPage"

export default async function Page({ params }: { params: Promise<{ serviceSlug: string }> }) {
  const { serviceSlug } = await params
  const services = await getServicesBySlug(serviceSlug, { page: 1, size: 100 })

  return <CatalogPage services={services} />
}
