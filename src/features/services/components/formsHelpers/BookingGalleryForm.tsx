"use client"

import { useRef, useState } from "react"

import { FormLabel } from "@mui/material"

import { useFormikContext } from "formik"
import { BookPlus, FilePlus, ImagePlus, Images, Link2, Trash } from "lucide-react"

import { MAX_GALLERY_FILES, MAX_SIZE_FILES } from "@/constants"

interface BookingGalleryFormProps {
  serviceFiles: any
  setServiceFiles: any
}
const BookingGalleryForm = ({ serviceFiles, setServiceFiles }: BookingGalleryFormProps) => {
  const heroImageFileRef = useRef<HTMLInputElement>(null)
  const providerLogoFileRef = useRef<HTMLInputElement>(null)
  const galleryFilesRef = useRef<HTMLInputElement>(null)

  const disableGalleryButton = serviceFiles.galleryFiles.length >= MAX_GALLERY_FILES

  const { values } = useFormikContext<any>()

  const [filesPreview, setFilesPreview] = useState({
    heroImage: values.heroImageUrl || null,
    providerLogo: values.providerLogoUrl || null,
    galleryFiles: values.serviceFiles ? values.serviceFiles.map((file: any) => file.url) : []
  })

  const handleFileChange = (e: any, type: string) => {
    const { files } = e.target
    if (type === "galleryFiles") {
      const currentCount = serviceFiles.galleryFiles.length
      const availableSlots = MAX_GALLERY_FILES - currentCount

      const filesArray = Array.from(files).slice(0, availableSlots)

      if (filesArray.length === 0) {
        // Alert Max number reached
        return
      }

      setServiceFiles((prevState: any) => ({
        ...prevState,
        [type]: [...prevState[type], ...filesArray]
      }))

      setFilesPreview((prevState: any) => ({
        ...prevState,
        [type]: [...prevState[type], ...filesArray.map((file: any) => URL.createObjectURL(file))]
      }))
    } else if (files.length > 0) {
      if (files[0].size <= MAX_SIZE_FILES) {
        setServiceFiles((prevState: any) => ({ ...prevState, [type]: files[0] }))
        setFilesPreview((prevState: any) => ({ ...prevState, [type]: URL.createObjectURL(files[0]) }))
      } else {
        // setAlert(true, 'warning', 'El archivo supera el tamaño.maxcdn permitido, 10 MB')
      }
    }
  }

  const handleRemoveFile = (type: string, index?: number) => {
    if (type === "galleryFiles") {
      setServiceFiles((prevState: any) => ({
        ...prevState,
        [type]: prevState[type].filter((_: any, i: number) => i !== index)
      }))
      setFilesPreview((prevState: any) => ({
        ...prevState,
        [type]: prevState[type].filter((_: any, i: number) => i !== index)
      }))
    } else {
      setServiceFiles((prevState: any) => ({ ...prevState, [type]: null }))
      setFilesPreview((prevState: any) => ({ ...prevState, [type]: null }))
    }
  }

  return (
    <section className="space-y-8">
      <div className="flex items-center gap-4 pb-4 border-b border-luxury-border">
        <span className="flex items-center justify-center bg-gray-200 text-gray-600 w-8 h-8 rounded-full text-sm font-bold">
          3
        </span>
        <h2 className="text-2xl font-serif font-bold text-deep-brown">Booking, Media & Legal</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="md:col-span-3 bg-gradient-to-br from-luxury-input to-white border border-luxury-border rounded-lg p-6 shadow-sm">
          <h3 className="text-lg font-serif font-semibold text-deep-brown mb-6 flex items-center gap-2">
            <BookPlus className="text-primary-gold" />
            Petition Channel
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <FormLabel>Booking Mode</FormLabel>
              <select className="w-full bg-white border-luxury-border rounded text-luxury-gray focus:ring-1 focus:ring-primary-gold focus:border-primary-gold py-2.5">
                <option>External Link</option>
                <option>Integrated iFrame</option>
              </select>
            </div>
            <div>
              <FormLabel>Destination URL</FormLabel>
              <div className="relative">
                <Link2 className="absolute left-3 top-1/2 -translate-y-1/2 text-luxury-gray/50 w-5" />
                <input
                  className="pl-10 w-full bg-white border-luxury-border rounded text-luxury-gray focus:ring-1 focus:ring-primary-gold focus:border-primary-gold py-2.5"
                  placeholder="https://reserva..."
                  type="url"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="md:col-span-3">
          <h3 className="text-lg font-serif font-semibold text-deep-brown mb-6 flex items-center gap-2">
            <Images className="text-primary-gold" />
            Gallery
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-6 gap-6">
            <div className="xl:col-span-2 sm:col-span-3">
              <FormLabel required>Hero Image (Cover)</FormLabel>
              <input
                ref={heroImageFileRef}
                hidden
                type="file"
                accept="image/*"
                onChange={(e) => handleFileChange(e, "heroImage")}
              />
              {filesPreview.heroImage ? (
                <div
                  className="aspect-square mt-1 h-[250px] bg-cover bg-center flex items-center justify-center rounded-lg relative group overflow-hidden shadow-sm"
                  data-alt="Abstract placeholder image representing a luxury service">
                  <img src={filesPreview.heroImage} alt="Hero Image" className="" />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300"></div>
                  <button
                    type="button"
                    className="absolute top-1 right-1 text-white opacity-0 group-hover:opacity-100 transition-opacity bg-black/50 rounded-full p-1.5 hover:bg-red-500"
                    onClick={() => handleRemoveFile("heroImage")}>
                    <Trash className="w-5 h-5" />
                  </button>
                </div>
              ) : (
                <div
                  className="aspect-square mt-1 h-[250px] border-2 border-dashed border-luxury-border rounded-lg bg-luxury-input/50/30 p-8 flex flex-col items-center justify-center text-center hover:bg-luxury-input transition-all cursor-pointer group min-h-[160px]"
                  onClick={() => heroImageFileRef.current?.click()}>
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-3 shadow-sm group-hover:scale-110 transition-transform">
                    <ImagePlus className="text-primary-gold text-2xl" />
                  </div>
                  <p className="text-xs text-luxury-gray mt-1">JPG, JPEG, PNG, WEBP, AIF (Max 5MB)</p>
                </div>
              )}
            </div>
            <div className="xl:col-span-2 sm:col-span-3">
              <FormLabel>Provider Logo</FormLabel>
              <input
                ref={providerLogoFileRef}
                hidden
                type="file"
                accept="image/*"
                onChange={(e) => handleFileChange(e, "providerLogo")}
              />
              {filesPreview.providerLogo ? (
                <div
                  className="aspect-square mt-1 h-[250px] bg-cover bg-center  flex items-center justify-center rounded-lg relative group overflow-hidden shadow-sm"
                  data-alt="Abstract placeholder image representing a luxury service">
                  <img src={filesPreview.providerLogo} alt="Provider Logo" className="" />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300"></div>
                  <button
                    type="button"
                    className="absolute top-1 right-1 text-white opacity-0 group-hover:opacity-100 transition-opacity bg-black/50 rounded-full p-1.5 hover:bg-red-500"
                    onClick={() => handleRemoveFile("providerLogo")}>
                    <Trash className="w-5 h-5" />
                  </button>
                </div>
              ) : (
                <div
                  className="aspect-square mt-1 h-[250px] border-2 border-dashed border-luxury-border rounded-lg bg-luxury-input/50/30 p-4 flex flex-col items-center justify-center text-center hover:bg-luxury-input transition-all cursor-pointer group min-h-[160px]"
                  onClick={() => providerLogoFileRef.current?.click()}>
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-3 shadow-sm group-hover:scale-110 transition-transform">
                    <ImagePlus className="text-primary-gold text-2xl" />
                  </div>
                  <p className="text-xs text-luxury-gray">JPG, JPEG, PNG, WEBP, AIF (Max 5MB)</p>
                </div>
              )}
            </div>
            <div className="sm:col-span-6">
              <FormLabel>Additonal Gallery (Max {MAX_GALLERY_FILES})</FormLabel>
              <input
                ref={galleryFilesRef}
                hidden
                type="file"
                accept="image/*"
                multiple
                onChange={(e) => handleFileChange(e, "galleryFiles")}
              />
              <div className="grid grid-cols-2 sm:grid-cols-4 xl:grid-cols-6 gap-3 mt-2">
                <button
                  type="button"
                  disabled={disableGalleryButton}
                  className={`aspect-square border-2 border-dashed border-luxury-border rounded-lg flex flex-col items-center justify-center text-primary-gold bg-white ${disableGalleryButton ? "opacity-50 cursor-not-allowed" : "group hover:bg-luxury-input cursor-pointer transition-colors"}`}
                  onClick={() => galleryFilesRef.current?.click()}>
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-3 shadow-sm group-hover:scale-110 transition-transform">
                    <FilePlus className="text-primary-gold text-2xl" />
                  </div>
                  <span className="text-[10px] uppercase font-bold mt-1">Add</span>
                </button>
                {filesPreview.galleryFiles.map((url: string, index: number) => (
                  <div
                    key={index}
                    className="aspect-square bg-cover bg-center rounded-lg relative group overflow-hidden shadow-sm"
                    data-alt="Abstract placeholder image representing a luxury service">
                    <img src={url} alt="Provider Logo" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300"></div>
                    <button
                      type="button"
                      className="absolute top-1 right-1 text-white opacity-0 group-hover:opacity-100 transition-opacity bg-black/50 rounded-full p-1.5 hover:bg-red-500"
                      onClick={() => handleRemoveFile("galleryFiles", index)}>
                      <Trash className="w-5 h-5" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BookingGalleryForm
