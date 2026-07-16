import { useState } from 'react'
import { ArrowUpRight, ArrowDown, Linkedin, Instagram, Github } from 'lucide-react'

const Threads = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    role="img"
    viewBox="0 0 192 192"
    fill="currentColor"
    className={props.className}
    {...props}
  >
    <path d="M141.537 88.9883C140.71 88.5919 139.87 88.2104 139.019 87.8451C137.537 60.5382 122.616 44.905 97.5619 44.745C97.4484 44.7443 97.3355 44.7443 97.222 44.7443C82.2364 44.7443 69.7731 51.1409 62.102 62.7807L75.881 72.2328C81.6116 63.5383 90.6052 61.6848 97.2286 61.6848C97.3051 61.6848 97.3819 61.6848 97.4576 61.6855C105.707 61.7381 111.932 64.1366 115.961 68.814C118.893 72.2193 120.854 76.925 121.825 82.8638C114.511 81.6207 106.601 81.2385 98.145 81.7233C74.3247 83.0954 59.0111 96.9879 60.0396 116.292C60.5615 126.084 65.4397 134.508 73.775 140.011C80.8224 144.663 89.899 146.938 99.3323 146.423C111.79 145.74 121.563 140.987 128.381 132.296C133.559 125.696 136.834 117.143 138.28 106.366C144.217 109.949 148.617 114.664 151.047 120.332C155.179 129.967 155.42 145.8 142.501 158.708C131.182 170.016 117.576 174.908 97.0135 175.059C74.2042 174.89 56.9538 167.575 45.7381 153.317C35.2355 139.966 29.8077 120.682 29.6052 96C29.8077 71.3178 35.2355 52.0336 45.7381 38.6827C56.9538 24.4249 74.2039 17.11 97.0132 16.9405C119.988 17.1113 137.539 24.4614 149.184 38.788C154.894 45.8136 159.199 54.6488 162.037 64.9503L178.184 60.6422C174.744 47.9622 169.331 37.0357 161.965 27.974C147.036 9.60668 125.202 0.195148 97.0695 0H96.9569C68.8816 0.19447 47.2921 9.6418 32.7883 28.0793C19.8819 44.4864 13.2244 67.3157 13.0007 95.9325L13 96L13.0007 96.0675C13.2244 124.684 19.8819 147.514 32.7883 163.921C47.2921 182.358 68.8816 191.806 96.9569 192H97.0695C122.03 191.827 139.624 185.292 154.118 170.811C173.081 151.866 172.51 128.119 166.26 113.541C161.776 103.087 153.227 94.5962 141.537 88.9883ZM98.4405 129.507C88.0005 130.095 77.1544 125.409 76.6196 115.372C76.2232 107.93 81.9158 99.626 99.0812 98.6368C101.047 98.5234 102.976 98.468 104.871 98.468C111.106 98.468 116.939 99.0737 122.242 100.233C120.264 124.935 108.662 128.946 98.4405 129.507Z" />
  </svg>
)

const trustedLogos = [
  { src: '/Deptamedia.png', alt: 'Deptamedia' },
  { src: '/Mamamajumapan.png', alt: 'Mamamajumapan' },
]

