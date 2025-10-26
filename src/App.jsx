import { useState } from 'react'
import Hero from './components/Hero'
import Services from './components/Services'
import Gallery from './components/Gallery'
import Contact from './components/Contact'

function App() {
  const [open, setOpen] = useState(false)

  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900">
      <header className="sticky top-0 z-40 border-b border-zinc-200 bg-white/80 backdrop-blur">
        <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-md bg-black text-white grid place-items-center font-semibold">ID</div>
            <span className="font-semibold tracking-tight">Inspire Interiors</span>
          </a>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#services" className="hover:text-zinc-600">Services</a>
            <a href="#gallery" className="hover:text-zinc-600">Gallery</a>
            <a href="#contact" className="hover:text-zinc-600">Contact</a>
            <a href="#contact" className="rounded-md bg-zinc-900 px-3 py-2 text-white hover:bg-zinc-800">Get a Quote</a>
          </nav>
          <button aria-label="Open Menu" onClick={() => setOpen(!open)} className="md:hidden inline-flex items-center justify-center rounded-md border border-zinc-300 px-3 py-2 text-sm">
            Menu
          </button>
        </div>
        {open && (
          <div className="md:hidden border-t border-zinc-200 bg-white">
            <div className="px-6 py-4 flex flex-col gap-3 text-sm">
              <a onClick={() => setOpen(false)} href="#services" className="hover:text-zinc-600">Services</a>
              <a onClick={() => setOpen(false)} href="#gallery" className="hover:text-zinc-600">Gallery</a>
              <a onClick={() => setOpen(false)} href="#contact" className="hover:text-zinc-600">Contact</a>
            </div>
          </div>
        )}
      </header>

      <main>
        <Hero />
        <Services />
        <Gallery />
        <Contact />
      </main>

      <footer className="border-t border-zinc-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-10 grid gap-6 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="h-8 w-8 rounded-md bg-black text-white grid place-items-center font-semibold">ID</div>
              <span className="font-semibold tracking-tight">Inspire Interiors</span>
            </div>
            <p className="text-sm text-zinc-600">Bespoke interior design for homes and boutique commercial spaces. We craft spaces that feel like you.</p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Quick Links</h4>
            <ul className="text-sm text-zinc-600 space-y-1">
              <li><a href="#services" className="hover:text-zinc-900">Services</a></li>
              <li><a href="#gallery" className="hover:text-zinc-900">Gallery</a></li>
              <li><a href="#contact" className="hover:text-zinc-900">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Hours</h4>
            <ul className="text-sm text-zinc-600 space-y-1">
              <li>Mon - Fri: 9:00 AM - 6:00 PM</li>
              <li>Sat: 10:00 AM - 2:00 PM</li>
              <li>Sun: Closed</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-zinc-200">
          <div className="mx-auto max-w-7xl px-6 py-4 text-xs text-zinc-500 flex items-center justify-between">
            <span>© {new Date().getFullYear()} Inspire Interiors. All rights reserved.</span>
            <span>Designed with care.</span>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
