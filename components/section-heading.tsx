import { Badge } from "@/components/ui/badge";

export function SectionHeading({
  eyebrow,
  title,
  description
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="mx-auto mb-12 max-w-3xl text-center">
      <Badge className="mb-4 border-primary/25 bg-primary/10 text-primary">{eyebrow}</Badge>
      <h2 className="text-3xl font-semibold tracking-normal text-foreground md:text-5xl">{title}</h2>
      <p className="mt-4 text-base leading-7 text-muted-foreground md:text-lg">{description}</p>
    </div>
  );
}
