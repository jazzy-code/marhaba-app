// api/axios.ts
import axios from "axios"

export const api = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_API_URL}/api`,
  headers: {
    Accept: "application/json"
  }
})

// Manejo global de errores
api.interceptors.response.use(
  (response) => response,
  (error) => {
    // aquí puedes centralizar errores
    const message = error.response?.data?.message || "Unexpected error"

    return Promise.reject({
      ...error,
      message
    })
  }
)

export const setAuthToken = (token: string | null) => {
  if (token) {
    api.defaults.headers.common["Authorization"] = `Bearer ${token}`
  } else {
    delete api.defaults.headers.common["Authorization"]
  }
}
