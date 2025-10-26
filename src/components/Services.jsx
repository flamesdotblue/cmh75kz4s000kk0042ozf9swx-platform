import { Home, Palette, Ruler, Star } from 'lucide-react'

const services = [
  {
    icon: Home,
    title: 'Full Home Interiors',
    desc: 'From layout planning to furniture, lighting, and decor for cohesive homes that flow beautifully.'
  },
  {
    icon: Palette,
    title: 'Concept + Styling',
    desc: 'Color palettes, materials, and finishes curated to your taste with moodboards and styling.'
  },
  {
    icon: Ruler,
    title: 'Renovation Management',
    desc: 'We handle drawings, vendors, timelines, and site coordination for stress-free makeovers.'
  },
  {
    icon: Star,
    title: 'Showpiece Corners',
    desc: 'Signature walls, reading nooks, and bespoke cabinetry to anchor your space with personality.'
  }
]

export default function Services() {
  return (
    <section id="services" className="mx-auto max-w-7xl px-6 py-20">
      <div className="mb-10 flex items-end justify-between gap-6">
        <div>
          <p className="text-xs tracking-widest uppercase text-zinc-500">What we do</p>
          <h2 className="mt-2 text-3xl md:text-4xl font-semibold tracking-tight">Tailored design services</h2>
          <p className="mt-3 max-w-2xl text-zinc-600">Choose the level of involvement you need—from quick styling to full-service, end-to-end execution.</p>
        </div>
        <a href="#contact" className="hidden md:inline-flex rounded-md border border-zinc-300 px-3 py-2 text-sm hover:bg-zinc-50">Get a free consult</a>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {services.map(({ icon: Icon, title, desc }) => (
          <div key={title} className="group rounded-xl border border-zinc-200 bg-white p-5 shadow-sm/10 hover:shadow-md transition">
            <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-md bg-zinc-900 text-white">
              <Icon size={18} />
            </div>
            <h3 className="font-semibold tracking-tight">{title}</h3>
            <p className="mt-2 text-sm text-zinc-600">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
