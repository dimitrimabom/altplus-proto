import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function Testimonials() {
  const testimonials = [
    {
      name: "Sophie Martin",
      role: "Directrice Marketing, TechCorp",
      content:
        "AltPlus a transformé notre présence en ligne. Notre nouveau site a considérablement augmenté notre trafic et nos conversions. Leur équipe est professionnelle et réactive.",
      avatar: "SM",
    },
    {
      name: "Thomas Dubois",
      role: "Fondateur, EcoStart",
      content:
        "Travailler avec AltPlus a été une expérience exceptionnelle. Ils ont parfaitement compris nos besoins et ont livré un site qui dépasse nos attentes.",
      avatar: "TD",
    },
    {
      name: "Marie Leroy",
      role: "Propriétaire, Boutique en ligne",
      content:
        "Notre boutique en ligne a vu ses ventes augmenter de 40% depuis le lancement de notre nouveau site. L'équipe d'AltPlus a été d'un grand soutien tout au long du processus.",
      avatar: "ML",
    },
  ];

  return (
    <section className="px-4 py-20 w-full flex flex-col items-center">
      <div className="container max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Ce que nos clients disent
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Découvrez pourquoi nos clients nous font confiance pour leurs
            projets web.
          </p>
        </div>
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="h-full flex flex-col">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarImage
                      src={`/placeholder.svg?height=40&width=40&text=${testimonial.avatar}`}
                    />
                    <AvatarFallback>{testimonial.avatar}</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-medium">{testimonial.name}</h3>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="flex-1">
                <p className="text-muted-foreground">"{testimonial.content}"</p>
              </CardContent>
              <CardFooter>
                <div className="flex text-primary">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-5 w-5"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ))}
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
