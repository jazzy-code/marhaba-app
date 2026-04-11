import { getPublicServices } from "@/api/services/services.server"
import CatalogPage from "@/features/home/CatalogPage"

export default async function Page({ params }: { params: Promise<{ serviceSlug: string }> }) {
  const { serviceSlug } = await params
  const services = await getPublicServices({ page: 1, size: 100, slug: serviceSlug })

  return <CatalogPage initialData={services} slug={serviceSlug} />
}
