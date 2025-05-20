import Link from "next/link";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface PricingCardProps {
  title: string;
  price: string;
  description: string;
  features: string[];
  buttonText: string;
  buttonLink: string;
  highlighted?: boolean;
}

export function PricingCard({
  title,
  price,
  description,
  features,
  buttonText,
  buttonLink,
  highlighted = false,
}: PricingCardProps) {
  return (
    <Card
      className={`flex h-full flex-col ${
        highlighted
          ? "relative border-primary shadow-lg before:absolute before:-top-[1px] before:left-0 before:h-1 before:w-full before:bg-primary"
          : ""
      }`}
    >
      {highlighted && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
          Recommandé
        </div>
      )}
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <div className="mt-4 text-2xl font-bold">{price}</div>
        <CardDescription className="mt-2">{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-1">
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <Check className="mr-2 h-5 w-5 flex-shrink-0 text-primary" />
              <span className="text-sm text-muted-foreground">{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <Button
          asChild
          className={`w-full ${highlighted ? "" : "variant-outline"}`}
        >
          <Link href={buttonLink}>{buttonText}</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
