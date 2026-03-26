import { getService } from "@/api/services/services.server"
import ServiceForm from "@/features/services/ServiceForm"

export default async function Page({ params }: { params: Promise<{ id: number }> }) {
  const { id } = await params

  const service = await getService(id)

  return <ServiceForm isCreate={false} serviceToEdit={service} />
}
