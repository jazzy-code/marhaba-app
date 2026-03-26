"use client"

import { useState } from "react"

import { useAuth } from "@clerk/nextjs"
import { Button, MenuItem, TextField } from "@mui/material"
import { useMutation } from "@tanstack/react-query"
import { ArrowLeft } from "lucide-react"
import { useRouter } from "next/navigation"

import { setAuthToken } from "@/api/axios"
import { createService, updateService } from "@/api/services/services.client"
import StatusBadge from "@/components/StatusBadge"
import { useServices } from "@/context/ServicesContext"

import ServiceBeautySpaForm from "./ServiceBeautySpaForm"
import ServiceFormSubmitted from "./ServiceFormSubmitted"
import ServiceGolfForm from "./ServiceGolfForm"
import ServiceJetForm from "./ServiceJetForm"
import ServiceLuxuryCarForm from "./ServiceLuxuryCarForm"
import ServiceLuxuryStayForm from "./ServiceLuxuryStayForm"
import ServiceMedicalCareForm from "./ServiceMedicalCareForm"
import ServiceNotFound from "./ServiceNotFound"
import ServicePrivateEventForm from "./ServicePrivateEvent"
import ServicePrivateStaffForm from "./ServicePrivateStaff"
import ServiceRealEstateForm from "./ServiceRealEstateForm"
import ServiceSecurityGuardForm from "./ServiceSecurityGuardForm"
import ServiceTrainingCoachForm from "./ServiceTrainingCoachForm"
import ServiceYachtForm from "./ServiceYachtForm"

