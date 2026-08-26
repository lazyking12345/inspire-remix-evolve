import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  kicker?: string;
  title: string;
  body?: ReactNode;
  align?: "left" | "center";
  tone?: "default" | "inverted";
  className?: string;
}

export function SectionHeading({
  kicker,
  title,
  body,
  align = "left",
  tone = "default",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        tone === "inverted" && "text-primary-foreground",
        className,
      )}
    >
      {kicker ? (
        <span
          className={cn(
            "rule-label",
            align === "center" && "justify-center",
            tone === "inverted" && "text-accent",
          )}
        >
          {kicker}
        </span>
      ) : null}
      <h2 className="mt-4 text-3xl leading-tight font-semibold tracking-tight sm:text-4xl">
        {title}
      </h2>
      {body ? (
        <p
          className={cn(
            "mt-4 text-base leading-relaxed",
            tone === "inverted" ? "text-primary-foreground/80" : "text-muted-foreground",
          )}
        >
          {body}
        </p>
      ) : null}
    </div>
  );
}
