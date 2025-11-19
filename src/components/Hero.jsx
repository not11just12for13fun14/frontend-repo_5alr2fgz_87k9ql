import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-28">
      <div className="absolute inset-0">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_20%_10%,rgba(147,51,234,0.2),transparent_45%),radial-gradient(ellipse_at_80%_0%,rgba(30,64,175,0.15),transparent_35%),radial-gradient(ellipse_at_50%_100%,rgba(168,85,247,0.2),transparent_45%)]" />
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0)_0%,rgba(0,0,0,0.6)_70%,rgba(0,0,0,0.85)_100%)]" />
      </div>

      <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 lg:grid-cols-2">
        <div className="relative z-10 py-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-fuchsia-400" />
            Live for creators and communities
          </motion.div>

          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.85, delay: 0.05 }} className="mt-4 text-4xl font-semibold leading-tight text-white sm:text-5xl md:text-6xl">
            Build thriving communities and host next‑level contests
          </motion.h1>

          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.1 }} className="mt-5 max-w-xl text-lg text-white/70">
            Launch challenges, reward participation, and grow engagement — all in one modern platform with powerful tools and gorgeous experiences.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.95, delay: 0.15 }} className="mt-7 flex flex-col gap-3 sm:flex-row">
            <a href="#cta" className="group inline-flex items-center justify-center rounded-xl bg-gradient-to-tr from-purple-600 to-fuchsia-500 px-5 py-3 text-white shadow-[0_0_30px_rgba(168,85,247,0.5)] transition-all hover:shadow-[0_0_45px_rgba(168,85,247,0.8)]">
              Get started free
            </a>
            <a href="#features" className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-white/90 hover:bg-white/10">
              Explore features
            </a>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.25 }} className="mt-8 grid grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-2xl font-semibold text-white">10k+</div>
              <div className="text-xs text-white/60">Active members</div>
            </div>
            <div>
              <div className="text-2xl font-semibold text-white">1k+</div>
              <div className="text-xs text-white/60">Contests launched</div>
            </div>
            <div>
              <div className="text-2xl font-semibold text-white">98%</div>
              <div className="text-xs text-white/60">Creator satisfaction</div>
            </div>
          </motion.div>
        </div>

        <div className="relative h-[520px] w-full">
          <div className="absolute inset-0">
            <Spline scene="https://prod.spline.design/wwTRdG1D9CkNs368/scene.splinecode" style={{ width: '100%', height: '100%' }} />
          </div>
        </div>
      </div>
    </section>
  )
}
