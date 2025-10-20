'use client'

import { useState } from 'react'
import { Send, Check } from 'lucide-react'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      setEmail('')
    }, 1000)
  }

  return (
    <section className="section-padding bg-gradient-to-r from-green-600 to-green-700">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Stay Updated with Islamic Knowledge
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Get the latest articles on Quran studies, prophet stories, and spiritual guidance delivered to your inbox.
          </p>
          
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 rounded-lg border border-green-300 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent text-gray-900"
                required
                disabled={isSubmitting}
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-white text-green-600 font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors duration-200 flex items-center justify-center gap-2 disabled:opacity-50"
              >
                {isSubmitting ? (
                  'Subscribing...'
                ) : (
                  <>
                    <Send size={20} />
                    Subscribe
                  </>
                )}
              </button>
            </form>
          ) : (
            <div className="bg-white text-green-600 font-semibold px-6 py-4 rounded-lg inline-flex items-center gap-2">
              <Check size={20} />
              Thank you for subscribing!
            </div>
          )}
          
          <p className="text-green-200 text-sm mt-4">
            No spam ever. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </section>
  )
}