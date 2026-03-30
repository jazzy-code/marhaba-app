import { apiServer } from "@/api/apiServer"
const prefix = "/helpers"

export async function getLanguages() {
  const data = await apiServer(`${prefix}/languages`)
  if (data.error) return []
  return data
}

export async function getCountries() {
  const data = await apiServer(`${prefix}/countries`)
  if (data.error) return []
  return data
}

export async function getMalagaRegions() {
  const data = await apiServer(`${prefix}/malaga-regions`)
  if (data.error) return []
  return data
}

export async function getMalagaCities() {
  const data = await apiServer(`${prefix}/malaga-cities`)
  if (data.error) return []
  return data
}
