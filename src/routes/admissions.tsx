import { createFileRoute } from "@tanstack/react-router";
import { EnquiryForm } from "@/components/enquiry-form";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { ADMISSION_STEPS, IMG, SITE } from "@/lib/site-data";

export const Route = createFileRoute("/admissions")({
  head: () => ({
    meta: [
      { title: "Admissions 2026 — How to Apply | Rao's Group of Schools" },
      {
        name: "description",
        content:
          "Six clear steps from online enquiry to confirmed admission at Rao's Group of Schools, plus the enrolment enquiry form for any of our Telangana campuses.",
      },
      { property: "og:title", content: "Admissions at Rao's Group of Schools" },
      {
        property: "og:description",
        content:
          "Enquire, attend orientation, register, meet our academic team — and join a school family established in 1985.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:url", content: "/admissions" },
    ],
    links: [{ rel: "canonical", href: "/admissions" }],
  }),
  component: AdmissionsPage,
});

function AdmissionsPage() {
  return (
    <>
      <PageHero
        kicker="Admissions"
        title="Joining Rao's Group of Schools"
        body="Admission is a guided conversation, not a form to survive. Here is exactly what happens from your first enquiry to your child's first day."
        image={`${IMG}/gallery/students.jpeg`}
        imageAlt="Students on campus at Rao's Group of Schools"
      />

      <section className="mx-auto max-w-7xl px-6 py-20">
        <SectionHeading
          kicker="The process"
          title="Six steps to admission"
          body="Each step is handled by our academic team, so you always know where your application stands."
        />
        <ol className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {ADMISSION_STEPS.map((step, i) => (
            <li key={step.title} className="rounded-lg border border-border bg-card p-6">
              <span className="flex size-10 items-center justify-center rounded-full bg-primary font-display text-base font-semibold text-primary-foreground">
                {i + 1}
              </span>
              <h3 className="mt-4 font-display text-lg font-semibold tracking-tight">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.body}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="bg-secondary py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[1fr_1.15fr]">
          <div>
            <SectionHeading
              kicker="Step one"
              title="Enrolment enquiry form"
              body="Tell us about your child and the campus you prefer. Our team will guide you through orientation and registration."
            />
            <div className="mt-8 space-y-3 text-sm leading-relaxed text-muted-foreground">
              <p>
                Prefer to speak to someone? Call{" "}
                <a className="font-semibold text-primary hover:underline" href={SITE.phoneHref}>
                  {SITE.phone}
                </a>{" "}
                or email{" "}
                <a
                  className="font-semibold text-primary hover:underline"
                  href={`mailto:${SITE.email}`}
                >
                  {SITE.email}
                </a>
                .
              </p>
              <p>Registration does not guarantee admission; the school's decision is final.</p>
            </div>
          </div>
          <div className="rounded-lg border border-border bg-card p-6 sm:p-8">
            <EnquiryForm variant="enrollment" />
          </div>
        </div>
      </section>
    </>
  );
}
