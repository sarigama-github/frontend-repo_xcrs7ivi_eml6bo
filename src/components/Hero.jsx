import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative h-[85vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Sakura gradient veil */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_40%,rgba(236,72,153,0.25)_0%,rgba(236,72,153,0.05)_60%,transparent_100%)]" />

      <div className="relative z-10 h-full flex items-center">
        <div className="mx-auto max-w-7xl px-6 w-full grid lg:grid-cols-2 gap-10">
          <div className="text-sakura-100">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl sm:text-6xl font-extrabold tracking-tight drop-shadow-[0_6px_30px_rgba(236,72,153,0.35)]"
            >
              Dark Sakura Portfolio
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.1 }}
              className="mt-6 text-sakura-200/90 text-lg max-w-xl"
            >
              A cinematic, cyber-sakura experience with interactive 3D motion everywhere.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="mt-10 flex items-center gap-4"
            >
              <a href="#work" className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-pink-500 to-fuchsia-600 px-5 py-3 font-semibold text-white shadow-[0_15px_40px_rgba(236,72,153,0.35)]">
                View Work
              </a>
              <a href="#contact" className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-5 py-3 font-semibold text-sakura-100 hover:bg-white/10">
                Contact
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
