import { Link } from "@tanstack/react-router";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { BRANCHES, NAV, SITE } from "@/lib/site-data";

export function SiteFooter() {
  return (
    <footer className="mt-24 bg-primary-deep text-primary-foreground">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <img
            src={SITE.logo}
            alt={`${SITE.name} logo`}
            className="h-12 w-auto"
            width={48}
            height={48}
            loading="lazy"
          />
          <p className="mt-4 text-sm leading-relaxed text-primary-foreground/75">
            A legacy of educational excellence in {SITE.region} since {SITE.foundedYear}, founded at{" "}
            {SITE.foundedPlace} by Mr. Prabhakar Rao Polsani.
          </p>
        </div>

        <div>
          <h2 className="text-sm font-semibold tracking-[0.16em] text-accent uppercase">Explore</h2>
          <ul className="mt-4 space-y-2.5 text-sm">
            {NAV.filter((item) => item.to !== "/").map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className="text-primary-foreground/80 transition-colors hover:text-accent"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-semibold tracking-[0.16em] text-accent uppercase">
            Our campuses
          </h2>
          <p className="mt-4 text-sm text-primary-foreground/75">
            {BRANCHES.slice(0, 8).join(" · ")} and more.
          </p>
          <Link
            to="/branches"
            className="mt-3 inline-block text-sm font-semibold text-accent hover:underline"
          >
            View all {BRANCHES.length} branches
          </Link>
        </div>

        <div>
          <h2 className="text-sm font-semibold tracking-[0.16em] text-accent uppercase">
            Get in touch
          </h2>
          <ul className="mt-4 space-y-3 text-sm">
            <li>
              <a
                className="inline-flex items-start gap-2.5 text-primary-foreground/85 hover:text-accent"
                href={SITE.phoneHref}
              >
                <Phone className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
                {SITE.phone}
              </a>
            </li>
            <li>
              <a
                className="inline-flex items-start gap-2.5 text-primary-foreground/85 hover:text-accent"
                href={`mailto:${SITE.email}`}
              >
                <Mail className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
                {SITE.email}
              </a>
            </li>
            <li>
              <a
                className="inline-flex items-start gap-2.5 text-primary-foreground/85 hover:text-accent"
                href={SITE.whatsapp}
                target="_blank"
                rel="noreferrer"
              >
                <MessageCircle className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
                WhatsApp {SITE.whatsappDisplay}
              </a>
            </li>
            <li className="inline-flex items-start gap-2.5 text-primary-foreground/85">
              <MapPin className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
              {SITE.region}
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-primary-foreground/15">
        <div className="mx-auto max-w-7xl px-6 py-6 text-xs text-primary-foreground/60">
          © {new Date().getFullYear()} {SITE.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
