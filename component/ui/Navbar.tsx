import Link from "next/link";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#services", label: "Services" },
  { href: "#timeline", label: "Timeline" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  return (
    <nav className="sticky top-0 w-full z-50 bg-surface-container/80 backdrop-blur-xl border-b border-outline-variant/20 shadow-sm">
      <div className="flex justify-between items-center px-margin py-4 max-w-[1280px] mx-auto">
        <div className="font-headline-md text-headline-md font-bold text-on-surface tracking-tighter">
          DevPortfolio
        </div>

        <div className="hidden md:flex items-center gap-md">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-on-surface-variant font-body-md text-body-md hover:text-on-surface transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <Link
          href="#contact"
          className="bg-terracotta text-surface px-6 py-2 rounded-lg font-label-md text-label-md hover:opacity-90 active:scale-95 transition-all"
        >
          Get in Touch
        </Link>
      </div>
    </nav>
  );
}
