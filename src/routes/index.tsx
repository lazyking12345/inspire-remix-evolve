import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, GraduationCap, Quote } from "lucide-react";
import { HeroSlider } from "@/components/hero-slider";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import { ADMISSION_STEPS, FACILITIES, PATHWAYS, SITE, STATS, TESTIMONIALS } from "@/lib/site-data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Rao's Group of Schools — CBSE & State Schools in Telangana" },
      {
        name: "description",
        content:
          "Rao's Group of Schools has educated Telangana since 1985 — 22 campuses, 10,000+ students, and hands-on, project-based learning from Nursery to Class 10.",
      },
      { property: "og:title", content: "Rao's Group of Schools — Educating Telangana since 1985" },
      {
        property: "og:description",
        content:
          "22 campuses, 10,000+ students, and a 40-year legacy of educational excellence across Telangana.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <>
      <HeroSlider />

      {/* Stats band */}
      <section className="border-b border-border bg-secondary">
        <div className="mx-auto grid max-w-7xl grid-cols-2 divide-border px-6 py-10 sm:divide-x lg:grid-cols-4">
          {STATS.map((stat) => (
            <div key={stat.label} className="px-2 py-4 text-center sm:px-6">
              <p className="font-display text-3xl font-semibold text-primary sm:text-4xl">
                {stat.value}
              </p>
              <p className="mx-auto mt-2 max-w-[16rem] text-sm leading-snug text-muted-foreground">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Pathways */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <SectionHeading
          kicker="Our learning pathways"
          title="Three stages, one continuous education"
          body="From a child's first day in Nursery to the final board examination, each stage is designed to build on the last."
        />
        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          {PATHWAYS.map((pathway) => (
            <article
              key={pathway.slug}
              className="group flex flex-col overflow-hidden rounded-lg border border-border bg-card"
            >
              <img
                src={pathway.image}
                alt={pathway.alt}
                loading="lazy"
                className="aspect-16/10 w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              />
              <div className="flex flex-1 flex-col p-6">
                <p className="text-xs font-bold tracking-[0.16em] text-accent-foreground uppercase">
                  {pathway.grades}
                </p>
                <h3 className="mt-2 font-display text-xl font-semibold tracking-tight">
                  {pathway.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {pathway.summary}
                </p>
                <Link
                  to="/curriculum"
                  hash={pathway.slug}
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:gap-2.5 hover:underline"
                >
                  Read more <ArrowRight className="size-4" aria-hidden="true" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Legacy */}
      <section className="bg-primary-soft">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 lg:grid-cols-2">
          <div>
            <SectionHeading
              kicker="Since 1985"
              title="A legacy built by Mr. Prabhakar Rao Polsani"
              body="Rao's Group of Schools began in 1985 at Kukatpally, Hyderabad, founded by an educationist with over four decades in teaching and school administration. Since joining in 2010, Mr. Nidhin Rao Polsani has carried that legacy forward with modern, project-based practice."
            />
            <Button asChild className="mt-8">
              <Link to="/about">Read our story</Link>
            </Button>
          </div>
          <figure className="overflow-hidden rounded-lg border border-border bg-card">
            <img
              src={`${SITE.logo}`}
              alt="Rao's Group of Schools emblem"
              loading="lazy"
              className="mx-auto max-h-72 w-auto p-10"
            />
            <figcaption className="border-t border-border px-6 py-4 text-sm text-muted-foreground">
              One of the leading school chains in Telangana State, India.
            </figcaption>
          </figure>
        </div>
      </section>

      {/* Admission process */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <SectionHeading
          kicker="Admission process"
          title="Six steps from enquiry to confirmed admission"
          body="Every family follows the same clear sequence, so you always know what happens next."
        />
        <ol className="mt-12 grid gap-x-10 gap-y-8 md:grid-cols-2 lg:grid-cols-3">
          {ADMISSION_STEPS.map((step, i) => (
            <li key={step.title} className="border-t-2 border-accent pt-5">
              <p className="font-display text-sm font-bold text-accent-foreground">
                Step {String(i + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-1 font-display text-lg font-semibold tracking-tight">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.body}</p>
            </li>
          ))}
        </ol>
        <Button asChild size="lg" className="mt-12">
          <Link to="/admissions">Begin your enquiry</Link>
        </Button>
      </section>

      {/* Facilities */}
      <section className="bg-secondary py-20">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading
            kicker="Exceptional learning environment"
            title="Classrooms, educators and campuses built around students"
          />
          <div className="mt-12 grid gap-8 lg:grid-cols-3">
            {FACILITIES.map((item) => (
              <article key={item.title} className="overflow-hidden rounded-lg bg-card">
                <img
                  src={item.image}
                  alt={item.alt}
                  loading="lazy"
                  className="aspect-16/10 w-full object-cover"
                />
                <div className="p-6">
                  <h3 className="font-display text-lg font-semibold tracking-tight">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <SectionHeading
          kicker="In their words"
          title="What families and students tell us"
          align="center"
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {TESTIMONIALS.map((item) => (
            <blockquote
              key={item.name}
              className="flex flex-col rounded-lg border border-border bg-card p-7"
            >
              <Quote className="size-6 text-accent" aria-hidden="true" />
              <p className="mt-4 flex-1 text-base leading-relaxed">{item.quote}</p>
              <footer className="mt-6 flex items-center gap-3 border-t border-border pt-5">
                <span
                  aria-hidden="true"
                  className="flex size-10 items-center justify-center rounded-full bg-primary font-display text-sm font-semibold text-primary-foreground"
                >
                  {item.name
                    .split(/[\s.]+/)
                    .filter(Boolean)
                    .map((part) => part[0])
                    .join("")}
                </span>
                <span>
                  <cite className="block text-sm font-semibold not-italic">{item.name}</cite>
                  <span className="text-xs text-muted-foreground">{item.role}</span>
                </span>
              </footer>
            </blockquote>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary-deep">
        <div className="mx-auto flex max-w-7xl flex-col items-start gap-8 px-6 py-16 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl">
            <GraduationCap className="size-9 text-accent" aria-hidden="true" />
            <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-primary-foreground sm:text-4xl">
              Enrolment is now open
            </h2>
            <p className="mt-3 text-primary-foreground/80">
              Join our community of {SITE.students} learners across {SITE.region}. Speak to an
              admissions team member at your nearest campus.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button asChild size="lg" variant="secondary">
              <Link to="/admissions">Enquire now</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-primary-foreground/40 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
            >
              <Link to="/branches">Find a branch</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
