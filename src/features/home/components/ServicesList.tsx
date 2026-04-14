"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

import { usePublicServices } from "@/context/PublicServicesContext"

const ServicesList = () => {
  const pathname = usePathname()
  const { serviceTypes } = usePublicServices()

  const menuClasses = "transition-colors hover:text-primary-gold"
  const menuSelectedClasses = "text-primary-gold font-bold bg-primary-gold/10"

  return (
    <aside className="w-full md:w-32 lg:w-64 shrink-0 space-y-8 h-fit lg:sticky lg:top-32">
      <div>
        <h3 className="text-[10px] font-bold uppercase tracking-widest text-deep-brown mb-4 border-b border-brand-border pb-2">
          Services
        </h3>
        <div className="flex flex-col gap-2">
          <Link
            href={`/catalog`}
            className={`px-2 rounded-md text-left py-1 text-xs uppercase tracking-widest ${pathname === "/catalog" ? menuSelectedClasses : menuClasses}`}>
            All
          </Link>
          {serviceTypes.map((type) => (
            <Link
              key={type.key}
              href={`/catalog/${type.slug}`}
              className={`px-2 rounded-md text-left py-1 text-xs uppercase tracking-widest ${pathname === `/catalog/${type.slug}` ? menuSelectedClasses : menuClasses}`}>
              {type.name}
            </Link>
          ))}
        </div>
      </div>
    </aside>
  )
}

export default ServicesList
