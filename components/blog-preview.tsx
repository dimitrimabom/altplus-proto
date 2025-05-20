import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function BlogPreview() {
  const posts = [
    {
      title: "10 tendances web à suivre en 2025",
      description:
        "Découvrez les dernières tendances en matière de design et de développement web pour rester à la pointe.",
      date: "15 mai 2025",
      readTime: "5 min",
      slug: "tendances-web-2025",
    },
    {
      title: "Comment améliorer la vitesse de chargement de votre site",
      description:
        "Des conseils pratiques pour optimiser les performances de votre site web et améliorer l'expérience utilisateur.",
      date: "3 mai 2025",
      readTime: "7 min",
      slug: "ameliorer-vitesse-chargement",
    },
    {
      title: "L'importance du responsive design",
      description:
        "Pourquoi il est crucial d'avoir un site web qui s'adapte à tous les appareils et comment y parvenir.",
      date: "28 avril 2025",
      readTime: "6 min",
      slug: "importance-responsive-design",
    },
  ];

  return (
    <section className="px-4 py-20 w-full flex flex-col items-center bg-muted/30">
      <div className="container max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Notre Blog
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Restez informé des dernières tendances et conseils en matière de
            web.
          </p>
        </div>
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, index) => (
            <Card key={index} className="h-full flex flex-col">
              <CardHeader className="pb-4">
                <div className="aspect-video w-full overflow-hidden rounded-lg bg-muted">
                  <Image
                    src={`/placeholder.svg?height=200&width=400&text=Blog`}
                    alt={post.title}
                    className="h-full w-full object-cover"
                    width={400}
                    height={200}
                  />
                </div>
              </CardHeader>
              <CardContent className="flex-1">
                <CardTitle className="line-clamp-2 hover:text-primary">
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </CardTitle>
                <CardDescription className="mt-2 line-clamp-3">
                  {post.description}
                </CardDescription>
              </CardContent>
              <CardFooter className="flex justify-between border-t pt-4">
                <div className="text-sm text-muted-foreground">
                  {post.date} · {post.readTime} de lecture
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  className="h-auto p-0"
                  asChild
                >
                  <Link href={`/blog/${post.slug}`}>
                    Lire <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Button asChild variant="outline">
            <Link href="/blog">
              Voir tous les articles <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
