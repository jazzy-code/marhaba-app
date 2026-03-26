import { currentUser } from "@clerk/nextjs/server"
import { redirect } from "next/navigation"

import { getcountries, getLanguages } from "@/api/helpers/helpers.server"
import { getBeautySpaProducts, getBeautySpaTreatments } from "@/api/serviceBeautySpa/serviceBeautySpa.server"
import { getGolfAmenities } from "@/api/serviceGolf/serviceGolf.server"
import { getJetAmenities, getJetCategories, getJetCaterings } from "@/api/serviceJet/serviceJet.server"
import {
  getLuxuryCarAmenities,
  getLuxuryCarColors,
  getLuxuryCarLegalSituations
} from "@/api/serviceLuxuryCar/serviceLuxuryCar.server"
import {
  getLuxuryStayAmenities,
  getLuxuryStayCategories,
  getLuxuryStayRooms
} from "@/api/serviceLuxuryStay/serviceLuxuryStay.server"
import {
  getMedicalCareAttentions,
  getMedicalCareServices,
  getMedicalCareSpecialties
} from "@/api/serviceMedicalCare/serviceMedicalCare.server"
import { getPrivateEventAmenities, getPrivateEventTypes } from "@/api/servicePrivateEvent/servicePrivateEvent.server"
import {
  getPrivateStaffQualifications,
  getPrivateStaffRoles
} from "@/api/servicePrivateStaff/servicePrivateStaff.server"
import {
  getRealEstateHousingStatus,
  getRealEstateAmenities,
  getRealEstateServices,
  getRealEstateTypes,
  getRealEstateStayTypes
} from "@/api/serviceRealEstate/serviceRealEstate.server"
import { getServiceStatus, getServiceTypes } from "@/api/services/services.server"
import {
  getSecurityGuardBackgroundTypes,
  getSecurityGuardProfiles
} from "@/api/serviceSecurityGuard/serviceSecurityGuard.server"
import { getTrainingCoachDisciplines } from "@/api/serviceTrainingCoach/serviceTrainingCoach.server"
import { getYachtTripulationRoles, getYachtAmenities } from "@/api/serviceYacht/serviceYacht.server"
import Header from "@/components/dashboard/Header"
import SideMenu from "@/components/dashboard/SideMenu"
import { ServicesProvider } from "@/context/ServicesContext"

export default async function LayoutDashboard({ children }: { children: React.ReactNode }) {
  const user = await currentUser()
  const publicMetadata = user?.publicMetadata

  // If user is ADMIN, redirect
  if (publicMetadata?.userType && publicMetadata?.userType === "ADMIN") redirect("/")

  // Helpers
  const [languages, countries] = await Promise.all([getLanguages(), getcountries()])
  const helpers = { languages, countries }

  // Services Helpers
  const [serviceTypes, serviceStatus] = await Promise.all([getServiceTypes(), getServiceStatus()])
  const services = {
    types: serviceTypes,
    status: serviceStatus
  }

  // Beauty Spa Helpers
  const [beautySpaProducts, beautySpaTreatments] = await Promise.all([getBeautySpaProducts(), getBeautySpaTreatments()])
  const beautySpa = {
    products: beautySpaProducts,
    treatments: beautySpaTreatments
  }
  // Golf Helpers
  const [golfAmenities] = await Promise.all([getGolfAmenities()])
  const golf = { amenities: golfAmenities }

  // Jet Helpers
  const [jetAmenities, jetCaterings, jetCategories] = await Promise.all([
    getJetAmenities(),
    getJetCaterings(),
    getJetCategories()
  ])
  const jet = {
    amenities: jetAmenities,
    caterings: jetCaterings,
    categories: jetCategories
  }

  // LuxuryCar Helpers
  const [luxuryCarAmenities, legalSituations, colors] = await Promise.all([
    getLuxuryCarAmenities(),
    getLuxuryCarLegalSituations(),
    getLuxuryCarColors()
  ])
  const luxuryCar = {
    amenities: luxuryCarAmenities,
    legalSituations,
    colors
  }

  // Luxury Stay Helpers
  const [luxuryStayAmenities, luxuryStayCategories, luxuryStayRooms] = await Promise.all([
    getLuxuryStayAmenities(),
    getLuxuryStayCategories(),
    getLuxuryStayRooms()
  ])
  const luxuryStay = {
    amenities: luxuryStayAmenities,
    categories: luxuryStayCategories,
    rooms: luxuryStayRooms
  }

  // Medical Care Helpers
  const [medicalCareAttentions, medicalCareServices, medicalCareSpecialties] = await Promise.all([
    getMedicalCareAttentions(),
    getMedicalCareServices(),
    getMedicalCareSpecialties()
  ])
  const medicalCare = {
    attentions: medicalCareAttentions,
    services: medicalCareServices,
    specialties: medicalCareSpecialties
  }

  // Private Event Helpers
  const [privateEventAmenities, privateEventTypes] = await Promise.all([
    getPrivateEventAmenities(),
    getPrivateEventTypes()
  ])
  const privateEvent = {
    amenities: privateEventAmenities,
    types: privateEventTypes
  }

  // Private Staff Helpers
  const [privateStaffQualifications, privateStaffRoles] = await Promise.all([
    getPrivateStaffQualifications(),
    getPrivateStaffRoles()
  ])
  const privateStaff = {
    qualifications: privateStaffQualifications,
    roles: privateStaffRoles
  }

  // RealEstate Helpers
  const [realEstateAmenities, realEstateServices, realEstateTypes, realEstateStayTypes, realEstateHousingStatus] =
    await Promise.all([
      getRealEstateAmenities(),
      getRealEstateServices(),
      getRealEstateTypes(),
      getRealEstateStayTypes(),
      getRealEstateHousingStatus()
    ])
  const realEstate = {
    amenities: realEstateAmenities,
    services: realEstateServices,
    types: realEstateTypes,
    stayTypes: realEstateStayTypes,
    housingStatus: realEstateHousingStatus
  }

  // Security Guard Helpers
  const [securityGuardBackgroundTypes, securityGuardProfiles] = await Promise.all([
    getSecurityGuardBackgroundTypes(),
    getSecurityGuardProfiles()
  ])
  const securityGuard = {
    backgroundTypes: securityGuardBackgroundTypes,
    profiles: securityGuardProfiles
  }

  // Training Coach Helpers
  const [trainingCoachDisciplines] = await Promise.all([getTrainingCoachDisciplines()])
  const trainingCoach = {
    disciplines: trainingCoachDisciplines
  }

  // Yacht Helpers
  const [yachtAmenities, tripulationRoles] = await Promise.all([getYachtAmenities(), getYachtTripulationRoles()])
  const yacht = {
    amenities: yachtAmenities,
    tripulationRoles
  }

  // ALL DATA
  const allData = {
    helpers,
    services,
    beautySpa,
    golf,
    jet,
    luxuryCar,
    luxuryStay,
    medicalCare,
    privateEvent,
    privateStaff,
    realEstate,
    securityGuard,
    trainingCoach,
    yacht
  }

  return (
    <ServicesProvider value={allData}>
      <div className="flex h-screen w-full">
        <SideMenu />
        <main className="flex-1 flex flex-col h-full overflow-hidden bg-stone-50/50 dark:bg-background-dark relative">
          <Header />
          {children}
        </main>
      </div>
    </ServicesProvider>
  )
}
