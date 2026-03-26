import { getServices } from "@/api/services/services.server"
import CatalogPage from "@/features/home/CatalogPage"

export default async function Page() {
  const services = await getServices({ page: 1, size: 100 })

  return <CatalogPage services={services} />
}
