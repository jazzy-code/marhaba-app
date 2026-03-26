"use server"

import { apiServer } from "@/api/apiServer"
const prefix = "/service-security-guard"

export async function getSecurityGuardBackgroundTypes() {
  const data = await apiServer(`${prefix}/background-types`)
  if (data.error) return []
  return data
}

export async function getSecurityGuardProfiles() {
  const data = await apiServer(`${prefix}/profiles`)
  if (data.error) return []
  return data
}
