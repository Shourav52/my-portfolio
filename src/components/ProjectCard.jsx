import { motion } from 'motion/react'

export default function ProjectCard({ project, index, onOpen }) {
  const reversed = index % 2 === 1

  return (
    <div
      className={`grid md:grid-cols-2 gap-8 md:gap-10 items-start py-9 md:py-10 ${
        index !== 0 ? 'section-border' : ''
      }`}
    >
      <motion.button
        onClick={() => onOpen(project)}
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.55 }}
        whileHover={{ y: -4 }}
        className={`relative rounded-lg overflow-hidden border border-line bg-bg3 text-left group ${
          reversed ? 'md:order-2' : ''
        }`}
      >
        <div className="overflow-hidden">
          <motion.img
            src={project.cover}
            alt={`${project.name} screenshot`}
            loading="lazy"
            className="w-full h-56 object-cover object-top"
            whileHover={{ scale: 1.06 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-bg0/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5">
          <span className="font-mono text-[13px] text-cyan">View details →</span>
        </div>
        <div className="p-4">
          <span className="font-mono text-xs text-amber">{project.tag}</span>
        </div>
      </motion.button>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.55, delay: 0.1 }}
        className={reversed ? 'md:order-1' : ''}
      >
        <h3 className="font-display text-ink0 text-xl font-semibold mb-1.5">{project.name}</h3>
        <div className="font-mono text-xs text-ink2 mb-3.5">{project.meta}</div>
        <p className="text-[14.5px] text-ink1 mb-4">{project.summary}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.stack.map((t) => (
            <span key={t} className="pill">
              {t}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap gap-5 mb-4">
          <a
            href={project.links.live}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[13.5px] text-cyan hover:underline"
          >
            Live demo ↗
          </a>
          <a
            href={project.links.client}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[13.5px] text-cyan hover:underline"
          >
            Client repo ↗
          </a>
          {project.links.server && (
            <a
              href={project.links.server}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[13.5px] text-cyan hover:underline"
            >
              Server repo ↗
            </a>
          )}
        </div>

        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          onClick={() => onOpen(project)}
          className="text-[13.5px] font-medium text-ink0 border border-lineStrong rounded-md px-4 py-2 hover:border-cyan hover:text-cyan transition-colors"
        >
          View details
        </motion.button>
      </motion.div>
    </div>
  )
}
