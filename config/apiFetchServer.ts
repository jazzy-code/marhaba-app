import { auth } from "@clerk/nextjs/server"

export const apiFetchServer = async (
  endpoint: string,
  options: RequestInit & { params?: Record<string, any> } = {}
) => {
  // Get Clerk Token
  const { getToken } = await auth()
  const token = await getToken()

  const apiUrl = process.env.API_URL

  const headers = new Headers(options.headers)
  // If token is present add to the headers
  if (token) {
    headers.set("Authorization", `Bearer ${token}`)
  }
  headers.set("Content-Type", "application/json")

  let url = `${apiUrl}/api${endpoint}`

  if (options.params) {
    const searchParams = new URLSearchParams()

    Object.entries(options.params).forEach(([key, value]) => {
      if (value !== undefined && value !== null) {
        searchParams.append(key, String(value))
      }
    })

    url += `?${searchParams.toString()}`
  }

  const response = await fetch(url, {
    ...options,
    headers
  })

  const data = await response.json()

  // Manejo básico de errores
  if (!response.ok) {
    console.error("Error:", data)
    return {
      error: true,
      ...data
    }
    // throw new Error(error.message)
  }

  return data
}
