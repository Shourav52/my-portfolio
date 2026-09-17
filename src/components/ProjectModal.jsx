import { useEffect } from 'react'
import { motion, AnimatePresence } from 'motion/react'

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    function onKey(e) {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = project ? 'hidden' : ''
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [project, onClose])

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[100] bg-bg0/80 backdrop-blur-sm flex items-center justify-center p-4 md:p-8"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.97 }}
            transition={{ duration: 0.28, ease: 'easeOut' }}
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-3xl max-h-[88vh] overflow-y-auto rounded-xl border border-lineStrong bg-bg2"
          >
            <div className="sticky top-0 flex items-center justify-between px-6 py-4 border-b border-line bg-bg2/95 backdrop-blur">
              <div>
                <span className="font-mono text-xs text-amber">{project.tag}</span>
                <h3 className="font-display text-ink0 text-xl font-semibold">{project.name}</h3>
              </div>
              <button
                onClick={onClose}
                aria-label="Close"
                className="text-ink1 hover:text-cyan text-2xl leading-none px-2"
              >
                ✕
              </button>
            </div>

            <div className="p-6">
              <div className="grid gap-3 mb-6">
                {project.gallery.map((src, i) => (
                  <img
                    key={i}
                    src={src}
                    alt={`${project.name} screenshot ${i + 1}`}
                    loading="lazy"
                    className="w-full rounded-lg border border-line"
                  />
                ))}
              </div>

              <p className="text-[14.5px] text-ink1 mb-5">{project.summary}</p>

              <h4 className="font-mono text-xs text-amber mb-2.5">Features</h4>
              <ul className="list-disc pl-5 text-[14.5px] text-ink1 space-y-1.5 mb-5">
                {project.features.map((f, i) => (
                  <li key={i}>{f}</li>
                ))}
              </ul>

              <h4 className="font-mono text-xs text-amber mb-2.5">Tech stack</h4>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.stack.map((t) => (
                  <span key={t} className="pill">
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap gap-3">
                <a
                  href={project.links.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-md bg-cyan text-bg0 font-semibold text-[13.5px]"
                >
                  Live demo ↗
                </a>
                <a
                  href={project.links.client}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-md border border-lineStrong text-ink0 text-[13.5px] hover:border-cyan hover:text-cyan"
                >
                  Client repo ↗
                </a>
                {project.links.server && (
                  <a
                    href={project.links.server}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-md border border-lineStrong text-ink0 text-[13.5px] hover:border-cyan hover:text-cyan"
                  >
                    Server repo ↗
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
