import { Link } from "@tanstack/react-router";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { HERO_SLIDES } from "@/lib/site-data";
import { cn } from "@/lib/utils";

export function HeroSlider() {
  const [index, setIndex] = useState(0);
  const count = HERO_SLIDES.length;
  const active: (typeof HERO_SLIDES)[number] = HERO_SLIDES[index] ?? HERO_SLIDES[0];

  const go = useCallback((next: number) => setIndex(((next % count) + count) % count), [count]);

  useEffect(() => {
    const timer = window.setInterval(() => setIndex((i) => (i + 1) % count), 7000);
    return () => window.clearInterval(timer);
  }, [count]);

  return (
    <section className="relative isolate overflow-hidden bg-primary-deep">
      <div className="relative h-[34rem] sm:h-[38rem]">
        {HERO_SLIDES.map((slide, i) => (
          <img
            key={slide.image}
            src={slide.image}
            alt={slide.alt}
            className={cn(
              "absolute inset-0 size-full object-cover transition-opacity duration-1000",
              i === index ? "opacity-100" : "opacity-0",
            )}
            loading={i === 0 ? "eager" : "lazy"}
            aria-hidden={i !== index}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-r from-primary-deep/95 via-primary-deep/75 to-primary-deep/25" />

        <div className="relative mx-auto flex h-full max-w-7xl items-center px-6">
          <div className="max-w-2xl text-primary-foreground">
            <span className="rule-label text-accent">{HERO_SLIDES[index].kicker}</span>
            <h1 className="mt-5 text-4xl leading-[1.08] font-semibold tracking-tight sm:text-5xl lg:text-6xl">
              {HERO_SLIDES[index].title}
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-primary-foreground/85 sm:text-lg">
              {HERO_SLIDES[index].body}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg" variant="secondary">
                <Link to="/admissions">Start an admission enquiry</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-primary-foreground/40 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
              >
                <Link to="/curriculum">Explore our curriculum</Link>
              </Button>
            </div>
          </div>
        </div>

        <div className="absolute inset-x-0 bottom-6 mx-auto flex max-w-7xl items-center justify-between px-6">
          <div className="flex items-center gap-2">
            {HERO_SLIDES.map((slide, i) => (
              <button
                key={slide.image}
                type="button"
                onClick={() => go(i)}
                aria-label={`Show slide ${i + 1}`}
                aria-current={i === index}
                className={cn(
                  "h-1 rounded-full transition-all",
                  i === index ? "w-10 bg-accent" : "w-5 bg-primary-foreground/40",
                )}
              />
            ))}
          </div>
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="icon"
              aria-label="Previous slide"
              onClick={() => go(index - 1)}
              className="border-primary-foreground/40 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
            >
              <ChevronLeft className="size-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              aria-label="Next slide"
              onClick={() => go(index + 1)}
              className="border-primary-foreground/40 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
            >
              <ChevronRight className="size-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
