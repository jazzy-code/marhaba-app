// hooks/useApi.ts
import { useAuth } from "@clerk/nextjs";
import { useEffect } from "react";
import axiosApi from "@/config/axios";

export const useApi = () => {
  const { getToken } = useAuth();

  useEffect(() => {
    // Configuramos el interceptor de petición
    const requestInterceptor = axiosApi.interceptors.request.use(
      async (config: any) => {
        // Obtenemos el token fresco de Clerk
        const token = await getToken();
        
        if (token) {
          config.headers.Authorization = `Bearer ${token}`;
        }
        
        return config;
      },
      (error: any) => Promise.reject(error)
    );

    // Limpiamos el interceptor cuando el componente se desmonte
    return () => {
      axiosApi.interceptors.request.eject(requestInterceptor);
    };
  }, [getToken]);

  return axiosApi;
};
