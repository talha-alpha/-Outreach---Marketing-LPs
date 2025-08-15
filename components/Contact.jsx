'use client'

import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    challenge: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <section className="section-padding bg-gradient-to-br from-primary-50 to-primary-100">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-dark-900 mb-6">
            Bring us the challenge. We'll bring the firepower to solve it.
          </h2>
          
          <form onSubmit={handleSubmit} className="mt-12 space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-dark-700 mb-2 text-left">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                  placeholder="Your name"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-dark-700 mb-2 text-left">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                  placeholder="your@email.com"
                  required
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="challenge" className="block text-sm font-semibold text-dark-700 mb-2 text-left">
                What's Bugging You...
              </label>
              <textarea
                id="challenge"
                name="challenge"
                value={formData.challenge}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 resize-none"
                placeholder="Tell us about your automotive eCommerce challenges..."
                required
              />
            </div>
            
            <button
              type="submit"
              className="btn-primary text-lg px-12 py-4 w-full md:w-auto"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
