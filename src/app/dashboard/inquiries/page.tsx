import { getInquiries } from "@/api/inquiries/inquiries.server"
import InquiriesPage from "@/features/inquiries/InquiriesPage"

export default async function InquiresPage() {
  const initialData = await getInquiries({ page: 1, size: 10 })

  return <InquiriesPage initialData={initialData} />
}
