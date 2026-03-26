"use client"
import { createContext, ReactNode, useContext } from "react"

import { ServiceTypeItem } from "@/types/services"

interface PublicServicesContextProps {
  serviceTypes: ServiceTypeItem[]
}

const PublicServicesContext = createContext<PublicServicesContextProps | undefined>(undefined)

export function PublicServicesProvider({
  children,
  value
}: {
  children: ReactNode
  value: PublicServicesContextProps
}) {
  return <PublicServicesContext.Provider value={value}>{children}</PublicServicesContext.Provider>
}

export const usePublicServices = () => {
  const context = useContext(PublicServicesContext)
  if (!context) throw new Error("usePublicServices debe usarse dentro de PublicServicesProvider")
  return context
}
