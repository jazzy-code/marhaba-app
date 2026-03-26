"use server"

import { apiFetchServer } from "@/config/apiFetchServer"
const prefix = "/service-private-staff"

export async function getPrivateStaffQualifications() {
  const data = await apiFetchServer(`${prefix}/qualifications`)
  if (data.error) return []
  return data
}

export async function getPrivateStaffRoles() {
  const data = await apiFetchServer(`${prefix}/roles`)
  if (data.error) return []
  return data
}
