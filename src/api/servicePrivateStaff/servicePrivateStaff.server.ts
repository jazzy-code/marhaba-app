"use server"

import { apiServer } from "@/api/apiServer"
const prefix = "/service-private-staff"

export async function getPrivateStaffQualifications() {
  const data = await apiServer(`${prefix}/qualifications`)
  if (data.error) return []
  return data
}

export async function getPrivateStaffRoles() {
  const data = await apiServer(`${prefix}/roles`)
  if (data.error) return []
  return data
}
