import { motion } from 'motion/react'
import { skillGroups } from '../data/skills'

export default function Skills() {
  return (
    <section id="skills" className="section-border py-20 md:py-24">
      <div className="max-w-wrap mx-auto px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
          className="mb-11 max-w-[60ch]"
        >
          <p className="font-mono text-[13px] text-amber mb-2.5">Skills</p>
          <h2 className="font-display text-ink0 font-semibold text-[clamp(24px,3vw,30px)]">
            What I work with
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-x-12 gap-y-8">
          {skillGroups.map((group, gi) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: gi * 0.06 }}
            >
              <h3 className="font-mono text-[13px] text-amber mb-3.5 font-normal">{group.title}</h3>
              <motion.div
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
                variants={{ hidden: {}, show: { transition: { staggerChildren: 0.05 } } }}
                className="flex flex-wrap gap-2.5"
              >
                {group.skills.map((s) => (
                  <motion.span
                    key={s}
                    variants={{
                      hidden: { opacity: 0, scale: 0.85 },
                      show: { opacity: 1, scale: 1 },
                    }}
                    whileHover={{ borderColor: '#5eb3e6', color: '#eaf0f6' }}
                    className="pill"
                  >
                    {s}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
