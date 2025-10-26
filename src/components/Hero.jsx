import { ArrowRight } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <img
          src="https://images.unsplash.com/photo-1493809842364-78817add7ffb?q=80&w=2400&auto=format&fit=crop"
          alt="Modern living room interior"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/80 to-white/40"></div>
      </div>

      <div className="mx-auto max-w-7xl px-6 pt-28 pb-20">
        <div className="max-w-2xl">
          <p className="inline-flex items-center rounded-full bg-white/70 backdrop-blur px-3 py-1 text-[11px] font-medium ring-1 ring-zinc-200 mb-4">Award-winning boutique interior studio</p>
          <h1 className="text-4xl md:text-6xl font-semibold tracking-tight leading-tight">
            We design spaces that elevate everyday living
          </h1>
          <p className="mt-5 text-zinc-600 max-w-xl">
            From concept to completion, we translate your story into timeless, functional interiors. Residential and small commercial projects tailored to your lifestyle.
          </p>
          <div className="mt-8 flex items-center gap-3">
            <a href="#contact" className="inline-flex items-center gap-2 rounded-md bg-zinc-900 px-4 py-2.5 text-white hover:bg-zinc-800">
              Start your project <ArrowRight size={18} />
            </a>
            <a href="#gallery" className="inline-flex items-center gap-2 rounded-md border border-zinc-300 bg-white px-4 py-2.5 hover:bg-zinc-50">
              View portfolio
            </a>
          </div>
          <div className="mt-8 flex items-center gap-6 text-xs text-zinc-600">
            <div>
              <div className="font-semibold text-zinc-900">120+ projects</div>
              Completed since 2017
            </div>
            <div>
              <div className="font-semibold text-zinc-900">5.0 rating</div>
              Clients love our work
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
