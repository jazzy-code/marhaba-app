"use server"

import { apiFetchServer } from "@/config/apiFetchServer"
const prefix = "/service-yacht"

export async function getYachtAmenities() {
  const data = await apiFetchServer(`${prefix}/amenities`)
  if (data.error) return []
  return data
}

export async function getYachtTripulationRoles() {
  const data = await apiFetchServer(`${prefix}/tripulation-roles`)
  if (data.error) return []
  return data
}
