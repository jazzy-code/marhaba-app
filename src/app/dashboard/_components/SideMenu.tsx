"use client"

import { Archive, LayoutDashboard } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

import { useServicesStats } from "@/hooks/useServicesStats"

const SideMenu = () => {
  const pathname = usePathname()
  const { data } = useServicesStats()

  const menuSelectedClasses =
    "flex items-center gap-3 px-4 py-3 bg-primary-gold/10 text-primary-gold dark:text-primary-gold rounded-sm transition-colors group"
  const menuClasses =
    "flex items-center gap-3 px-4 py-3 text-stone-600 dark:text-stone-400 hover:bg-stone-100 dark:hover:bg-stone-800 rounded-sm transition-colors group"

  return (
    <aside className="hidden lg:flex w-72 flex-col bg-background-light dark:bg-stone-900 border-r border-stone-200 dark:border-stone-800 h-full">
      <div className="p-8 pb-4">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 bg-primary-gold/20 rounded-full flex items-center justify-center text-primary-gold font-serif font-bold text-xl">
            M
          </div>
          <div>
            <h1 className="font-serif text-lg font-bold text-stone-900 leading-tight">Marbella</h1>
            <p className="text-xs text-primary-gold font-medium tracking-widest uppercase">Provider Portal</p>
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
          <Archive className="group-hover:text-primary-gold transition-colors" />
          <span className="font-medium text-sm">My Services</span>
          <span className="ml-auto bg-stone-200 text-stone-600 text-[10px] font-bold px-2 py-0.5 rounded-full">
            {data?.total || 0}
          </span>
        </Link>
        {/* <Link
          className={pathname === "/dashboard/inquiries" ? menuSelectedClasses : menuClasses}
          href="/dashboard/inquiries">
          <span className="material-symbols-outlined group-hover:text-primary-gold transition-colors">mail</span>
          <span className="font-medium text-sm">Inquiries</span>
          <span className="ml-auto bg-stone-200 text-stone-600 text-[10px] font-bold px-2 py-0.5 rounded-full">3</span>
        </Link> */}
        <p className="px-4 text-xs font-semibold text-stone-400 uppercase tracking-wider mb-2 mt-8">Account</p>
        <a
          className="flex items-center gap-3 px-4 py-3 text-stone-600 dark:text-stone-400 hover:bg-stone-100 dark:hover:bg-stone-800 rounded-sm transition-colors group"
          href="#">
          <span className="material-symbols-outlined group-hover:text-primary-gold transition-colors">settings</span>
          <span className="font-medium text-sm">Settings</span>
        </a>
        <a
          className="flex items-center gap-3 px-4 py-3 text-stone-600 dark:text-stone-400 hover:bg-stone-100 dark:hover:bg-stone-800 rounded-sm transition-colors group"
          href="#">
          <span className="material-symbols-outlined group-hover:text-primary-gold transition-colors">
            support_agent
          </span>
          <span className="font-medium text-sm">Support</span>
        </a>
      </nav>
      <div className="p-4 border-t border-stone-200 dark:border-stone-800">
        <div className="flex items-center gap-3 px-4 py-2">
          <div
            className="bg-center bg-no-repeat bg-cover rounded-full size-10 ring-2 ring-stone-100 dark:ring-stone-700"
            style={{
              backgroundImage:
                'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDt41JMuspw7_6XCRRRWo7P_24M3FDxXcbkBzhBquXgkuMcH_eennK9FLp-wBL9tdzuWQyodg9pZrwZUxDefhWh3OIS6ErRKpT6yWny8qs8efjMhouGrXR18A5GppOXnMGxTqSur_sJG1VckC3p-c8e9SEbAYC63C-TjMLKDsvsxc47up0oi2wyv0jyaiaQ33JOso8ZVwpUoOv2njPcegi8RkO7d03Sq2EoyFU5U-1zI-QrRGsgAvJiygSe2InqZozrKXk3F6Btmko")'
            }}></div>
          <div className="flex flex-col">
            <span className="text-sm font-bold text-stone-900">Elena R.</span>
            <span className="text-xs text-stone-500">Provider</span>
          </div>
        </div>
      </div>
    </aside>
  )
}

export default SideMenu
