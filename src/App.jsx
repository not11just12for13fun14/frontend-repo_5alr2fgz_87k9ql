import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-[#06060A] text-white">
      <div className="absolute inset-0 -z-0">
        <div className="absolute inset-0 opacity-60" style={{
          backgroundImage:
            'radial-gradient(80rem 40rem at 10% 0%, rgba(124,58,237,0.15), transparent 50%),\n             radial-gradient(70rem 35rem at 90% 0%, rgba(59,130,246,0.12), transparent 45%),\n             radial-gradient(120rem 60rem at 50% 100%, rgba(168,85,247,0.15), transparent 55%)'
        }} />
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(#00000000,rgba(0,0,0,0.6))]" />
      </div>

      <Navbar />
      <main>
        <Hero />
        <Features />
        <CTA />
      </main>

      <footer className="relative z-10 border-t border-white/10 py-10">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-sm text-white/60">© {new Date().getFullYear()} Nebula. All rights reserved.</p>
            <div className="flex items-center gap-4 text-sm text-white/60">
              <a href="#" className="hover:text-white">Terms</a>
              <span className="opacity-30">•</span>
              <a href="#" className="hover:text-white">Privacy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
