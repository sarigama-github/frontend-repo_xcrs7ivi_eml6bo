import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Work from './components/Work'
import About from './components/About'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-[#0b0b12]">
      {/* Global sakura glow and vignette */}
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(236,72,153,0.12)_0%,transparent_60%)]" />
      <div className="pointer-events-none fixed inset-0 mix-blend-soft-light" style={{background:"radial-gradient(1200px_800px_at_20%_-10%,rgba(147,51,234,0.10),transparent), radial-gradient(900px_600px_at_90%_10%,rgba(236,72,153,0.10),transparent)"}} />

      {/* Soft grain for cinematic feel */}
      <div className="pointer-events-none fixed inset-0 opacity-[0.06]" style={{ backgroundImage: 'url(https://grainy-gradients.vercel.app/noise.svg)' }} />

      <Navbar />
      <Hero />

      <main className="relative">
        <Work />
        <About />
        <Contact />
      </main>

      <footer className="relative border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-10 text-center text-sm text-sakura-200/70">
          © {new Date().getFullYear()} Your Name. Crafted with motion and code.
        </div>
      </footer>
    </div>
  )
}

export default App
