import { getInquiriesArchived } from "@/api/inquiries/inquiries.server"
import InquiriesArchivedPage from "@/features/archive/InquiriesArchivedPage"

export default async function ArchivePage() {
  const initialData = await getInquiriesArchived({ page: 1, size: 10 })

  return <InquiriesArchivedPage initialData={initialData} />
}
