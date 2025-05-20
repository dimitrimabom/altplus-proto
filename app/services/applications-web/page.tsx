import Link from "next/link";
import {
  ArrowRight,
  Check,
  ChevronRight,
  Code,
  Database,
  Lock,
  Server,
  Settings,
  Users,
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

export default function ApplicationsWebPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 px-4 items-center justify-center md:py-28 bg-muted/30">
        <div className="container max-w-7xl flex flex-col items-center text-center">
          <Badge variant="outline" className="mb-4">
            Service
          </Badge>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Applications <span className="text-primary">Web</span>
          </h1>
          <p className="mt-6 max-w-3xl text-lg text-muted-foreground sm:text-xl">
            Transformez vos idées en applications web performantes. Nous
            développons des solutions sur mesure qui répondent parfaitement à
            vos besoins métier et offrent une expérience utilisateur
            exceptionnelle.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Button asChild size="lg">
              <Link href="/contact?service=applications-web">
                Demander un devis
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/portfolio?category=application-web">
                Voir nos réalisations
              </Link>
            </Button>
          </div>
          <div className="mt-16 w-full max-w-5xl rounded-lg border bg-card/50 p-4 shadow-sm">
            <Image
              src="/placeholder.svg?height=600&width=1200&text=Application+Web+Professionnelle"
              alt="Exemple d'application web"
              className="w-full rounded-md object-cover"
              width={1200}
              height={600}
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 items-center justify-center">
        <div className="container max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Caractéristiques principales
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Nos applications web sont conçues pour répondre à vos besoins
              spécifiques avec des fonctionnalités avancées et une expérience
              utilisateur optimale.
            </p>
          </div>
          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader className="pb-2">
                <Code className="h-10 w-10 text-primary mb-2" />
                <CardTitle>Développement sur mesure</CardTitle>
                <CardDescription>
                  Des applications conçues spécifiquement pour répondre à vos
                  besoins uniques.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-2 text-sm text-muted-foreground">
                  <li>Analyse approfondie de vos besoins</li>
                  <li>Solutions adaptées à votre secteur d'activité</li>
                  <li>Fonctionnalités spécifiques à votre métier</li>
                  <li>Architecture logicielle robuste</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <Users className="h-10 w-10 text-primary mb-2" />
                <CardTitle>Interface utilisateur intuitive</CardTitle>
                <CardDescription>
                  Des interfaces qui améliorent l'expérience de vos utilisateurs
                  et augmentent leur productivité.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-2 text-sm text-muted-foreground">
                  <li>Design centré sur l'utilisateur</li>
                  <li>Navigation fluide et intuitive</li>
                  <li>Tableaux de bord personnalisables</li>
                  <li>Responsive sur tous les appareils</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <Database className="h-10 w-10 text-primary mb-2" />
                <CardTitle>Gestion de données avancée</CardTitle>
                <CardDescription>
                  Des solutions robustes pour stocker, gérer et analyser vos
                  données d'entreprise.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-2 text-sm text-muted-foreground">
                  <li>Bases de données optimisées</li>
                  <li>Recherche et filtrage avancés</li>
                  <li>Import/export de données</li>
                  <li>Rapports et analyses</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <Lock className="h-10 w-10 text-primary mb-2" />
                <CardTitle>Sécurité renforcée</CardTitle>
                <CardDescription>
                  Protection de vos données et de vos utilisateurs avec les
                  meilleures pratiques de sécurité.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-2 text-sm text-muted-foreground">
                  <li>Authentification sécurisée</li>
                  <li>Chiffrement des données sensibles</li>
                  <li>Protection contre les attaques</li>
                  <li>Conformité RGPD</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <Server className="h-10 w-10 text-primary mb-2" />
                <CardTitle>Évolutivité et performance</CardTitle>
                <CardDescription>
                  Des applications qui s'adaptent à la croissance de votre
                  entreprise et supportent un grand nombre d'utilisateurs.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-2 text-sm text-muted-foreground">
                  <li>Architecture évolutive</li>
                  <li>Optimisation des performances</li>
                  <li>Temps de réponse rapides</li>
                  <li>Capacité à gérer de grands volumes de données</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <Settings className="h-10 w-10 text-primary mb-2" />
                <CardTitle>Intégration et API</CardTitle>
                <CardDescription>
                  Connectez votre application à vos outils existants et à des
                  services tiers.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-2 text-sm text-muted-foreground">
                  <li>APIs RESTful</li>
                  <li>Intégration avec vos systèmes existants</li>
                  <li>Connexion aux services tiers</li>
                  <li>Synchronisation des données</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 px-4 items-center justify-center bg-muted/30">
        <div className="container max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Technologies utilisées
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Nous utilisons les technologies les plus modernes et performantes
              pour développer vos applications web.
            </p>
          </div>
          <div className="mt-16 grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            <div className="flex flex-col items-center text-center">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
                <Image
                  src="/placeholder.svg?height=40&width=40&text=React"
                  alt="React"
                  className="h-10 w-10"
                  width={40}
                  height={40}
                />
              </div>
              <h3 className="mt-4 font-medium">React</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Bibliothèque JavaScript pour créer des interfaces utilisateur
                interactives et réactives.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
                <Image
                  src="/placeholder.svg?height=40&width=40&text=Next.js"
                  alt="Next.js"
                  className="h-10 w-10"
                  width={40}
                  height={40}
                />
              </div>
              <h3 className="mt-4 font-medium">Next.js</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Framework React pour des applications web performantes et
                optimisées pour le SEO.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
                <Image
                  src="/placeholder.svg?height=40&width=40&text=Node.js"
                  alt="Node.js"
                  className="h-10 w-10"
                  width={40}
                  height={40}
                />
              </div>
              <h3 className="mt-4 font-medium">Node.js</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Environnement d'exécution JavaScript côté serveur pour des
                applications rapides et évolutives.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
                <Image
                  src="/placeholder.svg?height=40&width=40&text=TypeScript"
                  alt="TypeScript"
                  className="h-10 w-10"
                  width={40}
                  height={40}
                />
              </div>
              <h3 className="mt-4 font-medium">TypeScript</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Superset de JavaScript qui ajoute des types statiques pour un
                code plus robuste et maintenable.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
                <Image
                  src="/placeholder.svg?height=40&width=40&text=PostgreSQL"
                  alt="PostgreSQL"
                  className="h-10 w-10"
                  width={40}
                  height={40}
                />
              </div>
              <h3 className="mt-4 font-medium">PostgreSQL</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Système de gestion de base de données relationnelle puissant et
                fiable.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
                <Image
                  src="/placeholder.svg?height=40&width=40&text=MongoDB"
                  alt="MongoDB"
                  className="h-10 w-10"
                  width={40}
                  height={40}
                />
              </div>
              <h3 className="mt-4 font-medium">MongoDB</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Base de données NoSQL flexible pour les applications modernes.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
                <Image
                  src="/placeholder.svg?height=40&width=40&text=Docker"
                  alt="Docker"
                  className="h-10 w-10"
                  width={40}
                  height={40}
                />
              </div>
              <h3 className="mt-4 font-medium">Docker</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Plateforme de conteneurisation pour des déploiements cohérents
                et fiables.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
                <Image
                  src="/placeholder.svg?height=40&width=40&text=AWS"
                  alt="AWS"
                  className="h-10 w-10"
                  width={40}
                  height={40}
                />
              </div>
              <h3 className="mt-4 font-medium">AWS</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Services cloud sécurisés et évolutifs pour l'hébergement de vos
                applications.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4 items-center justify-center">
        <div className="container max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Notre processus de développement
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Une approche méthodique en 6 étapes pour créer votre application
              web sur mesure.
            </p>
          </div>
          <div className="mt-16">
            <Tabs defaultValue="requirements" className="w-full">
              <TabsList className="grid w-full grid-cols-2 md:grid-cols-6">
                <TabsTrigger value="requirements">1. Analyse</TabsTrigger>
                <TabsTrigger value="architecture">2. Architecture</TabsTrigger>
                <TabsTrigger value="design">3. Design</TabsTrigger>
                <TabsTrigger value="development">4. Développement</TabsTrigger>
                <TabsTrigger value="testing">5. Tests</TabsTrigger>
                <TabsTrigger value="deployment">6. Déploiement</TabsTrigger>
              </TabsList>
              <TabsContent value="requirements" className="mt-6 space-y-4">
                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <h3 className="text-xl font-bold">Analyse des besoins</h3>
                    <p className="mt-2 text-muted-foreground">
                      Nous commençons par une analyse approfondie de vos besoins
                      métier, de vos processus et de vos objectifs. Cette étape
                      est cruciale pour définir précisément le périmètre
                      fonctionnel de votre application.
                    </p>
                    <ul className="mt-4 space-y-2">
                      <li className="flex items-start">
                        <Check className="mr-2 h-5 w-5 text-primary" />
                        <span>Ateliers de recueil des besoins</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="mr-2 h-5 w-5 text-primary" />
                        <span>Analyse des processus métier</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="mr-2 h-5 w-5 text-primary" />
                        <span>Définition des objectifs</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="mr-2 h-5 w-5 text-primary" />
                        <span>Identification des contraintes</span>
                      </li>
                    </ul>
                  </div>
                  <div className="flex items-center justify-center">
                    <Image
                      src="/placeholder.svg?height=300&width=400&text=Analyse+des+besoins"
                      alt="Phase d'analyse des besoins"
                      className="rounded-lg shadow-md"
                      width={400}
                      height={300}
                    />
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="architecture" className="mt-6 space-y-4">
                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <h3 className="text-xl font-bold">
                      Architecture technique
                    </h3>
                    <p className="mt-2 text-muted-foreground">
                      Nous concevons l'architecture technique de votre
                      application en choisissant les technologies les plus
                      adaptées à vos besoins et en définissant la structure des
                      données.
                    </p>
                    <ul className="mt-4 space-y-2">
                      <li className="flex items-start">
                        <Check className="mr-2 h-5 w-5 text-primary" />
                        <span>Choix des technologies</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="mr-2 h-5 w-5 text-primary" />
                        <span>Conception de la base de données</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="mr-2 h-5 w-5 text-primary" />
                        <span>Définition des API</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="mr-2 h-5 w-5 text-primary" />
                        <span>Planification de l'infrastructure</span>
                      </li>
                    </ul>
                  </div>
                  <div className="flex items-center justify-center">
                    <Image
                      src="/placeholder.svg?height=300&width=400&text=Architecture+technique"
                      alt="Phase d'architecture technique"
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
                      Conception de l'interface
                    </h3>
                    <p className="mt-2 text-muted-foreground">
                      Nous concevons des interfaces utilisateur intuitives et
                      ergonomiques qui facilitent l'utilisation de votre
                      application et améliorent la productivité de vos équipes.
                    </p>
                    <ul className="mt-4 space-y-2">
                      <li className="flex items-start">
                        <Check className="mr-2 h-5 w-5 text-primary" />
                        <span>Wireframes et prototypes</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="mr-2 h-5 w-5 text-primary" />
                        <span>Design UI/UX</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="mr-2 h-5 w-5 text-primary" />
                        <span>Parcours utilisateur</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="mr-2 h-5 w-5 text-primary" />
                        <span>Validation des maquettes</span>
                      </li>
                    </ul>
                  </div>
                  <div className="flex items-center justify-center">
                    <Image
                      src="/placeholder.svg?height=300&width=400&text=Design+UI/UX"
                      alt="Phase de design UI/UX"
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
                    <h3 className="text-xl font-bold">Développement agile</h3>
                    <p className="mt-2 text-muted-foreground">
                      Nous développons votre application en utilisant des
                      méthodologies agiles qui permettent une grande flexibilité
                      et une validation continue des fonctionnalités.
                    </p>
                    <ul className="mt-4 space-y-2">
                      <li className="flex items-start">
                        <Check className="mr-2 h-5 w-5 text-primary" />
                        <span>Développement itératif</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="mr-2 h-5 w-5 text-primary" />
                        <span>Intégration continue</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="mr-2 h-5 w-5 text-primary" />
                        <span>Revues de code</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="mr-2 h-5 w-5 text-primary" />
                        <span>Démonstrations régulières</span>
                      </li>
                    </ul>
                  </div>
                  <div className="flex items-center justify-center">
                    <Image
                      src="/placeholder.svg?height=300&width=400&text=Développement+agile"
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
                    <h3 className="text-xl font-bold">
                      Tests et assurance qualité
                    </h3>
                    <p className="mt-2 text-muted-foreground">
                      Nous testons rigoureusement votre application pour
                      garantir sa fiabilité, sa sécurité et ses performances
                      dans toutes les conditions d'utilisation.
                    </p>
                    <ul className="mt-4 space-y-2">
                      <li className="flex items-start">
                        <Check className="mr-2 h-5 w-5 text-primary" />
                        <span>Tests unitaires et d'intégration</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="mr-2 h-5 w-5 text-primary" />
                        <span>Tests fonctionnels</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="mr-2 h-5 w-5 text-primary" />
                        <span>Tests de performance</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="mr-2 h-5 w-5 text-primary" />
                        <span>Tests de sécurité</span>
                      </li>
                    </ul>
                  </div>
                  <div className="flex items-center justify-center">
                    <Image
                      src="/placeholder.svg?height=300&width=400&text=Tests+et+QA"
                      alt="Phase de tests"
                      className="rounded-lg shadow-md"
                      width={400}
                      height={300}
                    />
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="deployment" className="mt-6 space-y-4">
                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <h3 className="text-xl font-bold">
                      Déploiement et accompagnement
                    </h3>
                    <p className="mt-2 text-muted-foreground">
                      Nous déployons votre application dans un environnement de
                      production sécurisé et vous accompagnons dans sa prise en
                      main et son évolution.
                    </p>
                    <ul className="mt-4 space-y-2">
                      <li className="flex items-start">
                        <Check className="mr-2 h-5 w-5 text-primary" />
                        <span>Déploiement sécurisé</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="mr-2 h-5 w-5 text-primary" />
                        <span>Formation des utilisateurs</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="mr-2 h-5 w-5 text-primary" />
                        <span>Documentation technique</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="mr-2 h-5 w-5 text-primary" />
                        <span>Support et maintenance</span>
                      </li>
                    </ul>
                  </div>
                  <div className="flex items-center justify-center">
                    <Image
                      src="/placeholder.svg?height=300&width=400&text=Déploiement"
                      alt="Phase de déploiement"
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

      {/* Use Cases Section */}
      <section className="py-20 px-4 items-center justify-center bg-muted/30">
        <div className="container max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Cas d'utilisation
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Découvrez comment nos applications web peuvent répondre aux
              besoins spécifiques de votre secteur d'activité.
            </p>
          </div>
          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>Gestion d'entreprise</CardTitle>
                <CardDescription>
                  Applications de gestion interne pour optimiser vos processus
                  métier.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-2 text-sm text-muted-foreground">
                  <li>Gestion de projets et de ressources</li>
                  <li>Suivi de la relation client (CRM)</li>
                  <li>Gestion des stocks et des commandes</li>
                  <li>Tableaux de bord et reporting</li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button variant="outline" size="sm" asChild>
                  <Link href="/contact?service=applications-web&type=gestion">
                    En savoir plus <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Plateformes collaboratives</CardTitle>
                <CardDescription>
                  Solutions pour faciliter la collaboration et le partage
                  d'informations.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-2 text-sm text-muted-foreground">
                  <li>Espaces de travail partagés</li>
                  <li>Gestion documentaire</li>
                  <li>Communication en temps réel</li>
                  <li>Suivi des tâches et des échéances</li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button variant="outline" size="sm" asChild>
                  <Link href="/contact?service=applications-web&type=collaboration">
                    En savoir plus <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Portails clients</CardTitle>
                <CardDescription>
                  Espaces sécurisés pour vos clients avec accès à leurs
                  informations et services.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-2 text-sm text-muted-foreground">
                  <li>Authentification sécurisée</li>
                  <li>Gestion de compte et profil</li>
                  <li>Suivi des commandes et services</li>
                  <li>Support et assistance</li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button variant="outline" size="sm" asChild>
                  <Link href="/contact?service=applications-web&type=portail">
                    En savoir plus <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Applications métier</CardTitle>
                <CardDescription>
                  Solutions spécifiques à votre secteur d'activité pour répondre
                  à vos enjeux particuliers.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-2 text-sm text-muted-foreground">
                  <li>Applications pour la santé</li>
                  <li>Solutions pour l'immobilier</li>
                  <li>Outils pour l'éducation</li>
                  <li>Applications pour la finance</li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button variant="outline" size="sm" asChild>
                  <Link href="/contact?service=applications-web&type=metier">
                    En savoir plus <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Plateformes de réservation</CardTitle>
                <CardDescription>
                  Systèmes de réservation en ligne pour les services,
                  rendez-vous ou ressources.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-2 text-sm text-muted-foreground">
                  <li>Calendriers de disponibilité</li>
                  <li>Réservation en temps réel</li>
                  <li>Paiements en ligne</li>
                  <li>Gestion des annulations</li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button variant="outline" size="sm" asChild>
                  <Link href="/contact?service=applications-web&type=reservation">
                    En savoir plus <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Tableaux de bord analytiques</CardTitle>
                <CardDescription>
                  Visualisation et analyse de vos données pour une prise de
                  décision éclairée.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-2 text-sm text-muted-foreground">
                  <li>Visualisations interactives</li>
                  <li>Rapports personnalisés</li>
                  <li>Analyse prédictive</li>
                  <li>Export de données</li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button variant="outline" size="sm" asChild>
                  <Link href="/contact?service=applications-web&type=analytique">
                    En savoir plus <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-20 px-4 items-center justify-center">
        <div className="container max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Nos réalisations
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Découvrez quelques exemples d'applications web que nous avons
              réalisées pour nos clients.
            </p>
          </div>
          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <Card className="overflow-hidden">
              <div className="aspect-video w-full overflow-hidden bg-muted">
                <Image
                  src="/placeholder.svg?height=300&width=500&text=TechDashboard"
                  alt="TechDashboard - Application de gestion de projets"
                  className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                  width={500}
                  height={300}
                />
              </div>
              <CardHeader className="p-4">
                <div className="flex items-center justify-between">
                  <Badge variant="outline">Application Web</Badge>
                  <span className="text-sm text-muted-foreground">2023</span>
                </div>
                <CardTitle className="mt-2">TechDashboard</CardTitle>
                <CardDescription>InnoTech Solutions</CardDescription>
              </CardHeader>
              <CardContent className="p-4 pt-0">
                <p className="text-sm text-muted-foreground">
                  Application web de gestion de projets et de ressources avec
                  tableaux de bord personnalisables et rapports en temps réel.
                </p>
              </CardContent>
              <CardFooter className="p-4 pt-0">
                <Button variant="outline" size="sm" asChild>
                  <Link href="/portfolio/tech-dashboard">
                    Voir le projet <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
            <Card className="overflow-hidden">
              <div className="aspect-video w-full overflow-hidden bg-muted">
                <Image
                  src="/placeholder.svg?height=300&width=500&text=FoodExpress"
                  alt="FoodExpress - Plateforme de livraison de repas"
                  className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                  width={500}
                  height={300}
                />
              </div>
              <CardHeader className="p-4">
                <div className="flex items-center justify-between">
                  <Badge variant="outline">Application Web</Badge>
                  <span className="text-sm text-muted-foreground">2023</span>
                </div>
                <CardTitle className="mt-2">FoodExpress</CardTitle>
                <CardDescription>Réseau de Restaurants Locaux</CardDescription>
              </CardHeader>
              <CardContent className="p-4 pt-0">
                <p className="text-sm text-muted-foreground">
                  Plateforme de commande et de livraison de repas pour un réseau
                  de restaurants locaux, avec suivi en temps réel.
                </p>
              </CardContent>
              <CardFooter className="p-4 pt-0">
                <Button variant="outline" size="sm" asChild>
                  <Link href="/portfolio/food-delivery">
                    Voir le projet <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
            <Card className="overflow-hidden">
              <div className="aspect-video w-full overflow-hidden bg-muted">
                <Image
                  src="/placeholder.svg?height=300&width=500&text=MedConnect"
                  alt="MedConnect - Portail patient pour centre médical"
                  className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                  width={500}
                  height={300}
                />
              </div>
              <CardHeader className="p-4">
                <div className="flex items-center justify-between">
                  <Badge variant="outline">Application Web</Badge>
                  <span className="text-sm text-muted-foreground">2022</span>
                </div>
                <CardTitle className="mt-2">MedConnect</CardTitle>
                <CardDescription>Centre Médical Santé Plus</CardDescription>
              </CardHeader>
              <CardContent className="p-4 pt-0">
                <p className="text-sm text-muted-foreground">
                  Portail patient sécurisé avec prise de rendez-vous en ligne,
                  accès aux dossiers médicaux et communication avec les
                  praticiens.
                </p>
              </CardContent>
              <CardFooter className="p-4 pt-0">
                <Button variant="outline" size="sm" asChild>
                  <Link href="/portfolio/med-connect">
                    Voir le projet <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
          <div className="mt-12 text-center">
            <Button asChild variant="outline">
              <Link href="/portfolio?category=application-web">
                Voir tous nos projets d'applications web{" "}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 items-center justify-center bg-muted/30">
        <div className="container max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Témoignages clients
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Découvrez ce que nos clients disent de nos applications web.
            </p>
          </div>
          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card className="h-full flex flex-col">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-lg font-bold text-primary">MR</span>
                  </div>
                  <div>
                    <h3 className="font-medium">Marc Rousseau</h3>
                    <p className="text-sm text-muted-foreground">
                      Directeur Technique, InnoTech Solutions
                    </p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="flex-1">
                <p className="text-muted-foreground">
                  "L'application de gestion de projets développée par AltPlus a
                  transformé notre façon de travailler. L'interface intuitive et
                  les fonctionnalités sur mesure ont considérablement amélioré
                  notre productivité. Le ROI a été atteint en moins de 6 mois."
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
                    <span className="text-lg font-bold text-primary">LM</span>
                  </div>
                  <div>
                    <h3 className="font-medium">Lucie Martin</h3>
                    <p className="text-sm text-muted-foreground">
                      Gérante, Réseau de Restaurants Locaux
                    </p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="flex-1">
                <p className="text-muted-foreground">
                  "Notre plateforme de commande en ligne a révolutionné notre
                  activité. Grâce à AltPlus, nous avons pu proposer un service
                  de livraison efficace sans dépendre des grandes plateformes et
                  de leurs commissions élevées. Le système est fiable et nos
                  clients l'adorent."
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
                    <span className="text-lg font-bold text-primary">PD</span>
                  </div>
                  <div>
                    <h3 className="font-medium">Dr. Pierre Dubois</h3>
                    <p className="text-sm text-muted-foreground">
                      Directeur, Centre Médical Santé Plus
                    </p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="flex-1">
                <p className="text-muted-foreground">
                  "Le portail patient développé par AltPlus a considérablement
                  amélioré notre relation avec nos patients. La prise de
                  rendez-vous en ligne a réduit de 40% les appels à notre
                  secrétariat, et l'accès sécurisé aux dossiers médicaux est
                  très apprécié par nos patients."
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
      <section className="py-20 px-4 items-center justify-center">
        <div className="container max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Nos forfaits
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Des solutions adaptées à tous les budgets pour votre application
              web.
            </p>
          </div>
          <div className="mt-16 grid gap-8 md:grid-cols-3">
            <PricingCard
              title="Starter"
              price="À partir de 8 000 €"
              description="Pour les petites entreprises qui débutent avec une application web simple."
              features={[
                "Application web avec fonctionnalités de base",
                "Interface utilisateur responsive",
                "Authentification des utilisateurs",
                "Base de données simple",
                "Hébergement pour 1 an",
                "Support technique (3 mois)",
              ]}
              buttonText="Demander un devis"
              buttonLink="/contact?service=applications-web&forfait=starter"
            />
            <PricingCard
              title="Business"
              price="À partir de 15 000 €"
              description="Pour les entreprises qui ont besoin d'une solution complète et évolutive."
              features={[
                "Application web avec fonctionnalités avancées",
                "Interface utilisateur personnalisée",
                "Gestion des rôles et permissions",
                "Intégration avec vos systèmes existants",
                "Tableaux de bord et rapports",
                "Hébergement haute disponibilité",
                "Support technique (6 mois)",
              ]}
              buttonText="Demander un devis"
              buttonLink="/contact?service=applications-web&forfait=business"
              highlighted={true}
            />
            <PricingCard
              title="Enterprise"
              price="À partir de 25 000 €"
              description="Pour les grandes entreprises avec des besoins complexes et spécifiques."
              features={[
                "Application web entièrement sur mesure",
                "Architecture évolutive pour grand volume d'utilisateurs",
                "Fonctionnalités avancées et spécifiques à votre métier",
                "Intégrations multiples (API, services tiers)",
                "Sécurité renforcée et conformité",
                "Infrastructure cloud dédiée",
                "Support technique premium (12 mois)",
                "Évolutions et maintenance",
              ]}
              buttonText="Demander un devis"
              buttonLink="/contact?service=applications-web&forfait=enterprise"
            />
          </div>
          <div className="mt-12 text-center">
            <p className="text-muted-foreground">
              Besoin d'une solution sur mesure ?{" "}
              <Link
                href="/contact?service=applications-web"
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
      <section className="py-20 px-4 items-center justify-center bg-muted/30">
        <div className="container max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Questions fréquentes
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Vous avez des questions sur nos applications web ? Nous avons les
              réponses.
            </p>
          </div>
          <div className="mt-16 mx-auto max-w-3xl">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  Combien de temps faut-il pour développer une application web ?
                </AccordionTrigger>
                <AccordionContent>
                  Le délai de développement d'une application web dépend de sa
                  complexité et de l'étendue des fonctionnalités. En général,
                  une application web de complexité moyenne peut prendre entre 3
                  et 6 mois à développer. Pour des projets plus complexes, le
                  délai peut s'étendre jusqu'à 12 mois. Nous établissons un
                  calendrier précis lors de la phase d'analyse des besoins.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>
                  Comment assurez-vous la sécurité de mon application ?
                </AccordionTrigger>
                <AccordionContent>
                  La sécurité est une priorité dans tous nos développements.
                  Nous mettons en œuvre les meilleures pratiques de sécurité à
                  chaque étape du projet : authentification sécurisée,
                  chiffrement des données sensibles, protection contre les
                  injections SQL et les attaques XSS, tests de pénétration, etc.
                  Nous assurons également la conformité avec les réglementations
                  en vigueur comme le RGPD.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>
                  Mon application sera-t-elle évolutive ?
                </AccordionTrigger>
                <AccordionContent>
                  Oui, nous concevons toutes nos applications avec l'évolutivité
                  en tête. Nous utilisons des architectures modulaires et des
                  technologies qui permettent d'ajouter facilement de nouvelles
                  fonctionnalités ou de faire évoluer les fonctionnalités
                  existantes. De plus, nos applications sont conçues pour
                  supporter une augmentation du nombre d'utilisateurs et du
                  volume de données sans compromettre les performances.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>
                  Puis-je intégrer mon application avec mes systèmes existants ?
                </AccordionTrigger>
                <AccordionContent>
                  Absolument. Nous concevons des applications qui s'intègrent
                  parfaitement avec vos systèmes existants (CRM, ERP, logiciels
                  métier, etc.) grâce à des API et des connecteurs. Cette
                  intégration permet d'assurer la cohérence des données et
                  d'optimiser vos processus métier en évitant les doubles
                  saisies et en automatisant les flux d'information.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger>
                  Quels types de support et de maintenance proposez-vous ?
                </AccordionTrigger>
                <AccordionContent>
                  Nous proposons plusieurs niveaux de support et de maintenance
                  pour assurer le bon fonctionnement de votre application dans
                  la durée. Nos forfaits incluent la correction des bugs, les
                  mises à jour de sécurité, l'optimisation des performances, et
                  l'assistance technique. Nous proposons également des services
                  d'évolution pour ajouter de nouvelles fonctionnalités à votre
                  application au fil du temps.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-6">
                <AccordionTrigger>
                  Comment se déroule la formation des utilisateurs ?
                </AccordionTrigger>
                <AccordionContent>
                  La formation des utilisateurs est une étape clé pour assurer
                  l'adoption de votre application. Nous proposons des sessions
                  de formation adaptées aux différents profils d'utilisateurs
                  (administrateurs, utilisateurs finaux, etc.). Nous fournissons
                  également une documentation complète et des guides
                  d'utilisation. Pour les projets plus importants, nous pouvons
                  mettre en place une approche "formation de formateurs" pour
                  vous permettre d'autonomiser vos équipes.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-7">
                <AccordionTrigger>
                  Où sera hébergée mon application web ?
                </AccordionTrigger>
                <AccordionContent>
                  Nous proposons plusieurs options d'hébergement selon vos
                  besoins en termes de performance, de sécurité et de budget.
                  Nous travaillons principalement avec des fournisseurs cloud de
                  premier plan comme AWS, Google Cloud ou Microsoft Azure, qui
                  offrent une haute disponibilité, une sécurité renforcée et une
                  évolutivité. Nous pouvons également déployer votre application
                  sur votre propre infrastructure si vous le souhaitez.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 items-center justify-center bg-primary text-primary-foreground">
        <div className="container max-w-7xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Prêt à transformer votre idée en application web ?
          </h2>
          <p className="mt-4 text-lg mx-auto max-w-2xl">
            Contactez-nous dès aujourd'hui pour discuter de votre projet et
            obtenir un devis gratuit et personnalisé.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" variant="secondary">
              <Link href="/contact?service=applications-web">
                Demander un devis gratuit
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="bg-transparent text-primary-foreground hover:bg-primary-foreground/10"
            >
              <Link href="/portfolio?category=application-web">
                Voir nos réalisations
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
