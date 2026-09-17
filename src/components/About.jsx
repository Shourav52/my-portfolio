import { motion } from 'motion/react'
import profile from '../assets/profile.jpg'

const stats = [
  { num: '03', label: 'Full-stack projects shipped' },
  { num: '2024', label: 'Started BSc in Software Engineering' },
  { num: 'MERN', label: '+ Next.js core stack' },
]

export default function About() {
  return (
    <section id="about" className="section-border py-20 md:py-24">
      <div className="max-w-wrap mx-auto px-6 md:px-8 grid md:grid-cols-[0.85fr_1.15fr_1fr] gap-12 items-start">
        <motion.div
          initial={{ opacity: 0, clipPath: 'inset(0 0 55% 0)' }}
          whileInView={{ opacity: 1, clipPath: 'inset(0 0 0% 0)' }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="relative"
        >
          <div className="rounded-xl overflow-hidden border border-line aspect-[4/5]">
            <img
              src={profile}
              alt="Portrait of Shorov Saha"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-xl border border-lineStrong bg-bg2 -z-10 hidden md:block" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-[13px] text-amber mb-2.5">About</p>
          <h2 className="font-display text-ink0 font-semibold text-[clamp(24px,3vw,30px)] mb-5">
            A developer who likes the whole stack, not just one layer
          </h2>
          <p className="text-[15.5px] text-ink1 mb-4">
            I'm a Software Engineering student who builds full-stack web applications end to end —
            designing the interface, writing the API, and shaping how data moves between them. I've
            built and deployed three full-stack projects, each covering authentication, RESTful API
            design, and responsive UI development.
          </p>
          <p className="text-[15.5px] text-ink1">
            Right now I'm exploring Next.js and serverless architecture, sharpening my grasp of
            advanced React patterns and performance optimization, and strengthening my problem-solving
            through data structures and algorithms.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.12 } },
          }}
          className="flex flex-col gap-3.5"
        >
          {stats.map((s) => (
            <motion.div
              key={s.label}
              variants={{
                hidden: { opacity: 0, y: 16 },
                show: { opacity: 1, y: 0 },
              }}
              whileHover={{ borderColor: '#5eb3e6' }}
              className="border border-line rounded-lg bg-bg2 p-5"
            >
              <div className="font-display text-[26px] font-semibold text-ink0">{s.num}</div>
              <div className="text-[13.5px] text-ink2 mt-1">{s.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
