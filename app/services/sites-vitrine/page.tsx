import Link from "next/link";
import {
  ArrowRight,
  Check,
  ChevronRight,
  Code,
  Globe,
  Laptop,
  Rocket,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PricingCard } from "@/components/pricing-card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import Image from "next/image.js";

export default function SitesVitrinePage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 px-4 flex items-center justify-center md:py-28 bg-muted/30">
        <div className="container max-w-7xl flex flex-col items-center text-center">
          <Badge variant="outline" className="mb-4">
            Service
          </Badge>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Sites <span className="text-primary">Vitrine</span>
          </h1>
          <p className="mt-6 max-w-3xl text-lg text-muted-foreground sm:text-xl">
            Présentez votre entreprise avec élégance grâce à un site web vitrine
            moderne et performant. Nous concevons des sites qui reflètent
            l'identité de votre marque et convertissent les visiteurs en
            clients.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Button asChild size="lg">
              <Link href="/contact?service=sites-vitrine">
                Demander un devis
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/portfolio?category=site-vitrine">
                Voir nos réalisations
              </Link>
            </Button>
          </div>
          <div className="mt-16 w-full max-w-5xl rounded-lg border bg-card/50 p-4 shadow-sm">
            <Image
              src="/placeholder.svg?height=600&width=1200&text=Site+Vitrine+Professionnel"
              alt="Exemple de site vitrine"
              className="w-full rounded-md object-cover"
              width={1200}
              height={600}
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 flex items-center justify-center">
        <div className="container max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Caractéristiques principales
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Nos sites vitrine sont conçus pour mettre en valeur votre
              entreprise et offrir une expérience utilisateur exceptionnelle.
            </p>
          </div>
          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader className="pb-2">
                <Rocket className="h-10 w-10 text-primary mb-2" />
                <CardTitle>Design sur mesure</CardTitle>
                <CardDescription>
                  Un design unique qui reflète l'identité de votre marque et se
                  démarque de la concurrence.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-2 text-sm text-muted-foreground">
                  <li>Maquettes personnalisées</li>
                  <li>Respect de votre charte graphique</li>
                  <li>Interfaces modernes et élégantes</li>
                  <li>Expérience utilisateur optimisée</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <Laptop className="h-10 w-10 text-primary mb-2" />
                <CardTitle>Responsive design</CardTitle>
                <CardDescription>
                  Une expérience optimale sur tous les appareils, des
                  smartphones aux grands écrans.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-2 text-sm text-muted-foreground">
                  <li>Adaptation automatique à tous les écrans</li>
                  <li>Navigation mobile optimisée</li>
                  <li>Temps de chargement rapide</li>
                  <li>Compatibilité multi-navigateurs</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <Globe className="h-10 w-10 text-primary mb-2" />
                <CardTitle>SEO intégré</CardTitle>
                <CardDescription>
                  Optimisation pour les moteurs de recherche dès la conception
                  pour une meilleure visibilité.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-2 text-sm text-muted-foreground">
                  <li>Structure technique optimisée</li>
                  <li>Balisage sémantique</li>
                  <li>Méta-données personnalisées</li>
                  <li>Vitesse de chargement optimisée</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <Zap className="h-10 w-10 text-primary mb-2" />
                <CardTitle>Performance optimisée</CardTitle>
                <CardDescription>
                  Des temps de chargement rapides pour une meilleure expérience
                  utilisateur et un meilleur référencement.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-2 text-sm text-muted-foreground">
                  <li>Optimisation des images</li>
                  <li>Minification des ressources</li>
                  <li>Mise en cache efficace</li>
                  <li>Hébergement haute performance</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <Code className="h-10 w-10 text-primary mb-2" />
                <CardTitle>Fonctionnalités essentielles</CardTitle>
                <CardDescription>
                  Toutes les fonctionnalités nécessaires pour présenter
                  efficacement votre entreprise.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-2 text-sm text-muted-foreground">
                  <li>Formulaires de contact</li>
                  <li>Intégration de Google Maps</li>
                  <li>{`Galeries d'images`}</li>
                  <li>Liens vers les réseaux sociaux</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <Laptop className="h-10 w-10 text-primary mb-2" />
                <CardTitle>Administration simple</CardTitle>
                <CardDescription>
                  Une interface d'administration intuitive pour gérer facilement
                  votre contenu.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-2 text-sm text-muted-foreground">
                  <li>Système de gestion de contenu</li>
                  <li>Interface intuitive</li>
                  <li>Mise à jour facile des textes et images</li>
                  <li>{`Formation à l'utilisation incluse`}</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4 flex items-center justify-center bg-muted/30">
        <div className="container max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Notre processus de création
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Une approche méthodique en 6 étapes pour créer votre site vitrine
              parfait.
            </p>
          </div>
          <div className="mt-16">
            <Tabs defaultValue="discovery" className="w-full">
              <TabsList className="grid w-full grid-cols-2 md:grid-cols-6">
                <TabsTrigger value="discovery">1. Découverte</TabsTrigger>
                <TabsTrigger value="planning">2. Planification</TabsTrigger>
                <TabsTrigger value="design">3. Design</TabsTrigger>
                <TabsTrigger value="development">4. Développement</TabsTrigger>
                <TabsTrigger value="testing">5. Tests</TabsTrigger>
                <TabsTrigger value="launch">6. Lancement</TabsTrigger>
              </TabsList>
              <TabsContent value="discovery" className="mt-6 space-y-4">
                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <h3 className="text-xl font-bold">
                      Comprendre vos besoins
                    </h3>
                    <p className="mt-2 text-muted-foreground">
                      Nous commençons par une consultation approfondie pour
                      comprendre votre entreprise, vos objectifs et votre public
                      cible. Cette étape est cruciale pour créer un site qui
                      répond parfaitement à vos attentes.
                    </p>
                    <ul className="mt-4 space-y-2">
                      <li className="flex items-start">
                        <Check className="mr-2 h-5 w-5 text-primary" />
                        <span>Analyse de vos objectifs commerciaux</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="mr-2 h-5 w-5 text-primary" />
                        <span>Identification de votre audience cible</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="mr-2 h-5 w-5 text-primary" />
                        <span>Étude de la concurrence</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="mr-2 h-5 w-5 text-primary" />
                        <span>Définition des fonctionnalités nécessaires</span>
                      </li>
                    </ul>
                  </div>
                  <div className="flex items-center justify-center">
                    <Image
                      src="/placeholder.svg?height=300&width=400&text=Phase+de+découverte"
                      alt="Phase de découverte"
                      className="rounded-lg shadow-md"
                      width={400}
                      height={300}
                    />
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="planning" className="mt-6 space-y-4">
                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <h3 className="text-xl font-bold">
                      Planification stratégique
                    </h3>
                    <p className="mt-2 text-muted-foreground">
                      Nous élaborons une stratégie détaillée pour votre site,
                      définissant l'architecture de l'information, la structure
                      des pages et le parcours utilisateur idéal.
                    </p>
                    <ul className="mt-4 space-y-2">
                      <li className="flex items-start">
                        <Check className="mr-2 h-5 w-5 text-primary" />
                        <span>{`Création de l'arborescence du site`}</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="mr-2 h-5 w-5 text-primary" />
                        <span>Définition des parcours utilisateurs</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="mr-2 h-5 w-5 text-primary" />
                        <span>Planification du contenu</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="mr-2 h-5 w-5 text-primary" />
                        <span>Établissement du calendrier du projet</span>
                      </li>
                    </ul>
                  </div>
                  <div className="flex items-center justify-center">
                    <Image
                      src="/placeholder.svg?height=300&width=400&text=Phase+de+planification"
                      alt="Phase de planification"
                      className="rounded-lg shadow-md"
                      width={400}
                      height={300}
                    />
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="design" className="mt-6 space-y-4">
                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <h3 className="text-xl font-bold">
                      Création de votre identité visuelle
                    </h3>
                    <p className="mt-2 text-muted-foreground">
                      Nous concevons des maquettes qui reflètent votre marque et
                      offrent une expérience utilisateur optimale. Chaque
                      élément visuel est soigneusement pensé pour renforcer
                      votre image de marque.
                    </p>
                    <ul className="mt-4 space-y-2">
                      <li className="flex items-start">
                        <Check className="mr-2 h-5 w-5 text-primary" />
                        <span>Wireframes et prototypes</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="mr-2 h-5 w-5 text-primary" />
                        <span>Design responsive</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="mr-2 h-5 w-5 text-primary" />
                        <span>Sélection des typographies et couleurs</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="mr-2 h-5 w-5 text-primary" />
                        <span>Création des éléments graphiques</span>
                      </li>
                    </ul>
                  </div>
                  <div className="flex items-center justify-center">
                    <Image
                      src="/placeholder.svg?height=300&width=400&text=Phase+de+design"
                      alt="Phase de design"
                      className="rounded-lg shadow-md"
                      width={400}
                      height={300}
                    />
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="development" className="mt-6 space-y-4">
                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <h3 className="text-xl font-bold">
                      Construction de votre site
                    </h3>
                    <p className="mt-2 text-muted-foreground">
                      Nous développons votre site avec les technologies les plus
                      adaptées à vos besoins, en veillant à créer un code
                      propre, optimisé et facile à maintenir.
                    </p>
                    <ul className="mt-4 space-y-2">
                      <li className="flex items-start">
                        <Check className="mr-2 h-5 w-5 text-primary" />
                        <span>Intégration HTML/CSS responsive</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="mr-2 h-5 w-5 text-primary" />
                        <span>Développement des fonctionnalités</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="mr-2 h-5 w-5 text-primary" />
                        <span>Optimisation des performances</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="mr-2 h-5 w-5 text-primary" />
                        <span>Mise en place du CMS</span>
                      </li>
                    </ul>
                  </div>
                  <div className="flex items-center justify-center">
                    <Image
                      src="/placeholder.svg?height=300&width=400&text=Phase+de+développement"
                      alt="Phase de développement"
                      className="rounded-lg shadow-md"
                      width={400}
                      height={300}
                    />
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="testing" className="mt-6 space-y-4">
                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <h3 className="text-xl font-bold">Tests et optimisation</h3>
                    <p className="mt-2 text-muted-foreground">
                      Nous testons rigoureusement votre site pour garantir son
                      bon fonctionnement sur tous les appareils et navigateurs,
                      et optimisons chaque aspect pour des performances
                      optimales.
                    </p>
                    <ul className="mt-4 space-y-2">
                      <li className="flex items-start">
                        <Check className="mr-2 h-5 w-5 text-primary" />
                        <span>Tests de compatibilité multi-navigateurs</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="mr-2 h-5 w-5 text-primary" />
                        <span>Tests de responsive design</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="mr-2 h-5 w-5 text-primary" />
                        <span>Optimisation des performances</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="mr-2 h-5 w-5 text-primary" />
                        <span>{`Vérification de l'accessibilité`}</span>
                      </li>
                    </ul>
                  </div>
                  <div className="flex items-center justify-center">
                    <Image
                      src="/placeholder.svg?height=300&width=400&text=Phase+de+tests"
                      alt="Phase de tests"
                      className="rounded-lg shadow-md"
                      width={400}
                      height={300}
                    />
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="launch" className="mt-6 space-y-4">
                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <h3 className="text-xl font-bold">
                      Mise en ligne et suivi
                    </h3>
                    <p className="mt-2 text-muted-foreground">
                      Nous déployons votre site et assurons son bon
                      fonctionnement. Notre accompagnement ne s'arrête pas à la
                      mise en ligne, nous restons disponibles pour vous aider à
                      faire évoluer votre site.
                    </p>
                    <ul className="mt-4 space-y-2">
                      <li className="flex items-start">
                        <Check className="mr-2 h-5 w-5 text-primary" />
                        <span>Déploiement sécurisé</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="mr-2 h-5 w-5 text-primary" />
                        <span>{`Formation à l'utilisation du CMS`}</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="mr-2 h-5 w-5 text-primary" />
                        <span>Support post-lancement</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="mr-2 h-5 w-5 text-primary" />
                        <span>Suivi des performances</span>
                      </li>
                    </ul>
                  </div>
                  <div className="flex items-center justify-center">
                    <Image
                      src="/placeholder.svg?height=300&width=400&text=Phase+de+lancement"
                      alt="Phase de lancement"
                      className="rounded-lg shadow-md"
                      width={400}
                      height={300}
                    />
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-20 px-4 flex items-center justify-center">
        <div className="container max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Nos réalisations
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Découvrez quelques exemples de sites vitrine que nous avons
              réalisés pour nos clients.
            </p>
          </div>
          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <Card className="overflow-hidden">
              <div className="aspect-video w-full overflow-hidden bg-muted">
                <Image
                  src="/placeholder.svg?height=300&width=500&text=ArchiDesign"
                  alt="ArchiDesign - Site vitrine pour un studio d'architecture"
                  className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                  width={500}
                  height={300}
                />
              </div>
              <CardHeader className="p-4">
                <div className="flex items-center justify-between">
                  <Badge variant="outline">Site Vitrine</Badge>
                  <span className="text-sm text-muted-foreground">2024</span>
                </div>
                <CardTitle className="mt-2">ArchiDesign</CardTitle>
                <CardDescription>{`Studio d'Architecture Moderne`}</CardDescription>
              </CardHeader>
              <CardContent className="p-4 pt-0">
                <p className="text-sm text-muted-foreground">
                  Site vitrine élégant pour un studio d'architecture, mettant en
                  valeur leurs projets avec un design minimaliste et immersif.
                </p>
              </CardContent>
              <CardFooter className="p-4 pt-0">
                <Button variant="outline" size="sm" asChild>
                  <Link href="/portfolio/archi-design">
                    Voir le projet <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
            <Card className="overflow-hidden">
              <div className="aspect-video w-full overflow-hidden bg-muted">
                <Image
                  src="/placeholder.svg?height=300&width=500&text=Centre+Médical"
                  alt="Centre Médical - Site vitrine pour une clinique"
                  className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                  width={500}
                  height={300}
                />
              </div>
              <CardHeader className="p-4">
                <div className="flex items-center justify-between">
                  <Badge variant="outline">Site Vitrine</Badge>
                  <span className="text-sm text-muted-foreground">2023</span>
                </div>
                <CardTitle className="mt-2">Centre Médical</CardTitle>
                <CardDescription>Clinique Santé Plus</CardDescription>
              </CardHeader>
              <CardContent className="p-4 pt-0">
                <p className="text-sm text-muted-foreground">
                  Site vitrine pour un centre médical avec système de prise de
                  rendez-vous en ligne et présentation des services médicaux.
                </p>
              </CardContent>
              <CardFooter className="p-4 pt-0">
                <Button variant="outline" size="sm" asChild>
                  <Link href="/portfolio/centre-medical">
                    Voir le projet <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
            <Card className="overflow-hidden">
              <div className="aspect-video w-full overflow-hidden bg-muted">
                <Image
                  src="/placeholder.svg?height=300&width=500&text=Voyages+et+Découvertes"
                  alt="Voyages & Découvertes - Blog de voyage"
                  className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                  width={500}
                  height={300}
                />
              </div>
              <CardHeader className="p-4">
                <div className="flex items-center justify-between">
                  <Badge variant="outline">Site Vitrine</Badge>
                  <span className="text-sm text-muted-foreground">2022</span>
                </div>
                <CardTitle className="mt-2">Voyages & Découvertes</CardTitle>
                <CardDescription>Blog de voyage</CardDescription>
              </CardHeader>
              <CardContent className="p-4 pt-0">
                <p className="text-sm text-muted-foreground">
                  Blog de voyage avec fonctionnalités avancées, monétisation et
                  intégration des réseaux sociaux pour un influenceur.
                </p>
              </CardContent>
              <CardFooter className="p-4 pt-0">
                <Button variant="outline" size="sm" asChild>
                  <Link href="/portfolio/travel-blog">
                    Voir le projet <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
          <div className="mt-12 text-center">
            <Button asChild variant="outline">
              <Link href="/portfolio?category=site-vitrine">
                Voir tous nos projets de sites vitrine{" "}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 flex items-center justify-center bg-muted/30">
        <div className="container max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Témoignages clients
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Découvrez ce que nos clients disent de nos sites vitrine.
            </p>
          </div>
          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card className="h-full flex flex-col">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-lg font-bold text-primary">JM</span>
                  </div>
                  <div>
                    <h3 className="font-medium">Jean Moreau</h3>
                    <p className="text-sm text-muted-foreground">
                      Fondateur, Studio d'Architecture Moderne
                    </p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="flex-1">
                <p className="text-muted-foreground">
                  "AltPlus a parfaitement compris notre vision esthétique et l'a
                  traduite en un site web qui nous représente parfaitement. Leur
                  attention aux détails et leur créativité ont fait de ce projet
                  un véritable succès."
                </p>
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
            <Card className="h-full flex flex-col">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-lg font-bold text-primary">SL</span>
                  </div>
                  <div>
                    <h3 className="font-medium">Sophie Laurent</h3>
                    <p className="text-sm text-muted-foreground">
                      Directrice, Centre Médical Santé Plus
                    </p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="flex-1">
                <p className="text-muted-foreground">
                  "Notre nouveau site a considérablement amélioré notre image
                  professionnelle et facilité la prise de rendez-vous pour nos
                  patients. L'équipe d'AltPlus a été à l'écoute de nos besoins
                  spécifiques et a livré un site qui dépasse nos attentes."
                </p>
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
            <Card className="h-full flex flex-col">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-lg font-bold text-primary">TL</span>
                  </div>
                  <div>
                    <h3 className="font-medium">Thomas Leroy</h3>
                    <p className="text-sm text-muted-foreground">
                      Fondateur, Voyages & Découvertes
                    </p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="flex-1">
                <p className="text-muted-foreground">
                  "Mon blog est devenu mon activité principale grâce au travail
                  d'AltPlus. Leur expertise en SEO et leur design captivant ont
                  transformé mon hobby en une véritable entreprise rentable. Je
                  recommande vivement leurs services."
                </p>
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
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 flex items-center justify-center">
        <div className="container max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Nos forfaits
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Des solutions adaptées à tous les budgets pour votre site vitrine.
            </p>
          </div>
          <div className="mt-16 grid gap-8 md:grid-cols-3">
            <PricingCard
              title="Essentiel"
              price="À partir de 1 500 €"
              description="Idéal pour les petites entreprises et les indépendants."
              features={[
                "Site vitrine jusqu'à 5 pages",
                "Design responsive",
                "Formulaire de contact",
                "Optimisation SEO de base",
                "Hébergement pour 1 an",
                "Formation à l'utilisation",
              ]}
              buttonText="Demander un devis"
              buttonLink="/contact?service=sites-vitrine&forfait=essentiel"
            />
            <PricingCard
              title="Professionnel"
              price="À partir de 2 500 €"
              description="Pour les entreprises qui souhaitent une présence web complète."
              features={[
                "Site vitrine jusqu'à 10 pages",
                "Design sur mesure",
                "Formulaires avancés",
                "Optimisation SEO avancée",
                "Intégration Google Analytics",
                "Intégration réseaux sociaux",
                "Hébergement et maintenance pour 1 an",
              ]}
              buttonText="Demander un devis"
              buttonLink="/contact?service=sites-vitrine&forfait=professionnel"
              highlighted={true}
            />
            <PricingCard
              title="Premium"
              price="À partir de 4 000 €"
              description="Pour les entreprises qui exigent l'excellence et des fonctionnalités avancées."
              features={[
                "Site vitrine pages illimitées",
                "Design premium sur mesure",
                "Animations et interactions avancées",
                "Stratégie SEO complète",
                "Intégration CRM",
                "Multilangue",
                "Hébergement haute performance",
                "Maintenance et support premium pour 2 ans",
              ]}
              buttonText="Demander un devis"
              buttonLink="/contact?service=sites-vitrine&forfait=premium"
            />
          </div>
          <div className="mt-12 text-center">
            <p className="text-muted-foreground">
              Besoin d'une solution sur mesure ?{" "}
              <Link
                href="/contact?service=sites-vitrine"
                className="text-primary"
              >
                Contactez-nous
              </Link>{" "}
              pour discuter de votre projet.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 flex items-center justify-center bg-muted/30">
        <div className="container max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Questions fréquentes
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Vous avez des questions sur nos sites vitrine ? Nous avons les
              réponses.
            </p>
          </div>
          <div className="mt-16 mx-auto max-w-3xl">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  Combien de temps faut-il pour créer un site vitrine ?
                </AccordionTrigger>
                <AccordionContent>
                  La durée de création d'un site vitrine dépend de sa complexité
                  et du nombre de pages. En général, un site vitrine standard
                  peut être réalisé en 4 à 6 semaines. Ce délai comprend les
                  phases de conception, développement, tests et mise en ligne.
                  Nous établissons un calendrier précis lors de la phase de
                  découverte du projet.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>
                  Puis-je mettre à jour mon site moi-même ?
                </AccordionTrigger>
                <AccordionContent>
                  Oui, tous nos sites vitrine sont livrés avec un système de
                  gestion de contenu (CMS) intuitif qui vous permet de mettre à
                  jour facilement vos textes, images et autres contenus. Nous
                  vous formons à l'utilisation de cet outil et restons
                  disponibles pour vous accompagner si nécessaire.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>
                  Le site sera-t-il optimisé pour les moteurs de recherche ?
                </AccordionTrigger>
                <AccordionContent>
                  Absolument. Tous nos sites sont développés avec une attention
                  particulière à l'optimisation pour les moteurs de recherche
                  (SEO). Cela inclut une structure technique optimisée, des
                  balises méta personnalisées, un balisage sémantique et une
                  vitesse de chargement optimale. Pour des besoins plus
                  spécifiques, nous proposons également des services de
                  référencement avancés.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>
                  Quelles fonctionnalités puis-je ajouter à mon site vitrine ?
                </AccordionTrigger>
                <AccordionContent>
                  Nos sites vitrine peuvent intégrer de nombreuses
                  fonctionnalités selon vos besoins : formulaires de contact
                  avancés, intégration de Google Maps, galeries d'images,
                  vidéos, témoignages clients, intégration des réseaux sociaux,
                  blog, newsletter, chat en direct, etc. Nous adaptons les
                  fonctionnalités en fonction de vos objectifs et de votre
                  budget.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger>
                  Proposez-vous des services de maintenance ?
                </AccordionTrigger>
                <AccordionContent>
                  Oui, nous proposons des forfaits de maintenance pour assurer
                  le bon fonctionnement de votre site dans la durée. Ces
                  forfaits incluent les mises à jour de sécurité, les
                  sauvegardes régulières, les corrections de bugs et un support
                  technique. Nous pouvons également vous proposer des services
                  d'évolution de votre site selon vos besoins.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-6">
                <AccordionTrigger>
                  Mon site sera-t-il adapté aux mobiles ?
                </AccordionTrigger>
                <AccordionContent>
                  Tous nos sites sont développés avec une approche
                  "mobile-first" et sont parfaitement adaptés à tous les
                  appareils (smartphones, tablettes, ordinateurs). Le responsive
                  design est un standard incontournable aujourd'hui, et nous
                  veillons à ce que votre site offre une expérience optimale
                  quel que soit l'appareil utilisé par vos visiteurs.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-7">
                <AccordionTrigger>
                  Quels sont les éléments dont vous avez besoin pour commencer ?
                </AccordionTrigger>
                <AccordionContent>
                  Pour démarrer votre projet, nous avons besoin de comprendre
                  votre entreprise, vos objectifs, votre public cible et vos
                  préférences en matière de design. Si vous disposez déjà
                  d'éléments comme un logo, une charte graphique ou des textes,
                  c'est un plus. Sinon, nous pouvons vous accompagner dans la
                  création de ces éléments. L'essentiel est d'avoir une vision
                  claire de ce que vous souhaitez accomplir avec votre site.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 flex items-center justify-center bg-primary text-primary-foreground">
        <div className="container max-w-7xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Prêt à lancer votre projet de site vitrine ?
          </h2>
          <p className="mt-4 text-lg mx-auto max-w-2xl">
            Contactez-nous dès aujourd'hui pour discuter de votre projet et
            obtenir un devis gratuit et personnalisé.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" variant="secondary">
              <Link href="/contact?service=sites-vitrine">
                Demander un devis gratuit
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="bg-transparent text-primary-foreground hover:bg-primary-foreground/10"
            >
              <Link href="/portfolio?category=site-vitrine">
                Voir nos réalisations
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
