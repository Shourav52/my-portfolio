import { useEffect, useState } from 'react'
import { motion } from 'motion/react'
import resume from '../assets/Shorov-Saha-Resume.pdf'

const LINES = [
  { type: 'cmd', text: 'whoami' },
  { type: 'out', text: 'Shorov Saha — Full-Stack Developer' },
  { type: 'cmd', text: 'stack --list' },
  { type: 'out', text: 'React.js, Next.js, Node.js, Express.js, MongoDB' },
  { type: 'cmd', text: 'status' },
  { type: 'out', text: 'Open to Software Engineering internships' },
]

function Terminal() {
  const [visibleLines, setVisibleLines] = useState([])
  const [current, setCurrent] = useState('')
  const [done, setDone] = useState(false)

  useEffect(() => {
    let li = 0
    let ci = 0
    let cancelled = false
    let timer

    function step() {
      if (cancelled) return

      if (li >= LINES.length) {
        setDone(true)
        return
      }

      const line = LINES[li]

      if (ci <= line.text.length) {
        setCurrent(line.text.slice(0, ci))
        ci++

        timer = setTimeout(
          step,
          line.type === 'cmd' ? 32 : 14
        )
      } else {
        setVisibleLines((prev) => [...prev, line])
        setCurrent('')

        li++
        ci = 0

        timer = setTimeout(step, 260)
      }
    }

    const start = setTimeout(step, 500)

    return () => {
      cancelled = true
      clearTimeout(start)
      clearTimeout(timer)
    }
  }, [])

  const activeLine = LINES[visibleLines.length]

  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{
        duration: 0.7,
        delay: 0.3,
        ease: 'easeOut',
      }}
      className="rounded-xl border border-line bg-bg2 overflow-hidden shadow-[0_20px_60px_-20px_rgba(0,0,0,0.6)]"
    >
      {/* Terminal Header */}
      <div className="flex items-center gap-2 px-3.5 py-2.5 border-b border-line bg-bg3">
        <span className="w-2.5 h-2.5 rounded-full bg-[#e6685e]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#e6c065]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#62c569]" />

        <span className="ml-2 font-mono text-xs text-ink2">
          profile.sh
        </span>
      </div>

      {/* Terminal Body */}
      <div className="font-mono text-[13.5px] min-h-[210px] p-5">
        {visibleLines.map((line, index) => (
          <div
            key={index}
            className={`mb-2.5 ${
              line.type === 'out'
                ? 'text-cyan'
                : 'text-ink1'
            }`}
          >
            {line.type === 'cmd' && (
              <span className="text-amber">$ </span>
            )}

            {line.text}
          </div>
        ))}

        {activeLine && (
          <div
            className={`mb-2.5 ${
              activeLine.type === 'out'
                ? 'text-cyan'
                : 'text-ink1'
            }`}
          >
            {activeLine.type === 'cmd' && (
              <span className="text-amber">$ </span>
            )}

            {current}

            <span className="inline-block w-[7px] h-[15px] bg-cyan align-middle animate-pulse ml-0.5" />
          </div>
        )}

        {done && (
          <span className="inline-block w-[7px] h-[15px] bg-cyan align-middle animate-pulse" />
        )}
      </div>
    </motion.div>
  )
}

export default function Hero() {
  return (
    <section
      id="top"
      className="pt-36 pb-24 md:pt-40 md:pb-28"
    >
      <div className="max-w-wrap mx-auto px-6 md:px-8 grid md:grid-cols-[1.15fr_1fr] gap-14 items-center">

        {/* Left Content */}
        <div>

          {/* Location */}
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="font-mono text-[13.5px] text-amber mb-4"
          >
            Savar, Dhaka, Bangladesh
          </motion.p>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.08,
            }}
            className="font-display font-semibold text-[clamp(34px,5vw,52px)] leading-[1.12] tracking-tight text-ink0 mb-5"
          >
            Software Engineering student.
            <br />
            Full-stack{' '}
            <span className="text-cyan">
              web developer.
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.16,
            }}
            className="text-[17px] text-ink1 max-w-[46ch] mb-8"
          >
            I build responsive, real-world web applications
            with React, Next.js, Node.js, Express, and MongoDB
            — from clean frontend interfaces to the backend
            logic and data underneath them.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.24,
            }}
            className="flex flex-nowrap items-center gap-2.5"
          >

            {/* View Projects */}
            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              href="#projects"
              className="inline-flex items-center justify-center whitespace-nowrap px-4 py-2.5 rounded-md bg-cyan text-bg0 font-semibold text-[14px] border border-cyan"
            >
              View projects
            </motion.a>

            {/* Download Resume */}
            <motion.a
              whileHover={{
                scale: 1.03,
                borderColor: '#5eb3e6',
                color: '#5eb3e6',
              }}
              whileTap={{ scale: 0.97 }}
              href={resume}
              download="Shourav-Saha-Resume.pdf"
              className="inline-flex items-center justify-center whitespace-nowrap px-4 py-2.5 rounded-md text-ink0 font-medium text-[14px] border border-lineStrong"
            >
              Download Resume ↓
            </motion.a>

            {/* Get In Touch */}
            <motion.a
              whileHover={{
                scale: 1.03,
                borderColor: '#5eb3e6',
                color: '#5eb3e6',
              }}
              whileTap={{ scale: 0.97 }}
              href="https://mail.google.com/mail/?view=cm&fs=1&to=shorovsaha52@gmail.com"
              className="inline-flex items-center justify-center whitespace-nowrap px-4 py-2.5 rounded-md text-ink0 font-medium text-[14px] border border-lineStrong"
            >
              Get in touch
            </motion.a>

            {/* GitHub */}
            <motion.a
              whileHover={{
                scale: 1.03,
                borderColor: '#5eb3e6',
                color: '#5eb3e6',
              }}
              whileTap={{ scale: 0.97 }}
              href="https://github.com/Shourav52"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center whitespace-nowrap px-4 py-2.5 rounded-md text-ink0 font-medium text-[14px] border border-lineStrong"
            >
              GitHub ↗
            </motion.a>

          </motion.div>
        </div>

        {/* Terminal */}
        <Terminal />

      </div>
    </section>
  )
}