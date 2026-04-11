import { useState } from "react"

import { Button, Checkbox } from "@mui/material"

import { useFormikContext } from "formik"
import { ArrowLeft } from "lucide-react"
import { useRouter } from "next/navigation"

import LightTooltip from "@/components/LightTooltip"

import BasicInformationForm from "./BasicInformationForm"
import BookingGalleryForm from "./BookingGalleryForm"
import PriceConfigurationForm from "./PriceConfigurationForm"

interface ServiceBaseFormWrapperProps {
  children: React.ReactNode
  isPending: boolean
  isCreate: boolean
  serviceFiles: any
  setServiceFiles: (files: any) => void
}
const ServiceBaseFormWrapper = ({
  children,
  isPending,
  isCreate,
  serviceFiles,
  setServiceFiles
}: ServiceBaseFormWrapperProps) => {
  const router = useRouter()
  const { handleSubmit } = useFormikContext()

  const [acceptTerms, setAcceptTerms] = useState(false)

  return (
    <form onSubmit={handleSubmit}>
      <div className="w-full bg-surface rounded-lg shadow-luxury flex flex-col">
        <div className="flex-1 bg-surface">
          <div className="px-8 pb-8 sm:px-12 sx:pb-12 space-y-8">
            <BasicInformationForm />

            <hr className="border-luxury-border border-dashed" />

            <section className="space-y-8">
              <div className="flex items-center gap-4 pb-4 border-b border-luxury-border">
                <span className="flex items-center justify-center bg-gray-200 text-gray-600 w-8 h-8 rounded-full text-sm font-bold">
                  2
                </span>
                <h2 className="text-2xl font-serif font-bold text-deep-brown">Service Details</h2>
              </div>
              {children}
              <PriceConfigurationForm />
            </section>

            <hr className="border-luxury-border border-dashed" />

            <BookingGalleryForm serviceFiles={serviceFiles} setServiceFiles={setServiceFiles} />

            <hr className="border-luxury-border border-dashed" />

            <section>
              <div className="flex items-start gap-2 pl-3 pr-5 py-5 rounded-lg bg-luxury-input border border-luxury-border hover:border-primary-gold/50 transition-colors">
                <div className="mt-[-8]">
                  {/* <input
                    className="h-5 w-5 rounded border-gray-300 text-primary-gold focus:ring-primary-gold/20"
                    type="checkbox"
                  /> */}
                  <Checkbox checked={acceptTerms} onChange={(e) => setAcceptTerms(e.target.checked)} />
                </div>
                <div className="text-sm text-luxury-gray">
                  <span className="font-bold text-deep-brown block mb-1">Declaración de Conformidad</span>
                  Confirmo que tengo los permisos necesarios para publicar la información e imágenes proporcionadas, y
                  acepto los{" "}
                  <a className="text-primary-gold hover:text-primary-gold-dark underline" href="#">
                    Términos y Condiciones
                  </a>{" "}
                  del Portal de Proveedores Marhaba.
                </div>
              </div>
            </section>
          </div>
        </div>
        <footer className="px-8 py-6 bg-surface border-t border-luxury-border flex items-center justify-between z-10">
          <Button
            startIcon={<ArrowLeft />}
            disabled={isPending}
            size="large"
            type="button"
            color="secondaryDark"
            onClick={() => router.back()}>
            Back
          </Button>
          {acceptTerms ? (
            <Button disabled={isPending} loading={isPending} size="large" variant="contained" type="submit">
              {isCreate ? "Create" : "Update"} Service
            </Button>
          ) : (
            <LightTooltip title="You must accept the Terms and Conditions" arrow>
              <div>
                <Button disabled size="large" variant="contained" type="submit">
                  {isCreate ? "Create" : "Update"} Service
                </Button>
              </div>
            </LightTooltip>
          )}
        </footer>
      </div>
    </form>
  )
}
export default ServiceBaseFormWrapper
