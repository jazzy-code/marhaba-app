"use server"

import { apiServer } from "@/api/apiServer"
const prefix = "/service-beauty-spa"

export async function getBeautySpaProducts() {
  const data = await apiServer(`${prefix}/products`)
  if (data.error) return []
  return data
}

export async function getBeautySpaTreatments() {
  const data = await apiServer(`${prefix}/treatments`)
  if (data.error) return []
  return data
}
