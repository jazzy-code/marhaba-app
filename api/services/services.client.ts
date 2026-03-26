// services/services.api.ts
import { api } from "@/api/axios"

export const getServices = async (params?: any) => {
  const { data } = await api.get("/services", { params })
  return data
}

export const getService = async (id: string) => {
  const { data } = await api.get(`/services/${id}`)
  return data
}

export const createService = async (payload: any) => {
  const { data } = await api.post("/services", payload)
  return data
}

export const updateService = async ({ serviceId, ...props }: any) => {
  const { data } = await api.put(`/services/${serviceId}`, props)
  return data
}

export const deleteService = async (id: string) => {
  const { data } = await api.delete(`/services/${id}`)
  return data
}

export const getServiceStats = async () => {
  const { data } = await api.get("/services/stats")
  return data
}
