"use client"

import { Archive, Headset, LayoutDashboard, Mail, Rows3, Settings } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

import MarhabaMarbellaIcon from "@/assets/icons/MarhabaIcon"
import { useInquiriesStats } from "@/hooks/useInquiresStats"
import { useServicesStats } from "@/hooks/useServicesStats"

const SideMenu = () => {
  const pathname = usePathname()
  const { data: servicesStats } = useServicesStats()
  const { data: inquiriesStats } = useInquiriesStats()

  const menuSelectedClasses =
    "flex items-center gap-3 px-4 py-3 bg-brown-dark text-primary-gold-light dark:text-primary-gold rounded-sm transition-colors group"
  const menuClasses =
    "flex items-center gap-3 px-4 py-3 text-stone-600 dark:text-stone-400 hover:bg-stone-100 dark:hover:bg-stone-800 rounded-sm transition-colors group"

  return (
    <aside className="hidden lg:flex w-72 flex-col bg-background-light dark:bg-stone-900 border-r border-stone-200 dark:border-stone-800 h-full">
      <div className="p-8 pb-4">
        <div className="flex items-center gap-3">
          <div className="size-12 bg-primary-gold/20 rounded-full p-2 flex items-center justify-center text-primary-gold font-serif font-bold text-xl">
            <MarhabaMarbellaIcon />
          </div>
          <div>
            <h1 className="font-serif text-lg font-bold text-stone-900 leading-tight">Marhaba Marbella</h1>
            <p className="text-xs text-primary-gold font-semibold tracking-widest uppercase">Provider Portal</p>
          </div>
        </div>
      </div>
      <nav className="flex-1 px-4 py-6 space-y-1 overflow-y-auto">
        <p className="px-4 text-xs font-semibold text-stone-400 uppercase tracking-wider mb-2">Portfolio</p>
        {/* Menu items */}
        <Link className={pathname === "/dashboard" ? menuSelectedClasses : menuClasses} href="/dashboard">
          <LayoutDashboard className="group-hover:text-primary-gold transition-colors" />
          <span className="font-medium text-sm">Dashboard</span>
        </Link>
        <Link
          className={pathname.includes("/dashboard/services") ? menuSelectedClasses : menuClasses}
          href="/dashboard/services">
          <Rows3 className="group-hover:text-primary-gold transition-colors" />
          <span className="font-medium text-sm">My Services</span>
          <span className="ml-auto bg-stone-200 text-stone-600 text-[10px] font-bold px-2 py-0.5 rounded-full">
            {servicesStats?.total || 0}
          </span>
        </Link>
        <Link
          className={pathname === "/dashboard/inquiries" ? menuSelectedClasses : menuClasses}
          href="/dashboard/inquiries">
          <Mail className="group-hover:text-primary-gold transition-colors" />
          <span className="font-medium text-sm">Inquiries</span>
          <span className="ml-auto bg-stone-200 text-stone-600 text-[10px] font-bold px-2 py-0.5 rounded-full">
            {inquiriesStats?.totalNew || 0}
          </span>
        </Link>
        <Link
          className={pathname === "/dashboard/archive" ? menuSelectedClasses : menuClasses}
          href="/dashboard/archive">
          <Archive className="group-hover:text-primary-gold transition-colors" />
          <span className="font-medium text-sm">Archive</span>
        </Link>
        <p className="px-4 text-xs font-semibold text-stone-400 uppercase tracking-wider mb-2 mt-8">Account</p>
        <a
          className="flex items-center gap-3 px-4 py-3 text-stone-600 dark:text-stone-400 hover:bg-stone-100 dark:hover:bg-stone-800 rounded-sm transition-colors group"
          href="#">
          <Settings className="group-hover:text-primary-gold transition-colors" />
          <span className="font-medium text-sm">Settings</span>
        </a>
        <a
          className="flex items-center gap-3 px-4 py-3 text-stone-600 dark:text-stone-400 hover:bg-stone-100 dark:hover:bg-stone-800 rounded-sm transition-colors group"
          href="https://wa.me/34691250100?text=Necesito%20ayuda%20con%20mi%20portal%20de%20proveedor"
          target="_blank">
          <Headset className="group-hover:text-primary-gold transition-colors" />
          <span className="font-medium text-sm">Support</span>
        </a>
      </nav>
    </aside>
  )
}

export default SideMenu
