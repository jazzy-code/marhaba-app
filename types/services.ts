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

export interface ColorItem extends CatalogItem {
  hex: string
}

export interface CountryItem extends CatalogItem {
  iso: string
}

export interface Helpers {
  languages: CatalogItem[]
  countries: CountryItem[]
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
