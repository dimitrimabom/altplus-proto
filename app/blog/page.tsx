import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function BlogPage() {
  const categories = ["Tous", "Design", "Développement", "Marketing", "SEO"];

  const posts = [
    {
      title: "10 tendances web à suivre en 2025",
      description:
        "Découvrez les dernières tendances en matière de design et de développement web pour rester à la pointe.",
      date: "15 mai 2025",
      readTime: "5 min",
      category: "Design",
      slug: "tendances-web-2025",
    },
    {
      title: "Comment améliorer la vitesse de chargement de votre site",
      description:
        "Des conseils pratiques pour optimiser les performances de votre site web et améliorer l'expérience utilisateur.",
      date: "3 mai 2025",
      readTime: "7 min",
      category: "Développement",
      slug: "ameliorer-vitesse-chargement",
    },
    {
      title: "L'importance du responsive design",
      description:
        "Pourquoi il est crucial d'avoir un site web qui s'adapte à tous les appareils et comment y parvenir.",
      date: "28 avril 2025",
      readTime: "6 min",
      category: "Design",
      slug: "importance-responsive-design",
    },
    {
      title: "Les bases du SEO pour votre site web",
      description:
        "Apprenez les fondamentaux du référencement pour améliorer la visibilité de votre site sur les moteurs de recherche.",
      date: "15 avril 2025",
      readTime: "8 min",
      category: "SEO",
      slug: "bases-seo-site-web",
    },
    {
      title: "Comment créer une stratégie de contenu efficace",
      description:
        "Découvrez comment planifier et créer du contenu qui engage votre audience et convertit les visiteurs en clients.",
      date: "5 avril 2025",
      readTime: "6 min",
      category: "Marketing",
      slug: "strategie-contenu-efficace",
    },
    {
      title: "Les meilleures pratiques pour l'accessibilité web",
      description:
        "Comment rendre votre site web accessible à tous les utilisateurs, y compris ceux ayant des handicaps.",
      date: "28 mars 2025",
      readTime: "7 min",
      category: "Développement",
      slug: "meilleures-pratiques-accessibilite",
    },
  ];

  return (
    <div className=" flex flex-col items-center">
      <div className="container px-4 py-12 md:py-16 max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Blog AltPlus
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Découvrez nos articles, conseils et actualités sur le monde du web.
          </p>
        </div>

        <div className="mt-12 flex flex-col gap-6 md:flex-row">
          <div className="w-full md:w-2/3">
            <div className="mb-8 flex items-center gap-4">
              <Input
                type="search"
                placeholder="Rechercher un article..."
                className="max-w-sm"
              />
            </div>

            <Tabs defaultValue="Tous">
              <TabsList className="mb-8 flex flex-wrap">
                {categories.map((category) => (
                  <TabsTrigger key={category} value={category}>
                    {category}
                  </TabsTrigger>
                ))}
              </TabsList>

              {categories.map((category) => (
                <TabsContent
                  key={category}
                  value={category}
                  className="space-y-8"
                >
                  {posts
                    .filter(
                      (post) =>
                        category === "Tous" || post.category === category
                    )
                    .map((post, index) => (
                      <Card key={index}>
                        <div className="grid gap-4 md:grid-cols-[1fr_2fr]">
                          <CardHeader className="p-4">
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
                          <div className="flex flex-col justify-between p-4 pt-0 md:pt-4">
                            <div>
                              <CardTitle className="line-clamp-2 hover:text-primary">
                                <Link href={`/blog/${post.slug}`}>
                                  {post.title}
                                </Link>
                              </CardTitle>
                              <CardDescription className="mt-2 line-clamp-3">
                                {post.description}
                              </CardDescription>
                            </div>
                            <CardFooter className="flex justify-between border-t p-0 pt-4">
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
                          </div>
                        </div>
                      </Card>
                    ))}
                </TabsContent>
              ))}
            </Tabs>
          </div>

          <div className="w-full md:w-1/3">
            <div className="rounded-lg border bg-card p-6 shadow-sm">
              <h3 className="text-lg font-medium">Catégories</h3>
              <ul className="mt-4 space-y-2">
                {categories
                  .filter((cat) => cat !== "Tous")
                  .map((category) => (
                    <li key={category}>
                      <Link
                        href={`#${category}`}
                        className="text-muted-foreground hover:text-primary"
                      >
                        {category}
                      </Link>
                    </li>
                  ))}
              </ul>

              <div className="mt-8">
                <h3 className="text-lg font-medium">Articles populaires</h3>
                <ul className="mt-4 space-y-4">
                  {posts.slice(0, 3).map((post, index) => (
                    <li key={index} className="flex gap-3">
                      <div className="h-16 w-16 flex-none overflow-hidden rounded-md bg-muted">
                        <Image
                          src={`/placeholder.svg?height=64&width=64&text=${
                            index + 1
                          }`}
                          alt={post.title}
                          className="h-full w-full object-cover"
                          width={64}
                          height={64}
                        />
                      </div>
                      <div>
                        <h4 className="line-clamp-2 text-sm font-medium hover:text-primary">
                          <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                        </h4>
                        <p className="text-xs text-muted-foreground">
                          {post.date}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8">
                <h3 className="text-lg font-medium">Newsletter</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Abonnez-vous pour recevoir nos derniers articles.
                </p>
                <div className="mt-4 space-y-2">
                  <Input placeholder="Votre email" type="email" />
                  <Button className="w-full">{`S'abonner`}</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
