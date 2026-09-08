import { createFileRoute, Link } from "@tanstack/react-router";
import { MapPin, Search } from "lucide-react";
import { useMemo, useState } from "react";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { BRANCHES, IMG, SITE } from "@/lib/site-data";

export const Route = createFileRoute("/branches")({
  head: () => ({
    meta: [
      { title: "Our Campuses Across Telangana | Rao's Group of Schools" },
      {
        name: "description",
        content:
          "Find a Rao's Group of Schools campus near you — from Miyapur and Nizampet to Karimnagar, Siddipet, Sangareddy and Zaheerabad.",
      },
      { property: "og:title", content: "Rao's Group of Schools campuses" },
      {
        property: "og:description",
        content: "Search our branch network across Telangana and enquire at the campus nearest you.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:url", content: "/branches" },
    ],
    links: [{ rel: "canonical", href: "/branches" }],
  }),
  component: BranchesPage,
});

function BranchesPage() {
  const [query, setQuery] = useState("");

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    return q ? BRANCHES.filter((b) => b.toLowerCase().includes(q)) : [...BRANCHES];
  }, [query]);

  return (
    <>
      <PageHero
        kicker="Our network"
        title={`${BRANCHES.length} campuses across Telangana`}
        body="What began in Kukatpally in 1985 is now a network of schools serving more than 10,000 students. Search for the campus closest to you."
        image={`${IMG}/gallery/campus.jpeg`}
        imageAlt="A Rao's Group of Schools campus"
      />

      <section className="mx-auto max-w-7xl px-6 py-20">
        <SectionHeading
          kicker="Find a campus"
          title="Search our branches"
          body="Admission enquiries for every campus are handled by our central admissions team."
        />

        <div className="mt-10 max-w-md">
          <label className="relative block">
            <span className="sr-only">Search branches</span>
            <Search
              className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground"
              aria-hidden="true"
            />
            <Input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search by locality, e.g. Miyapur"
              className="pl-9"
            />
          </label>
        </div>

        {results.length > 0 ? (
          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {results.map((branch) => (
              <li
                key={branch}
                className="flex items-start gap-3 rounded-lg border border-border bg-card p-5"
              >
                <MapPin className="mt-0.5 size-4 shrink-0 text-accent" aria-hidden="true" />
                <div>
                  <h3 className="font-display text-base font-semibold tracking-tight">{branch}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{SITE.region}</p>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p className="mt-10 text-sm leading-relaxed text-muted-foreground">
            No campus matches “{query}”. Call{" "}
            <a className="font-semibold text-primary hover:underline" href={SITE.phoneHref}>
              {SITE.phone}
            </a>{" "}
            and we will point you to the nearest school.
          </p>
        )}

        <div className="mt-14 flex flex-wrap gap-3">
          <Button asChild size="lg">
            <Link to="/admissions">Enquire about a campus</Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link to="/contact">Contact us</Link>
          </Button>
        </div>
      </section>
    </>
  );
}
