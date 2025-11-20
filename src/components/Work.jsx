import { motion } from 'framer-motion'
import { Code, Palette, Rocket } from 'lucide-react'

const projects = [
  {
    title: '3D Experimental Site',
    description: 'Interactive, physics‑driven visuals and cinematic transitions.',
    icon: <Rocket />,
  },
  {
    title: 'Design System',
    description: 'A cohesive component library with dark sakura theming.',
    icon: <Palette />,
  },
  {
    title: 'Creative Coding',
    description: 'Shaders, particles, and generative art explorations.',
    icon: <Code />,
  },
]

export default function Work() {
  return (
    <section id="work" className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-sakura-100">Featured Work</h2>
          <p className="mt-2 text-sakura-200/80">A selection of projects combining motion, code, and design.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <TiltCard key={i} {...p} />
          ))}
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 -z-[1] top-0 h-40 bg-gradient-to-b from-pink-500/10 to-transparent" />
    </section>
  )
}

function TiltCard({ title, description, icon }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6 }}
      whileHover={{ rotateX: 8, rotateY: -10, translateZ: 6 }}
      style={{ perspective: 700 }}
      className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 text-sakura-100 shadow-[0_20px_60px_rgba(236,72,153,0.12)] backdrop-blur-xl"
    >
      <div className="mb-4 inline-flex items-center justify-center rounded-xl bg-gradient-to-br from-pink-500/20 to-fuchsia-600/20 p-3 text-sakura-100">
        {icon}
      </div>
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="mt-2 text-sakura-200/80 text-sm">{description}</p>

      <div className="absolute -right-10 -top-10 size-40 rounded-full bg-pink-500/10 blur-3xl" />
    </motion.div>
  )
}