export default function Hero() {
  const [isCardActive, setIsCardActive] = useState(false)

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
        body:has(#hero-image-card.active-effect) .dim-overlay {
          opacity: 1;
          pointer-events: auto;
        }
        body:has(#hero-image-card.active-effect) {
          overflow: hidden;
        }
      `}</style>
      <div 
        onClick={(e) => {
          e.stopPropagation();
          setIsCardActive(false);
        }}
        className={`fixed inset-0 bg-black/80 opacity-0 pointer-events-none transition-opacity duration-[1000ms] z-[60] dim-overlay ${
          isCardActive ? 'opacity-100 pointer-events-auto' : ''
        }`} 
      />
      <div className="grid md:grid-cols-[1fr_440px] gap-12 md:gap-16 items-center">
        <div>
          <div className="flex items-center gap-3 text-xs font-semibold tracking-widest text-zinc-400 uppercase mb-6">
            <span className="w-2 h-2 rounded-full bg-blue-500" />
            Full Stack Developer
          </div>
          <h1 className="text-4xl md:text-6xl font-sans max-w-lg font-medium lg:text-6xl leading-[1.05] tracking-tight text-zinc-900 mb-6">
            Hi, I&apos;m Soga. A Full-Stack Developer with deep DevOps expertise.
          </h1>
          <p className="text-zinc-500 text-xl max-w-md leading-relaxed max-w-xl mb-10">
            I'm a full-stack developer with 6+ years of experience building business applications. I specialize in Laravel and Vue.js, and I handle my own production deployments using Docker, Linux VPS, and Cloudflare.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                const blurEl = document.getElementById('blur-element');
                if (!blurEl) return;

                document.documentElement.classList.add('blur-scroll');

                // Animate blur in (0 to 8px)
                let startIn: number | null = null;
                const durationIn = 200;
                const animIn = (timestamp: number) => {
                  if (!startIn) startIn = timestamp;
                  const progress = Math.min((timestamp - startIn) / durationIn, 1);
                  blurEl.setAttribute('stdDeviation', `0, ${progress * 8}`);
                  if (progress < 1) {
                    requestAnimationFrame(animIn);
                  }
                };
                requestAnimationFrame(animIn);

                // Scroll
                document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });

                // Animate blur out (8px to 0) after scroll starts finishing
                setTimeout(() => {
                  let startOut: number | null = null;
                  const durationOut = 200;
                  const animOut = (timestamp: number) => {
                    if (!startOut) startOut = timestamp;
                    const progress = Math.min((timestamp - startOut) / durationOut, 1);
                    blurEl.setAttribute('stdDeviation', `0, ${8 - progress * 8}`);
                    if (progress < 1) {
                      requestAnimationFrame(animOut);
                    } else {
                      document.documentElement.classList.remove('blur-scroll');
                    }
                  };
                  requestAnimationFrame(animOut);
                }, 750);
              }}
              className="bg-zinc-900 hover:bg-zinc-800 text-white px-6 py-3.5 rounded-full text-sm font-medium flex items-center gap-2 transition-all"
            >
              View Projects <ArrowDown className="w-4 h-4" />
            </a>
            <a
              href="/Galih - resume.pdf" target="_blank"
              className="bg-white border border-zinc-200 hover:bg-zinc-50 text-zinc-900 px-6 py-3.5 rounded-full text-sm font-medium flex items-center gap-2 transition-all shadow-sm"
            >
              Download Resume <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
        <div 
          id="hero-image-card" 
          onMouseEnter={() => setIsCardActive(true)}
          onMouseLeave={() => setIsCardActive(false)}
          onClick={(e) => {
            e.stopPropagation()
            setIsCardActive(!isCardActive)
          }}
          className={`relative w-full max-w-[440px] aspect-[11/14] rounded-2xl overflow-hidden group shadow-2xl z-[70] cursor-pointer ${
            isCardActive ? 'active-effect' : ''
          }`}
        >
          <img
            src="/hero.avif"
            alt="Soga"
            className="absolute inset-0 w-full h-full object-cover object-center transition-all duration-[1000ms] group-hover:scale-[2] group-[.active-effect]:scale-[2] origin-left group-hover:object-left group-[.active-effect]:object-left"
          />
          <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 group-[.active-effect]:opacity-100 transition-opacity duration-[1000ms] pointer-events-none" />
          <h2 className="absolute top-6 left-6 font-sans text-3xl text-white font-medium opacity-0 group-hover:opacity-100 group-[.active-effect]:opacity-100 transition-opacity duration-[1000ms]">
            Prakoso Galih
          </h2>
          <div className="absolute left-6 bottom-6 flex flex-col items-center gap-4 text-white opacity-0 group-hover:opacity-100 group-[.active-effect]:opacity-100 transition-opacity duration-[1000ms]">
            <a href="https://www.linkedin.com/in/danprakoso" className="hover:text-blue-400 transition-colors"><Linkedin className="w-5 h-5" /></a>
            <a href="https://www.instagram.com/prakosoga/" className="hover:text-pink-400 transition-colors"><Instagram className="w-5 h-5" /></a>
            <a href="https://github.com/geprakoso" className="hover:text-rose-400 transition-colors"><Github className="w-5 h-5" /></a>
            <a href="https://www.threads.com/@prakosoga" className="hover:text-blue-400 transition-colors"><Threads className="w-5 h-5" /></a>
          </div>
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
