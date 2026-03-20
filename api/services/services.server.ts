"use server"

import { apiFetchServer } from "@/config/apiFetchServer"

export async function getServices() {
  const data = await apiFetchServer("/services")
  if (data.error) return []
  return data
}

export async function getService(id: string) {
  const data = await apiFetchServer(`/services/${id}`)
  if (data.error) return null
  return data
}