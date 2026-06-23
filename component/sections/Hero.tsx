import Image from "next/image";
import Link from "next/link";
import MaterialIcon from "@/component/ui/MaterialIcon"

export default function Hero() {
  return (
    <section className="relative min-h-[921px] flex items-center overflow-hidden px-margin">
      <div className="max-w-[1280px] mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-xl items-center">
        
        <div className="z-10">
          <p className="text-terracotta font-label-md text-label-md mb-base tracking-widest">
            SOFTWARE ARCHITECT
          </p>
          <h1 className="font-display-lg text-display-lg text-on-surface mb-md">
            Hi, I&apos;m Nyap Dev
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant mb-lg max-w-lg leading-relaxed">
            I build modern, scalable, and beautiful digital experiences with a
            focus on technical excellence and user-centric design.
          </p>
          <div className="flex flex-wrap gap-base items-center">
            <Link
              href="#projects"
              className="bg-terracotta text-surface px-lg py-4 rounded-lg font-label-md text-label-md hover:brightness-110 transition-all"
            >
              View Projects
            </Link>
            <Link
              href="#contact"
              className="border border-on-surface/30 text-on-surface px-lg py-4 rounded-lg font-label-md text-label-md hover:bg-on-surface/5 transition-all"
            >
              Hire Me
            </Link>
            <button className="flex items-center gap-xs text-terracotta font-label-md text-label-md px-base py-4 hover:underline">
              <MaterialIcon name="download" className="text-[18px]" />
              Download Resume
            </button>
          </div>
        </div>

        {/* Right: Portrait */}
        <div className="relative hidden md:block">
          <div className="aspect-square glass-panel rounded-full flex items-center justify-center p-xl relative">
            <div className="absolute inset-0 bg-terracotta/5 rounded-full blur-3xl" />
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuC7i_8Wa52ltA7cAj0U9u23eXbBM6zirtRMF5QsA7yJ6Fam3HEetnnSiho6Tn-NYenozplO4Dte67_MBu5zxDTucEI_g9xGboPhRAmBV3y5CzSRCVLxImAMyF7QuWLTeEoiMAWI1Yyh4YSEyk94ZfwzGYaWkxKm8XwkoqZMEc-xOqPvm3ByvzG66GHdU-xUsnjwWCJCPCJDz5yvuCozcOb9KVYz7VJoC2655-Mkd-7Af5gWTNH1b3zobqsoYfZg2Mjtacis7dY5UkU"
              alt="Alex Dev Portrait"
              fill
              className="object-cover rounded-full grayscale hover:grayscale-0 transition-all duration-700 shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
