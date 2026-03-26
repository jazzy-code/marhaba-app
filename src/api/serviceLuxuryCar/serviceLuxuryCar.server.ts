"use server"

import { apiServer } from "@/api/apiServer"
const prefix = "/service-luxury-car"

export async function getLuxuryCarAmenities() {
  const data = await apiServer(`${prefix}/amenities`)
  if (data.error) return []
  return data
}

export async function getLuxuryCarLegalSituations() {
  const data = await apiServer(`${prefix}/legal-situations`)
  if (data.error) return []
  return data
}

export async function getLuxuryCarColors() {
  const data = await apiServer(`${prefix}/colors`)
  if (data.error) return null
  return data
}
