'use client'

import { FormLabel } from "@mui/material"
import { useFormikContext } from "formik"
import { BookPlus, Images } from "lucide-react"


const BookingGalleryForm = () => {
  const { values, handleChange, handleBlur, handleSubmit, errors, touched } = useFormikContext<any>()

  return (
    <section className="space-y-8 pb-10">
      <div className="flex items-center gap-4 pb-4 border-b border-luxury-border">
        <span className="flex items-center justify-center bg-gray-200 text-gray-600 w-8 h-8 rounded-full text-sm font-bold">3</span>
        <h2 className="text-2xl font-serif font-bold text-deep-brown">Booking, Media & Legal</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="md:col-span-3 bg-gradient-to-br from-luxury-input to-white dark:from-zinc-800 dark:to-zinc-900 border border-luxury-border dark:border-zinc-700 rounded-lg p-6 shadow-sm">
          <h3 className="text-lg font-serif font-semibold text-deep-brown mb-6 flex items-center gap-2">
            <BookPlus className="text-primary-gold" />
            Booking Configuration (Core)
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <FormLabel>Booking Mode</FormLabel>
              <select className="w-full bg-white dark:bg-zinc-800 border-luxury-border dark:border-zinc-700 rounded text-luxury-gray dark:text-gray-200 focus:ring-1 focus:ring-primary-gold focus:border-primary-gold py-2.5">
                <option>Enlace Externo</option>
                <option>Iframe Integrado</option>
              </select>
            </div>
            <div>
              <FormLabel>Destination URL</FormLabel>
              <div className="relative">
                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-luxury-gray/50 text-[20px]">link</span>
                <input className="pl-10 w-full bg-white dark:bg-zinc-800 border-luxury-border dark:border-zinc-700 rounded text-luxury-gray dark:text-gray-200 focus:ring-1 focus:ring-primary-gold focus:border-primary-gold py-2.5" placeholder="https://reserva..." type="url" />
              </div>
            </div>
          </div>
        </div>
        <div className="md:col-span-2">
          <h3 className="text-lg font-serif font-semibold text-deep-brown mb-6 flex items-center gap-2">
            <Images className="text-primary-gold" />
            Gallery
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2">
              <label className="block text-xs font-semibold text-deep-brown dark:text-gray-300 uppercase tracking-wider mb-2">Hero Image (Cover)</label>
              <div className="border-2 border-dashed border-luxury-border dark:border-zinc-700 rounded-lg bg-luxury-input/50 dark:bg-zinc-800/30 p-8 flex flex-col items-center justify-center text-center hover:bg-luxury-input dark:hover:bg-zinc-800 transition-all cursor-pointer group min-h-[160px]">
                <div className="w-12 h-12 bg-white dark:bg-zinc-700 rounded-full flex items-center justify-center mb-3 shadow-sm group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-primary-gold text-2xl">add_photo_alternate</span>
                </div>
                <p className="text-sm font-medium text-deep-brown dark:text-gray-200">Arrastra tu imagen aquí</p>
                <p className="text-xs text-luxury-gray/60 mt-1">JPG, PNG alta resolución (Max 5MB)</p>
              </div>
            </div>
            <div className="md:col-span-1">
              <label className="block text-xs font-semibold text-deep-brown dark:text-gray-300 uppercase tracking-wider mb-2">Logo Provider</label>
              <div className="border-2 border-dashed border-luxury-border dark:border-zinc-700 rounded-lg bg-luxury-input/50 dark:bg-zinc-800/30 p-4 flex flex-col items-center justify-center text-center hover:bg-luxury-input dark:hover:bg-zinc-800 transition-all cursor-pointer group min-h-[160px]">
                <span className="material-symbols-outlined text-luxury-gray/40 text-4xl mb-2 group-hover:text-primary-gold transition-colors">image</span>
                <p className="text-xs text-luxury-gray dark:text-gray-400">Subir Logo</p>
              </div>
            </div>
            <div className="md:col-span-3">
              <label className="block text-xs font-semibold text-deep-brown dark:text-gray-300 uppercase tracking-wider mb-3">Additonal Gallery (Max 6)</label>
              <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-3">
                <div className="aspect-square border-2 border-dashed border-luxury-border dark:border-zinc-700 rounded-lg flex flex-col items-center justify-center hover:bg-luxury-input dark:hover:bg-zinc-800 cursor-pointer transition-colors text-primary-gold bg-white dark:bg-zinc-900">
                  <span className="material-symbols-outlined text-2xl">add</span>
                  <span className="text-[10px] uppercase font-bold mt-1">Añadir</span>
                </div>
                <div className="aspect-square bg-cover bg-center rounded-lg relative group overflow-hidden shadow-sm" data-alt="Abstract placeholder image representing a luxury service" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuB-QiRIg1Ani2-XNffOlPDX53q96S59oQZ9TOD-Kp0wLvx-6qpLZgMeOAzdfIEx78RrUDwT3JQhdI96XSuNTuXl20mwbBIB1bskOUhpaMeOZFHQVS5QoRo3do5XAHhp6uVx_-od5OW7nPVOBDXDC31BwiSGtW3BVec14Yo-E9q047b6mCTIduupo4pWNY_6Xms3G7G7we2qu9tloJAvACwMun-W0WWazH4av_efoI6MzwICixwmHZlV2x4wSsz0fShBIhxoQubwTzI')" }}>
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300"></div>
                  <button className="absolute top-1 right-1 text-white opacity-0 group-hover:opacity-100 transition-opacity bg-black/50 rounded-full p-1 hover:bg-red-500">
                    <span className="material-symbols-outlined text-[14px] leading-none block">close</span>
                  </button>
                </div>
                <div className="aspect-square bg-cover bg-center rounded-lg relative group overflow-hidden shadow-sm" data-alt="Abstract placeholder image representing a luxury service" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAmt4MvYtcKdlfUcJEQ0GsOpLYlEXpDYeosXJ19fe4cyYYDHJAno6lrclWs37RnQ_OaQXWky1zX9osxpbXIJrDsN2qP2Nt4l33S-jjgxCKY4inrMSXGIhenv9G_Bz-StGyG0SLjFstKCrdrqRsT9-uFjlyAni7nRbjan5SKlYhCnPehl5pf5LtDDW6CN7clhyYAjattm0LiLSuK2oxMpJvO0NNBE7a92MfcY-apfRnYQgagUA3CqhqfHdtP9NHFGYPGW-cl1zTXVdo')" }}>
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300"></div>
                  <button className="absolute top-1 right-1 text-white opacity-0 group-hover:opacity-100 transition-opacity bg-black/50 rounded-full p-1 hover:bg-red-500">
                    <span className="material-symbols-outlined text-[14px] leading-none block">close</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="md:col-span-2 pt-4">
          <label className="flex items-start gap-4 p-5 rounded-lg bg-luxury-input dark:bg-zinc-800 border border-luxury-border dark:border-zinc-700 cursor-pointer hover:border-primary-gold/50 transition-colors">
            <div className="pt-1">
              <input className="h-5 w-5 rounded border-gray-300 text-primary-gold focus:ring-primary-gold/20" type="checkbox" />
            </div>
            <div className="text-sm text-luxury-gray dark:text-gray-300">
              <span className="font-bold text-deep-brown block mb-1">Declaración de Conformidad</span>
              Confirmo que tengo los permisos necesarios para publicar la información e imágenes proporcionadas, y acepto los <a className="text-primary-gold hover:text-primary-gold-dark underline" href="#">Términos y Condiciones</a> del Portal de Proveedores LuxConcierge.
            </div>
          </label>
        </div>
      </div>
    </section>
  )
}

export default BookingGalleryForm