import { apiFetchServer } from "@/config/apiFetchServer"
const prefix = "/auth"

export async function getAuthUser() {
  const data = await apiFetchServer(`${prefix}/me`)
  if (data.error) return null
  return data
}
