import { motion } from 'motion/react'

const items = [
  {
    date: '2024 – Present',
    title: 'Bachelor of Science in Software Engineering',
    org: 'Daffodil International University — Daffodil Smart City, Birulia, Dhaka',
    detail:
      'Focused on software engineering, data structures, algorithms, and web development. Participated in coding competitions and tech clubs.',
  },
  {
    date: '2020 – 2022',
    title: 'Higher Secondary Certificate (HSC)',
    org: 'Narsingdi Model College — Dhaka, Bangladesh',
    detail: 'Science group with a focus on Mathematics and Physics. GPA 4.67 · Science Club Member.',
  },
]

export default function Education() {
  return (
    <section id="education" className="section-border py-20 md:py-24">
      <div className="max-w-wrap mx-auto px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
          className="mb-11 max-w-[60ch]"
        >
          <p className="font-mono text-[13px] text-amber mb-2.5">Education</p>
          <h2 className="font-display text-ink0 font-semibold text-[clamp(24px,3vw,30px)]">
            Academic background
          </h2>
        </motion.div>

        <div className="relative pl-6">
          <div className="absolute left-0 top-1.5 bottom-1.5 w-px bg-lineStrong" />
          <div className="flex flex-col gap-8">
            {items.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative"
              >
                <span className="absolute -left-[29px] top-1.5 w-2.5 h-2.5 rounded-full bg-cyan" />
                <div className="font-mono text-xs text-amber">{item.date}</div>
                <h3 className="font-display text-ink0 text-[17px] font-semibold mt-1.5 mb-1">
                  {item.title}
                </h3>
                <div className="text-ink2 text-sm mb-1.5">{item.org}</div>
                <p className="text-[14px] text-ink1 max-w-[60ch]">{item.detail}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
