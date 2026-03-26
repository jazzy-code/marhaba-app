"use server"

import { apiFetchServer } from "@/config/apiFetchServer"
const prefix = "/service-jet"

export async function getJetAmenities() {
  const data = await apiFetchServer(`${prefix}/amenities`)
  if (data.error) return []
  return data
}

export async function getJetCategories() {
  const data = await apiFetchServer(`${prefix}/categories`)
  if (data.error) return []
  return data
}

export async function getJetCaterings() {
  const data = await apiFetchServer(`${prefix}/caterings`)
  if (data.error) return []
  return data
}
