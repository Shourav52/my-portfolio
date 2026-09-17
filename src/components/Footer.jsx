export default function Footer() {
  return (
    <footer className="section-border py-7">
      <div className="max-w-wrap mx-auto px-6 md:px-8 flex flex-wrap items-center justify-between gap-3 text-[13px] text-ink2">
        <span>© 2026 Shorov Saha</span>
        <div className="flex gap-5">
          <a href="https://github.com/Shourav52" target="_blank" rel="noopener noreferrer" className="hover:text-cyan">
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/shourav-saha/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan"
          >
            LinkedIn
          </a>
          <a href="mailto:shorovsaha52@gmail.com" className="hover:text-cyan">
            Email
          </a>
        </div>
      </div>
    </footer>
  )
}
