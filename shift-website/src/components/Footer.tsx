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

      {/* Email */}
      <a
        href="mailto:joe@shiftisit.com"
        className="text-[0.82rem] text-white/[0.38] transition-colors duration-200 hover:text-white/75"
      >
        joe@shiftisit.com
      </a>
    </footer>
  );
}
