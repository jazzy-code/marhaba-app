"use server"

import { apiFetchServer } from "@/config/apiFetchServer"
const prefix = "/service-medical-care"

export async function getMedicalCareAttentions() {
  const data = await apiFetchServer(`${prefix}/attentions`)
  if (data.error) return []
  return data
}

export async function getMedicalCareServices() {
  const data = await apiFetchServer(`${prefix}/services`)
  if (data.error) return []
  return data
}

export async function getMedicalCareSpecialties() {
  const data = await apiFetchServer(`${prefix}/specialties`)
  if (data.error) return []
  return data
}
