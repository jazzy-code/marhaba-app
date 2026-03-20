export const baseServiceForm = {
  serviceType: '',
  reference: '',
  title: '',
  subtitle: 'A Subtitle',
  shortDescription: '',
  longDescription: '',
  location: '',
  locationUrl: '',
  exclusiveListing: true,
  latitute: '',
  longitude: '',
  privacyLevel: 0,
  modelPrice: 'FIXED',
  price: 100,
  currency: 'EUR',
  heroImage: '',
  videoUrl: '',
  serviceStatusId: 1 // PENDING
}

export const serviceRealEstateForm = {
  ...baseServiceForm,
  serviceType: 'RealEstate',
  realEstateTypeId: 1,
  modality: 'SALE',
  surfaceBuiltMt2: '',
  surfaceTerraceMt2: '',
  surfacePlotMt2: '',
  rooms: '',
  fullBathrooms: '',
  halfBathrooms: '',
  realEstateStayTypeId: 1,
  touristLicense: '',
  guestsCapacity: '',
  realEstateHousingStatusId: 1,
  realEstateHasAmenities: []
}

export const servicePropertyManagementForm = {
  reference: '',
  serviceType: 'PropertyManagement',
  title: '',
  subtitle: '',
  shortDescription: '',
  longDescription: '',
  location: '',
  locationUrl: '',
  exclusiveListing: false,
  latitute: '',
  longitude: '',
  monthlyRate: '',
  managementFee: '',
  hasTechnicalInspection: false,
  propertyManagementTypeId: '',
  propertyManagementHasAmenities: [] as string[],
}

export const serviceLuxuryCarForm = {
  isServiceInitialized: true,
  serviceType: 'LuxuryCar',
  brand: "",
  model: "",
  edition: "",
  year: "",
  exteriorLuxuryCarColorId: "",
  interiorLuxuryCarColorId: "",
  passengersCapacity: "",
  driveMode: "SELFDRIVE",
  transmission: "AUTOMATIC",
  dailyRate: "",
  securityDeposit: "",
  dailyKilometers: "",
  minAge: "",
  sellPrice: "",
  kilometers: "",
  luxuryCarHasAmenities: [] as string[],
}

export const serviceYachtForm = {
  isServiceInitialized: true,
  serviceType: 'Yacht',
  modality: 'SALE',
  shipyard: "",
  model: "",
  constructionYear: "",
  refitYear: "",
  minHours: "",
  maxHours: "",
  lengthMeters: "",
  maxSpeed: "",
  totalCabins: "",
  passengersCapacity: "",
  port: "",
  dailyRate: "",
  fuelPerformance: "",
  apa: "",
  sellPrice: "",
  motorHours: "",
  countryId: "",
  yachtHasAmenities: [] as string[],
  yachtTripulations: [
    {
      name: "",
      yachtTripulationRoleId: "",
    },
  ],
}

export const serviceJetForm = {
  isServiceInitialized: true,
  serviceType: "Jet",
  modality: "RENT",
  model: "",
  jetCategoryId: "",
  nmRange: "",
  passengersCapacity: "",
  lengthMeters: "",
  maxSpeed: "",
  jetCateringId: "",
  hourlyRate: "",
  sellPrice: "",
  totalHours: "",
  jetHasAmenities: [] as string[]
}

export const serviceLuxuryStayForm = {
  isServiceInitialized: true,
  serviceType: "LuxuryStay",
  totalGuests: "",
  checkIn: "",
  checkOut: "",
  cancelation: "",
  luxuryStayCategoryId: "",
  luxuryStayRoomId: "",
  luxuryStayHasAmenities: [] as string[]
}

export const serviceMedicalCareForm = {
  isServiceInitialized: true,
  serviceType: "MedicalCare",
  certifications: "",
  response: "",
  isCleanupIncluded: false,
  isServiceAndTravelIncluded: false,
  medicalCareHasServices: [] as string[],
  medicalCareHasLanguages: [] as string[],
  medicalCareHasSpecialities: [] as string[],
  medicalCareHasAttentions: [] as string[]
}

export const serviceSecurityGuardForm = {
  isServiceInitialized: true,
  serviceType: "SecurityGuard",
  isArmed: false,
  discretion: "",
  minContractUnity: "",
  minContractPeriod: "",
  securityGuardProfileId: ""
}

export const servicePrivateEventForm = {
  isServiceInitialized: true,
  serviceType: "PrivateEvent",
  capacity: "",
  leadTimeDays: "",
  privateEventTypeId: "",
  privateEventHasAmenities: [] as string[]
}

export const servicePrivateStaffForm = {
  isServiceInitialized: true,
  serviceType: "PrivateStaff",
  privateStaffRoleId: "",
  regime: "",
  hasVetting: false,
  privateStaffHasQualifications: [] as string[]
}

export const serviceBeautySpaForm = {
  isServiceInitialized: true,
  serviceType: "BeautySpa",
  durationMinutes: "",
  hasEquipment: false,
  beautySpaHasTreatments: [] as string[],
  beautySpaHasProducts: [] as string[]
}

export const serviceGolfForm = {
  isServiceInitialized: true,
  serviceType: "Golf",
  totalHoles: "",
  handicapRequiredMale: "",
  handicapRequiredFemale: "",
  maxPlayers: "",
  greenFee: "",
  conciergeFee: "",
  isElectricBuggyIncluded: false,
  golfHasAmenities: [] as string[]
}

export const serviceSupportCoachForm = {
  isServiceInitialized: true,
  serviceType: "SupportCoach",
  level: "",
  place: "",
  equipment: "",
  supportCoachDisciplineId: ""
}

export const getServiceFormInitalValues = (serviceType : string) => {
  switch (serviceType) {
    case 'RealEstate':
      return {...baseServiceForm, ...serviceRealEstateForm}
    case 'LuxuryCar':
      return {...baseServiceForm, ...serviceLuxuryCarForm}
    case 'Yacht':
      return {...baseServiceForm, ...serviceYachtForm}
    case 'Jet':
      return {...baseServiceForm, ...serviceJetForm}
    case 'LuxuryStay':
      return {...baseServiceForm, ...serviceLuxuryStayForm}
    case 'MedicalCare':
      return {...baseServiceForm, ...serviceMedicalCareForm}
    case 'SecurityGuard':
      return {...baseServiceForm, ...serviceSecurityGuardForm}
    case 'PrivateEvent':
      return {...baseServiceForm, ...servicePrivateEventForm}
    case 'PrivateStaff':
      return {...baseServiceForm, ...servicePrivateStaffForm}
    case 'BeautySpa':
      return {...baseServiceForm, ...serviceBeautySpaForm}
    case 'Golf':
      return {...baseServiceForm, ...serviceGolfForm}
    case 'SupportCoach':
      return {...baseServiceForm, ...serviceSupportCoachForm}
    default:
      return baseServiceForm
  }
}
