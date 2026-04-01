// services/services.client.ts
import { apiClient } from "@/api/apiClient"
const prefix = "services"

export const getServices = async (params?: any) => {
  const { data } = await apiClient.get(`/${prefix}`, { params })
  return data
}

export const getPublicServices = async (params?: any) => {
  const { data } = await apiClient.get(`/public/${prefix}`, { params })
  return data
}

export const getService = async (id: string) => {
  const { data } = await apiClient.get(`/${prefix}/${id}`)
  return data
}

export const createService = async (payload: any) => {
  const { data } = await apiClient.post(`/${prefix}`, payload)
  return data
}

export const updateService = async ({ serviceId, ...props }: any) => {
  const { data } = await apiClient.put(`/${prefix}/${serviceId}`, props)
  return data
}

export const deleteService = async (id: string) => {
  const { data } = await apiClient.delete(`/${prefix}/${id}`)
  return data
}

export const getServiceStats = async () => {
  const { data } = await apiClient.get("/services/stats")
  return data
}
