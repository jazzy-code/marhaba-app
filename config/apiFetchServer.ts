import { auth } from "@clerk/nextjs/server";

export const apiFetchServer = async (endpoint: string, options: RequestInit = {}) => {
  // 1. Obtenemos el token desde el contexto del servidor
  const { getToken } = await auth();
  const token = await getToken();

  const baseUrl = process.env.API_BASE_URL;

  console.log("baseUrl", baseUrl);

  // 2. Fusionar headers
  const headers = new Headers(options.headers);
  if (token) {
    headers.set("Authorization", `Bearer ${token}`);
  }
  headers.set("Content-Type", "application/json");

  // 3. Petición
  const response = await fetch(`${baseUrl}/api${endpoint}`, {
    ...options,
    headers,
  });

  // Manejo básico de errores
  if (!response.ok) {
    throw new Error(`API Error: ${response.status}`);
  }

  return response.json();
};