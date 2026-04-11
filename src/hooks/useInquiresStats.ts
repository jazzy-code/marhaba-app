import { useAuth } from "@clerk/nextjs"
import { useQuery } from "@tanstack/react-query"

import { setAuthToken } from "@/api/apiClient"
import { getInquiriesStats } from "@/api/inquiries/inquiries.client"

export const useInquiriesStats = () => {
  const { getToken } = useAuth()

  return useQuery({
    queryKey: ["inquiries-stats"],
    queryFn: async () => {
      const token = await getToken()
      setAuthToken(token)
      return getInquiriesStats()
    },
    staleTime: 1000 * 60 * 5
  })
}
