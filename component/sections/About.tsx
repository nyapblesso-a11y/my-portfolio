const stats = [
  { value: "5+", label: "Years Experience" },
  { value: "40+", label: "Projects Delivered" },
  { value: "12", label: "Open Source Tools" },
];

export default function About() {
  return (
    <section
      id="about"
      className="py-xl bg-surface-container-low px-margin"
    >
      <div className="max-w-[1280px] mx-auto">
        <div className="flex flex-col md:flex-row gap-xl">
          {/* Sticky heading */}
          <div className="md:w-1/3">
            <h2 className="font-headline-lg text-headline-lg text-on-surface sticky top-32">
              The Craft Behind the Code.
            </h2>
          </div>

          {/* Body content */}
          <div className="md:w-2/3 space-y-md">
            <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
              With a deep passion for architectural integrity, I specialize in
              building digital products that aren&apos;t just functional, but
              enduring. My journey began with a curiosity for how complex systems
              interact, leading me to master the full stack of modern web
              development.
            </p>
            <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
              I believe in a product-first mindset—where engineering decisions
              are driven by user needs and business goals. Whether it&apos;s
              optimizing a React renderer or designing a distributed database
              schema, my focus remains on clarity, scalability, and performance.
            </p>

            {/* Stats grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-base pt-md">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="p-md bg-surface-container rounded-xl"
                >
                  <span className="text-terracotta font-headline-md text-headline-md block">
                    {stat.value}
                  </span>
                  <span className="text-on-surface-variant text-label-sm">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
