"use server"

import { apiServer } from "@/api/apiServer"
const prefix = "/service-medical-care"

export async function getMedicalCareAttentions() {
  const data = await apiServer(`${prefix}/attentions`)
  if (data.error) return []
  return data
}

export async function getMedicalCareServices() {
  const data = await apiServer(`${prefix}/services`)
  if (data.error) return []
  return data
}

export async function getMedicalCareSpecialties() {
  const data = await apiServer(`${prefix}/specialties`)
  if (data.error) return []
  return data
}
