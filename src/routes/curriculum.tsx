import { createFileRoute, Link } from "@tanstack/react-router";
import { Check } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import { ACADEMIC_SYSTEMS, ACTIVITIES, IMG, PATHWAYS } from "@/lib/site-data";

export const Route = createFileRoute("/curriculum")({
  head: () => ({
    meta: [
      { title: "Curriculum — Nursery to Class 10 | Rao's Group of Schools" },
      {
        name: "description",
        content:
          "Our three learning pathways — Preschool Journey, Foundational Learning and Adolescent Development — plus the academic systems and clubs that support them.",
      },
      { property: "og:title", content: "Curriculum at Rao's Group of Schools" },
      {
        property: "og:description",
        content:
          "Play-based early years, a strong primary foundation, and a challenging senior curriculum with laboratory, workshop and coding work.",
      },
      { property: "og:url", content: "/curriculum" },
    ],
    links: [{ rel: "canonical", href: "/curriculum" }],
  }),
  component: CurriculumPage,
});

function CurriculumPage() {
  return (
    <>
      <PageHero
        kicker="Academics"
        title="A curriculum that asks students to build, not just memorise"
        body="Three continuous pathways from Nursery to Class 10, supported by structured assessment, laboratories, workshops and more than ten student clubs."
        image={`${IMG}/gallery/academics1.jpeg`}
        imageAlt="Students working through a lesson at Rao's Group of Schools"
      />

      <section className="mx-auto max-w-7xl space-y-20 px-6 py-20">
        {PATHWAYS.map((pathway, i) => (
          <article
            key={pathway.slug}
            id={pathway.slug}
            className="grid items-center gap-10 scroll-mt-28 lg:grid-cols-2"
          >
            <img
              src={pathway.image}
              alt={pathway.alt}
              loading="lazy"
              className={`aspect-4/3 w-full rounded-lg border border-border object-cover ${
                i % 2 === 1 ? "lg:order-2" : ""
              }`}
            />
            <div>
              <span className="rule-label">{pathway.grades}</span>
              <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight">
                {pathway.title}
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                {pathway.summary}
              </p>
              <ul className="mt-6 space-y-3">
                {pathway.details.map((detail) => (
                  <li key={detail} className="flex gap-3 text-sm leading-relaxed">
                    <Check className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </section>

      <section className="bg-secondary py-20">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading
            kicker="How academics are run"
            title="The systems behind every classroom"
            body="Curriculum planning, timetabling, assessment, attendance and parent communication are managed consistently across all our campuses."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {ACADEMIC_SYSTEMS.map((item) => (
              <article key={item.title} className="overflow-hidden rounded-lg bg-card">
                <img
                  src={item.image}
                  alt={item.alt}
                  loading="lazy"
                  className="aspect-16/9 w-full object-cover"
                />
                <div className="p-5">
                  <h3 className="font-display text-base font-semibold tracking-tight">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <SectionHeading
          kicker="Beyond the timetable"
          title="Extracurricular activities for holistic development"
          body="Every student is encouraged to take at least one activity outside their core subjects."
        />
        <div className="mt-12 grid gap-x-8 gap-y-6 sm:grid-cols-2 lg:grid-cols-3">
          {ACTIVITIES.map((activity) => (
            <div key={activity.title} className="border-l-2 border-accent pl-5">
              <h3 className="font-display text-base font-semibold tracking-tight">
                {activity.title}
              </h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                {activity.body}
              </p>
            </div>
          ))}
        </div>
        <Button asChild size="lg" className="mt-12">
          <Link to="/admissions">Apply for admission</Link>
        </Button>
      </section>
    </>
  );
}
