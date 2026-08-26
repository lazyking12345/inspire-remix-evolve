interface GalleryGroup {
  readonly category: string;
  readonly blurb: string;
  readonly images: readonly { readonly src: string; readonly alt: string }[];
}

export function PhotoGallery({ groups }: { groups: readonly GalleryGroup[] }) {
  return (
    <div className="space-y-16">
      {groups.map((group) => (
        <div key={group.category}>
          <div className="flex flex-wrap items-end justify-between gap-3 border-b border-border pb-4">
            <h3 className="font-display text-2xl font-semibold tracking-tight">{group.category}</h3>
            <p className="text-sm text-muted-foreground">{group.blurb}</p>
          </div>
          <div className="mt-6 grid grid-cols-2 gap-4 lg:grid-cols-4">
            {group.images.map((image) => (
              <figure
                key={`${group.category}-${image.src}`}
                className="group overflow-hidden rounded-lg border border-border bg-muted"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  loading="lazy"
                  className="aspect-4/3 size-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                />
              </figure>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
