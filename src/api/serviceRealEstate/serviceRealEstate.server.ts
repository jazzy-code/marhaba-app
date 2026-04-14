"use server"

import { apiServer } from "@/api/apiServer"
const prefix = "/service-real-estate"

export async function getRealEstateAmenities() {
  const data = await apiServer(`${prefix}/amenities`)
  if (data.error) return []
  return data
}

export async function getRealEstateServices() {
  const data = await apiServer(`${prefix}/services`)
  if (data.error) return []
  return data
}

export async function getRealEstateTypes() {
  const data = await apiServer(`${prefix}/types`)
  if (data.error) return null
  return data
}

export async function getRealEstateStayTypes() {
  const data = await apiServer(`${prefix}/stay-types`)
  if (data.error) return null
  return data
}

export async function getRealEstateHousingStatus() {
  const data = await apiServer(`${prefix}/housing-status`)
  if (data.error) return null
  return data
}