const ServiceForm = ({ isCreate = true, serviceToEdit }: { isCreate: boolean; serviceToEdit?: any }) => {
  const { getToken } = useAuth()
  const router = useRouter()
  const { services } = useServices()
  const { types } = services

  const serviceDetails = serviceToEdit && { ...serviceToEdit }
  const serviceToEditForm = serviceDetails
    ? {
        ...serviceDetails,
        serviceType: serviceDetails.serviceType.key,
        ...serviceDetails[`service${serviceDetails.serviceType.key}`]
      }
    : null
  delete serviceToEditForm?.[`service${serviceDetails.serviceType.key}`]
  const serviceExists = !isCreate && Boolean(serviceToEditForm)

  const [serviceType, setServiceType] = useState(isCreate ? "" : serviceExists ? serviceToEditForm.serviceType : "")
  const [serviceSaved, setServiceSaved] = useState(false)

  const { mutate, isPending } = useMutation({
    mutationFn: async (data: any) => {
      const token = await getToken()
      setAuthToken(token)
      return isCreate ? createService(data) : updateService(data)
    },
    onSuccess: () => {
      setServiceSaved(true)
    },
    onError: (error: any) => {
      console.error(error)
    }
  })

  const servicesForms: any = {
    RealEstate: (
      <ServiceRealEstateForm
        serviceType={types.find((type: any) => type.key === serviceType)}
        serviceToEditForm={serviceToEditForm}
        isCreate={isCreate}
        mutate={mutate}
        isPending={isPending}
      />
    ),
    LuxuryCar: (
      <ServiceLuxuryCarForm
        serviceType={types.find((type: any) => type.key === serviceType)}
        serviceToEditForm={serviceToEditForm}
        isCreate={isCreate}
        mutate={mutate}
        isPending={isPending}
      />
    ),
    LuxuryStay: (
      <ServiceLuxuryStayForm
        serviceType={types.find((type: any) => type.key === serviceType)}
        serviceToEditForm={serviceToEditForm}
        isCreate={isCreate}
        mutate={mutate}
        isPending={isPending}
      />
    ),
    PrivateStaff: (
      <ServicePrivateStaffForm
        serviceType={types.find((type: any) => type.key === serviceType)}
        serviceToEditForm={serviceToEditForm}
        isCreate={isCreate}
        mutate={mutate}
        isPending={isPending}
      />
    ),
    PrivateEvent: (
      <ServicePrivateEventForm
        serviceType={types.find((type: any) => type.key === serviceType)}
        serviceToEditForm={serviceToEditForm}
        isCreate={isCreate}
        mutate={mutate}
        isPending={isPending}
      />
    ),
    SecurityGuard: (
      <ServiceSecurityGuardForm
        serviceType={types.find((type: any) => type.key === serviceType)}
        serviceToEditForm={serviceToEditForm}
        isCreate={isCreate}
        mutate={mutate}
        isPending={isPending}
      />
    ),
    TrainingCoach: (
      <ServiceTrainingCoachForm
        serviceType={types.find((type: any) => type.key === serviceType)}
        serviceToEditForm={serviceToEditForm}
        isCreate={isCreate}
        mutate={mutate}
        isPending={isPending}
      />
    ),
    Jet: (
      <ServiceJetForm
        serviceType={types.find((type: any) => type.key === serviceType)}
        serviceToEditForm={serviceToEditForm}
        isCreate={isCreate}
        mutate={mutate}
        isPending={isPending}
      />
    ),
    Yacht: (
      <ServiceYachtForm
        serviceType={types.find((type: any) => type.key === serviceType)}
        serviceToEditForm={serviceToEditForm}
        isCreate={isCreate}
        mutate={mutate}
        isPending={isPending}
      />
    ),
    MedicalCare: (
      <ServiceMedicalCareForm
        serviceType={types.find((type: any) => type.key === serviceType)}
        serviceToEditForm={serviceToEditForm}
        isCreate={isCreate}
        mutate={mutate}
        isPending={isPending}
      />
    ),
    BeautySpa: (
      <ServiceBeautySpaForm
        serviceType={types.find((type: any) => type.key === serviceType)}
        serviceToEditForm={serviceToEditForm}
        isCreate={isCreate}
        mutate={mutate}
        isPending={isPending}
      />
    ),
    Golf: (
      <ServiceGolfForm
        serviceType={types.find((type: any) => type.key === serviceType)}
        serviceToEditForm={serviceToEditForm}
        isCreate={isCreate}
        mutate={mutate}
        isPending={isPending}
      />
    )
  }

  return (
    <div className="overflow-y-auto h-full flex flex-col items-center justify-start py-10 px-4 sm:px-6 lg:px-8">
      {!isCreate && !serviceExists ? (
        <ServiceNotFound />
      ) : serviceSaved ? (
        <ServiceFormSubmitted />
      ) : (
        <>
          <div className="w-full bg-surface rounded-lg shadow-luxury flex flex-col">
            <header className="flex items-center justify-between px-8 pt-10 pb-6 border-b border-luxury-border bg-surface z-10">
              <div className="w-[100px]">
                <Button
                  startIcon={<ArrowLeft />}
                  disabled={isPending}
                  size="large"
                  type="button"
                  color="secondaryDark"
                  onClick={() => router.back()}>
                  Back
                </Button>
              </div>
              <div className="text-center flex flex-col items-center justify-center">
                <h1 className="text-3xl font-serif font-bold text-deep-brown mb-2">
                  {isCreate ? "New" : "Update"} Service
                </h1>
                {isCreate ? (
                  <p className="text-sm text-luxury-gray dark:text-gray-400">
                    Fulfill the details to list your service in the luxury portal.
                  </p>
                ) : (
                  <div className="flex items-center gap-1">
                    <b>Status:</b>
                    <StatusBadge status={serviceToEditForm.serviceStatus.name} />
                  </div>
                )}
              </div>
              <div className="w-[100px]"></div>
            </header>
            <div className="flex-1 bg-surface">
              <div className="px-8 pt-8 pb-4 sm:px-12 sm:pt-12 sm:pb-8 space-y-8">
                <section>
                  <div>
                    <label className="block text-xs font-semibold text-deep-brown dark:text-gray-300 uppercase tracking-wider mb-2">
                      Service Type
                    </label>
                    <TextField
                      select
                      disabled={!isCreate}
                      name="serviceType"
                      value={serviceType}
                      onChange={(e) => setServiceType(e.target.value)}>
                      {types.map((type) => (
                        <MenuItem key={type.key} value={type.key}>
                          {type.name}
                        </MenuItem>
                      ))}
                    </TextField>
                  </div>
                </section>
                <hr className="border-luxury-border border-dashed" />
              </div>
            </div>
          </div>
          {servicesForms[serviceType]}
        </>
      )}
    </div>
  )
}

export default ServiceForm
