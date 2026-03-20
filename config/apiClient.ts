// hooks/use-api-client.ts
"use client";
import { useAuth } from "@clerk/nextjs";

export const useApiClient = () => {
  const { getToken } = useAuth();

  const apiClient = async (endpoint: string, options: RequestInit = {}) => {
    const token = await getToken();
    
    return fetch(`${process.env.NEXT_PUBLIC_API_URL}/api${endpoint}`, {
      ...options,
      headers: {
        ...options.headers,
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    }).then(res => res.json());
  };

  return { apiClient };
};
