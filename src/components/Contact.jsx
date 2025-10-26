import { Mail, Phone, MapPin } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contact" className="relative">
      <div className="mx-auto max-w-7xl px-6 py-20 grid gap-10 lg:grid-cols-2">
        <div>
          <p className="text-xs tracking-widest uppercase text-zinc-500">Get in touch</p>
          <h2 className="mt-2 text-3xl md:text-4xl font-semibold tracking-tight">Tell us about your project</h2>
          <p className="mt-3 text-zinc-600">Share your goals, timeline, and budget. We usually reply within one business day to schedule a free discovery call.</p>

          <div className="mt-6 space-y-3 text-sm">
            <div className="flex items-center gap-3 text-zinc-700"><Phone size={16} /> <a className="hover:underline" href="tel:+1234567890">+1 (234) 567-890</a></div>
            <div className="flex items-center gap-3 text-zinc-700"><Mail size={16} /> <a className="hover:underline" href="mailto:hello@inspireinteriors.com">hello@inspireinteriors.com</a></div>
            <div className="flex items-center gap-3 text-zinc-700"><MapPin size={16} /> 18 Market Street, Suite 204, San Francisco, CA</div>
          </div>

          <div className="mt-8 rounded-lg border border-zinc-200 bg-white p-4 text-xs text-zinc-600">
            By submitting the form, you agree to be contacted regarding your inquiry. We never share your information.
          </div>
        </div>

        <form className="rounded-xl border border-zinc-200 bg-white p-6 shadow-sm">
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="sm:col-span-2">
              <label className="block text-sm font-medium">Full name</label>
              <input type="text" name="name" placeholder="Jane Doe" className="mt-2 w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-zinc-900" />
            </div>
            <div>
              <label className="block text-sm font-medium">Email</label>
              <input type="email" name="email" placeholder="you@example.com" className="mt-2 w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-zinc-900" />
            </div>
            <div>
              <label className="block text-sm font-medium">Phone</label>
              <input type="tel" name="phone" placeholder="(123) 456-7890" className="mt-2 w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-zinc-900" />
            </div>
            <div className="sm:col-span-2">
              <label className="block text-sm font-medium">Service of interest</label>
              <select name="service" className="mt-2 w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-zinc-900">
                <option>Full Home Interiors</option>
                <option>Concept + Styling</option>
                <option>Renovation Management</option>
                <option>Showpiece Corners</option>
              </select>
            </div>
            <div className="sm:col-span-2">
              <label className="block text-sm font-medium">Project details</label>
              <textarea name="message" rows="5" placeholder="Tell us about your space, timeline, and budget..." className="mt-2 w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-zinc-900"></textarea>
            </div>
          </div>
          <button type="submit" className="mt-5 inline-flex w-full items-center justify-center rounded-md bg-zinc-900 px-4 py-2.5 text-white hover:bg-zinc-800">Submit inquiry</button>
        </form>
      </div>
    </section>
  )
}
