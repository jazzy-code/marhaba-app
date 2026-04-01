import { getPublicServices } from "@/api/services/services.server"
import CatalogPage from "@/features/home/CatalogPage"

export default async function Page({ searchParams }: { searchParams: Promise<{ [key: string]: string | undefined }> }) {
  const { search } = await searchParams

  const services = await getPublicServices({ page: 1, size: 100, search })

  return <CatalogPage initialData={services} />
}
