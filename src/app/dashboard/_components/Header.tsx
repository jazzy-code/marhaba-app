"use client"

import { SignedIn, UserButton, useUser } from "@clerk/nextjs"
import { Menu } from "lucide-react"

import GoogleTranslate from "@/components/GoogleTranslate"

const Header = ({ onOpenMenu }: { onOpenMenu: () => void }) => {
  const { user } = useUser()

  return (
    <header className="h-16 flex-shrink-0 border-b border-stone-200 dark:border-stone-800 bg-background-light dark:bg-stone-900 flex items-center justify-between pr-6 lg:pl-6 pl-2">
      <button className="lg:hidden p-2 text-stone-500" onClick={onOpenMenu}>
        <Menu />
      </button>
      <div className="hidden md:flex items-center max-w-md w-full gap-3"></div>
      <div className="flex items-center gap-4">
        <GoogleTranslate />
        <div className="h-8 w-px bg-stone-200 dark:bg-stone-700 mx-2"></div>
        <SignedIn>
          <UserButton />
          <span className="text-sm font-medium text-stone-900">
            {user?.firstName} {user?.lastName}
          </span>
        </SignedIn>
      </div>
    </header>
  )
}

export default Header
