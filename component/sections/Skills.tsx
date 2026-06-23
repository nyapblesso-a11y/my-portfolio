import MaterialIcon from "@/components/ui/MaterialIcon";

const skillCategories = [
  {
    icon: "devices",
    title: "Frontend",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
  },
  {
    icon: "dns",
    title: "Backend",
    skills: ["Node.js", "Go", "Python", "GraphQL", "gRPC"],
  },
  {
    icon: "database",
    title: "Database",
    skills: ["PostgreSQL", "MongoDB", "Redis", "ElasticSearch"],
  },
  {
    icon: "construction",
    title: "Tools",
    skills: ["Docker", "Kubernetes", "AWS", "Git"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-xl px-margin">
      <div className="max-w-[1280px] mx-auto">
        <h2 className="font-headline-lg text-headline-lg text-on-surface mb-lg text-center">
          Technical Arsenal
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-md">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="glass-panel p-md rounded-xl space-y-md"
            >
              <div className="flex items-center gap-base">
                <MaterialIcon
                  name={category.icon}
                  className="text-terracotta"
                />
                <h3 className="font-headline-md text-headline-md text-on-surface">
                  {category.title}
                </h3>
              </div>
              <div className="flex flex-wrap gap-xs">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="bg-on-surface/10 text-on-surface px-base py-1 rounded-full text-label-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
