import { Link } from "@tanstack/react-router";
import { Menu, Phone } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { NAV, SITE } from "@/lib/site-data";

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="hidden bg-primary-deep text-primary-foreground md:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-2 text-xs">
          <p className="tracking-wide">
            Established {SITE.foundedYear} · {SITE.foundedPlace}
          </p>
          <div className="flex items-center gap-6">
            <a className="inline-flex items-center gap-2 hover:text-accent" href={SITE.phoneHref}>
              <Phone className="size-3.5" aria-hidden="true" />
              {SITE.phone}
            </a>
            <a className="hover:text-accent" href={`mailto:${SITE.email}`}>
              {SITE.email}
            </a>
          </div>
        </div>
      </div>

      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-3">
        <Link to="/" className="flex items-center gap-3">
          <img
            src={SITE.logo}
            alt={`${SITE.name} logo`}
            className="h-11 w-auto"
            width={44}
            height={44}
          />
          <span className="leading-tight">
            <span className="block font-display text-lg font-semibold tracking-tight">
              Rao&apos;s Group
            </span>
            <span className="block text-[0.7rem] font-semibold tracking-[0.18em] text-muted-foreground uppercase">
              of Schools
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main navigation">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.to === "/" }}
              className="rounded-md px-3 py-2 text-sm font-semibold text-foreground/75 transition-colors hover:bg-secondary hover:text-primary"
              activeProps={{ className: "bg-secondary text-primary" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button asChild className="hidden sm:inline-flex">
            <Link to="/admissions">Enquire Now</Link>
          </Button>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="lg:hidden" aria-label="Open menu">
                <Menu className="size-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-72">
              <SheetTitle className="px-4 pt-4 font-display text-lg">Rao&apos;s Group</SheetTitle>
              <nav className="mt-4 flex flex-col gap-1 px-2 pb-6" aria-label="Mobile navigation">
                {NAV.map((item) => (
                  <Link
                    key={item.to}
                    to={item.to}
                    activeOptions={{ exact: item.to === "/" }}
                    onClick={() => setOpen(false)}
                    className="rounded-md px-4 py-2.5 text-sm font-semibold text-foreground/80 hover:bg-secondary hover:text-primary"
                    activeProps={{ className: "bg-secondary text-primary" }}
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
