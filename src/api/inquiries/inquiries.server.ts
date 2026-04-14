// inquires/inquires.server.ts
import { apiServer } from "../apiServer"
const prefix = "inquiries"

export const getInquiries = async (params?: any) => {
  const data = await apiServer(`/${prefix}`, { params })
  if (data.error) return null
  return data
}

export const getInquiriesArchived = async (params?: any) => {
  const data = await apiServer(`/${prefix}/archived`, { params })
  if (data.error) return null
  return data
}
