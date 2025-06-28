"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [showHeader, setShowHeader] = useState(false)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsMenuOpen(false)
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      setShowHeader(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50 transition-transform duration-300 ${
          showHeader ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold text-teal-700">Dr. Serena Blake</div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <button onClick={() => scrollToSection("about")} className="text-gray-700 hover:text-teal-700">
                About
              </button>
              <button onClick={() => scrollToSection("services")} className="text-gray-700 hover:text-teal-700">
                Services
              </button>
              <button onClick={() => scrollToSection("faq")} className="text-gray-700 hover:text-teal-700">
                FAQ
              </button>
              <button onClick={() => scrollToSection("contact")} className="text-gray-700 hover:text-teal-700">
                Contact
              </button>
              <Button onClick={() => scrollToSection("contact")} className="bg-teal-600 hover:bg-teal-700">
                Book Consultation
              </Button>
            </nav>

            {/* Mobile Menu Button */}
            <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <nav className="md:hidden mt-4 pb-4 border-t border-gray-200">
              <div className="flex flex-col space-y-4 pt-4">
                <button onClick={() => scrollToSection("about")} className="text-left text-gray-700 hover:text-teal-700">
                  About
                </button>
                <button
                  onClick={() => scrollToSection("services")}
                  className="text-left text-gray-700 hover:text-teal-700"
                >
                  Services
                </button>
                <button onClick={() => scrollToSection("faq")} className="text-left text-gray-700 hover:text-teal-700">
                  FAQ
                </button>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="text-left text-gray-700 hover:text-teal-700"
                >
                  Contact
                </button>
                <Button
                  onClick={() => scrollToSection("contact")}
                  className="bg-teal-600 hover:bg-teal-700 w-full"
                >
                  Book Consultation
                </Button>
              </div>
            </nav>
          )}
        </div>
      </header>
    </>
  )
}
