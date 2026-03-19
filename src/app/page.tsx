'use client'

import React from 'react'
import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import FleetImage from '@/components/FleetImage'
import Services from '@/components/Services'
import Projects from '@/components/Projects'
import About from '@/components/About'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import { Toaster } from '@/components/ui/sonner'

export default function Page() {
  return (
    <div className="min-h-screen bg-[#2D241E] text-foreground selection:bg-primary selection:text-primary-foreground overflow-x-hidden">
      <Navigation />
      <main>
        <Hero />
        <FleetImage />
        <Services />
        <Projects />
        <About />
        <Contact />
      </main>
      <Footer />
      <Toaster position="top-center" />
    </div>
  )
}
