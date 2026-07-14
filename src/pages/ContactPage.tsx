import Nav from '../components/Nav'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

export default function ContactPage() {
  return (
    <div className="bg-white text-zinc-900 font-sans antialiased selection:bg-zinc-200 min-h-screen flex flex-col">
      <Nav />
      <div className="flex-1">
        <Contact />
      </div>
      <Footer />
    </div>
  )
}
