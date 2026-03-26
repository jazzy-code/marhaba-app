"use server"

import { apiFetchServer } from "@/config/apiFetchServer"
const prefix = "/service-golf"

export async function getGolfAmenities() {
  const data = await apiFetchServer(`${prefix}/amenities`)
  if (data.error) return []
  return data
}
