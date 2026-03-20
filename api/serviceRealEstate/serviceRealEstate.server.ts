"use server"

import { apiFetchServer } from "@/config/apiFetchServer"
const prefix = '/serviceRealEstate'

export async function getAmenities() {
  const data = await apiFetchServer(`${prefix}/amenities`)
  if (data.error) return []
  return data
}

export async function getTypes() {
  const data = await apiFetchServer(`${prefix}/types`)
  if (data.error) return null
  return data
}

export async function getStayTypes() {
  const data = await apiFetchServer(`${prefix}/stay-types`)
  if (data.error) return null
  return data
}

export async function getHousingStatus() {
  const data = await apiFetchServer(`${prefix}/housing-status`)
  if (data.error) return null
  return data
}