import { Button } from "@mui/material"

import { useFormikContext } from "formik"
import { ArrowLeft } from "lucide-react"

import { useRouter } from "next/navigation"

import BasicInformationForm from "./BasicInformationForm"
import BookingGalleryForm from "./BookingGalleryForm"
import PriceConfigurationForm from "./PriceConfigurationForm"

const ServiceBaseFormWrapper = ({
  children,
  isPending,
  isCreate
}: {
  children: React.ReactNode
  isPending: boolean
  isCreate: boolean
}) => {
  const router = useRouter()
  const { handleSubmit } = useFormikContext()

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

            <BookingGalleryForm />
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
          <Button disabled={isPending} loading={isPending} size="large" variant="contained" type="submit">
            {isCreate ? "Create" : "Update"} Service
          </Button>
        </footer>
      </div>
    </form>
  )
}
export default ServiceBaseFormWrapper
