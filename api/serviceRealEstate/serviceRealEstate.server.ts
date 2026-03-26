"use server"

import { apiFetchServer } from "@/config/apiFetchServer"
const prefix = "/service-real-estate"

export async function getRealEstateAmenities() {
  const data = await apiFetchServer(`${prefix}/amenities`)
  if (data.error) return []
  return data
}

export async function getRealEstateServices() {
  const data = await apiFetchServer(`${prefix}/services`)
  if (data.error) return []
  return data
}

export async function getRealEstateTypes() {
  const data = await apiFetchServer(`${prefix}/types`)
  if (data.error) return null
  return data
}

export async function getRealEstateStayTypes() {
  const data = await apiFetchServer(`${prefix}/stay-types`)
  if (data.error) return null
  return data
}

export async function getRealEstateHousingStatus() {
  const data = await apiFetchServer(`${prefix}/housing-status`)
  if (data.error) return null
  return data
}
