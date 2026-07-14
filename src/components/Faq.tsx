import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    question: 'Who do you work with?',
    answer:
      'I work with startups, agencies, and product teams who need a reliable full-stack engineer to turn ideas into production-ready software.',
  },
  {
    question: 'What technologies do you use?',
    answer:
      'My core stack includes Laravel, Vue.js, React, and cloud infrastructure with AWS and Docker. I adapt to what each project needs.',
  },
  {
    question: 'How long does a project take?',
    answer:
      'It depends on scope. A typical project ranges from 2 weeks for a landing page to 3\u20136 months for a full application.',
  },
  {
    question: 'Do you work remotely?',
    answer:
      'Yes, I work remotely and have collaborated with teams across 12 countries.',
  },
  {
    question: 'Can you join an existing team?',
    answer:
      'Absolutely. I\u2019m available for both new projects and joining existing teams to help accelerate development.',
  },
]

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section id="faq" className="py-24">
      <div className="max-w-3xl mx-auto px-6 md:px-10">
        <span className="text-sm font-mono text-zinc-400 mb-4 block">
          (07) FAQ
        </span>
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-zinc-900 mb-12">
          Frequently asked.
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i
            return (
              <div key={i} className="border-b border-zinc-200 pb-4">
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="flex items-center justify-between w-full text-left py-2 text-zinc-900 font-medium"
                >
                  {faq.question}
                  <ChevronDown
                    className={`w-4 h-4 text-zinc-400 transition-transform duration-200 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <p className="text-zinc-500 mt-2 leading-relaxed">
                    {faq.answer}
                  </p>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
