"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <div className="logo">
            <h2>ConstrutoraPro</h2>
          </div>

          <nav className={`nav ${isMenuOpen ? "nav-open" : ""}`}>
            <a href="#inicio" onClick={() => setIsMenuOpen(false)}>
              Início
            </a>
            <a href="#servicos" onClick={() => setIsMenuOpen(false)}>
              Serviços
            </a>
            <a href="#sobre" onClick={() => setIsMenuOpen(false)}>
              Sobre
            </a>
            <a href="#projetos" onClick={() => setIsMenuOpen(false)}>
              Projetos
            </a>
            <a href="#contato" onClick={() => setIsMenuOpen(false)}>
              Contato
            </a>
          </nav>

          <button className="menu-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
    </header>
  )
}
