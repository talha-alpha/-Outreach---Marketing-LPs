'use client'

import { useState } from 'react'
import Hero from '../components/Hero'
import Problems from '../components/Problems'
import Solutions from '../components/Solutions'
import Metrics from '../components/Metrics'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import Silders from '../components/Slider'

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <main className="min-h-screen">
      <Hero />
      <Silders />
      <Problems />
      <Solutions />
      <Metrics />
      <Contact />
      <Footer />
    </main>
  )
}
