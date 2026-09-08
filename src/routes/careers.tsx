import { createFileRoute } from "@tanstack/react-router";
import { EnquiryForm } from "@/components/enquiry-form";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { BRANCHES, IMG, SITE } from "@/lib/site-data";

const WHY = [
  {
    title: "Teach with support, not alone",
    body: "Lesson planning, timetabling and assessment are coordinated centrally, so your energy goes into teaching.",
  },
  {
    title: "Grow across a network",
    body: `With ${BRANCHES.length} campuses across ${SITE.region}, there is room to move, specialise and take on leadership.`,
  },
  {
    title: "A 40-year institution",
    body: `Founded in ${SITE.foundedYear} at ${SITE.foundedPlace}, Rao's Group has been building teaching careers for decades.`,
  },
];

const ROLES = [
  "Preschool and early-years teachers",
  "Primary class teachers (Classes 1–5)",
  "Subject teachers — Mathematics, Science, English, Social Studies, Telugu, Hindi",
  "Physical education, art and music teachers",
  "Laboratory and library assistants",
  "Administration, front office and transport staff",
];

export const Route = createFileRoute("/careers")({
  head: () => ({
    meta: [
      { title: "Careers — Teach at Rao's Group of Schools" },
      {
        name: "description",
        content:
          "Teaching and non-teaching openings across Rao's Group of Schools campuses in Telangana. Send us your details and preferred branch.",
      },
      { property: "og:title", content: "Careers at Rao's Group of Schools" },
      {
        property: "og:description",
        content:
          "Join a school group established in 1985, teaching more than 10,000 students across Telangana.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:url", content: "/careers" },
    ],
    links: [{ rel: "canonical", href: "/careers" }],
  }),
  component: CareersPage,
});

function CareersPage() {
  return (
    <>
      <PageHero
        kicker="Careers"
        title="Build your teaching career with us"
        body="We are always looking for educators who care as much about how children think as about what they score."
        image={`${IMG}/gallery/teachingstaff.jpg`}
        imageAlt="Teaching staff at Rao's Group of Schools working with a student"
      />

      <section className="mx-auto max-w-7xl px-6 py-20">
        <SectionHeading
          kicker="Why Rao's Group"
          title="What working here looks like"
          body="A structured school system, experienced colleagues and campuses across the state."
        />
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {WHY.map((item) => (
            <div key={item.title} className="border-l-2 border-accent pl-5">
              <h3 className="font-display text-lg font-semibold tracking-tight">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-secondary py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[1fr_1.15fr]">
          <div>
            <SectionHeading
              kicker="Openings"
              title="Roles we regularly recruit for"
              body="Availability varies by campus and academic year."
            />
            <ul className="mt-8 space-y-3 text-sm leading-relaxed">
              {ROLES.map((role) => (
                <li key={role} className="border-b border-border/70 pb-3 text-muted-foreground">
                  {role}
                </li>
              ))}
            </ul>
            <p className="mt-8 text-sm leading-relaxed text-muted-foreground">
              You can also email your CV to{" "}
              <a className="font-semibold text-primary hover:underline" href={`mailto:${SITE.email}`}>
                {SITE.email}
              </a>{" "}
              or call{" "}
              <a className="font-semibold text-primary hover:underline" href={SITE.phoneHref}>
                {SITE.phone}
              </a>
              .
            </p>
          </div>
          <div className="rounded-lg border border-border bg-card p-6 sm:p-8">
            <EnquiryForm variant="career" />
          </div>
        </div>
      </section>
    </>
  );
}
