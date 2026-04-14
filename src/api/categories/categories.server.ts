import { apiServer } from "@/api/apiServer"
const prefix = "/categories"

export async function getCategories() {
  const data = await apiServer(`${prefix}`)
  if (data.error) return []
  return data
}
