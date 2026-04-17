import * as Yup from "yup"

const timeRegex = /^([01]\d|2[0-3]):([0-5]\d)$/ // Valida formato HH:mm (00:00 a 23:59)

const serviceFormSchema = Yup.object().shape({
  serviceType: Yup.string(),
  serviceTypeId: Yup.string().required("Service type is required"),
  title: Yup.string().required("Title is required"),
  subtitle: Yup.string().required("Subtitle is required"),
  shortDescription: Yup.string(),
  longDescription: Yup.string(),
  regionId: Yup.number().required("Region is required"),
  cityId: Yup.number().required("City is required"),
  priceModel: Yup.string().required("Price model is required"),
  price: Yup.string().when("priceModel", {
    is: "CONSULT",
    then: (schema: any) => schema.notRequired(),
    otherwise: (schema: any) => schema.required("Price is required")
  }),
  currency: Yup.string().when("priceModel", {
    is: "CONSULT",
    then: (schema: any) => schema.notRequired(),
    otherwise: (schema: any) => schema.required("Currency is required")
  })
})

const serviceFormWithLocationSchema = serviceFormSchema.concat(
  Yup.object().shape({
    district: Yup.string().required("District is required"),
    address: Yup.string().required("Address is required"),
    locationUrl: Yup.string()
  })
)

export const serviceBeautySpaFormSchema = serviceFormSchema.concat(
  Yup.object().shape({
    durationMinutes: Yup.string().required("Duration minutes is required"),
    beautySpaHasTreatments: Yup.array().min(1, "At least one treatment is required")
  })
)

export const serviceGolfFormSchema = serviceFormWithLocationSchema.concat(
  Yup.object().shape({
    totalHoles: Yup.string().required("Total holes is required"),
    maxPlayers: Yup.string().required("Max players is required")
  })
)

export const serviceJetFormSchema = serviceFormSchema.concat(
  Yup.object().shape({
    model: Yup.string().required("Model is required"),
    jetCategoryId: Yup.string().required("Jet category is required"),
    nmRange: Yup.string().required("NM Range is required"),
    passengersCapacity: Yup.string().required("Capacity is required")
  })
)

export const serviceLuxuryCarFormSchema = serviceFormSchema.concat(
  Yup.object().shape({
    modality: Yup.string().required("Modality is required"),
    brand: Yup.string().required("Brand is required"),
    model: Yup.string().required("Model is required"),
    edition: Yup.string().required("Edition is required"),
    year: Yup.string().required("Year is required"),
    motorType: Yup.string().required("Motor type is required"),
    cv: Yup.string().required("Horse Power is required"),
    passengersCapacity: Yup.string().required("Capacity is required"),
    luxuryCarExteriorColorId: Yup.string().required("Exterior color is required"),
    luxuryCarInteriorColorId: Yup.string().required("Interior color is required"),
    luxuryCarTransmissionType: Yup.string().required("Transmission type is required"),
    driveMode: Yup.string().when("modality", {
      is: "RENT",
      then: (schema: any) => schema.required("Drive mode is required"),
      otherwise: (schema: any) => schema.notRequired()
    }),
    dailyKilometers: Yup.string().when("modality", {
      is: "RENT",
      then: (schema: any) => schema.required("Daily Km is required"),
      otherwise: (schema: any) => schema.notRequired()
    }),
    minAge: Yup.string().when("modality", {
      is: "RENT",
      then: (schema: any) => schema.required("Min. age is required"),
      otherwise: (schema: any) => schema.notRequired()
    }),
    kilometers: Yup.string().when("modality", {
      is: "SALE",
      then: (schema: any) => schema.required("kilometers are required"),
      otherwise: (schema: any) => schema.notRequired()
    }),
    luxuryCarLegalSituationId: Yup.string().when("modality", {
      is: "SALE",
      then: (schema: any) => schema.required("Legal situation is required"),
      otherwise: (schema: any) => schema.notRequired()
    })
  })
)

export const serviceLuxuryStayFormSchema = serviceFormWithLocationSchema.concat(
  Yup.object().shape({
    totalGuests: Yup.string().required("Total guests is required"),
    checkIn: Yup.string().required("Check in is required").matches(timeRegex, "Invalid time format (HH:mm)"),
    checkOut: Yup.string().required("Check out is required").matches(timeRegex, "Invalid time format (HH:mm)"),
    luxuryStayCategoryId: Yup.string().required("Category is required"),
    luxuryStayRoomId: Yup.string().required("Room is required"),
    cancelation: Yup.string().required("Cancelation is required")
  })
)

