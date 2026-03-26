"use client"
import { createContext, useContext } from "react"

import {
  BeautySpaHelpers,
  GolfHelpers,
  Helpers,
  JetHelpers,
  LuxuryCarHelpers,
  LuxuryStayHelpers,
  MedicalCareHelpers,
  PrivateEventHelpers,
  PrivateStaffHelpers,
  RealEstateHelpers,
  SecurityGuardHelpers,
  ServicesHelpers,
  TrainingCoachHelpers,
  YachtHelpers
} from "@/types/services"

interface ServicesContextProps {
  helpers: Helpers
  services: ServicesHelpers
  beautySpa: BeautySpaHelpers
  golf: GolfHelpers
  jet: JetHelpers
  luxuryCar: LuxuryCarHelpers
  luxuryStay: LuxuryStayHelpers
  medicalCare: MedicalCareHelpers
  privateEvent: PrivateEventHelpers
  privateStaff: PrivateStaffHelpers
  realEstate: RealEstateHelpers
  securityGuard: SecurityGuardHelpers
  trainingCoach: TrainingCoachHelpers
  yacht: YachtHelpers
}

const ServicesContext = createContext<ServicesContextProps | undefined>(undefined)

export function ServicesProvider({ children, value }: { children: React.ReactNode; value: ServicesContextProps }) {
  return <ServicesContext.Provider value={value}>{children}</ServicesContext.Provider>
}

export const useServices = () => {
  const context = useContext(ServicesContext)
  if (!context) throw new Error("useServices debe usarse dentro de ServicesProvider")
  return context
}
