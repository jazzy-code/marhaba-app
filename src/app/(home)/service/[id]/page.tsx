import { getPublicService } from "@/api/services/services.server"
import ServicePreviewPage from "@/features/services/ServicePreviewPage"

export default async function Page({ params }: { params: Promise<{ id: number }> }) {
  const { id } = await params

  const service = await getPublicService(id)

  return (
    <div className="h-screen w-full">
      <main className="flex-1 flex flex-col h-full overflow-hidden relative">
        <ServicePreviewPage service={service} isPublic />
      </main>
    </div>
  )
}
