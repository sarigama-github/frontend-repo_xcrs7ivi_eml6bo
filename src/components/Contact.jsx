import { motion } from 'framer-motion'

export default function Contact() {
  return (
    <section id="contact" className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10">
          <h2 className="text-3xl font-bold text-sakura-100">Get in touch</h2>
          <p className="mt-2 text-sakura-200/80">Let’s collaborate on something beautiful and bold.</p>
        </div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid sm:grid-cols-2 gap-4"
          onSubmit={(e) => e.preventDefault()}
        >
          <Input placeholder="Your name" />
          <Input placeholder="Email address" type="email" />
          <div className="sm:col-span-2">
            <Textarea placeholder="Project details" rows={5} />
          </div>
          <div className="sm:col-span-2 flex gap-3">
            <button className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-pink-500 to-fuchsia-600 px-5 py-3 font-semibold text-white shadow-[0_15px_40px_rgba(236,72,153,0.35)]">
              Send Message
            </button>
            <a href="mailto:hello@example.com" className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-5 py-3 font-semibold text-sakura-100 hover:bg-white/10">
              Email me
            </a>
          </div>
        </motion.form>
      </div>

      <div className="pointer-events-none absolute inset-x-0 -z-[1] bottom-0 h-40 bg-gradient-to-t from-pink-500/10 to-transparent" />
    </section>
  )
}

function Input(props) {
  return (
    <input
      {...props}
      className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sakura-100 placeholder:text-sakura-200/50 outline-none focus:ring-2 focus:ring-pink-500/40"
    />
  )
}

function Textarea(props) {
  return (
    <textarea
      {...props}
      className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sakura-100 placeholder:text-sakura-200/50 outline-none focus:ring-2 focus:ring-pink-500/40"
    />
  )
}
