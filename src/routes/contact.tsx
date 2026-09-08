import { createFileRoute } from "@tanstack/react-router";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { EnquiryForm } from "@/components/enquiry-form";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { BRANCHES, IMG, SITE } from "@/lib/site-data";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Rao's Group of Schools — Phone, Email & WhatsApp" },
      {
        name: "description",
        content: `Call ${SITE.phone}, email ${SITE.email} or message us on WhatsApp for admissions and campus enquiries across Telangana.`,
      },
      { property: "og:title", content: "Contact Rao's Group of Schools" },
      {
        property: "og:description",
        content: "Phone, email, WhatsApp and an enquiry form for all our Telangana campuses.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

const CARDS = [
  {
    icon: Phone,
    title: "Call us",
    value: SITE.phone,
    href: SITE.phoneHref,
    note: "School office hours, Monday to Saturday",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    value: SITE.whatsappDisplay,
    href: SITE.whatsapp,
    note: "Quick answers on admissions and fees",
    external: true,
  },
  {
    icon: Mail,
    title: "Email",
    value: SITE.email,
    href: `mailto:${SITE.email}`,
    note: "For documents and detailed queries",
  },
];

function ContactPage() {
  return (
    <>
      <PageHero
        kicker="Contact"
        title="Talk to our admissions team"
        body="Whether you are choosing a first school or moving your child mid-year, we are happy to walk you through it."
        image={`${IMG}/gallery/classrooms.jpeg`}
        imageAlt="A classroom at Rao's Group of Schools"
      />

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-6 md:grid-cols-3">
          {CARDS.map((card) => (
            <a
              key={card.title}
              href={card.href}
              {...(card.external ? { target: "_blank", rel: "noreferrer" } : {})}
              className="group rounded-lg border border-border bg-card p-6 transition-colors hover:border-primary"
            >
              <card.icon className="size-5 text-accent" aria-hidden="true" />
              <h2 className="mt-4 text-sm font-semibold tracking-[0.16em] text-muted-foreground uppercase">
                {card.title}
              </h2>
              <p className="mt-2 font-display text-lg font-semibold tracking-tight group-hover:text-primary">
                {card.value}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{card.note}</p>
            </a>
          ))}
        </div>

        <div className="mt-20 grid gap-12 lg:grid-cols-[1fr_1.15fr]">
          <div>
            <SectionHeading
              kicker="Send a message"
              title="We will get back to you"
              body="Tell us which campus you are interested in and what you would like to know."
            />
            <div className="mt-8 flex items-start gap-3 rounded-lg border border-border bg-secondary p-5">
              <MapPin className="mt-0.5 size-4 shrink-0 text-accent" aria-hidden="true" />
              <p className="text-sm leading-relaxed text-muted-foreground">
                {BRANCHES.length} campuses across {SITE.region}, with our first school established in{" "}
                {SITE.foundedYear} at {SITE.foundedPlace}.
              </p>
            </div>
          </div>
          <div className="rounded-lg border border-border bg-card p-6 sm:p-8">
            <EnquiryForm variant="contact" />
          </div>
        </div>
      </section>
    </>
  );
}
