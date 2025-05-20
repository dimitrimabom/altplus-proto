import type { LucideIcon } from "lucide-react";

interface ServiceFeatureProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export function ServiceFeature({
  icon: Icon,
  title,
  description,
}: ServiceFeatureProps) {
  return (
    <div className="flex gap-4">
      <div className="flex-shrink-0">
        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
          <Icon className="h-6 w-6 text-primary" />
        </div>
      </div>
      <div>
        <h3 className="font-medium">{title}</h3>
        <p className="mt-1 text-sm text-muted-foreground">{description}</p>
      </div>
    </div>
  );
}
