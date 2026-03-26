"use server"

import { apiFetchServer } from "@/config/apiFetchServer"
const prefix = "/services"

interface ServicesParams {
  page?: any
  size?: any
  sort?: any
  order?: any
}

export async function getServices(params: ServicesParams) {
  const data = await apiFetchServer(prefix, { params })
  if (data.error) return null
  return data
}

export async function getServicesBySlug(slug: string, params: ServicesParams) {
  const data = await apiFetchServer(prefix, { params: { ...params, slug: slug } })
  if (data.error) return null
  return data
}

export async function getService(id: number) {
  const data = await apiFetchServer(`${prefix}/${id}`)
  if (data.error) return null
  return data
}

export async function getServiceTypes() {
  const data = await apiFetchServer(`${prefix}/types`)
  if (data.error) return []
  return data
}

export async function getServiceStatus() {
  const data = await apiFetchServer(`${prefix}/status`)
  if (data.error) return []
  return data
}

export async function getServicesStats() {
  const data = await apiFetchServer(`${prefix}/stats`)
  if (data.error) return null
  return data
}
