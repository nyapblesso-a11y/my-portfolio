import Link from "next/link";

const footerLinks = [
  { label: "GitHub", href: "#" },
  { label: "LinkedIn", href: "#" },
  { label: "Twitter", href: "#" },
  { label: "Dribbble", href: "#" },
];

export default function Footer() {
  return (
    <footer className="w-full bg-surface-container-lowest border-t border-outline-variant/30">
      <div className="flex flex-col md:flex-row justify-between items-center px-margin py-lg max-w-[1280px] mx-auto gap-base">
        <div className="font-headline-md text-headline-md font-bold text-on-surface">
          DevPortfolio
        </div>
        <p className="text-on-surface-variant font-body-md text-body-md">
          © 2024 DevPortfolio. Crafted with Organic Precision.
        </p>
        <div className="flex gap-md">
          {footerLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-on-surface-variant hover:text-primary transition-colors text-label-sm font-label-sm"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