export const serviceMedicalCareFormSchema = serviceFormSchema.concat(
  Yup.object().shape({
    certifications: Yup.string().required("Certifications is required"),
    response: Yup.string().required("Response is required"),
    medicalCareHasServices: Yup.array().min(1, "At least one service is required"),
    medicalCareHasSpecialties: Yup.array().min(1, "At least one specialty is required"),
    medicalCareHasLanguages: Yup.array().min(1, "At least one language is required"),
    medicalCareHasAttentions: Yup.array().min(1, "At least one attention is required")
  })
)

export const servicePrivateEventFormSchema = serviceFormSchema.concat(
  Yup.object().shape({
    privateEventTypeId: Yup.string().required("Private event type is required"),
    capacity: Yup.string().required("Capacity is required"),
    leadTimeDays: Yup.string().required("Lead time is required")
  })
)

export const servicePrivateStaffFormSchema = serviceFormSchema.concat(
  Yup.object().shape({
    privateStaffRoleId: Yup.string().required("Role is required"),
    regime: Yup.string().required("Regime is required"),
    privateStaffHasQualifications: Yup.array().min(1, "At least one qualification is required"),
    privateStaffHasLanguages: Yup.array().min(1, "At least one language is required")
  })
)

export const serviceRealEstateFormSchema = serviceFormWithLocationSchema.concat(
  Yup.object().shape({
    modality: Yup.string().required("Modality is required"),
    realEstateTypeId: Yup.string().required("Real estate type is required"),
    surfaceBuiltMt2: Yup.string().required("Surface built is required"),
    surfacePlotMt2: Yup.string().required("Surface plot is required"),
    realEstateHousingStatusId: Yup.string().when("modality", {
      is: "SALE",
      then: (schema: any) => schema.required("Housing status is required"),
      otherwise: (schema: any) => schema.notRequired()
    }),
    guestsCapacity: Yup.string().when("modality", {
      is: "RENT",
      then: (schema: any) => schema.required("Guests capacity is required"),
      otherwise: (schema: any) => schema.notRequired()
    }),
    realEstateStayTypeId: Yup.string().when("modality", {
      is: "RENT",
      then: (schema: any) => schema.required("Stay type is required"),
      otherwise: (schema: any) => schema.notRequired()
    })
  })
)

export const serviceSecurityGuardFormSchema = serviceFormSchema.concat(
  Yup.object().shape({
    securityGuardBackgroundTypeId: Yup.string().required("Background type is required"),
    discretion: Yup.string().required("Discretion is required"),
    minContractUnity: Yup.string().required("Min contract unity is required"),
    minContractPeriod: Yup.string().required("Min contract period is required"),
    securityGuardHasProfiles: Yup.array().min(1, "At least one profile is required"),
    securityGuardHasLanguages: Yup.array().min(1, "At least one language is required")
  })
)

export const serviceTrainingCoachFormSchema = serviceFormSchema.concat(
  Yup.object().shape({
    level: Yup.string().required("Level is required"),
    place: Yup.string().required("Place is required"),
    equipment: Yup.string().required("Equipment is required"),
    trainingCoachHasDisciplines: Yup.array().min(1, "At least one discipline is required"),
    trainingCoachHasLanguages: Yup.array().min(1, "At least one language is required")
  })
)

export const serviceYachtFormSchema = serviceFormWithLocationSchema.concat(
  Yup.object().shape({
    modality: Yup.string().required("Modality is required"),
    shipyard: Yup.string().required("Shipyard is required"),
    model: Yup.string().required("Model is required"),
    constructionYear: Yup.string().required("Construction year is required"),
    refitYear: Yup.string().required("Refit year is required"),
    lengthMeters: Yup.string().required("Length is required"),
    maxSpeed: Yup.string().required("Max speed is required"),
    totalCabins: Yup.string().required("Total cabins is required"),
    port: Yup.string().when("modality", {
      is: "RENT",
      then: (schema: any) => schema.required("Port is required"),
      otherwise: (schema: any) => schema.notRequired()
    }),
    fuelPerformance: Yup.string().when("modality", {
      is: "RENT",
      then: (schema: any) => schema.required("Fuel performance is required"),
      otherwise: (schema: any) => schema.notRequired()
    }),
    countryId: Yup.string().when("modality", {
      is: "RENT",
      then: (schema: any) => schema.required("Country is required"),
      otherwise: (schema: any) => schema.notRequired()
    }),
    motorHours: Yup.string().when("modality", {
      is: "SALE",
      then: (schema: any) => schema.required("Motor hours is required"),
      otherwise: (schema: any) => schema.notRequired()
    })
  })
)
