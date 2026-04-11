"use client"

import { useMemo, useState } from "react"

import { useAuth } from "@clerk/nextjs"
import { Button, MenuItem, TextField } from "@mui/material"
import { useMutation } from "@tanstack/react-query"
import { ArrowLeft } from "lucide-react"
import { useRouter } from "next/navigation"

import { setAuthToken } from "@/api/apiClient"
import { createService, updateService, uploadServiceFiles } from "@/api/services/services.client"
import StatusBadge from "@/components/StatusBadge"
import { useServices } from "@/context/ServicesContext"
import { parseToNumber } from "@/utils/numbers"

import ServiceBeautySpaForm from "./components/forms/ServiceBeautySpaForm"
import ServiceGolfForm from "./components/forms/ServiceGolfForm"
import ServiceJetForm from "./components/forms/ServiceJetForm"
import ServiceLuxuryCarForm from "./components/forms/ServiceLuxuryCarForm"
import ServiceLuxuryStayForm from "./components/forms/ServiceLuxuryStayForm"
import ServiceMedicalCareForm from "./components/forms/ServiceMedicalCareForm"
import ServicePrivateEventForm from "./components/forms/ServicePrivateEvent"
import ServicePrivateStaffForm from "./components/forms/ServicePrivateStaff"
import ServiceRealEstateForm from "./components/forms/ServiceRealEstateForm"
import ServiceSecurityGuardForm from "./components/forms/ServiceSecurityGuardForm"
import ServiceTrainingCoachForm from "./components/forms/ServiceTrainingCoachForm"
import ServiceYachtForm from "./components/forms/ServiceYachtForm"
import ServiceNotFound from "./components/ServiceNotFound"
import ServiceFormSubmitted from "./components/ServiceSubmitted"

