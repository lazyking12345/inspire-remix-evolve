import { useState } from "react";
import { CheckCircle2 } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { BRANCHES, CLASSES, SITE } from "@/lib/site-data";

type Variant = "enrollment" | "career" | "contact";

const REQUIRED_BY_VARIANT: Record<Variant, string[]> = {
  enrollment: ["name", "studentClass", "branch", "mobile"],
  career: ["name", "email", "mobile", "branch"],
  contact: ["name", "mobile", "message"],
};

export function EnquiryForm({ variant = "enrollment" }: { variant?: Variant }) {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const nextErrors: Record<string, string> = {};

    for (const field of REQUIRED_BY_VARIANT[variant]) {
      if (!String(data.get(field) ?? "").trim()) nextErrors[field] = "This field is required";
    }

    const mobile = String(data.get("mobile") ?? "").replace(/\D/g, "");
    if (!nextErrors.mobile && mobile.length < 10) {
      nextErrors.mobile = "Enter a valid 10-digit mobile number";
    }

    const email = String(data.get("email") ?? "").trim();
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      nextErrors.email = "Enter a valid email address";
    }

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      toast.error("Please check the highlighted fields.");
      return;
    }

    setSubmitted(true);
    toast.success("Thank you — please call or WhatsApp us to complete your enquiry.");
  };

  if (submitted) {
    return (
      <div className="rounded-lg border border-border bg-card p-8 text-center">
        <CheckCircle2 className="mx-auto size-10 text-primary" aria-hidden="true" />
        <h3 className="mt-4 font-display text-xl font-semibold">Details noted</h3>
        <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-muted-foreground">
          Online submissions are not yet connected to our office. To make sure your enquiry reaches
          us, please call{" "}
          <a className="font-semibold text-primary hover:underline" href={SITE.phoneHref}>
            {SITE.phone}
          </a>{" "}
          or message us on{" "}
          <a
            className="font-semibold text-primary hover:underline"
            href={SITE.whatsapp}
            target="_blank"
            rel="noreferrer"
          >
            WhatsApp
          </a>
          .
        </p>
        <Button variant="outline" className="mt-6" onClick={() => setSubmitted(false)}>
          Fill another enquiry
        </Button>
      </div>
    );
  }

  const selectClass =
    "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none";

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <Field label="Full name" name="name" error={errors["name"]} required>
        <Input id="name" name="name" autoComplete="name" placeholder="Student or applicant name" />
      </Field>

      {variant === "enrollment" ? (
        <div className="grid gap-5 sm:grid-cols-2">
          <Field label="Class applying for" name="studentClass" error={errors["studentClass"]} required>
            <select id="studentClass" name="studentClass" className={selectClass} defaultValue="">
              <option value="">Select class</option>
              {CLASSES.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </Field>
          <BranchField error={errors["branch"]} selectClass={selectClass} />
        </div>
      ) : null}

      {variant === "career" ? (
        <div className="grid gap-5 sm:grid-cols-2">
          <BranchField error={errors["branch"]} selectClass={selectClass} label="Preferred branch" />
          <Field label="Role you are applying for" name="role">
            <Input id="role" name="role" placeholder="e.g. Mathematics teacher" />
          </Field>
        </div>
      ) : null}

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Mobile number" name="mobile" error={errors["mobile"]} required>
          <Input id="mobile" name="mobile" inputMode="tel" autoComplete="tel" placeholder="10-digit mobile" />
        </Field>
        <Field
          label="Email address"
          name="email"
          error={errors["email"]}
          required={variant === "career"}
        >
          <Input id="email" name="email" type="email" autoComplete="email" placeholder="you@example.com" />
        </Field>
      </div>

      <Field
        label={variant === "career" ? "Tell us about your experience" : "Your query or message"}
        name="message"
        error={errors["message"]}
        required={variant === "contact"}
      >
        <Textarea id="message" name="message" rows={4} placeholder="How can we help?" />
      </Field>

      <Button type="submit" size="lg" className="w-full sm:w-auto">
        {variant === "career" ? "Submit career enquiry" : "Submit enquiry"}
      </Button>
      <p className="text-xs leading-relaxed text-muted-foreground">
        We use your details only to respond to this enquiry.
      </p>
    </form>
  );
}

function BranchField({
  error,
  selectClass,
  label = "Branch",
}: {
  error?: string | undefined;
  selectClass: string;
  label?: string | undefined;
}) {
  return (
    <Field label={label} name="branch" error={error} required>
      <select id="branch" name="branch" className={selectClass} defaultValue="">
        <option value="">Select branch</option>
        {BRANCHES.map((b) => (
          <option key={b} value={b}>
            {b}
          </option>
        ))}
      </select>
    </Field>
  );
}

function Field({
  label,
  name,
  error,
  required,
  children,
}: {
  label: string;
  name: string;
  error?: string | undefined;
  required?: boolean | undefined;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-2">
      <Label htmlFor={name}>
        {label}
        {required ? <span className="text-destructive"> *</span> : null}
      </Label>
      {children}
      {error ? <p className="text-xs font-semibold text-destructive">{error}</p> : null}
    </div>
  );
}
