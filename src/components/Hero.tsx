import { ArrowUpRight, ArrowDown } from 'lucide-react'

const trustedLogos = [
  { src: '/Deptamedia.png', alt: 'Deptamedia' },
  { src: '/Mamamajumapan.png', alt: 'Mamamajumapan' },
]

export default function Hero() {
  return (
    <section className="max-w-7xl mx-auto px-6 md:px-10 pt-16 md:pt-24 pb-20">
      <style>{`
        @keyframes ticker {
          0% { transform: translate3d(0, 0, 0); }
          100% { transform: translate3d(-33.333%, 0, 0); }
        }
        .ticker-track {
          animation: ticker 12s linear infinite;
          will-change: transform;
          backface-visibility: hidden;
        }
        .mask-fade {
          -webkit-mask: linear-gradient(90deg, transparent 0%, #000 10%, #000 90%, transparent 100%);
          mask: linear-gradient(90deg, transparent 0%, #000 10%, #000 90%, transparent 100%);
        }
      `}</style>
      <div className="grid md:grid-cols-[1fr_440px] gap-12 md:gap-16 items-center">
        <div>
          <div className="flex items-center gap-3 text-xs font-semibold tracking-widest text-zinc-400 uppercase mb-6">
            <span className="w-2 h-2 rounded-full bg-blue-500" />
            Full Stack Developer
          </div>
          <h1 className="text-4xl md:text-6xl font-sans max-w-lg font-medium lg:text-6xl leading-[1.05] tracking-tight text-zinc-900 mb-6">
            Hi, I&apos;m Soga. I write clean code and build the reliable systems
            behind it.
          </h1>
          <p className="text-zinc-500 text-xl max-w-md leading-relaxed max-w-xl mb-10">
            A full-stack engineer focused on Laravel, Vue, and cloud
            infrastructure (AWS/Docker). I bridge the gap between user experience
            and server automation to deliver fast, production-ready software.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="bg-zinc-900 hover:bg-zinc-800 text-white px-6 py-3.5 rounded-full text-sm font-medium flex items-center gap-2 transition-all"
            >
              View Projects <ArrowDown className="w-4 h-4" />
            </a>
            <a
              href="#"
              className="bg-white border border-zinc-200 hover:bg-zinc-50 text-zinc-900 px-6 py-3.5 rounded-full text-sm font-medium flex items-center gap-2 transition-all shadow-sm"
            >
              Download Resume <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
        <div className="relative w-full max-w-[440px] aspect-[11/14] rounded-2xl overflow-hidden">
          <img src="/hero.avif" alt="Soga" className="absolute inset-0 w-full h-full object-cover object-center" />
        </div>
      </div>
      <div className="mt-30">
        <p className="text-xs text-center font-semibold tracking-widest text-zinc-400 uppercase mb-6">
          Trusted by teams building at
        </p>
        <div className="overflow-hidden w-full mask-fade mt-10">
          <div className="ticker-track flex flex-nowrap items-center" style={{ width: 'max-content' }}>
            {[...trustedLogos, ...trustedLogos, ...trustedLogos].map((logo, i) => (
              <img
                key={`${logo.alt}-${i}`}
                src={logo.src}
                alt={logo.alt}
                className="h-8 w-auto object-contain opacity-100 grayscale shrink-0 mx-8"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
