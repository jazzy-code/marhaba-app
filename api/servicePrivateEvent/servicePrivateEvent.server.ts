"use server"

import { apiFetchServer } from "@/config/apiFetchServer"
const prefix = "/service-private-event"

export async function getPrivateEventAmenities() {
  const data = await apiFetchServer(`${prefix}/amenities`)
  if (data.error) return []
  return data
}

export async function getPrivateEventTypes() {
  const data = await apiFetchServer(`${prefix}/types`)
  if (data.error) return []
  return data
}
