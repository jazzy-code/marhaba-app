import { apiFetchServer } from "@/config/apiFetchServer"
const prefix = "/helpers"

export async function getLanguages() {
  const data = await apiFetchServer(`${prefix}/languages`)
  if (data.error) return []
  return data
}

export async function getcountries() {
  const data = await apiFetchServer(`${prefix}/countries`)
  if (data.error) return []
  return data
}
