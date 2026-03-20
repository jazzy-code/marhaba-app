const API_URL = process.env.NEXT_PUBLIC_API_URL

export const apiClient = async (
  url: string,
  options?: RequestInit
) => {
  const res = await fetch(`${API_URL}${url}`, {
    headers: {
      "Content-Type": "application/json"
    },
    ...options
  })

  if (!res.ok) {
    const error = await res.json().catch(() => null)
    throw new Error(error?.message || "API Error")
  }

  return res.json()
}