"use client"

import { Button } from "@mui/material"
import { ArrowLeft } from "lucide-react"
import { useRouter } from "next/navigation"

import StatusBadge from "@/components/StatusBadge"

import ServiceLuxuryStayPreview from "./components/previews/ServiceLuxuryStayPreview"
import ServiceRealEstatePreview from "./components/previews/ServiceRealEstatePreview"

const ServicePreviewPage = ({ service, isPublic }: { service: any; isPublic?: boolean }) => {
  const router = useRouter()

  const serviceDetails = service && { ...service }
  const serviceFormatted = serviceDetails
    ? {
        ...serviceDetails,
        serviceType: serviceDetails.serviceType.key,
        ...serviceDetails[`service${serviceDetails.serviceType.key}`]
      }
    : null
  delete serviceFormatted?.[`service${serviceDetails.serviceType.key}`]

  const servicesPreviews: any = {
    RealEstate: <ServiceRealEstatePreview service={serviceFormatted} />,
    LuxuryCar: <ServiceLuxuryStayPreview service={serviceFormatted} />,
    LuxuryStay: <ServiceLuxuryStayPreview service={serviceFormatted} />,
    PrivateStaff: <ServiceLuxuryStayPreview service={serviceFormatted} />,
    PrivateEvent: <ServiceLuxuryStayPreview service={serviceFormatted} />,
    SecurityGuard: <ServiceLuxuryStayPreview service={serviceFormatted} />,
    TrainingCoach: <ServiceLuxuryStayPreview service={serviceFormatted} />,
    Jet: <ServiceLuxuryStayPreview service={serviceFormatted} />,
    Yacht: <ServiceLuxuryStayPreview service={serviceFormatted} />,
    MedicalCare: <ServiceLuxuryStayPreview service={serviceFormatted} />,
    BeautySpa: <ServiceLuxuryStayPreview service={serviceFormatted} />,
    Golf: <ServiceLuxuryStayPreview service={serviceFormatted} />
  }

  if (isPublic) {
    return (
      <div className="overflow-y-auto h-full py-5 px-4 sm:px-6 lg:px-8 mt-24">
        <div className="flex items-center justify-between pe-2 lg:pe-4">
          <Button
            startIcon={<ArrowLeft />}
            size="small"
            type="button"
            color="secondaryDark"
            onClick={() => router.back()}>
            Back
          </Button>
        </div>
        {servicesPreviews[serviceFormatted.serviceType]}
      </div>
    )
  }

  return (
    <div className="overflow-y-auto h-full py-10 px-4 sm:px-6 lg:px-8">
      <div className="mb-6 flex items-center justify-between pe-2 lg:pe-4">
        <Button
          startIcon={<ArrowLeft />}
          size="small"
          type="button"
          color="secondaryDark"
          onClick={() => router.back()}>
          Back to My Services
        </Button>
        <div>
          <span className="font-semibold me-2">Status:</span>
          <StatusBadge status={service.serviceStatus.name} />
        </div>
      </div>
      {servicesPreviews[serviceFormatted.serviceType]}
    </div>
  )
}
export default ServicePreviewPage
