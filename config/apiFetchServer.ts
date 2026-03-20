import { auth } from "@clerk/nextjs/server";

export const apiFetchServer = async (endpoint: string, options: RequestInit = {}) => {
  // 1. Obtenemos el token desde el contexto del servidor
  const { getToken } = await auth();
  const token = await getToken();

  const apiUrl = process.env.API_URL;

  // 2. Fusionar headers
  const headers = new Headers(options.headers);
  if (token) {
    headers.set("Authorization", `Bearer ${token}`);
  }
  headers.set("Content-Type", "application/json");

  // 3. Petición
  const response = await fetch(`${apiUrl}/api${endpoint}`, {
    ...options,
    headers,
  });

  const data = await response.json();

  // Manejo básico de errores
  if (!response.ok) {
    console.error("Error:", data)
    return {
      error: true,
      ...data
    }
    // throw new Error(error.message)
  }

  return data;
};