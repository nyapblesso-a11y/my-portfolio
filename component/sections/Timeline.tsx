import MaterialIcon from "@/component/ui/MaterialIcon";

type TimelineItem = {
  title: string;
  period: string;
  description: string;
  icon: string;
  highlighted: boolean;
  side: "left" | "right";
};

const timelineItems: TimelineItem[] = [
  {
    title: "Full Stack Architect",
    period: "2022 - Present",
    description:
      "Leading development of complex SaaS platforms, mentoring junior devs, and defining technical standards.",
    icon: "rocket_launch",
    highlighted: true,
    side: "left",
  },
  {
    title: "Senior Developer",
    period: "2020 - 2022",
    description:
      "Specialized in React and Node.js ecosystems. Focused on scalability and performance optimization.",
    icon: "code",
    highlighted: false,
    side: "right",
  },
  {
    title: "Self-Taught Origins",
    period: "2018 - 2020",
    description:
      "Built foundations in computer science, mastering HTML, CSS, and vanilla JS through obsession and grit.",
    icon: "auto_stories",
    highlighted: false,
    side: "left",
  },
];

export default function Timeline() {
  return (
    <section
      id="timeline"
      className="py-xl bg-surface-container-lowest px-margin overflow-hidden"
    >
      <div className="max-w-[800px] mx-auto relative">
        <h2 className="font-headline-lg text-headline-lg text-on-surface mb-xl text-center">
          My Evolution
        </h2>

        {/* Vertical line */}
        <div className="absolute left-1/2 top-32 bottom-0 w-px bg-outline-variant/30 hidden md:block" />

        <div className="space-y-xl relative">
          {timelineItems.map((item) =>
            item.side === "left" ? (
              <div
                key={item.title}
                className="flex flex-col md:flex-row items-center gap-lg"
              >
                <div className="md:w-1/2 md:text-right">
                  <h3 className="font-headline-md text-headline-md text-on-surface">
                    {item.title}
                  </h3>
                  <p className="text-terracotta text-label-sm mb-base">
                    {item.period}
                  </p>
                  <p className="text-on-surface-variant font-body-md">
                    {item.description}
                  </p>
                </div>
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center z-10 shrink-0 ${
                    item.highlighted
                      ? "bg-terracotta"
                      : "glass-panel border-terracotta/40"
                  }`}
                >
                  <MaterialIcon
                    name={item.icon}
                    className={item.highlighted ? "text-surface" : "text-terracotta"}
                  />
                </div>
                <div className="md:w-1/2" />
              </div>
            ) : (
              <div
                key={item.title}
                className="flex flex-col md:flex-row-reverse items-center gap-lg"
              >
                <div className="md:w-1/2">
                  <h3 className="font-headline-md text-headline-md text-on-surface">
                    {item.title}
                  </h3>
                  <p className="text-terracotta text-label-sm mb-base">
                    {item.period}
                  </p>
                  <p className="text-on-surface-variant font-body-md">
                    {item.description}
                  </p>
                </div>
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center z-10 shrink-0 ${
                    item.highlighted
                      ? "bg-terracotta"
                      : "glass-panel border-terracotta/40"
                  }`}
                >
                  <MaterialIcon
                    name={item.icon}
                    className={item.highlighted ? "text-surface" : "text-terracotta"}
                  />
                </div>
                <div className="md:w-1/2" />
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}
