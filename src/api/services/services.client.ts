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

export const uploadServiceFiles = async (serviceId: string, files: any) => {
  const formData = new FormData()

  Object.keys(files).forEach((key) => {
    const value = files[key]

    if (value === null || value === undefined) return

    if (Array.isArray(value)) {
      value.forEach((item, index) => {
        if (typeof item === "object" && !(item instanceof File)) {
          Object.keys(item).forEach((objKey) => {
            formData.append(`${key}[${index}][${objKey}]`, item[objKey])
          })
        } else {
          formData.append(`${key}`, item)
        }
      })
    } else if (typeof value === "boolean") {
      formData.append(key, value ? "1" : "0")
    } else {
      formData.append(key, value)
    }
  })

  const { data } = await apiClient.post(`/${prefix}/${serviceId}/files`, formData, {
    headers: { "Content-Type": "multipart/form-data" }
  })
  return data
}
