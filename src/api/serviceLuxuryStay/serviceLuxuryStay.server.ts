"use server"

import { apiServer } from "@/api/apiServer"
const prefix = "/service-luxury-stay"

export async function getLuxuryStayAmenities() {
  const data = await apiServer(`${prefix}/amenities`)
  if (data.error) return []
  return data
}

export async function getLuxuryStayCategories() {
  const data = await apiServer(`${prefix}/categories`)
  if (data.error) return []
  return data
}

export async function getLuxuryStayRooms() {
  const data = await apiServer(`${prefix}/rooms`)
  if (data.error) return []
  return data
}
