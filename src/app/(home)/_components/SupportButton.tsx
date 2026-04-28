"use client"

import { useState, useEffect } from "react"

import WhatsappIcon from "@/assets/icons/WhatsappIcon"

const SupportButton = () => {
  const [isAutoVisible, setIsAutoVisible] = useState(true)

  useEffect(() => {
    // 2. Lo ocultamos automáticamente después de 8 segundos de haber aparecido
    const hideTimer = setTimeout(() => {
      setIsAutoVisible(false)
    }, 5000) // 5s espera + 8s visible

    return () => {
      clearTimeout(hideTimer)
    }
  }, [])

  return (
    <div className="group fixed bottom-5 right-5 z-[1000] flex items-center">
      {/* Tooltip Container */}
      {/* Usamos una lógica de JS para controlar la opacidad además del hover */}
      <div
        className={`absolute right-full mr-4 transition-all duration-300 pointer-events-none
          ${isAutoVisible ? "opacity-100 -translate-x-1" : "opacity-0 group-hover:opacity-100 group-hover:-translate-x-1"}
        `}>
        <div className="relative whitespace-nowrap rounded-lg bg-[#6f7a4a] px-3 py-2 text-sm text-white shadow-xl">
          Can't find us? Chat with us
          {/* Triangulito */}
          <div className="absolute top-1/2 -right-0.25 h-3 w-3 -translate-y-1/2 translate-x-1/3 rotate-45 bg-[#6f7a4a]"></div>
        </div>
      </div>

      {/* Botón */}
      <div
        className="h-12 w-12 p-1 rounded-full flex items-center justify-center bg-primary-gold-light text-[#6f7a4a] shadow-lg cursor-pointer hover:bg-primary-gold-dark hover:text-primary-gold-light transition-all active:scale-95"
        onClick={() => window.open("https://wa.me/tunumero", "_blank")}>
        <WhatsappIcon />
      </div>
    </div>
  )
}

export default SupportButton
