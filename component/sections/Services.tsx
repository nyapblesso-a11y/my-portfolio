import MaterialIcon from "@/component/ui/MaterialIcon";

const services = [
  {
    icon: "web",
    title: "Frontend",
    description: "Immersive interfaces.",
  },
  {
    icon: "settings_ethernet",
    title: "Backend",
    description: "High-performance logic.",
  },
  {
    icon: "layers",
    title: "Full-Stack",
    description: "Complete ecosystem.",
  },
  {
    icon: "api",
    title: "API Dev",
    description: "Reliable integrations.",
  },
  {
    icon: "palette",
    title: "UI/UX",
    description: "Human-centric design.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-xl bg-surface-container px-margin">
      <div className="max-w-[1280px] mx-auto">
        <div className="text-center mb-lg">
          <h2 className="font-headline-lg text-headline-lg text-on-surface">
            Comprehensive Solutions
          </h2>
          <p className="text-on-surface-variant font-body-md text-body-md mt-base">
            End-to-end development tailored for impact.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-base">
          {services.map((service) => (
            <div
              key={service.title}
              className="p-md hover:bg-surface-container-highest transition-colors rounded-xl border border-outline-variant/10 flex flex-col items-center text-center"
            >
              <MaterialIcon
                name={service.icon}
                className="text-terracotta text-display-lg mb-base"
              />
              <h4 className="font-label-md text-label-md text-on-surface mb-xs">
                {service.title}
              </h4>
              <p className="text-on-surface-variant text-label-sm">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
