import {
  getAmenities,
  getHousingStatus,
  getStayTypes,
  getTypes
} from "@/api/serviceRealEstate/serviceRealEstate.server"
import Header from "@/components/dashboard/Header"
import SideMenu from "@/components/dashboard/SideMenu"
import { ServicesProvider } from "@/context/ServicesContext"

export default async function LayoutDashboard({ children }: { children: React.ReactNode }) {
  // Real Estate Helpers
  const [realEstateAmenities, realEstateTypes, realEstateStayTypes, realEstateHousingStatus] = await Promise.all([
    getAmenities(),
    getTypes(),
    getStayTypes(),
    getHousingStatus()
  ])

  const realEstate = {
    amenities: realEstateAmenities,
    types: realEstateTypes,
    stayTypes: realEstateStayTypes,
    housingStatus: realEstateHousingStatus
  }

  const allData = {
    realEstate
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
