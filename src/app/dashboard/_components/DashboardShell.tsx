"use client"

import { useState } from "react"

import { usePathname } from "next/navigation"

import Header from "./Header"
import SideMenu from "./SideMenu"

export default function DashboardShell({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const [lastPathname, setLastPathname] = useState(pathname)

  if (pathname !== lastPathname) {
    setLastPathname(pathname)
    setIsOpen(false)
  }

  return (
    <div className="flex h-screen w-full overflow-hidden">
      <SideMenu isOpen={isOpen} setIsOpen={setIsOpen} />
      <main className="flex-1 flex flex-col h-full relative overflow-hidden bg-stone-50/50 dark:bg-background-dark">
        <Header onOpenMenu={() => setIsOpen(true)} />

        <div className="flex-1 overflow-y-auto">{children}</div>
      </main>
    </div>
  )
}
