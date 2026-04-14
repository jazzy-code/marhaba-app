"use server"

import { apiServer } from "@/api/apiServer"
const prefix = "/service-golf"

export async function getGolfAmenities() {
  const data = await apiServer(`${prefix}/amenities`)
  if (data.error) return []
  return data
}
