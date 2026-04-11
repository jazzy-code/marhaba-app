"use client"

import { ReactNode, useState } from "react"

import { MapPin, Share2 } from "lucide-react"

import ModalInquiry from "@/components/modals/ModalInquiry"
import { CUR_SYM } from "@/constants"
import { useCurrency } from "@/hooks/useCurrency"
import { getModality, getPriceModel } from "@/utils/formatServiceValues"

import { ServiceFeatures } from "../previewsHelpers/ServiceFeatures"

type CharacteristicType = {
  label: string
  value?: string
  icon?: ReactNode
}

interface ServiceBasePreviewWrapperProps {
  service: any
  characteristics: CharacteristicType[]
  children?: ReactNode
}

const ServiceBasePreviewWrapper = ({ service, characteristics, children }: ServiceBasePreviewWrapperProps) => {
  const { formatStringCurrency } = useCurrency(service.currency)

  const images = [service.heroImageUrl, ...(service.serviceFiles?.map((f: any) => f.url) || [])].filter(Boolean)

  const [open, setOpen] = useState(false)
  const [index, setIndex] = useState(0)
  const [openInquiryModal, setOpenInquiryModal] = useState(false)

  const openGallery = (i: number) => {
    setIndex(i)
    setOpen(true)
  }

  const next = () => setIndex((prev: number) => (prev + 1) % images.length)
  const prev = () => setIndex((prev: number) => (prev - 1 + images.length) % images.length)
  return (
    <>
      <main className="max-w-[1400px] mx-auto px-2 lg:px-4 pb-8 lg:pb-15">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-8 flex flex-col gap-12">
            <div className="space-y-4">
              <h1 className="font-serif text-5xl md:text-[3.5rem] text-brand-primary leading-tight wrap-break-word">
                {service.title}
              </h1>
              <p className="text-brand-secondary text-lg font-light tracking-wide uppercase wrap-break-word">
                {service.subtitle}
              </p>
              <div className="flex items-center gap-2 mt-2">
                <MapPin size={22} className="text-brand-secondary" />
                <span className="text-sm font-sans tracking-wide text-brand-secondary font-semibold uppercase">
                  {service.city?.name}, {service.district}
                </span>
              </div>
              <div className="flex flex-wrap items-center gap-6 mt-8">
                {characteristics &&
                  characteristics.length &&
                  characteristics
                    .filter((item) => item !== null && item !== undefined)
                    .map((characteristic: CharacteristicType, index: number) => {
                      return (
                        <div className="flex items-center gap-6" key={characteristic.label}>
                          <div className="flex items-center gap-2 text-brand-secondary">
                            {characteristic.icon}
                            <span className="text-sm font-sans tracking-wide uppercase">
                              {characteristic.value} {characteristic.label}
                            </span>
                          </div>
                          {index < characteristics.length && <div className="w-px h-4 bg-brand-border"></div>}
                        </div>
                      )
                    })}
              </div>
            </div>

            {/* 🔥 GRID DINÁMICO */}
            <div className="grid gap-3 h-[600px] rounded-sm overflow-hidden">
              {/* 1 imagen */}
              {images.length === 1 && (
                <div className="w-full h-full relative group">
                  <img
                    src={images[0]}
                    alt={service.title}
                    onClick={() => openGallery(0)}
                    className="w-full h-full object-cover cursor-pointer transition duration-[1.5s] group-hover:scale-105"
                  />
                </div>
              )}

              {/* 2 imágenes */}
              {images.length === 2 && (
                <div className="grid grid-cols-2 gap-3 h-full">
                  {images.map((img, i) => (
                    <img
                      key={i}
                      src={img}
                      alt={service.title}
                      onClick={() => openGallery(i)}
                      className="w-full h-full object-cover cursor-pointer hover:scale-105 transition duration-700"
                    />
                  ))}
                </div>
              )}

              {/* 3 imágenes */}
              {images.length === 3 && (
                <div className="grid grid-cols-2 grid-rows-2 gap-3 h-full">
                  <img
                    src={images[0]}
                    onClick={() => openGallery(0)}
                    alt={service.title}
                    className="col-span-2 row-span-1 w-full h-full object-cover cursor-pointer"
                  />
                  {images.slice(1).map((img, i) => (
                    <img
                      key={i}
                      src={img}
                      alt={service.title}
                      onClick={() => openGallery(i + 1)}
                      className="w-full h-full object-cover cursor-pointer transition duration-[1.5s] group-hover:scale-105"
                    />
                  ))}
                </div>
              )}

              {/* 4+ imágenes (tu layout original mejorado) */}
              {images.length >= 4 && (
                <div className="grid grid-cols-4 grid-rows-2 gap-3 h-full">
                  <div className="col-span-2 row-span-2 relative group overflow-hidden">
                    <img
                      src={images[0]}
                      alt={service.title}
                      onClick={() => openGallery(0)}
                      className="w-full h-full object-cover cursor-pointer transition duration-[1.5s] group-hover:scale-105"
                    />
                  </div>

                  <div className="col-span-2 row-span-1 group">
                    <img
                      src={images[1]}
                      alt={service.title}
                      onClick={() => openGallery(1)}
                      className="w-full h-full object-cover cursor-pointer transition duration-[1.5s] group-hover:scale-105"
                    />
                  </div>

                  <div className="relative group">
                    <img
                      src={images[2]}
                      alt={service.title}
                      onClick={() => openGallery(2)}
                      className="w-full h-full object-cover cursor-pointer transition duration-[1.5s] group-hover:scale-105"
                    />
                  </div>

                  <div className="relative group">
                    <img
                      src={images[3]}
                      alt={service.title}
                      onClick={() => openGallery(3)}
                      className="w-full h-full object-cover cursor-pointer transition duration-[1.5s] group-hover:scale-105"
                    />

                    {/* overlay */}
                    <div className="absolute inset-0 flex items-end justify-center pb-4 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition">
                      <button
                        onClick={() => openGallery(0)}
                        className="bg-white px-4 py-2 text-xs uppercase tracking-widest">
                        View All ({images.length})
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* 🔥 MODAL */}
            {open && (
              <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center">
                {/* cerrar */}
                <button onClick={() => setOpen(false)} className="absolute top-6 right-6 text-white text-2xl">
                  ✕
                </button>

                {/* imagen */}
                <img src={images[index]} alt={service.title} className="max-h-[90%] max-w-[90%] object-contain" />

                {/* izquierda */}
                {images.length > 1 && (
                  <>
                    <button onClick={prev} className="absolute left-6 text-white text-3xl">
                      ‹
                    </button>

                    <button onClick={next} className="absolute right-6 text-white text-3xl">
                      ›
                    </button>
                  </>
                )}

                {/* contador */}
                <div className="absolute bottom-6 text-white text-sm">
                  {index + 1} / {images.length}
                </div>
              </div>
            )}

            <section className="flex flex-col sm:flex-row items-center justify-between py-10 border-y border-brand-border">
              <div className="flex  items-center gap-6">
                <div className="h-16 w-16 rounded-full overflow-hidden border border-brand-border ring-4 ring-page">
                  <img
                    alt="Provider logo"
                    className="w-full h-full object-cover"
                    src={
                      service.providerLogoUrl ||
                      "https://lh3.googleusercontent.com/aida-public/AB6AXuB5pl4cbt7VtD6w3fLvtG_NIc1--Zv8mJNI8WBS3lLCJ4MetARSqJL-xDNy3CIn3NLrPlrY9otCmvfAPHlIoEbfmwxxCivpZWItW0GC5gGEKOYR-F3KgazSHdDC9mXLQ93obqSZjXbgURV4eOOGqL_J_Z0Cv_QkqumxFcRaX4hVc-m8fxmIBLsJre7RFdBaq-u6GFJfQ6B4hTjWlgKODCs5O7iGzGaB0bB_ENwf34Ndx9hcSjaMg9ktHvXf6a3IEI7aQf2DGrZXHlQ"
                    }
                  />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-brand-secondary mb-1">Listed by</p>
                  <p className="font-serif text-2xl text-brand-primary">
                    {service.user.firstName} {service.user.lastName}
                  </p>
                </div>
              </div>
              {service.exclusiveListing && (
                <div className="flex mt-8 sm:mt-0 items-center gap-2 px-5 py-2 border border-brand-border rounded-sm">
                  <span className="material-symbols-outlined icon-filled text-brand-accent text-[16px]">verified</span>
                  <span className="text-[10px] uppercase tracking-widest font-semibold text-brand-primary">
                    Exclusive Listing
                  </span>
                </div>
              )}
            </section>

            <section>
              <h3 className="font-serif text-3xl text-brand-primary mb-8">Description</h3>
              <div className="text-brand-secondary/90 text-lg leading-[1.8] font-light space-y-6 max-w-3xl whitespace-pre-line break-all">
                {service.longDescription}
              </div>
            </section>

            {children && <section className="pt-10 border-t border-brand-border">{children}</section>}

            <ServiceFeatures service={service} />
          </div>
          <div className="lg:col-span-4 relative">
            <div className="sticky top-14 space-y-6">
              <div className="bg-brand-surface border border-brand-border/80 p-8 rounded-sm shadow-[0_4px_40px_-10px_rgba(47,32,3,0.06)]">
                <div className="mb-8 pb-6 border-b border-brand-border/50">
                  <p className="text-[10px] uppercase tracking-[0.2em] text-brand-secondary mb-2">
                    {getPriceModel(service.priceModel)}
                  </p>
                  <span className="text-2xl lg:text-3xl font-serif text-brand-accent">
                    {service.priceModel === "CONSULT" ? (
                      "On Request"
                    ) : (
                      <>
                        {CUR_SYM[service.currency]}
                        {formatStringCurrency(service.price)}
                      </>
                    )}
                  </span>
                </div>
                <div className="space-y-4 mb-10">
                  <div className="flex justify-between items-center bg-page/50 p-4 border border-brand-border rounded-sm">
                    <span className="text-[10px] uppercase tracking-widest font-medium text-brand-secondary">
                      Modality
                    </span>
                    <span className="text-sm font-medium text-brand-primary">{getModality(service.modality)}</span>
                  </div>
                  {service.reference && (
                    <div className="flex justify-between items-center bg-page/50 p-4 border border-brand-border rounded-sm">
                      <span className="text-[10px] uppercase tracking-widest font-medium text-brand-secondary">
                        Reference
                      </span>
                      <span className="text-sm font-medium text-brand-primary">{service.reference}</span>
                    </div>
                  )}
                </div>
                <div className="flex space-y-3">
                  <button
                    type="button"
                    onClick={() => setOpenInquiryModal(true)}
                    className="flex justify-center w-full bg-brand-primary text-white py-5 rounded-sm text-xs uppercase tracking-[0.2em] font-medium hover:opacity-95 transition-all shadow-lg shadow-brand-primary/10">
                    {service.callToActionText || "Request More Info"}
                  </button>
                  {/* <Link
                    href={service.callToActionUrl || "#"}
                    className="flex justify-center w-full bg-brand-primary text-white py-5 rounded-sm text-xs uppercase tracking-[0.2em] font-medium hover:opacity-95 transition-all shadow-lg shadow-brand-primary/10">
                    {service.callToActionText || "Request More Info"}
                  </Link> */}
                </div>
                <div className="mt-8 pt-6 border-t border-brand-border flex justify-between items-center text-[10px] uppercase tracking-widest text-brand-secondary">
                  <div className="flex items-center gap-2">
                    <Share2 size={22} className="text-brand-secondary/60" />
                    Share
                  </div>
                  {/* <div className="flex items-center gap-2">
                    <Heart size={22} className="text-brand-secondary/60" />
                    Save
                  </div> */}
                </div>
              </div>
              <div className="bg-white border border-brand-border/60 p-6 rounded-sm flex items-start gap-5">
                <div className="bg-page p-2.5 rounded-full text-brand-accent shrink-0 border border-brand-border/50">
                  <span className="material-symbols-outlined text-[20px]">diamond</span>
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-widest text-brand-primary mb-2">
                    Private Acquisition
                  </h4>
                  <p className="text-xs text-brand-secondary leading-relaxed mb-4 font-light">
                    Interested in off-market opportunities? Our bespoke advisory service handles high-value transactions
                    with full discretion.
                  </p>
                  <a
                    className="text-[10px] font-bold uppercase tracking-widest text-brand-primary border-b border-brand-primary/30 hover:border-brand-primary pb-0.5 transition-colors"
                    href="#">
                    Speak with an Advisor
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <ModalInquiry service={service} open={openInquiryModal} onClose={() => setOpenInquiryModal(false)} />
    </>
  )
}

export default ServiceBasePreviewWrapper
