import { getService } from "@/app/lib/dashboard/apiServices"
import ServiceForm from "@/components/dashboard/services/ServiceForm"

export default async function Page({ params }: { params: Promise<{ id: string[] }> }) {
  const { id } = await params

  const service = await getService(id[0])

  return <ServiceForm serviceToEdit={service} />
}
