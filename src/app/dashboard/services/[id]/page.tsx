import { redirect } from "next/navigation"

export default async function Page({ params }: { params: Promise<{ id: number }> }) {
  const { id } = await params
  redirect(`/dashboard/services/${id}/preview`)
}
