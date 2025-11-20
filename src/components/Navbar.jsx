import { motion } from 'framer-motion'
import { Menu, Github, Linkedin, Mail } from 'lucide-react'

export default function Navbar() {
  return (
    <div className="w-full">
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        <motion.a
          href="#"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="group inline-flex items-center gap-3 text-sakura-100"
        >
          <div className="relative">
            <div className="size-10 rounded-xl bg-gradient-to-br from-pink-500 to-fuchsia-600 shadow-[0_10px_30px_rgba(236,72,153,0.35)]" />
            <div className="absolute inset-0 rounded-xl bg-white/10 blur-sm" />
          </div>
          <span className="text-lg font-semibold tracking-tight">
            Your Name
          </span>
        </motion.a>

        <div className="hidden md:flex items-center gap-8 text-sakura-200/90">
          {[
            { href: '#work', label: 'Work' },
            { href: '#about', label: 'About' },
            { href: '#contact', label: 'Contact' },
          ].map((item) => (
            <motion.a
              key={item.href}
              href={item.href}
              whileHover={{ y: -2 }}
              className="relative text-sm font-medium"
            >
              <span className="relative z-10">{item.label}</span>
              <span className="absolute left-0 -bottom-1 h-px w-0 bg-gradient-to-r from-pink-500 to-fuchsia-500 transition-all duration-300 group-hover:w-full" />
            </motion.a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <IconButton href="https://github.com" icon={<Github />} />
          <IconButton href="https://linkedin.com" icon={<Linkedin />} />
          <IconButton href="#contact" icon={<Mail />} />
          <button className="md:hidden inline-flex items-center justify-center size-10 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-sakura-100">
            <Menu />
          </button>
        </div>
      </div>
    </div>
  )
}

function IconButton({ href, icon }) {
  return (
    <a
      href={href}
      className="group relative inline-flex items-center justify-center size-10 rounded-xl bg-gradient-to-b from-white/10 to-white/5 border border-white/10 text-sakura-100 hover:from-white/15 hover:to-white/10 transition-colors"
    >
      <div className="absolute inset-0 rounded-xl shadow-[inset_0_1px_0_0_rgba(255,255,255,0.25),_0_10px_20px_rgba(236,72,153,0.2)]" />
      <motion.div
        whileHover={{ rotateX: 12, rotateY: -10, translateZ: 4 }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        style={{ perspective: 600 }}
        className="relative"
      >
        {icon}
      </motion.div>
    </a>
  )
}
