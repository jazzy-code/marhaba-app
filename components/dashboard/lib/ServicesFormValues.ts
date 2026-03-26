export const baseServiceForm = {
  serviceType: "",
  serviceTypeId: "",
  reference: "",
  title: "",
  subtitle: "A Subtitle",
  shortDescription: "",
  longDescription: "",
  location: "",
  locationUrl: "",
  exclusiveListing: true,
  latitute: "",
  longitude: "",
  privacyLevel: 0,
  priceModel: "FIXED",
  price: 100,
  currency: "EUR",
  heroImage: "",
  videoUrl: "",
  serviceStatusId: 1 // PENDING
}

export const serviceRealEstateForm = {
  ...baseServiceForm,
  modality: "SALE",
  realEstateTypeId: 1,
  surfaceBuiltMt2: "",
  surfaceTerraceMt2: "",
  surfacePlotMt2: "",
  rooms: "",
  fullBathrooms: "",
  halfBathrooms: "",
  realEstateStayTypeId: "",
  touristLicense: "",
  guestsCapacity: "",
  realEstateHousingStatusId: "",
  realEstateHasAmenities: [],
  realEstateHasServices: []
}

export const serviceLuxuryCarForm = {
  ...baseServiceForm,
  modality: "RENT",
  brand: "",
  model: "",
  edition: "",
  year: "",
  transmission: "AUTOMATIC",
  motorType: "",
  cv: "",
  passengersCapacity: "",
  luxuryCarExteriorColorId: "",
  luxuryCarInteriorColorId: "",
  fullServiceHistory: true,
  driveMode: "SELFDRIVE",
  securityDeposit: "",
  dailyKilometers: "",
  minAge: "",
  kilometers: "",
  ownerType: "SINGLE",
  luxuryCarLegalSituationId: "",
  luxuryCarHasAmenities: [] as string[]
}

export const serviceYachtForm = {
  ...baseServiceForm,
  modality: "SALE",
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
  fuelPerformance: "",
  apa: "",
  motorHours: "",
  countryId: "",
  yachtHasAmenities: [] as string[],
  yachtTripulation: [
    {
      name: "",
      yachtTripulationRoleId: ""
    }
  ]
}

export const serviceJetForm = {
  ...baseServiceForm,
  modality: "RENT",
  model: "",
  jetCategoryId: "",
  nmRange: "",
  passengersCapacity: "",
  lengthMeters: "",
  maxSpeed: "",
  jetCateringId: "",
  hourlyRate: "",
  totalHours: "",
  jetHasAmenities: [] as string[]
}

export const serviceLuxuryStayForm = {
  ...baseServiceForm,
  totalGuests: "",
  checkIn: "",
  checkOut: "",
  cancelation: "",
  luxuryStayCategoryId: "",
  luxuryStayRoomId: "",
  luxuryStayHasAmenities: [] as string[]
}

export const serviceMedicalCareForm = {
  ...baseServiceForm,
  certifications: "",
  response: "",
  isCleanupIncluded: false,
  isServiceAndTravelIncluded: false,
  medicalCareHasServices: [] as string[],
  medicalCareHasLanguages: [] as string[],
  medicalCareHasSpecialties: [] as string[],
  medicalCareHasAttentions: [] as string[]
}

export const serviceSecurityGuardForm = {
  ...baseServiceForm,
  isArmed: false,
  discretion: "",
  minContractUnity: "",
  minContractPeriod: "",
  securityGuardBackgroundTypeId: "",
  securityGuardHasProfiles: [] as string[],
  securityGuardHasLanguages: [] as string[]
}

export const servicePrivateEventForm = {
  ...baseServiceForm,
  capacity: "",
  leadTimeDays: "",
  privateEventTypeId: "",
  privateEventHasAmenities: [] as string[]
}

export const servicePrivateStaffForm = {
  ...baseServiceForm,
  privateStaffRoleId: "",
  regime: "",
  hasVetting: false,
  privateStaffHasQualifications: [] as string[],
  privateStaffHasLanguages: [] as string[]
}

export const serviceBeautySpaForm = {
  ...baseServiceForm,
  durationMinutes: "",
  hasEquipment: false,
  beautySpaHasTreatments: [] as string[],
  beautySpaHasProducts: [] as string[]
}

export const serviceGolfForm = {
  ...baseServiceForm,
  totalHoles: "",
  handicapRequiredMale: "",
  handicapRequiredFemale: "",
  maxPlayers: "",
  greenFee: "",
  conciergeFee: "",
  isElectricBuggyIncluded: false,
  golfHasAmenities: [] as string[]
}

export const serviceTrainingCoachForm = {
  ...baseServiceForm,
  level: "",
  place: "",
  equipment: "",
  trainingCoachHasDisciplines: [] as string[],
  trainingCoachHasLanguages: [] as string[]
}
