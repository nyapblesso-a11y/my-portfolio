import Image from "next/image";
import Link from "next/link";
import MaterialIcon from "@/component/ui/MaterialIcon";

const featuredProject = {
  title: "Architectura CMS",
  description:
    "A headless CMS designed for high-concurrency editorial workflows and seamless API delivery.",
  tags: ["Next.js", "Prisma", "PostgreSQL"],
  image:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuD4q0XF_1p9snPBHFItckU7b68NE4Ap5ZrfHMWXVb4IYzIRSzTX4cTDQwnu9f1ahezsC7WS2XO5fbOOeUkr8k9mrXbLIqR3Fbfr1AP3CaayZkOBs6TeW8tEW05aNistc5PAU7Em90Hi-AKAsZz1JQQw9OMn_aS8HS7lmKyl-roynzpmcMEb0L2BEdcvk3fPijkGBednqn_iIwHMnlRRqU-sHvnFjB7wScxd_UtjP_K2gL2lHg-y_f-ijf3KIfuDUrvSnpGKiaj_RYA",
  href: "#",
};

const sideProjects = [
  {
    title: "Nebula Analytics",
    description: "Real-time data visualization platform.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDsNIiIqVLRCGZZRU2c32wVdyFp4TU-fhs35BShkmp_BwqRNLcnl-ek98l2GtBMEzYXb45zPVgC2lMJRoir7EvrLyqFKF565PDc6NwaT9iREtysKJTE_5tOGdW1BQz6x51b0x9pqzi0XT9Uw3rFJVg6CZmGm9q3KajzsR_FMBH91rY3Nwb0J9kqTsw-3w1T_97_CnaywI7670pEMOPKGfyYwWDw3HaUgDzgnFECbZk5OaPK1Yc67ElBF6GsF-uLbAU4R11MF-i1RKA",
    href: "#",
  },
  {
    title: "Pulse Commerce",
    description: "Mobile-first headless commerce engine.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAScCD5HYV2-5kbmz3P6ofvrYyTc4lfwN161bi_AiObGMRLOf5XE3Ga80zgDYecQppp2Sdut62YiNI0vpvJdwwu3iWK9SZynVwjRJwuyHgzucqArRWDAcbqrliIMXB7SYqY4FE6S0H0JVZBHhSRZdm64zO9OqtHq6Z1f6we-sIe9Fbd_qLZZsNDvgLWTlM34kQTWH4JK3zD_i5ao1MqNIX7Ti34haX6wGgl9i5lGZ5QLN9eNDFMRWKIWkiQ-04N6UYTSD8M7BPtKuM",
    href: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-xl px-margin">
      <div className="max-w-[1280px] mx-auto">
        <h2 className="font-headline-lg text-headline-lg text-on-surface mb-lg">
          Featured Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-lg">
          {/* Large featured project */}
          <div className="md:col-span-8 group relative overflow-hidden rounded-xl bg-surface-container-highest aspect-[16/9]">
            <Image
              src={featuredProject.image}
              alt={featuredProject.title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-surface to-transparent opacity-90 flex flex-col justify-end p-lg">
              <div className="flex justify-between items-end">
                <div>
                  <h3 className="font-headline-lg text-headline-lg text-on-surface mb-xs">
                    {featuredProject.title}
                  </h3>
                  <p className="text-on-surface-variant font-body-md mb-md max-w-lg">
                    {featuredProject.description}
                  </p>
                  <div className="flex gap-xs">
                    {featuredProject.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-label-sm border border-on-surface/20 px-base py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex gap-base">
                  <Link
                    href={featuredProject.href}
                    className="w-12 h-12 glass-panel rounded-full flex items-center justify-center hover:bg-terracotta hover:text-surface transition-all"
                  >
                    <MaterialIcon name="open_in_new" />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Side projects stack */}
          <div className="md:col-span-4 flex flex-col gap-lg">
            {sideProjects.map((project) => (
              <div
                key={project.title}
                className="group flex-1 relative overflow-hidden rounded-xl bg-surface-container-highest"
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover grayscale transition-all duration-700 group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-surface/60 opacity-0 group-hover:opacity-100 transition-opacity p-md flex flex-col justify-end">
                  <h3 className="font-headline-md text-headline-md text-on-surface">
                    {project.title}
                  </h3>
                  <p className="text-on-surface-variant text-label-sm mb-base">
                    {project.description}
                  </p>
                  <Link
                    href={project.href}
                    className="text-terracotta text-label-md flex items-center gap-xs"
                  >
                    View Case Study{" "}
                    <MaterialIcon name="arrow_forward" className="text-[14px]" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
