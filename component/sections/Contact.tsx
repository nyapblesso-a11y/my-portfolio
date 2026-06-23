import Link from "next/link";
import MaterialIcon from "@/component/ui/MaterialIcon";
import ContactForm from "@/component/ui/ContactForm";

const contactLinks = [
  {
    icon: "mail",
    label: "hello@alexdev.io",
    href: "mailto:hello@alexdev.io",
  },
  {
    icon: "forum",
    label: "+1 (555) 000-0000",
    href: "#",
  },
];

const socialLinks = [
  { label: "LinkedIn", href: "#" },
  { label: "GitHub", href: "#" },
  { label: "Twitter", href: "#" },
  { label: "WhatsApp", href: "#" },
];

export default function Contact() {
  return (
    <section id="contact" className="py-xl px-margin">
      <div className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-xl">
        {/* Left: Info */}
        <div>
          <h2 className="font-display-lg text-display-lg text-on-surface mb-md">
            Let&apos;s Connect
          </h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant mb-lg">
            Have a vision for a project? I&apos;m available for freelance
            partnerships and architectural consulting.
          </p>

          <div className="space-y-base">
            {contactLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="flex items-center gap-md group"
              >
                <div className="w-12 h-12 rounded-lg bg-surface-container flex items-center justify-center group-hover:bg-terracotta transition-colors">
                  <MaterialIcon
                    name={link.icon}
                    className="text-on-surface group-hover:text-surface"
                  />
                </div>
                <span className="text-on-surface font-body-md">{link.label}</span>
              </Link>
            ))}
          </div>

          <div className="flex gap-base mt-xl">
            {socialLinks.map((social) => (
              <Link
                key={social.label}
                href={social.href}
                className="text-on-surface-variant hover:text-terracotta transition-colors"
              >
                {social.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Right: Contact Form */}
        <div className="glass-panel p-lg rounded-xl">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
