'use client'

import { Button, FormControl, FormControlLabel, FormLabel, Grid, MenuItem, Radio, RadioGroup, Switch, TextField } from "@mui/material"
import { ArrowLeft, IdCard, Mail, User } from "lucide-react"
import ServiceRealEstateForm from "./ServiceRealEstateForm"
import { useEffect, useMemo, useState } from "react"
import { useFormik } from "formik"
import { SERVICE_LIST } from "@/lib/consts"
import { baseServiceForm, getServiceFormInitalValues } from "../lib/ServicesFormValues"
import ServiceLuxuryCarForm from "./ServiceLuxuryCarForm"
import ServiceYachtForm from "./ServiceYachtForm"
import ServiceJetForm from "./ServiceJetForm"
import ServiceLuxuryStayForm from "./ServiceLuxuryStayForm"
import ServiceMedicalCareForm from "./ServiceMedicalCareForm"
import ServiceSecurityGuardForm from "./ServiceSecurityGuardForm"
import ServicePrivateEventForm from "./ServicePrivateEvent"
import ServicePrivateStaffForm from "./ServicePrivateStaff"
import ServiceBeautySpaForm from "./ServiceBeautySpaForm"
import ServiceGolfForm from "./ServiceGolfForm"
import ServiceSupportCoachForm from "./ServiceSupportCoachService"
import { useMutation } from "@tanstack/react-query"
import { createService, updateService } from "@/api/services/services.client"
import { useRouter } from "next/navigation"

