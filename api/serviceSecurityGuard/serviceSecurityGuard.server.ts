"use server"

import { apiFetchServer } from "@/config/apiFetchServer"
const prefix = "/service-security-guard"

export async function getSecurityGuardBackgroundTypes() {
  const data = await apiFetchServer(`${prefix}/background-types`)
  if (data.error) return []
  return data
}

export async function getSecurityGuardProfiles() {
  const data = await apiFetchServer(`${prefix}/profiles`)
  if (data.error) return []
  return data
}
