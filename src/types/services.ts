// types/catalogs.ts

export type Status = "Approved" | "Pending" | "Rejected"

export interface CatalogItem {
  id: number
  name: string
}

export interface AmenityItem extends CatalogItem {
  description?: string
  lucideIcon?: string
}

export interface ServiceTypeItem extends CatalogItem {
  key: string
  slug: string
}

export interface CategoryItem extends CatalogItem {
  serviceTypes: ServiceTypeItem[]
}

export interface ColorItem extends CatalogItem {
  hex: string
}

export interface CountryItem extends CatalogItem {
  iso: string
}

export interface CityItem extends CatalogItem {
  regionId: number
}

export interface Helpers {
  languages: CatalogItem[]
  countries: CountryItem[]
  malagaRegions: CatalogItem[]
  malagaCities: CityItem[]
}

// Service Helpers
export interface ServicesHelpers {
  types: ServiceTypeItem[]
  status: CatalogItem[]
}

// Service RealEstate Helpers
export interface RealEstateHelpers {
  types: CatalogItem[]
  stayTypes: CatalogItem[]
  housingStatus: CatalogItem[]
  amenities: AmenityItem[]
  services: AmenityItem[]
}

// Service LuxuryCar Helpers
export interface LuxuryCarHelpers {
  colors: ColorItem[]
  legalSituations: CatalogItem[]
  amenities: AmenityItem[]
}

export interface YachtHelpers {
  tripulationRoles: CatalogItem[]
  amenities: AmenityItem[]
}

export interface JetHelpers {
  categories: CatalogItem[]
  caterings: CatalogItem[]
  amenities: AmenityItem[]
}

export interface LuxuryStayHelpers {
  categories: CatalogItem[]
  rooms: CatalogItem[]
  amenities: AmenityItem[]
}

export interface MedicalCareHelpers {
  attentions: CatalogItem[]
  specialties: CatalogItem[]
  services: AmenityItem[]
}

export interface SecurityGuardHelpers {
  backgroundTypes: CatalogItem[]
  profiles: CatalogItem[]
}

export interface PrivateEventHelpers {
  types: CatalogItem[]
  amenities: AmenityItem[]
}

export interface PrivateStaffHelpers {
  roles: CatalogItem[]
  qualifications: CatalogItem[]
}

export interface BeautySpaHelpers {
  treatments: CatalogItem[]
  products: CatalogItem[]
}

export interface GolfHelpers {
  amenities: AmenityItem[]
}

export interface TrainingCoachHelpers {
  disciplines: CatalogItem[]
}

export interface ListPageProps {
  initialData: any[]
}

export interface ServiceFormProps {
  serviceToEditForm?: any
  serviceType: any
  isCreate: boolean
  mutate: (values: any) => void
  isPending: boolean
  serviceFiles: any
  setServiceFiles: (files: any) => void
}

export interface ChatMessage {
  role: "user" | "model"
  text: string
  grounding?: any[] // Holds grounding chunks from Gemini Search/Maps
}
