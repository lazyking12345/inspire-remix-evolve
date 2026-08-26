import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/page-hero";
import { PhotoGallery } from "@/components/photo-gallery";
import { SectionHeading } from "@/components/section-heading";
import { FACILITIES, GALLERY, IMG } from "@/lib/site-data";

export const Route = createFileRoute("/campus-life")({
  head: () => ({
    meta: [
      { title: "Campus Life & Student Gallery | Rao's Group of Schools" },
      {
        name: "description",
        content:
          "Sports, academics and science fair photographs from Rao's Group campuses, plus a look at our classrooms, teaching staff and facilities across Telangana.",
      },
      { property: "og:title", content: "Campus Life at Rao's Group of Schools" },
      {
        property: "og:description",
        content:
          "A photographic look at day-to-day school life — sport, classrooms, laboratories and student exhibitions.",
      },
      { property: "og:url", content: "/campus-life" },
    ],
    links: [{ rel: "canonical", href: "/campus-life" }],
  }),
  component: CampusLifePage,
});

function CampusLifePage() {
  return (
    <>
      <PageHero
        kicker="Campus life"
        title="School as students actually experience it"
        body="Sport on the ground, projects on the bench, exhibitions in the hall — photographs from across our campuses."
        image={`${IMG}/gallery/9.jpeg`}
        imageAlt="Rao's Group students at a school sports event"
      />

      <section className="mx-auto max-w-7xl px-6 py-20">
        <SectionHeading kicker="Student gallery" title="Sport, academics and science" />
        <div className="mt-12">
          <PhotoGallery groups={GALLERY} />
        </div>
      </section>

      <section className="bg-secondary py-20">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading
            kicker="Facilities"
            title="Where our students spend their day"
            body="Classrooms built for the age group they serve, laboratories for hands-on work, and open campus space for sport and assembly."
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
    </>
  );
}
