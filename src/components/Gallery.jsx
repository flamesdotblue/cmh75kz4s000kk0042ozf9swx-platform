const images = [
  {
    src: 'https://images.unsplash.com/photo-1505692952048-7320f33c2cca?q=80&w=1800&auto=format&fit=crop',
    alt: 'Minimalist living room with neutral palette'
  },
  {
    src: 'https://images.unsplash.com/photo-1501045661006-fcebe0257c3f?q=80&w=1800&auto=format&fit=crop',
    alt: 'Modern kitchen with island and pendant lights'
  },
  {
    src: 'https://images.unsplash.com/photo-1503602642458-232111445657?q=80&w=1800&auto=format&fit=crop',
    alt: 'Warm bedroom interior with layered textures'
  },
  {
    src: 'https://images.unsplash.com/photo-1493666438817-866a91353ca9?q=80&w=1800&auto=format&fit=crop',
    alt: 'Scandinavian dining area with wooden table'
  },
  {
    src: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=1800&auto=format&fit=crop',
    alt: 'Workspace with greenery and natural light'
  },
  {
    src: 'https://images.unsplash.com/photo-1484101403633-562f891dc89a?q=80&w=1800&auto=format&fit=crop',
    alt: 'Bathroom with marble finishes and brass accents'
  }
]

export default function Gallery() {
  return (
    <section id="gallery" className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-8">
          <p className="text-xs tracking-widest uppercase text-zinc-500">Our work</p>
          <h2 className="mt-2 text-3xl md:text-4xl font-semibold tracking-tight">Portfolio highlights</h2>
          <p className="mt-3 max-w-2xl text-zinc-600">A glimpse into recent projects. Every space is unique—these are starting points for your own vision.</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-5">
          {images.map((img, i) => (
            <figure key={i} className="group relative overflow-hidden rounded-lg bg-zinc-100">
              <img src={img.src} alt={img.alt} className="h-48 md:h-64 w-full object-cover transition duration-300 group-hover:scale-105" />
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-3 text-xs text-white opacity-0 group-hover:opacity-100 transition">{img.alt}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
