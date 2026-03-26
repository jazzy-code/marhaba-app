"use server"

import { apiServer } from "@/api/apiServer"
const prefix = "/service-private-event"

export async function getPrivateEventAmenities() {
  const data = await apiServer(`${prefix}/amenities`)
  if (data.error) return []
  return data
}

export async function getPrivateEventTypes() {
  const data = await apiServer(`${prefix}/types`)
  if (data.error) return []
  return data
}
