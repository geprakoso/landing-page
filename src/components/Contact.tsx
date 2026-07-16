import { ArrowRight, Loader2 } from 'lucide-react'
import React, { useState } from 'react'

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')
    setErrorMessage('')

    const formData = new FormData(e.currentTarget)
    
    // Get access key from env or fallback to placeholder
    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY
    if (!accessKey) {
      setSubmitStatus('error')
      setErrorMessage('Web3Forms Access Key is missing. Please set VITE_WEB3FORMS_ACCESS_KEY in your environment variables.')
      setIsSubmitting(false)
      return
    }

    formData.append('access_key', accessKey)

    // Optional: add subject or from name
    formData.append('subject', 'New Contact Form Submission - Kosoga')

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData
      })

      const data = await response.json()

      if (data.success) {
        setSubmitStatus('success')
        // Reset form
        e.currentTarget.reset()
      } else {
        setSubmitStatus('error')
        setErrorMessage(data.message || 'Something went wrong. Please try again.')
      }
    } catch (error) {
      setSubmitStatus('error')
      setErrorMessage('Network error. Please check your connection and try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid md:grid-cols-2 gap-16 items-start">

          {/* Left Column */}
          <div>
            <span className="text-sm font-medium tracking-widest text-blue-500 uppercase mb-4 block">
              Contact
            </span>
            <h2 className="text-4xl md:text-6xl font-medium tracking-tight text-zinc-900 mb-6">
              Let&apos;s build something<br className="hidden md:block" /> great together.
            </h2>
            <p className="text-zinc-500 text-xl leading-relaxed mb-10 max-w-md">
              Have a project in mind, a role to fill, or just want to say hello? Drop a message and I&apos;ll get back to you within a couple of days.
            </p>

            <div className="space-y-4 text-lg">
              <a href="mailto:kosoga@gmail.com" className="block text-zinc-900 font-medium hover:underline">
                kosoga@gmail.com
              </a>
              <p className="text-zinc-500 text-lg">
                Remote · Available worldwide
              </p>
            </div>
          </div>

          {/* Right Column: Form Card */}
          <div className="bg-white rounded-3xl border border-[#ECECEC] p-4 md:p-8">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block text-xs font-semibold tracking-wider text-zinc-400 uppercase mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  placeholder="Jane Smith"
                  className="w-full bg-zinc-50 border border-[#ECECEC] rounded-xl px-4 py-3 text-base text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-xs font-semibold tracking-wider text-zinc-400 uppercase mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder="jane@company.com"
                  className="w-full bg-zinc-50 border border-[#ECECEC] rounded-xl px-4 py-3 text-base text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-semibold tracking-wider text-zinc-400 uppercase mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  placeholder="Tell me about your project..."
                  className="w-full bg-zinc-50 border border-[#ECECEC] rounded-xl px-4 py-3 text-base text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-1 focus:ring-blue-500 resize-none"
                ></textarea>
              </div>

              {submitStatus === 'success' && (
                <div className="p-4 bg-emerald-50 border border-emerald-100 rounded-xl text-emerald-800 text-sm">
                  Thank you! Your message has been sent successfully.
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="p-4 bg-rose-50 border border-rose-100 rounded-xl text-rose-800 text-sm">
                  {errorMessage}
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-zinc-900 hover:bg-zinc-800 disabled:bg-zinc-300 text-white font-medium py-3 rounded-xl transition-colors flex items-center justify-center gap-2 text-sm cursor-pointer disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    Sending... <Loader2 className="w-4 h-4 animate-spin" />
                  </>
                ) : (
                  <>
                    Send Message <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  )
}

