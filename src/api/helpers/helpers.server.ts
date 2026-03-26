import { apiServer } from "@/api/apiServer"
const prefix = "/helpers"

export async function getLanguages() {
  const data = await apiServer(`${prefix}/languages`)
  if (data.error) return []
  return data
}

export async function getcountries() {
  const data = await apiServer(`${prefix}/countries`)
  if (data.error) return []
  return data
}
