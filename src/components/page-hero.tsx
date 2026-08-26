interface PageHeroProps {
  kicker: string;
  title: string;
  body: string;
  image: string;
  imageAlt: string;
}

export function PageHero({ kicker, title, body, image, imageAlt }: PageHeroProps) {
  return (
    <section className="relative isolate overflow-hidden bg-primary-deep">
      <img
        src={image}
        alt={imageAlt}
        className="absolute inset-0 size-full object-cover opacity-45"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-primary-deep via-primary-deep/85 to-primary-deep/45" />
      <div className="relative mx-auto max-w-7xl px-6 py-20 sm:py-24">
        <div className="max-w-2xl text-primary-foreground">
          <span className="rule-label text-accent">{kicker}</span>
          <h1 className="mt-4 text-3xl leading-tight font-semibold tracking-tight sm:text-5xl">
            {title}
          </h1>
          <p className="mt-4 text-base leading-relaxed text-primary-foreground/85">{body}</p>
        </div>
      </div>
    </section>
  );
}
