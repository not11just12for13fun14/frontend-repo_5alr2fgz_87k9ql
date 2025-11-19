import { motion } from 'framer-motion'

export default function CTA() {
  return (
    <section id="cta" className="relative z-10 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="overflow-hidden rounded-3xl border border-white/10 bg-[linear-gradient(140deg,rgba(124,58,237,0.35)_0%,rgba(8,8,10,0.5)_28%,rgba(8,8,10,0.5)_72%,rgba(236,72,153,0.3)_100%)] p-8 sm:p-12">
          <div className="grid items-center gap-8 sm:grid-cols-2">
            <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <h3 className="text-2xl font-semibold text-white sm:text-3xl">Ready to launch your first challenge?</h3>
              <p className="mt-3 text-white/70">Create your space, invite your champions, and go live in minutes. No code, no hassle.</p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <a href="#" className="inline-flex items-center justify-center rounded-xl bg-gradient-to-tr from-purple-600 to-fuchsia-500 px-5 py-3 text-white shadow-[0_0_30px_rgba(168,85,247,0.5)] hover:shadow-[0_0_45px_rgba(168,85,247,0.8)]">
                  Start free
                </a>
                <a href="#pricing" className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-white/90 hover:bg-white/10">
                  See pricing
                </a>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, scale: 0.98 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="relative">
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-tr from-purple-600/40 to-fuchsia-500/40 blur-2xl" />
              <div className="relative rounded-2xl border border-white/10 bg-black/40 p-5">
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-semibold text-white">15 min</div>
                    <div className="text-xs text-white/60">to first launch</div>
                  </div>
                  <div>
                    <div className="text-2xl font-semibold text-white">24/7</div>
                    <div className="text-xs text-white/60">global uptime</div>
                  </div>
                  <div>
                    <div className="text-2xl font-semibold text-white">0 code</div>
                    <div className="text-xs text-white/60">required</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
