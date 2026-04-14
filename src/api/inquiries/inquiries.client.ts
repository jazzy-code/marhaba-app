// inquires/inquires.client.ts
import { apiClient } from "@/api/apiClient"
const prefix = "inquiries"

export const getInquiries = async (params?: any) => {
  const { data } = await apiClient.get(`/${prefix}`, { params })
  return data
}

export const createInquiry = async (payload: any) => {
  const { data } = await apiClient.post(`/${prefix}`, payload)
  return data
}

export const getInquiriesStats = async () => {
  const { data } = await apiClient.get(`/${prefix}/stats`)
  return data
}

export const getInquiriesArchived = async (params?: any) => {
  const { data } = await apiClient.get(`/${prefix}/archived`, { params })
  return data
}

export const contactInquiry = async (id: number) => {
  const { data } = await apiClient.put(`/${prefix}/${id}/contact`)
  return data
}

export const archiveInquiry = async (id: number) => {
  const { data } = await apiClient.put(`/${prefix}/${id}/archive`)
  return data
}
