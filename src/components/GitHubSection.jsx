import { motion } from 'motion/react'

export default function GitHubSection() {
  return (
    <section id="github" className="section-border py-20 md:py-24">
      <div className="max-w-wrap mx-auto px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
          className="grid md:grid-cols-[1fr_auto] gap-8 items-center rounded-xl border border-line bg-bg2 px-7 py-8 md:px-9 md:py-9"
        >
          <div>
            <p className="font-mono text-[13px] text-amber mb-2.5">Developer activity</p>
            <h2 className="font-display text-ink0 font-semibold text-[22px] mb-2.5">
              github.com/Shourav52
            </h2>
            <p className="text-[14.5px] text-ink1 max-w-[52ch]">
              Every project above started as a blank repository here — client and server code, commit
              history, and the occasional messy work-in-progress branch included.
            </p>
          </div>
          <motion.a
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            href="https://github.com/Shourav52"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-cyan text-bg0 font-semibold text-[14.5px] whitespace-nowrap"
          >
            View profile ↗
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
