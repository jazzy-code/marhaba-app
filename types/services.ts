// types/catalogs.ts

export interface CatalogItem {
  id: number
  name: string
}

export interface AmenityItem extends CatalogItem {
  description?: string
  lucideIcon?: string
}

// Interfaz específica para Real Estate
export interface RealEstateHelpers {
  types: CatalogItem[]
  stayTypes: CatalogItem[]
  housingStatus: CatalogItem[]
  amenities: AmenityItem[] // O una interfaz que extienda CatalogItem si tiene iconos, etc.
}
