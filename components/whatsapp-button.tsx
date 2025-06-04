"use client"

import { MessageCircle } from "lucide-react"

export default function WhatsAppButton() {
  const handleWhatsAppClick = () => {
    const phoneNumber = "5511999999999" // Substitua pelo número real
    const message = "Olá! Gostaria de solicitar um orçamento."
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(url, "_blank")
  }

  return (
    <button className="whatsapp-button" onClick={handleWhatsAppClick} aria-label="Contato via WhatsApp">
      <MessageCircle size={28} />
    </button>
  )
}
