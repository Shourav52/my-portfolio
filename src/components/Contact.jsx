import { motion } from 'motion/react'
import { useEffect } from 'react'
import { useForm, ValidationError } from '@formspree/react'

export default function Contact() {
  const [state, handleSubmit] = useForm('moevqpww')

  useEffect(() => {
    if (state.succeeded) {
      document.getElementById('contact-form')?.reset()
    }
  }, [state.succeeded])

  return (
    <section id="contact" className="section-border py-20 md:py-24">
      <div className="max-w-wrap mx-auto px-6 md:px-8 grid md:grid-cols-[1fr_1fr] gap-14">

        {/* Left Side */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
        >
          <p className="font-mono text-[13px] text-amber mb-2.5">
            Contact
          </p>

          <h2 className="font-display text-ink0 font-semibold text-[clamp(26px,4vw,34px)] max-w-[18ch] mb-4.5">
            Open to Software Engineering internships and junior developer roles.
          </h2>

          <p className="text-ink1 max-w-[48ch] mb-7">
            The fastest way to reach me is email — I'm happy to talk about
            internships, junior roles, or just about anything I've built.
          </p>

          <div className="flex flex-wrap gap-3.5">

            {/* Email */}
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=shorovsaha52@gmail.com"
              className="px-5 py-2.5 rounded-md bg-cyan text-bg0 font-semibold text-[14.5px]"
            >
              shorovsaha52@gmail.com
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/Shourav52"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-md border border-lineStrong text-ink0 text-[14.5px] hover:border-cyan hover:text-cyan"
            >
              GitHub ↗
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/shourav-saha/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-md border border-lineStrong text-ink0 text-[14.5px] hover:border-cyan hover:text-cyan"
            >
              LinkedIn ↗
            </a>

          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.form
          id="contact-form"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          onSubmit={handleSubmit}
          className="flex flex-col gap-4"
        >

          {/* Name */}
          <div>
            <label
              htmlFor="name"
              className="block text-[13px] text-ink2 mb-1.5"
            >
              Name
            </label>

            <input
              id="name"
              name="name"
              type="text"
              required
              className="w-full rounded-md bg-bg2 border border-line px-4 py-2.5 text-ink0 text-[14.5px] focus:outline-none focus:border-cyan"
              placeholder="Your name"
            />
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-[13px] text-ink2 mb-1.5"
            >
              Email
            </label>

            <input
              id="email"
              name="email"
              type="email"
              required
              className="w-full rounded-md bg-bg2 border border-line px-4 py-2.5 text-ink0 text-[14.5px] focus:outline-none focus:border-cyan"
              placeholder="you@example.com"
            />

            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>

          {/* Message */}
          <div>
            <label
              htmlFor="message"
              className="block text-[13px] text-ink2 mb-1.5"
            >
              Message
            </label>

            <textarea
              id="message"
              name="message"
              rows={4}
              required
              className="w-full rounded-md bg-bg2 border border-line px-4 py-2.5 text-ink0 text-[14.5px] focus:outline-none focus:border-cyan resize-none"
              placeholder="What would you like to talk about?"
            />

            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>

          {/* Submit Button */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            disabled={state.submitting}
            className="mt-1 px-5 py-2.5 rounded-md bg-cyan text-bg0 font-semibold text-[14.5px] w-fit disabled:opacity-60"
          >
            {state.submitting ? 'Sending...' : 'Send message'}
          </motion.button>

          {/* Success Message */}
          {state.succeeded && (
            <p className="text-sm text-green-400">
              Message sent successfully! I'll get back to you soon.
            </p>
          )}

          {/* Error Message */}
          {state.errors && (
            <p className="text-sm text-red-400">
              Something went wrong. Please try again.
            </p>
          )}

        </motion.form>

      </div>
    </section>
  )
}