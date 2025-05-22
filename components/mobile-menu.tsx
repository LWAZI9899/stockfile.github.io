"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="md:hidden">
      <Button variant="ghost" size="icon" onClick={() => setIsOpen(true)} aria-label="Open menu">
        <Menu className="h-6 w-6" />
      </Button>

      {isOpen && (
        <div className="fixed inset-0 z-50 bg-white">
          <div className="flex justify-end p-4">
            <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)} aria-label="Close menu">
              <X className="h-6 w-6" />
            </Button>
          </div>

          <nav className="flex flex-col items-center space-y-8 p-8">
            <Link href="#features" className="text-xl font-medium" onClick={() => setIsOpen(false)}>
              Features
            </Link>
            <Link href="#how-it-works" className="text-xl font-medium" onClick={() => setIsOpen(false)}>
              How it Works
            </Link>
            <Link href="#testimonials" className="text-xl font-medium" onClick={() => setIsOpen(false)}>
              Testimonials
            </Link>
            <Link href="#pricing" className="text-xl font-medium" onClick={() => setIsOpen(false)}>
              Pricing
            </Link>
            <Button variant="outline" onClick={() => setIsOpen(false)}>
              <Link href="#contact">Contact Us</Link>
            </Button>
          </nav>
        </div>
      )}
    </div>
  )
}
