import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { IMG, SITE } from "@/lib/site-data";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Rao's Group of Schools — Our Legacy Since 1985" },
      {
        name: "description",
        content:
          "The story of Rao's Group of Schools: founded in 1985 at Kukatpally by Mr. Prabhakar Rao Polsani, and carried forward by Mr. Nidhin Rao Polsani since 2010.",
      },
      { property: "og:title", content: "About Rao's Group of Schools" },
      {
        property: "og:description",
        content:
          "Four decades of educational leadership in Telangana — from a single school in Kukatpally to one of the state's leading school chains.",
      },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

const TIMELINE = [
  {
    year: "1985",
    title: "The first school opens at Kukatpally",
    body: "Mr. Prabhakar Rao Polsani founds Rao's Group of Schools in Hyderabad, setting a standard of educational integrity, community service and academic excellence.",
  },
  {
    year: "2010",
    title: "A second generation joins",
    body: "Mr. Nidhin Rao Polsani joins the group, infusing modern educational practice into the heritage and values his father established.",
  },
  {
    year: "Today",
    title: "One of Telangana's leading school chains",
    body: `${SITE.students} students across ${SITE.region}, with project-based learning, interdisciplinary studies and real-life student projects.`,
  },
] as const;

function AboutPage() {
  return (
    <>
      <PageHero
        kicker="About us"
        title="Rooted in a legacy of educational excellence"
        body="Since 1985, Rao's Group of Schools has been guided by one conviction: education should not only be learned, but done."
        image={`${IMG}/gallery/campus.jpeg`}
        imageAlt="A Rao's Group of Schools campus"
      />

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-14 lg:grid-cols-[1.4fr_1fr]">
          <div className="space-y-6 text-base leading-relaxed text-foreground/85">
            <SectionHeading
              kicker="About the management"
              title="A legacy initiated by Mr. Prabhakar Rao Polsani"
            />
            <p>
              At Rao&apos;s Group of Schools, we are deeply rooted in a legacy of educational
              excellence and visionary leadership. This legacy was initiated by Mr. Prabhakar Rao
              Polsani, a revered educationist with over 40 years of dedication to teaching and
              school administration. His patriotic spirit, exceptional oratory skills and
              forward-thinking approach have significantly shaped the ethos of the group since its
              inception in 1985 at Kukatpally, Hyderabad.
            </p>
            <p>
              As founder and chairman, Mr. Rao set a high standard of educational integrity,
              community service and academic excellence. His life&apos;s work has been to enlighten
              young minds and prepare them for the challenges of the future. It is on the strong
              foundation he built that we are inspired to dream bigger and to continue our mission
              with renewed vigour and innovation.
            </p>
            <p>
              Since joining forces in 2010, Mr. Nidhin Rao has endeavoured to complement his
              father&apos;s efforts, infusing modern educational practices with the rich heritage and
              values he established. Our shared vision is not just about maintaining the status quo
              but about changing the way education is perceived and delivered.
            </p>
            <p>
              Our commitment extends beyond traditional learning. We embrace a holistic approach
              where students are prepared to face the complexities of the real world with
              confidence, creativity and compassion. Through hands-on experiences, interdisciplinary
              learning and a focus on skill development, we are not just educating students — we are
              preparing future leaders, innovators and problem-solvers.
            </p>
          </div>

          <aside className="space-y-6">
            <figure className="overflow-hidden rounded-lg border border-border bg-card">
              <img
                src={`${IMG}/gallery/chairman%20(1).png`}
                alt="Mr. Prabhakar Rao Polsani, founder and chairman of Rao's Group of Schools"
                loading="lazy"
                className="w-full object-cover"
              />
              <figcaption className="border-t border-border px-5 py-4">
                <p className="font-display text-base font-semibold">Mr. Prabhakar Rao Polsani</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Founder &amp; Chairman · 40+ years in education
                </p>
              </figcaption>
            </figure>
            <div className="rounded-lg border border-border bg-secondary p-6">
              <h2 className="rule-label">At a glance</h2>
              <dl className="mt-4 space-y-3 text-sm">
                <div className="flex justify-between gap-4">
                  <dt className="text-muted-foreground">Founded</dt>
                  <dd className="font-semibold">1985, Kukatpally</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-muted-foreground">Students</dt>
                  <dd className="font-semibold">{SITE.students}</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-muted-foreground">Region</dt>
                  <dd className="font-semibold">{SITE.region}</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-muted-foreground">Flagship</dt>
                  <dd className="font-semibold">Innovious International School</dd>
                </div>
              </dl>
            </div>
          </aside>
        </div>
      </section>

      <section className="bg-primary-soft py-20">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading kicker="Our journey" title="Four decades, one direction" />
          <ol className="mt-12 grid gap-8 md:grid-cols-3">
            {TIMELINE.map((entry) => (
              <li key={entry.year} className="border-t-2 border-accent pt-5">
                <p className="font-display text-2xl font-semibold text-primary">{entry.year}</p>
                <h3 className="mt-2 font-display text-lg font-semibold tracking-tight">
                  {entry.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{entry.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <SectionHeading
          kicker="Educational vision"
          title="A vision statement by Mr. Nidhin Rao Polsani"
        />
        <div className="mt-8 grid gap-6 text-base leading-relaxed text-foreground/85 lg:grid-cols-2">
          <div className="space-y-6">
            <p>
              Under the flagship of Innovious International School, we are committed to redefining
              the educational landscape. Our vision is to cultivate a generation of young
              innovators, thinkers and problem-solvers who are not afraid to bring their ideas to
              life. We believe in the power of hands-on learning, where the classroom extends beyond
              four walls and into the real world.
            </p>
            <p>
              Our students are encouraged to think like engineers, artists, scientists and
              entrepreneurs. They are provided with the tools, resources and freedom to build,
              create and experiment. From welding metal to coding software, from drafting designs to
              executing projects, we want our students to experience the thrill of turning concepts
              into creations.
            </p>
          </div>
          <div className="space-y-6">
            <p>
              Education at our schools is not just about learning; it is about doing. It is about
              equipping our students with the skills they need to navigate and shape the future. We
              are dedicated to providing an environment that supports this kind of practical,
              innovative learning.
            </p>
            <p>
              In line with this vision, we are continuously expanding our curriculum to include more
              project-based learning, interdisciplinary studies and opportunities for students to
              work on real-life projects. Our aim is not just to educate but to inspire and empower
              our students to bring their unique ideas to life.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
