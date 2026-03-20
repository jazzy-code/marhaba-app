"use client"

import { useState } from "react"

import { useAuth } from "@clerk/nextjs"
import { MenuItem, TextField } from "@mui/material"
import { useMutation } from "@tanstack/react-query"
import { ArrowLeft, IdCard, Mail, User } from "lucide-react"

import { setAuthToken } from "@/api/axios"
import { createService, updateService } from "@/api/services/services.client"
import { SERVICE_LIST } from "@/lib/consts"

import ServiceBeautySpaForm from "./ServiceBeautySpaForm"
import ServiceGolfForm from "./ServiceGolfForm"
import ServiceJetForm from "./ServiceJetForm"
import ServiceLuxuryCarForm from "./ServiceLuxuryCarForm"
import ServiceLuxuryStayForm from "./ServiceLuxuryStayForm"
import ServiceMedicalCareForm from "./ServiceMedicalCareForm"
import ServicePrivateEventForm from "./ServicePrivateEvent"
import ServicePrivateStaffForm from "./ServicePrivateStaff"
import ServiceRealEstateForm from "./ServiceRealEstateForm"
import ServiceSecurityGuardForm from "./ServiceSecurityGuardForm"
import ServiceSupportCoachForm from "./ServiceSupportCoachService"
import ServiceYachtForm from "./ServiceYachtForm"

const ServiceForm = ({ serviceToEdit }: { serviceToEdit?: any }) => {
  const { getToken } = useAuth()
  const { service = {} } = serviceToEdit

  const isCreate = !service.id
  const [serviceType, setServiceType] = useState(isCreate ? "" : service?.serviceType.key || "")

  const { mutate, isPending } = useMutation({
    mutationFn: async (data: any) => {
      const token = await getToken()
      setAuthToken(token)
      return isCreate ? createService(data) : updateService(data)
    },
    onSuccess: (data: any) => {
      console.log(data)
    },
    onError: (error: any) => {
      console.error(error)
    }
  })

  return (
    <div className="overflow-y-auto h-full flex flex-col items-center justify-start py-10 px-4 sm:px-6 lg:px-8">
      <div className="w-full bg-surface rounded-lg shadow-luxury flex flex-col">
        <header className="px-8 pt-10 pb-6 border-b border-luxury-border bg-surface z-10">
          <div className="text-center">
            <h1 className="text-3xl font-serif font-bold text-deep-brown mb-2">New Service</h1>
            <p className="text-sm text-luxury-gray dark:text-gray-400">
              Fulfill the details to list your service in the luxury portal.
            </p>
          </div>
          {/* <div className="relative flex items-center justify-between max-w-2xl mx-auto px-4">
          <div className="relative z-10 flex flex-col items-center gap-2 group cursor-pointer">
            <div className="w-10 h-10 rounded-full bg-primary-gold text-white flex items-center justify-center shadow-md ring-4 ring-surface dark:ring-surface-dark transition-all">
              <span className="material-symbols-outlined text-[20px]">person</span>
            </div>
            <span className="text-xs font-bold text-primary-gold uppercase tracking-widest">Registro</span>
          </div>
          <div className="relative z-10 flex flex-col items-center gap-2 group cursor-pointer opacity-50 hover:opacity-100 transition-opacity">
            <div className="w-10 h-10 rounded-full bg-surface border border-luxury-border text-luxury-gray dark:text-gray-400 flex items-center justify-center ring-4 ring-surface dark:ring-surface-dark">
              <span className="material-symbols-outlined text-[20px]">playlist_add</span>
            </div>
            <span className="text-xs font-medium text-luxury-gray dark:text-gray-400 uppercase tracking-widest">Detalles</span>
          </div>
          <div className="relative z-10 flex flex-col items-center gap-2 group cursor-pointer opacity-50 hover:opacity-100 transition-opacity">
            <div className="w-10 h-10 rounded-full bg-surface border border-luxury-border text-luxury-gray dark:text-gray-400 flex items-center justify-center ring-4 ring-surface dark:ring-surface-dark">
              <span className="material-symbols-outlined text-[20px]">gallery_thumbnail</span>
            </div>
            <span className="text-xs font-medium text-luxury-gray dark:text-gray-400 uppercase tracking-widest">Media</span>
          </div>
        </div> */}
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
                  {SERVICE_LIST.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              </div>
            </section>
            <hr className="border-luxury-border border-dashed" />
          </div>
        </div>
      </div>
      {serviceType === "RealEstate" && (
        <ServiceRealEstateForm
          serviceToEdit={serviceToEdit}
          isCreate={isCreate}
          mutate={mutate}
          isPending={isPending}
        />
      )}
      {/* {serviceType === 'LuxuryCar' && <ServiceLuxuryCarForm formik={formik} />}
      {serviceType === 'Yacht' && <ServiceYachtForm formik={formik} />}
      {serviceType === 'Jet' && <ServiceJetForm formik={formik} />}
      {serviceType === 'LuxuryStay' && <ServiceLuxuryStayForm formik={formik} />}
      {serviceType === 'MedicalCare' && <ServiceMedicalCareForm formik={formik} />}
      {serviceType === 'SecurityGuard' && <ServiceSecurityGuardForm formik={formik} />}
      {serviceType === 'PrivateEvent' && <ServicePrivateEventForm formik={formik} />}
      {serviceType === 'PrivateStaff' && <ServicePrivateStaffForm formik={formik} />}
      {serviceType === 'BeautySpa' && <ServiceBeautySpaForm formik={formik} />}
      {serviceType === 'Golf' && <ServiceGolfForm formik={formik} />}
      {serviceType === 'SupportCoach' && <ServiceSupportCoachForm formik={formik} />} */}
    </div>
  )
}

export default ServiceForm
