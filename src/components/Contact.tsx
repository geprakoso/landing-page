import { ArrowRight } from 'lucide-react'

export default function Contact() {
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
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label htmlFor="name" className="block text-xs font-semibold tracking-wider text-zinc-400 uppercase mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
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
                  rows={4}
                  placeholder="Tell me about your project..."
                  className="w-full bg-zinc-50 border border-[#ECECEC] rounded-xl px-4 py-3 text-base text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-1 focus:ring-blue-500 resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-zinc-100 hover:bg-zinc-200 text-zinc-900 font-medium py-3 rounded-xl transition-colors flex items-center justify-center gap-2 text-sm"
              >
                Send Message <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  )
}
