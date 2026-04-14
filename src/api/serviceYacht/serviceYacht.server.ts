"use server"

import { apiServer } from "@/api/apiServer"
const prefix = "/service-yacht"

export async function getYachtAmenities() {
  const data = await apiServer(`${prefix}/amenities`)
  if (data.error) return []
  return data
}

export async function getYachtTripulationRoles() {
  const data = await apiServer(`${prefix}/tripulation-roles`)
  if (data.error) return []
  return data
}
