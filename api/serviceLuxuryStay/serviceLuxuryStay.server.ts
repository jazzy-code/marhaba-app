"use server"

import { apiFetchServer } from "@/config/apiFetchServer"
const prefix = "/service-luxury-stay"

export async function getLuxuryStayAmenities() {
  const data = await apiFetchServer(`${prefix}/amenities`)
  if (data.error) return []
  return data
}

export async function getLuxuryStayCategories() {
  const data = await apiFetchServer(`${prefix}/categories`)
  if (data.error) return []
  return data
}

export async function getLuxuryStayRooms() {
  const data = await apiFetchServer(`${prefix}/rooms`)
  if (data.error) return []
  return data
}