const ServiceForm = ({ isCreate = true, serviceToEdit }: { isCreate?: boolean; serviceToEdit?: any }) => {
  const { getToken } = useAuth()
  const router = useRouter()
  const { services } = useServices()
  const { types } = services

  const serviceDetails = useMemo(() => serviceToEdit && { ...serviceToEdit }, [serviceToEdit])
  const serviceToEditForm = useMemo(() => {
    return serviceDetails
      ? {
          ...serviceDetails,
          serviceType: serviceDetails.serviceType.key,
          ...serviceDetails[`service${serviceDetails.serviceType.key}`]
        }
      : null
  }, [serviceDetails])
  delete serviceToEditForm?.[`service${serviceDetails.serviceType.key}`]
  const serviceExists = !isCreate && Boolean(serviceToEditForm)

  const [serviceType, setServiceType] = useState(isCreate ? "" : serviceExists ? serviceToEditForm.serviceType : "")
  const [serviceSaved, setServiceSaved] = useState(false)
  const [serviceFiles, setServiceFiles] = useState({
    heroImage: null,
    providerLogo: null,
    galleryFiles: isCreate ? [] : serviceToEditForm.serviceFiles
  })

  const filesHaveChanges = useMemo(() => {
    if (isCreate) {
      return (
        serviceFiles.heroImage !== null || serviceFiles.providerLogo !== null || serviceFiles.galleryFiles.length > 0
      )
    }

    if (!serviceToEditForm) return false

    const heroChanged = serviceFiles.heroImage !== null
    const logoChanged = serviceFiles.providerLogo !== null

    const originalGallery = serviceToEditForm.serviceFiles || []
    const currentGallery = serviceFiles.galleryFiles || []

    const galleryChanged =
      originalGallery.length !== currentGallery.length ||
      currentGallery.some((file: any, idx: number) => file.id !== originalGallery[idx]?.id)

    return heroChanged || logoChanged || galleryChanged
  }, [serviceFiles, serviceToEditForm, isCreate])

  const { mutate: uploadFiles, isPending: isUploading } = useMutation({
    mutationFn: async (data: any) => {
      const token = await getToken()
      setAuthToken(token)

      // We filter because the array galleryFiles in "EDIT" has the current file items stored in DB
      // and we need to separate the new "File" elements from the "serviceFile" elements
      const files = serviceFiles.galleryFiles.filter((file: any) => !file.id)
      const existingFileIds = serviceFiles.galleryFiles.filter((file: any) => file.id).map((file: any) => file.id)

      return uploadServiceFiles(data.serviceId, {
        ...serviceFiles,
        galleryFiles: files,
        existingFileIds: [...existingFileIds]
      })
    },
    onSuccess: () => {
      setServiceSaved(true)
    },
    onError: (error: any) => {
      console.error(error)
    }
  })

  const { mutate, isPending } = useMutation({
    mutationFn: async (data: any) => {
      const token = await getToken()
      setAuthToken(token)
      const dataFormatted = { ...data, price: parseToNumber(data.price) }
      return isCreate ? createService(dataFormatted) : updateService(dataFormatted)
    },
    onSuccess: (data: any) => {
      if (filesHaveChanges) {
        uploadFiles(data)
      } else {
        setServiceSaved(true)
      }
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
        isPending={isPending || isUploading}
        serviceFiles={serviceFiles}
        setServiceFiles={setServiceFiles}
      />
    ),
    LuxuryCar: (
      <ServiceLuxuryCarForm
        serviceType={types.find((type: any) => type.key === serviceType)}
        serviceToEditForm={serviceToEditForm}
        isCreate={isCreate}
        mutate={mutate}
        isPending={isPending || isUploading}
        serviceFiles={serviceFiles}
        setServiceFiles={setServiceFiles}
      />
    ),
    LuxuryStay: (
      <ServiceLuxuryStayForm
        serviceType={types.find((type: any) => type.key === serviceType)}
        serviceToEditForm={serviceToEditForm}
        isCreate={isCreate}
        mutate={mutate}
        isPending={isPending || isUploading}
        serviceFiles={serviceFiles}
        setServiceFiles={setServiceFiles}
      />
    ),
    PrivateStaff: (
      <ServicePrivateStaffForm
        serviceType={types.find((type: any) => type.key === serviceType)}
        serviceToEditForm={serviceToEditForm}
        isCreate={isCreate}
        mutate={mutate}
        isPending={isPending || isUploading}
        serviceFiles={serviceFiles}
        setServiceFiles={setServiceFiles}
      />
    ),
    PrivateEvent: (
      <ServicePrivateEventForm
        serviceType={types.find((type: any) => type.key === serviceType)}
        serviceToEditForm={serviceToEditForm}
        isCreate={isCreate}
        mutate={mutate}
        isPending={isPending || isUploading}
        serviceFiles={serviceFiles}
        setServiceFiles={setServiceFiles}
      />
    ),
    SecurityGuard: (
      <ServiceSecurityGuardForm
        serviceType={types.find((type: any) => type.key === serviceType)}
        serviceToEditForm={serviceToEditForm}
        isCreate={isCreate}
        mutate={mutate}
        isPending={isPending || isUploading}
        serviceFiles={serviceFiles}
        setServiceFiles={setServiceFiles}
      />
    ),
    TrainingCoach: (
      <ServiceTrainingCoachForm
        serviceType={types.find((type: any) => type.key === serviceType)}
        serviceToEditForm={serviceToEditForm}
        isCreate={isCreate}
        mutate={mutate}
        isPending={isPending || isUploading}
        serviceFiles={serviceFiles}
        setServiceFiles={setServiceFiles}
      />
    ),
    Jet: (
      <ServiceJetForm
        serviceType={types.find((type: any) => type.key === serviceType)}
        serviceToEditForm={serviceToEditForm}
        isCreate={isCreate}
        mutate={mutate}
        isPending={isPending || isUploading}
        serviceFiles={serviceFiles}
        setServiceFiles={setServiceFiles}
      />
    ),
    Yacht: (
      <ServiceYachtForm
        serviceType={types.find((type: any) => type.key === serviceType)}
        serviceToEditForm={serviceToEditForm}
        isCreate={isCreate}
        mutate={mutate}
        isPending={isPending || isUploading}
        serviceFiles={serviceFiles}
        setServiceFiles={setServiceFiles}
      />
    ),
    MedicalCare: (
      <ServiceMedicalCareForm
        serviceType={types.find((type: any) => type.key === serviceType)}
        serviceToEditForm={serviceToEditForm}
        isCreate={isCreate}
        mutate={mutate}
        isPending={isPending || isUploading}
        serviceFiles={serviceFiles}
        setServiceFiles={setServiceFiles}
      />
    ),
    BeautySpa: (
      <ServiceBeautySpaForm
        serviceType={types.find((type: any) => type.key === serviceType)}
        serviceToEditForm={serviceToEditForm}
        isCreate={isCreate}
        mutate={mutate}
        isPending={isPending || isUploading}
        serviceFiles={serviceFiles}
        setServiceFiles={setServiceFiles}
      />
    ),
    Golf: (
      <ServiceGolfForm
        serviceType={types.find((type: any) => type.key === serviceType)}
        serviceToEditForm={serviceToEditForm}
        isCreate={isCreate}
        mutate={mutate}
        isPending={isPending || isUploading}
        serviceFiles={serviceFiles}
        setServiceFiles={setServiceFiles}
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
