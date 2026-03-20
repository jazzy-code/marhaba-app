"use client";
import { RealEstateHelpers } from "@/types/services";
import { createContext, useContext } from "react";


interface ServicesContextProps {
  realEstate: RealEstateHelpers;
}

const ServicesContext = createContext<ServicesContextProps | undefined>(undefined);

export function ServicesProvider({ children, value }: { children: React.ReactNode; value: ServicesContextProps }) {
  return <ServicesContext.Provider value={value}>{children}</ServicesContext.Provider>;
}

export const useServices = () => {
  const context = useContext(ServicesContext);
  if (!context) throw new Error("useServices debe usarse dentro de ServicesProvider");
  return context;
};