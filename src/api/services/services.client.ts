// services/services.client.ts
import { apiClient } from "@/api/apiClient"

export const getServices = async (params?: any) => {
  const { data } = await apiClient.get("/services", { params })
  return data
}

export const getService = async (id: string) => {
  const { data } = await apiClient.get(`/services/${id}`)
  return data
}

export const createService = async (payload: any) => {
  const { data } = await apiClient.post("/services", payload)
  return data
}

export const updateService = async ({ serviceId, ...props }: any) => {
  const { data } = await apiClient.put(`/services/${serviceId}`, props)
  return data
}

export const deleteService = async (id: string) => {
  const { data } = await apiClient.delete(`/services/${id}`)
  return data
}

export const getServiceStats = async () => {
  const { data } = await apiClient.get("/services/stats")
  return data
}