const ServiceForm = ({ serviceToEdit, isCreate = true }: { serviceToEdit?: any; isCreate: boolean }) => {
  const router = useRouter()
  const [serviceType, setServiceType] = useState('')

  const initialValues = serviceType
  ? getServiceFormInitalValues(serviceType)
  : baseServiceForm

  const { mutate, isPending } = useMutation({
    mutationFn: isCreate ? createService : updateService,
    onSuccess: (data: any) => {
      console.log(data)
    },
    onError: (error: any) => {
      console.log(error)
    }
  })

  const formik = useFormik({
    initialValues: baseServiceForm,
    enableReinitialize: true,
    onSubmit: (values) => mutate(values)
  })

  const { values, handleChange, handleBlur, handleSubmit, errors, touched } = formik

  return (
    <div className="overflow-y-auto flex flex-col items-center justify-start py-10 px-4 sm:px-6 lg:px-8">
      <main className="w-full bg-surface rounded-lg shadow-luxury flex flex-col">
        <form key={serviceType} onSubmit={handleSubmit}>
          <header className="px-8 pt-10 pb-6 border-b border-luxury-border bg-surface z-10">
            <div className="text-center">
              <h1 className="text-3xl font-serif font-bold text-deep-brown mb-2">New Service</h1>
              <p className="text-sm text-luxury-gray dark:text-gray-400">Fulfill the details to list your service in the luxury portal.</p>
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
            <div className="p-8 sm:p-12 space-y-8">
              <section>
                <div>
                  <label className="block text-xs font-semibold text-deep-brown dark:text-gray-300 uppercase tracking-wider mb-2">Service Type</label>
                  <TextField select name="serviceType" value={serviceType} onChange={e => setServiceType(e.target.value)}>
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
        </form>
      </main>
      <main className="w-full bg-surface rounded-lg shadow-luxury flex flex-col">
          <div className="flex-1 bg-surface">
            <div className="p-8 sm:p-12 space-y-8">
              {serviceType && (
                <>
                  <section className="space-y-8">
                    <div className="flex items-center gap-4 pb-4 border-b border-luxury-border">
                      <span className="flex items-center justify-center bg-gray-200 text-gray-600 w-8 h-8 rounded-full text-sm font-bold">1</span>
                      <h2 className="text-2xl font-serif font-bold text-deep-brown">Información Básica del Servicio</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="md:col-span-2 mt-2">
                        <FormLabel required>title</FormLabel>
                        <TextField name="title" placeholder="Ej: Cena Gastronómica Privada al Atardecer" value={values.title} onChange={handleChange} onBlur={handleBlur} />
                      </div>
                      <div className="md:col-span-1 mt-2">
                        <FormLabel required>Reference</FormLabel>
                        <TextField name="reference" placeholder="Ej: 123456" value={values.reference} onChange={handleChange} onBlur={handleBlur} />
                      </div>
                      <div className="md:col-span-3">
                        <div className="flex justify-between items-center mb-1">
                          <FormLabel className="!mb-0" required>Short description</FormLabel>
                          <span className="text-[10px] bg-primary-gold/10 text-primary-gold px-2 py-0.5 rounded-full font-medium">0/180</span>
                        </div>
                        <TextField multiline rows={2} placeholder="Breve resumen atractivo" name="shortDescription" value={values.shortDescription} onChange={handleChange} onBlur={handleBlur} />
                      </div>
                      <div className="md:col-span-3">
                        <FormLabel required>Long description</FormLabel>
                        <TextField multiline rows={7} placeholder="Detalles exhaustivos de la experiencia, inclusiones, menú, política de cancelación, etc..." />
                        <p className="text-xs text-luxury-gray/60 mt-2 text-right">Se recomiendan mínimo 300 caracteres para mejor posicionamiento.</p>
                      </div>
                      <div className="md:col-span-2">
                        <label className="block text-xs font-semibold text-deep-brown dark:text-gray-300 uppercase tracking-wider mb-3">Status</label>
                        <div className="flex flex-wrap gap-2">
                          <label className="cursor-pointer group select-none">
                            <input className="peer sr-only" type="checkbox" />
                            <span className="inline-flex items-center px-4 py-1.5 rounded-full border border-primary-gold bg-primary-gold/5 text-primary-gold text-sm font-medium transition-all shadow-sm">
                              <span className="material-symbols-outlined text-[16px] mr-1">check</span>Disponible
                            </span>
                          </label>
                          <label className="cursor-pointer group select-none">
                            <input className="peer sr-only" type="checkbox" />
                            <span className="inline-flex items-center px-4 py-1.5 rounded-full border border-luxury-border bg-white dark:bg-zinc-800 text-luxury-gray hover:border-primary-gold/50 text-sm transition-all peer-checked:border-primary-gold peer-checked:bg-primary-gold/5 peer-checked:text-primary-gold">
                              Reservado
                            </span>
                          </label>
                          <label className="cursor-pointer group select-none">
                            <input className="peer sr-only" type="checkbox" />
                            <span className="inline-flex items-center px-4 py-1.5 rounded-full border border-luxury-border bg-white dark:bg-zinc-800 text-luxury-gray hover:border-primary-gold/50 text-sm transition-all peer-checked:border-primary-gold peer-checked:bg-primary-gold/5 peer-checked:text-primary-gold">
                              Vendido
                            </span>
                          </label>
                          <label className="cursor-pointer group select-none">
                            <input className="peer sr-only" type="checkbox" />
                            <span className="inline-flex items-center px-4 py-1.5 rounded-full border border-luxury-border bg-white dark:bg-zinc-800 text-luxury-gray hover:border-primary-gold/50 text-sm transition-all peer-checked:border-primary-gold peer-checked:bg-primary-gold/5 peer-checked:text-primary-gold">
                              Bajo Oferta
                            </span>
                          </label>
                        </div>
                      </div>
                      <div className="md:col-span-1">
                        <FormControlLabel control={<Switch defaultChecked />} label="Exclusive Listing" />
                      </div>
                      <div className="md:col-span-3">
                        <FormLabel required>Location</FormLabel>
                        <TextField placeholder="Av. Paseo de la Reforma 123" />
                      </div>
                      <div className="md:col-span-3">
                        <FormLabel required>Location link</FormLabel>
                        <TextField placeholder="Link de Google Maps" />
                      </div>
                      <div className="md:col-span-3">
                        <FormControl>
                          <FormLabel id="demo-row-radio-buttons-group-label">Location Privacy</FormLabel>
                          <RadioGroup
                            row
                            aria-labelledby="demo-row-radio-buttons-group-label"
                            name="row-radio-buttons-group"
                          >
                            <FormControlLabel value="female" control={<Radio />} label="Exact" />
                            <FormControlLabel value="male" control={<Radio />} label="Aproximately" />
                            <FormControlLabel value="other" control={<Radio />} label="Hidden" />
                          </RadioGroup>
                        </FormControl>
                      </div>
                      <div className="md:col-span-3 p-6 bg-luxury-input dark:bg-zinc-800/50 rounded-lg border border-luxury-border mt-4">
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                          <div>
                            <FormLabel>Price Model</FormLabel>
                            <select className="w-full bg-white dark:bg-zinc-800 border-luxury-border dark:border-zinc-700 rounded text-luxury-gray dark:text-gray-200 focus:ring-1 focus:ring-primary-gold focus:border-primary-gold py-2.5">
                              <option>Fijo (Ej. 150€)</option>
                              <option>Dese (Ej. Desde 150€)</option>
                              <option>A consultar (Ej. Contact for price)</option>
                            </select>
                          </div>
                          <div>
                            <FormLabel>Price</FormLabel>
                            <div className="relative">
                              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-luxury-gray/50 text-[20px]">payments</span>
                              <input className="pl-10 w-full bg-white dark:bg-zinc-800 border-luxury-border dark:border-zinc-700 rounded text-luxury-gray dark:text-gray-200 focus:ring-1 focus:ring-primary-gold focus:border-primary-gold placeholder:text-luxury-gray/40 py-2.5" placeholder="0.00" type="number" />
                            </div>
                          </div>
                          <div>
                            <FormLabel>Currency</FormLabel>
                            <div className="relative">
                              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-luxury-gray/50 text-[20px]">currency_exchange</span>
                              <select className="pl-10 w-full bg-white dark:bg-zinc-800 border-luxury-border dark:border-zinc-700 rounded text-luxury-gray dark:text-gray-200 focus:ring-1 focus:ring-primary-gold focus:border-primary-gold py-2.5">
                                <option>EUR (€)</option>
                                <option>USD ($)</option>
                              </select>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>

                  <hr className="border-luxury-border border-dashed" />

                  <section className="space-y-8 pb-10">
                    <div className="flex items-center gap-4 pb-4 border-b border-luxury-border">
                      <span className="flex items-center justify-center bg-gray-200 text-gray-600 w-8 h-8 rounded-full text-sm font-bold">2</span>
                      <h2 className="text-2xl font-serif font-bold text-deep-brown">Service Details</h2>
                    </div>
                    {/* <div className="grid grid-cols-1 md:grid-cols-6 gap-6"> */}
                    <Grid container spacing={3}>
                      {'isServiceInitialized' in values && (
                        <>
                          {serviceType === 'RealEstate' && values.serviceType === 'RealEstate' && <ServiceRealEstateForm formik={formik} />}
                          {serviceType === 'LuxuryCar' && values.serviceType === 'LuxuryCar' && <ServiceLuxuryCarForm formik={formik} />}
                          {serviceType === 'Yacht' && values.serviceType === 'Yacht' && <ServiceYachtForm formik={formik} />}
                          {serviceType === 'Jet' && values.serviceType === 'Jet' && <ServiceJetForm formik={formik} />}
                          {serviceType === 'LuxuryStay' && values.serviceType === 'LuxuryStay' && <ServiceLuxuryStayForm formik={formik} />}
                          {serviceType === 'MedicalCare' && values.serviceType === 'MedicalCare' && <ServiceMedicalCareForm formik={formik} />}
                          {serviceType === 'SecurityGuard' && values.serviceType === 'SecurityGuard' && <ServiceSecurityGuardForm formik={formik} />}
                          {serviceType === 'PrivateEvent' && values.serviceType === 'PrivateEvent' && <ServicePrivateEventForm formik={formik} />}
                          {serviceType === 'PrivateStaff' && values.serviceType === 'PrivateStaff' && <ServicePrivateStaffForm formik={formik} />}
                          {serviceType === 'BeautySpa' && values.serviceType === 'BeautySpa' && <ServiceBeautySpaForm formik={formik} />}
                          {serviceType === 'Golf' && values.serviceType === 'Golf' && <ServiceGolfForm formik={formik} />}
                          {serviceType === 'SupportCoach' && values.serviceType === 'SupportCoach' && <ServiceSupportCoachForm formik={formik} />}
                        </>

                      )}
                    </Grid>
                    {/* </div> */}
                  </section>

                  <hr className="border-luxury-border border-dashed" />

                  <section className="space-y-8 pb-10">
                    <div className="flex items-center gap-4 pb-4 border-b border-luxury-border">
                      <span className="flex items-center justify-center bg-gray-200 text-gray-600 w-8 h-8 rounded-full text-sm font-bold">3</span>
                      <h2 className="text-2xl font-serif font-bold text-deep-brown">Booking, Media & Legal</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="md:col-span-3 bg-gradient-to-br from-luxury-input to-white dark:from-zinc-800 dark:to-zinc-900 border border-luxury-border dark:border-zinc-700 rounded-lg p-6 shadow-sm">
                        <h3 className="text-lg font-serif font-semibold text-deep-brown mb-6 flex items-center gap-2">
                          <span className="material-symbols-outlined text-primary-gold">book_online</span>
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
                          <span className="material-symbols-outlined text-primary-gold">perm_media</span>
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
                </>
              )}
            </div>
          </div>
          <footer className="px-8 py-6 bg-surface border-t border-luxury-border flex items-center justify-between z-10">
            <Button startIcon={<ArrowLeft />} disabled={isPending} size="large" type="button" color="secondaryDark" onClick={() => router.back()}>
              Back
            </Button>
            <Button disabled={isPending || !serviceType} size="large" variant="contained" type="submit">
              Create Service
            </Button>
          </footer>
      </main>
    </div>
  )
}

export default ServiceForm