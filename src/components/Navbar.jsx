import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'

const links = [
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#github', label: 'GitHub' },
  { href: '#education', label: 'Education' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('about')

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20)

      const sections = links
        .map((link) => document.querySelector(link.href))
        .filter(Boolean)

      let currentSection = 'about'

      sections.forEach((section) => {
        const sectionTop = section.offsetTop
        const scrollPosition = window.scrollY + 150

        if (scrollPosition >= sectionTop) {
          currentSection = section.id
        }
      })

      setActiveSection(currentSection)
    }

    window.addEventListener('scroll', onScroll)

    // Initial check
    onScroll()

    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-bg0/85 backdrop-blur-md border-b border-line py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <nav className="max-w-wrap mx-auto px-6 md:px-8 flex items-center justify-between">

        {/* Logo */}
        <a
          href="#top"
          className="font-mono text-[17px] text-ink0 tracking-tight"
        >
          shorov<span className="text-cyan">.</span>dev
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8">
          {links.map((l) => {
            const isActive = activeSection === l.href.substring(1)

            return (
              <li key={l.href}>
                <a
                  href={l.href}
                  className={`text-[14.5px] transition-colors ${
                    isActive
                      ? 'text-cyan'
                      : 'text-ink1 hover:text-cyan'
                  }`}
                >
                  {l.label}
                </a>
              </li>
            )
          })}
        </ul>

        {/* Mobile Button */}
        <button
          className="md:hidden text-ink0 text-2xl"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? '✕' : '☰'}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden overflow-hidden bg-bg2 border-t border-line mt-3"
          >
            {links.map((l) => {
              const isActive = activeSection === l.href.substring(1)

              return (
                <li
                  key={l.href}
                  className="border-t border-line first:border-t-0"
                >
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className={`block px-6 py-3.5 transition-colors ${
                      isActive
                        ? 'text-cyan'
                        : 'text-ink1 hover:text-cyan'
                    }`}
                  >
                    {l.label}
                  </a>
                </li>
              )
            })}
          </motion.ul>
        )}
      </AnimatePresence>
    </motion.header>
  )
}