import { useState } from 'react'
import { Menu, X, Sparkles } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navLink = 'text-sm text-white/80 hover:text-white transition-colors'

  return (
    <header className="fixed top-0 left-0 right-0 z-40">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mt-6 rounded-2xl border border-white/10 bg-black/30 backdrop-blur-xl">
          <div className="flex items-center justify-between px-6 py-4">
            <a href="#" className="flex items-center gap-2">
              <div className="relative">
                <span className="absolute inset-0 blur-xl bg-gradient-to-tr from-purple-600 to-fuchsia-500 opacity-40" />
                <div className="relative inline-flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-tr from-purple-600 to-fuchsia-500 text-white shadow-[0_0_40px_rgba(168,85,247,0.6)]">
                  <Sparkles size={18} />
                </div>
              </div>
              <span className="font-semibold tracking-tight text-white">Nebula</span>
              <span className="ml-1 rounded-md bg-white/10 px-2 py-0.5 text-[10px] uppercase tracking-wider text-white/70">Beta</span>
            </a>

            <nav className="hidden gap-8 md:flex">
              <a href="#features" className={navLink}>Features</a>
              <a href="#showcase" className={navLink}>Showcase</a>
              <a href="#pricing" className={navLink}>Pricing</a>
              <a href="#faq" className={navLink}>FAQ</a>
            </nav>

            <div className="hidden items-center gap-3 md:flex">
              <a href="#" className="text-sm text-white/80 hover:text-white">Sign in</a>
              <a href="#cta" className="rounded-lg bg-gradient-to-tr from-purple-600 to-fuchsia-500 px-4 py-2 text-sm font-medium text-white shadow-[0_0_25px_rgba(168,85,247,0.5)] hover:shadow-[0_0_35px_rgba(168,85,247,0.8)] transition-shadow">Get started</a>
            </div>

            <button onClick={() => setOpen(!open)} className="inline-flex rounded-lg border border-white/10 p-2 text-white/80 md:hidden">
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>

          {open && (
            <div className="md:hidden border-t border-white/10 px-6 py-4">
              <div className="grid gap-3">
                <a href="#features" className={navLink}>Features</a>
                <a href="#showcase" className={navLink}>Showcase</a>
                <a href="#pricing" className={navLink}>Pricing</a>
                <a href="#faq" className={navLink}>FAQ</a>
                <a href="#cta" className="mt-2 rounded-lg bg-gradient-to-tr from-purple-600 to-fuchsia-500 px-4 py-2 text-sm font-medium text-white">Get started</a>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
