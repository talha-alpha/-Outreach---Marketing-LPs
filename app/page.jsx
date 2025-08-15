'use client'

import { useState } from 'react'
import Hero from '../components/Hero'
import Problems from '../components/Problems'
import Solutions from '../components/Solutions'
import Metrics from '../components/Metrics'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <main className="min-h-screen">
      <Hero />
      <Problems />
      <Solutions />
      <Metrics />
      <Contact />
      <Footer />
    </main>
  )
}
