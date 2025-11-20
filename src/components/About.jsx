import { motion } from 'framer-motion'
import { Sparkles } from 'lucide-react'

export default function About() {
  return (
    <section id="about" className="relative py-24">
      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-sakura-100"
        >
          <h2 className="text-3xl font-bold">About Me</h2>
          <p className="mt-4 text-sakura-200/80">
            I craft immersive digital experiences where aesthetics and performance meet. My work spans front‑end engineering, creative coding, and visual design.
          </p>
          <ul className="mt-6 space-y-3 text-sakura-200/80 text-sm">
            <li className="flex items-center gap-2"><Sparkles className="text-pink-400" /> 3D & motion‑first interfaces</li>
            <li className="flex items-center gap-2"><Sparkles className="text-pink-400" /> Design systems and theming</li>
            <li className="flex items-center gap-2"><Sparkles className="text-pink-400" /> Performance‑minded builds</li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative"
        >
          <div className="relative aspect-square rounded-3xl bg-gradient-to-br from-pink-500/20 to-fuchsia-600/20 border border-white/10 p-2">
            <div className="h-full w-full rounded-2xl bg-[conic-gradient(at_30%_30%,rgba(236,72,153,0.15),transparent_45%)]" />
          </div>
          <div className="pointer-events-none absolute -inset-6 -z-[1] animate-pulse rounded-[2rem] bg-pink-500/10 blur-3xl" />
        </motion.div>
      </div>
    </section>
  )
}
