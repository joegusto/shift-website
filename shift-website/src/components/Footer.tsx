import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#060606] border-t border-white/[0.06] px-[6%] py-9 flex items-center justify-between flex-wrap gap-4">
      {/* Logo */}
      <Image
        src="/shift-logo.svg"
        alt="SHIFT is IT"
        width={100}
        height={36}
        className="logo-img opacity-50"
      />

      {/* Copyright */}
      <div className="text-[0.78rem] text-white/[0.22]">
        &copy; {new Date().getFullYear()} SHIFT is IT
      </div>

      {/* Email + LinkedIn */}
      <div className="flex items-center gap-5">
        <a
          href="mailto:joe@shiftisit.com"
          className="text-[0.82rem] text-white/[0.38] transition-colors duration-200 hover:text-white/75"
        >
          joe@shiftisit.com
        </a>
        <a
          href="https://www.linkedin.com/company/shiftisit"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="SHIFT is IT on LinkedIn"
          className="flex items-center gap-1.5 text-[0.82rem] text-white/[0.38] transition-colors duration-200 hover:text-white/75"
        >
          <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" />
          </svg>
          LinkedIn
        </a>
      </div>
    </footer>
  );
}
