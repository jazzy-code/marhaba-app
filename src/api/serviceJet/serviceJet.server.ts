"use server"

import { apiServer } from "@/api/apiServer"
const prefix = "/service-jet"

export async function getJetAmenities() {
  const data = await apiServer(`${prefix}/amenities`)
  if (data.error) return []
  return data
}

export async function getJetCategories() {
  const data = await apiServer(`${prefix}/categories`)
  if (data.error) return []
  return data
}

export async function getJetCaterings() {
  const data = await apiServer(`${prefix}/caterings`)
  if (data.error) return []
  return data
}
