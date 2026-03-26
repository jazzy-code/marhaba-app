"use server"

import { apiFetchServer } from "@/config/apiFetchServer"
const prefix = "/service-luxury-car"

export async function getLuxuryCarAmenities() {
  const data = await apiFetchServer(`${prefix}/amenities`)
  if (data.error) return []
  return data
}

export async function getLuxuryCarLegalSituations() {
  const data = await apiFetchServer(`${prefix}/legal-situations`)
  if (data.error) return []
  return data
}

export async function getLuxuryCarColors() {
  const data = await apiFetchServer(`${prefix}/colors`)
  if (data.error) return null
  return data
}
