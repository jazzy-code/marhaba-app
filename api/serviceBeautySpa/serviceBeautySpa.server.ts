"use server"

import { apiFetchServer } from "@/config/apiFetchServer"
const prefix = "/service-beauty-spa"

export async function getBeautySpaProducts() {
  const data = await apiFetchServer(`${prefix}/products`)
  if (data.error) return []
  return data
}

export async function getBeautySpaTreatments() {
  const data = await apiFetchServer(`${prefix}/treatments`)
  if (data.error) return []
  return data
}
