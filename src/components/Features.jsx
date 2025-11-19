import { motion } from 'framer-motion'
import { Users, Trophy, Rocket, Shield } from 'lucide-react'

const features = [
  {
    icon: Users,
    title: 'Communities that scale',
    desc: 'Spaces, roles, and channels built to grow from your first 10 to your next 100,000 members.',
  },
  {
    icon: Trophy,
    title: 'Contest engine',
    desc: 'Brackets, leaderboards, and real‑time voting with fair anti‑fraud systems out of the box.',
  },
  {
    icon: Rocket,
    title: 'Onboarding that converts',
    desc: 'Magic links and flawless flows that help more people join and stay engaged.',
  },
  {
    icon: Shield,
    title: 'Safety & moderation',
    desc: 'AI‑assisted tools keep your community welcoming without slowing momentum.',
  },
]

export default function Features() {
  return (
    <section id="features" className="relative z-10 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <motion.h2 initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-3xl font-semibold text-white sm:text-4xl">
            Everything you need to build momentum
          </motion.h2>
          <motion.p initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.05 }} className="mt-3 text-white/70">
            Bring your people together, spark participation, and celebrate the wins — all in one place.
          </motion.p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.05 }} className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
              <div className="relative mb-4 h-12 w-12">
                <span className="absolute inset-0 rounded-xl bg-gradient-to-tr from-purple-600 to-fuchsia-500 opacity-30 blur-xl transition-opacity group-hover:opacity-60" />
                <div className="relative inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-tr from-purple-600 to-fuchsia-500 text-white">
                  <f.icon size={22} />
                </div>
              </div>
              <h3 className="text-white font-medium">{f.title}</h3>
              <p className="mt-2 text-sm text-white/70">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
