import { useState } from 'react'
import { motion } from 'motion/react'
import { projects } from '../data/projects'
import ProjectCard from './ProjectCard'
import ProjectModal from './ProjectModal'

export default function Projects() {
  const [active, setActive] = useState(null)

  return (
    <section id="projects" className="section-border py-20 md:py-24">
      <div className="max-w-wrap mx-auto px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
          className="mb-4 max-w-[60ch]"
        >
          <p className="font-mono text-[13px] text-amber mb-2.5">Projects</p>
          <h2 className="font-display text-ink0 font-semibold text-[clamp(24px,3vw,30px)] mb-3">
            Selected work
          </h2>
          <p className="text-[15px] text-ink2">
            Three full-stack applications, each built from a blank repository to a deployed, working
            product.
          </p>
        </motion.div>

        <div>
          {projects.map((p, i) => (
            <ProjectCard key={p.id} project={p} index={i} onOpen={setActive} />
          ))}
        </div>
      </div>

      <ProjectModal project={active} onClose={() => setActive(null)} />
    </section>
  )
}
