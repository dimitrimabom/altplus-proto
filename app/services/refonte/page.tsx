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

export default function RefontePage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 px-4 flex items-center justify-center md:py-28 bg-muted/30">
        <div className="container max-w-7xl flex flex-col items-center text-center">
          <Badge variant="outline" className="mb-4">
            Service
          </Badge>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Refonte de <span className="text-primary">Site Web</span>
          </h1>
          <p className="mt-6 max-w-3xl text-lg text-muted-foreground sm:text-xl">
            Donnez un nouveau souffle à votre présence en ligne. Notre service
            de refonte transforme votre site existant en une plateforme moderne,
            performante et adaptée aux standards actuels du web.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Button asChild size="lg">
              <Link href="/contact?service=refonte">Demander un devis</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/portfolio?category=refonte">
                Voir nos réalisations
              </Link>
            </Button>
          </div>
          <div className="mt-16 w-full max-w-5xl rounded-lg border bg-card/50 p-4 shadow-sm">
            <img
              src="/placeholder.svg?height=600&width=1200&text=Refonte+Site+Web"
              alt="Exemple de refonte de site web"
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
              Pourquoi refondre votre site ?
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Une refonte de site web est bien plus qu'un simple relooking.
              C'est l'occasion de repenser entièrement votre présence en ligne
              pour répondre aux attentes actuelles.
            </p>
          </div>
          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader className="pb-2">
                <Rocket className="h-10 w-10 text-primary mb-2" />
                <CardTitle>Modernisation du design</CardTitle>
                <CardDescription>
                  Un design contemporain qui reflète l'identité de votre marque
                  et impressionne vos visiteurs.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-2 text-sm text-muted-foreground">
                  <li>Design moderne et attrayant</li>
                  <li>Identité visuelle cohérente</li>
                  <li>Expérience utilisateur améliorée</li>
                  <li>Interfaces intuitives</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <Laptop className="h-10 w-10 text-primary mb-2" />
                <CardTitle>Adaptation mobile</CardTitle>
                <CardDescription>
                  Un site parfaitement adapté à tous les appareils, essentiel à
                  l'ère du mobile-first.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-2 text-sm text-muted-foreground">
                  <li>Design responsive</li>
                  <li>Navigation mobile optimisée</li>
                  <li>Contenu adaptatif</li>
                  <li>Performances mobiles améliorées</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <Zap className="h-10 w-10 text-primary mb-2" />
                <CardTitle>Performances optimisées</CardTitle>
                <CardDescription>
                  Un site rapide et performant pour une meilleure expérience
                  utilisateur et un meilleur référencement.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-2 text-sm text-muted-foreground">
                  <li>Temps de chargement réduits</li>
                  <li>Optimisation des ressources</li>
                  <li>Architecture technique moderne</li>
                  <li>Hébergement performant</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <Globe className="h-10 w-10 text-primary mb-2" />
                <CardTitle>SEO renforcé</CardTitle>
                <CardDescription>
                  Une structure optimisée pour les moteurs de recherche afin
                  d'améliorer votre visibilité en ligne.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-2 text-sm text-muted-foreground">
                  <li>Structure technique SEO-friendly</li>
                  <li>Redirections préservant le référencement</li>
                  <li>Balisage sémantique</li>
                  <li>Stratégie de contenu optimisée</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <Code className="h-10 w-10 text-primary mb-2" />
                <CardTitle>Technologies modernes</CardTitle>
                <CardDescription>
                  Des technologies à jour pour des fonctionnalités avancées et
                  une meilleure sécurité.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-2 text-sm text-muted-foreground">
                  <li>Frameworks modernes</li>
                  <li>CMS à jour et sécurisé</li>
                  <li>Fonctionnalités avancées</li>
                  <li>Compatibilité avec les standards actuels</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <Laptop className="h-10 w-10 text-primary mb-2" />
                <CardTitle>Accessibilité améliorée</CardTitle>
                <CardDescription>
                  Un site accessible à tous les utilisateurs, y compris ceux
                  ayant des handicaps.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-2 text-sm text-muted-foreground">
                  <li>Conformité aux normes WCAG</li>
                  <li>Navigation au clavier</li>
                  <li>Compatibilité avec les lecteurs d'écran</li>
                  <li>Contrastes et lisibilité optimisés</li>
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
              Notre processus de refonte
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Une approche méthodique en 6 étapes pour transformer votre site
              existant en une plateforme moderne et performante.
            </p>
          </div>
          <div className="mt-16">
            <Tabs defaultValue="audit" className="w-full">
              <TabsList className="grid w-full grid-cols-2 md:grid-cols-6">
                <TabsTrigger value="audit">1. Audit</TabsTrigger>
                <TabsTrigger value="strategy">2. Stratégie</TabsTrigger>
                <TabsTrigger value="design">3. Design</TabsTrigger>
                <TabsTrigger value="development">4. Développement</TabsTrigger>
                <TabsTrigger value="migration">5. Migration</TabsTrigger>
                <TabsTrigger value="launch">6. Lancement</TabsTrigger>
              </TabsList>
              <TabsContent value="audit" className="mt-6 space-y-4">
                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <h3 className="text-xl font-bold">
                      Audit complet de l'existant
                    </h3>
                    <p className="mt-2 text-muted-foreground">
                      Nous commençons par une analyse approfondie de votre site
                      actuel pour identifier ses forces, ses faiblesses et les
                      opportunités d'amélioration.
                    </p>
                    <ul className="mt-4 space-y-2">
                      <li className="flex items-start">
                        <Check className="mr-2 h-5 w-5 text-primary" />
                        <span>Analyse technique</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="mr-2 h-5 w-5 text-primary" />
                        <span>Audit de performance</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="mr-2 h-5 w-5 text-primary" />
                        <span>Audit SEO</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="mr-2 h-5 w-5 text-primary" />
                        <span>Analyse de l'expérience utilisateur</span>
                      </li>
                    </ul>
                  </div>
                  <div className="flex items-center justify-center">
                    <img
                      src="/placeholder.svg?height=300&width=400&text=Audit+de+site"
                      alt="Phase d'audit"
                      className="rounded-lg shadow-md"
                      width={400}
                      height={300}
                    />
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="strategy" className="mt-6 space-y-4">
                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <h3 className="text-xl font-bold">
                      Élaboration de la stratégie
                    </h3>
                    <p className="mt-2 text-muted-foreground">
                      Sur la base de l'audit, nous définissons une stratégie
                      claire pour votre refonte, en tenant compte de vos
                      objectifs commerciaux et des besoins de vos utilisateurs.
                    </p>
                    <ul className="mt-4 space-y-2">
                      <li className="flex items-start">
                        <Check className="mr-2 h-5 w-5 text-primary" />
                        <span>Définition des objectifs</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="mr-2 h-5 w-5 text-primary" />
                        <span>Analyse de la concurrence</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="mr-2 h-5 w-5 text-primary" />
                        <span>Planification de l'architecture</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="mr-2 h-5 w-5 text-primary" />
                        <span>Choix des technologies</span>
                      </li>
                    </ul>
                  </div>
                  <div className="flex items-center justify-center">
                    <img
                      src="/placeholder.svg?height=300&width=400&text=Stratégie+de+refonte"
                      alt="Phase de stratégie"
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
                      Conception du nouveau design
                    </h3>
                    <p className="mt-2 text-muted-foreground">
                      Nous créons un design moderne et attrayant qui reflète
                      l'identité de votre marque tout en améliorant l'expérience
                      utilisateur.
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
                        <span>Charte graphique</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="mr-2 h-5 w-5 text-primary" />
                        <span>Validation des maquettes</span>
                      </li>
                    </ul>
                  </div>
                  <div className="flex items-center justify-center">
                    <img
                      src="/placeholder.svg?height=300&width=400&text=Design+UX/UI"
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
                      Développement du nouveau site
                    </h3>
                    <p className="mt-2 text-muted-foreground">
                      Nous développons votre nouveau site avec des technologies
                      modernes, en veillant à ce qu'il soit rapide, sécurisé et
                      facile à maintenir.
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
                        <span>Tests de compatibilité</span>
                      </li>
                    </ul>
                  </div>
                  <div className="flex items-center justify-center">
                    <img
                      src="/placeholder.svg?height=300&width=400&text=Développement"
                      alt="Phase de développement"
                      className="rounded-lg shadow-md"
                      width={400}
                      height={300}
                    />
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="migration" className="mt-6 space-y-4">
                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <h3 className="text-xl font-bold">Migration du contenu</h3>
                    <p className="mt-2 text-muted-foreground">
                      Nous transférons et optimisons votre contenu existant vers
                      le nouveau site, en veillant à préserver votre
                      référencement.
                    </p>
                    <ul className="mt-4 space-y-2">
                      <li className="flex items-start">
                        <Check className="mr-2 h-5 w-5 text-primary" />
                        <span>Transfert de contenu</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="mr-2 h-5 w-5 text-primary" />
                        <span>Optimisation des textes et images</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="mr-2 h-5 w-5 text-primary" />
                        <span>Mise en place des redirections</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="mr-2 h-5 w-5 text-primary" />
                        <span>Vérification de l'intégrité des données</span>
                      </li>
                    </ul>
                  </div>
                  <div className="flex items-center justify-center">
                    <img
                      src="/placeholder.svg?height=300&width=400&text=Migration+de+contenu"
                      alt="Phase de migration"
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
                    <h3 className="text-xl font-bold">Lancement et suivi</h3>
                    <p className="mt-2 text-muted-foreground">
                      Nous mettons en ligne votre nouveau site et assurons un
                      suivi pour garantir son bon fonctionnement et son
                      efficacité.
                    </p>
                    <ul className="mt-4 space-y-2">
                      <li className="flex items-start">
                        <Check className="mr-2 h-5 w-5 text-primary" />
                        <span>Déploiement sécurisé</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="mr-2 h-5 w-5 text-primary" />
                        <span>Formation à l'utilisation</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="mr-2 h-5 w-5 text-primary" />
                        <span>Suivi des performances</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="mr-2 h-5 w-5 text-primary" />
                        <span>Support post-lancement</span>
                      </li>
                    </ul>
                  </div>
                  <div className="flex items-center justify-center">
                    <img
                      src="/placeholder.svg?height=300&width=400&text=Lancement+du+site"
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

      {/* Before/After Section */}
      <section className="py-20 px-4 flex items-center justify-center">
        <div className="container max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Avant / Après
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Découvrez la transformation spectaculaire que nous avons apportée
              à nos clients grâce à nos services de refonte.
            </p>
          </div>
          <div className="mt-16 grid gap-16">
            {/* Example 1 */}
            <div className="grid gap-8 md:grid-cols-2">
              <div className="space-y-4">
                <div className="relative">
                  <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-red-500 to-red-300 opacity-25 blur"></div>
                  <div className="relative rounded-lg border bg-card p-1">
                    <div className="absolute left-4 top-4 rounded-full bg-red-500 px-3 py-1 text-xs font-medium text-white">
                      Avant
                    </div>
                    <img
                      src="/placeholder.svg?height=400&width=600&text=Site+Avant+Refonte"
                      alt="Site web avant refonte"
                      className="w-full rounded-md"
                      width={600}
                      height={400}
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-medium">Les problèmes</h3>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li className="flex items-start">
                      <span className="mr-2 text-red-500">•</span>
                      <span>Design obsolète et peu attrayant</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-red-500">•</span>
                      <span>Non adapté aux appareils mobiles</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-red-500">•</span>
                      <span>Temps de chargement lents</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-red-500">•</span>
                      <span>Navigation confuse et peu intuitive</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="space-y-4">
                <div className="relative">
                  <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-primary to-primary/60 opacity-25 blur"></div>
                  <div className="relative rounded-lg border bg-card p-1">
                    <div className="absolute left-4 top-4 rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
                      Après
                    </div>
                    <img
                      src="/placeholder.svg?height=400&width=600&text=Site+Après+Refonte"
                      alt="Site web après refonte"
                      className="w-full rounded-md"
                      width={600}
                      height={400}
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-medium">Les améliorations</h3>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li className="flex items-start">
                      <span className="mr-2 text-primary">•</span>
                      <span>Design moderne et professionnel</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-primary">•</span>
                      <span>
                        Parfaitement responsive sur tous les appareils
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-primary">•</span>
                      <span>Performances optimisées et chargement rapide</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-primary">•</span>
                      <span>
                        Navigation intuitive et expérience utilisateur améliorée
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Example 2 */}
            <div className="grid gap-8 md:grid-cols-2">
              <div className="space-y-4">
                <div className="relative">
                  <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-red-500 to-red-300 opacity-25 blur"></div>
                  <div className="relative rounded-lg border bg-card p-1">
                    <div className="absolute left-4 top-4 rounded-full bg-red-500 px-3 py-1 text-xs font-medium text-white">
                      Avant
                    </div>
                    <img
                      src="/placeholder.svg?height=400&width=600&text=E-commerce+Avant"
                      alt="Site e-commerce avant refonte"
                      className="w-full rounded-md"
                      width={600}
                      height={400}
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-medium">Les problèmes</h3>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li className="flex items-start">
                      <span className="mr-2 text-red-500">•</span>
                      <span>
                        Processus d'achat complexe et abandons de panier
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-red-500">•</span>
                      <span>Présentation des produits peu attrayante</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-red-500">•</span>
                      <span>Fonctionnalités de recherche limitées</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-red-500">•</span>
                      <span>Performances médiocres sur mobile</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="space-y-4">
                <div className="relative">
                  <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-primary to-primary/60 opacity-25 blur"></div>
                  <div className="relative rounded-lg border bg-card p-1">
                    <div className="absolute left-4 top-4 rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
                      Après
                    </div>
                    <img
                      src="/placeholder.svg?height=400&width=600&text=E-commerce+Après"
                      alt="Site e-commerce après refonte"
                      className="w-full rounded-md"
                      width={600}
                      height={400}
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-medium">Les améliorations</h3>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li className="flex items-start">
                      <span className="mr-2 text-primary">•</span>
                      <span>Tunnel d'achat simplifié et optimisé</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-primary">•</span>
                      <span>
                        Mise en valeur des produits avec images haute qualité
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-primary">•</span>
                      <span>Recherche avancée et filtres intuitifs</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-primary">•</span>
                      <span>
                        Expérience mobile optimisée et conversions améliorées
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-20 px-4 flex items-center justify-center bg-muted/30">
        <div className="container max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Nos réalisations
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Découvrez quelques exemples de refontes que nous avons réalisées
              pour nos clients.
            </p>
          </div>
          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <Card className="overflow-hidden">
              <div className="aspect-video w-full overflow-hidden bg-muted">
                <img
                  src="/placeholder.svg?height=300&width=500&text=Luxury+Brand"
                  alt="Luxury Brand - Refonte pour une marque de luxe"
                  className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                  width={500}
                  height={300}
                />
              </div>
              <CardHeader className="p-4">
                <div className="flex items-center justify-between">
                  <Badge variant="outline">Refonte</Badge>
                  <span className="text-sm text-muted-foreground">2023</span>
                </div>
                <CardTitle className="mt-2">Luxury Brand</CardTitle>
                <CardDescription>Élégance Parisienne</CardDescription>
              </CardHeader>
              <CardContent className="p-4 pt-0">
                <p className="text-sm text-muted-foreground">
                  Refonte complète du site d'une marque de luxe, avec une
                  expérience utilisateur immersive et un design haut de gamme.
                </p>
              </CardContent>
              <CardFooter className="p-4 pt-0">
                <Button variant="outline" size="sm" asChild>
                  <Link href="/portfolio/luxury-brand">
                    Voir le projet <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
            <Card className="overflow-hidden">
              <div className="aspect-video w-full overflow-hidden bg-muted">
                <img
                  src="/placeholder.svg?height=300&width=500&text=Centre+Médical"
                  alt="Centre Médical - Refonte pour une clinique"
                  className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                  width={500}
                  height={300}
                />
              </div>
              <CardHeader className="p-4">
                <div className="flex items-center justify-between">
                  <Badge variant="outline">Refonte</Badge>
                  <span className="text-sm text-muted-foreground">2022</span>
                </div>
                <CardTitle className="mt-2">Centre Médical</CardTitle>
                <CardDescription>Clinique Santé Plus</CardDescription>
              </CardHeader>
              <CardContent className="p-4 pt-0">
                <p className="text-sm text-muted-foreground">
                  Refonte du site d'un centre médical avec système de prise de
                  rendez-vous en ligne et espace patient sécurisé.
                </p>
              </CardContent>
              <CardFooter className="p-4 pt-0">
                <Button variant="outline" size="sm" asChild>
                  <Link href="/portfolio/health-clinic">
                    Voir le projet <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
            <Card className="overflow-hidden">
              <div className="aspect-video w-full overflow-hidden bg-muted">
                <img
                  src="/placeholder.svg?height=300&width=500&text=TechCorp"
                  alt="TechCorp - Refonte pour une entreprise technologique"
                  className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                  width={500}
                  height={300}
                />
              </div>
              <CardHeader className="p-4">
                <div className="flex items-center justify-between">
                  <Badge variant="outline">Refonte</Badge>
                  <span className="text-sm text-muted-foreground">2023</span>
                </div>
                <CardTitle className="mt-2">TechCorp</CardTitle>
                <CardDescription>Entreprise de technologie</CardDescription>
              </CardHeader>
              <CardContent className="p-4 pt-0">
                <p className="text-sm text-muted-foreground">
                  Refonte moderne et dynamique pour une entreprise
                  technologique, avec mise en valeur des produits et services
                  innovants.
                </p>
              </CardContent>
              <CardFooter className="p-4 pt-0">
                <Button variant="outline" size="sm" asChild>
                  <Link href="/portfolio/tech-corp">
                    Voir le projet <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
          <div className="mt-12 text-center">
            <Button asChild variant="outline">
              <Link href="/portfolio?category=refonte">
                Voir tous nos projets de refonte{" "}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 flex items-center justify-center">
        <div className="container max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Témoignages clients
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Découvrez ce que nos clients disent de nos services de refonte.
            </p>
          </div>
          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card className="h-full flex flex-col">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-lg font-bold text-primary">SL</span>
                  </div>
                  <div>
                    <h3 className="font-medium">Sophie Laurent</h3>
                    <p className="text-sm text-muted-foreground">
                      Directrice Marketing, Élégance Parisienne
                    </p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="flex-1">
                <p className="text-muted-foreground">
                  "La refonte de notre site par AltPlus a transformé notre
                  présence en ligne. L'élégance du design et la fluidité de
                  l'expérience utilisateur correspondent parfaitement à notre
                  image de marque haut de gamme. Nos ventes en ligne ont
                  augmenté de 45% depuis le lancement."
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
                  "Notre ancien site était obsolète et peu pratique pour nos
                  patients. Grâce à AltPlus, nous disposons maintenant d'une
                  plateforme moderne qui facilite la prise de rendez-vous et
                  améliore la communication avec nos patients. La réduction des
                  appels téléphoniques nous a permis de gagner un temps
                  précieux."
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
                    <span className="text-lg font-bold text-primary">MT</span>
                  </div>
                  <div>
                    <h3 className="font-medium">Marc Thibault</h3>
                    <p className="text-sm text-muted-foreground">
                      CEO, TechCorp
                    </p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="flex-1">
                <p className="text-muted-foreground">
                  "La refonte de notre site par AltPlus a été un investissement
                  extrêmement rentable. Non seulement notre image de marque a
                  été considérablement améliorée, mais notre trafic organique a
                  augmenté de 60% et nos conversions de 35%. L'équipe a été
                  professionnelle et à l'écoute tout au long du projet."
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
      <section className="py-20 px-4 flex items-center justify-center bg-muted/30">
        <div className="container max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Nos forfaits
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Des solutions adaptées à tous les budgets pour la refonte de votre
              site web.
            </p>
          </div>
          <div className="mt-16 grid gap-8 md:grid-cols-3">
            <PricingCard
              title="Essentiel"
              price="À partir de 3 000 €"
              description="Pour les petites entreprises qui souhaitent moderniser leur site web."
              features={[
                "Audit de l'existant",
                "Design responsive moderne",
                "Optimisation des performances",
                "Migration de contenu (jusqu'à 20 pages)",
                "Redirections SEO",
                "Formation à l'utilisation",
                "Support technique (3 mois)",
              ]}
              buttonText="Demander un devis"
              buttonLink="/contact?service=refonte&forfait=essentiel"
            />
            <PricingCard
              title="Business"
              price="À partir de 6 000 €"
              description="Pour les entreprises qui ont besoin d'une refonte complète avec fonctionnalités avancées."
              features={[
                "Audit approfondi et stratégie",
                "Design sur mesure et UX optimisée",
                "Optimisation SEO avancée",
                "Migration de contenu (jusqu'à 50 pages)",
                "Fonctionnalités personnalisées",
                "Intégration avec vos outils",
                "Formation et documentation",
                "Support technique (6 mois)",
              ]}
              buttonText="Demander un devis"
              buttonLink="/contact?service=refonte&forfait=business"
              highlighted={true}
            />
            <PricingCard
              title="Premium"
              price="À partir de 12 000 €"
              description="Pour les grandes entreprises avec des besoins complexes et spécifiques."
              features={[
                "Audit et stratégie complète",
                "Design premium et expérience utilisateur sur mesure",
                "Architecture technique avancée",
                "Migration de contenu illimitée",
                "Fonctionnalités avancées et spécifiques",
                "Intégrations multiples",
                "Optimisation SEO complète",
                "Formation approfondie",
                "Support technique premium (12 mois)",
              ]}
              buttonText="Demander un devis"
              buttonLink="/contact?service=refonte&forfait=premium"
            />
          </div>
          <div className="mt-12 text-center">
            <p className="text-muted-foreground">
              Besoin d'une solution sur mesure ?{" "}
              <Link href="/contact?service=refonte" className="text-primary">
                Contactez-nous
              </Link>{" "}
              pour discuter de votre projet.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 flex items-center justify-center">
        <div className="container max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Questions fréquentes
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Vous avez des questions sur la refonte de votre site ? Nous avons
              les réponses.
            </p>
          </div>
          <div className="mt-16 mx-auto max-w-3xl">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  Quand faut-il envisager une refonte de site web ?
                </AccordionTrigger>
                <AccordionContent>
                  Il est généralement recommandé d'envisager une refonte de
                  votre site web tous les 3 à 5 ans, mais plusieurs signes
                  peuvent indiquer qu'une refonte est nécessaire plus tôt :
                  design obsolète, mauvaises performances sur mobile, temps de
                  chargement lents, taux de rebond élevé, faible taux de
                  conversion, difficultés de mise à jour, ou problèmes de
                  sécurité. Si votre site présente plusieurs de ces symptômes,
                  il est probablement temps de le moderniser.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>
                  Combien de temps prend une refonte de site web ?
                </AccordionTrigger>
                <AccordionContent>
                  La durée d'une refonte dépend de la complexité de votre site
                  actuel et des nouvelles fonctionnalités souhaitées. En
                  général, une refonte complète peut prendre entre 2 et 4 mois.
                  Pour des sites plus complexes ou des projets e-commerce, le
                  délai peut s'étendre jusqu'à 6 mois. Nous établissons un
                  calendrier précis lors de la phase d'audit et de stratégie.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>
                  Comment préservez-vous mon référencement pendant la refonte ?
                </AccordionTrigger>
                <AccordionContent>
                  La préservation de votre référencement est une priorité lors
                  d'une refonte. Nous mettons en place plusieurs mesures :
                  analyse SEO complète de votre site actuel, conservation de la
                  structure d'URL lorsque c'est possible, mise en place de
                  redirections 301 pour les URLs modifiées, préservation des
                  balises méta importantes, migration soignée du contenu, et
                  vérification post-lancement pour s'assurer que tout fonctionne
                  correctement. Nous surveillons également les performances SEO
                  après le lancement pour détecter et corriger rapidement tout
                  problème.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>
                  Puis-je continuer à utiliser mon site pendant la refonte ?
                </AccordionTrigger>
                <AccordionContent>
                  Oui, votre site actuel reste entièrement fonctionnel pendant
                  toute la durée de la refonte. Nous développons votre nouveau
                  site sur un environnement de test séparé, ce qui vous permet
                  de continuer à utiliser votre site existant sans interruption.
                  Une fois le nouveau site prêt et validé, nous effectuons la
                  migration et la mise en ligne avec un temps d'indisponibilité
                  minimal, généralement pendant les heures creuses.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger>
                  Que se passe-t-il avec mon contenu existant ?
                </AccordionTrigger>
                <AccordionContent>
                  Nous effectuons une migration soignée de votre contenu
                  existant vers le nouveau site. Ce processus comprend
                  l'analyse, l'optimisation et le transfert de vos textes,
                  images, vidéos et autres médias. Nous vous recommandons
                  également de profiter de cette occasion pour mettre à jour et
                  améliorer votre contenu. Nous pouvons vous accompagner dans
                  cette démarche avec des services de rédaction et
                  d'optimisation de contenu si vous le souhaitez.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-6">
                <AccordionTrigger>
                  Quelles technologies utilisez-vous pour la refonte ?
                </AccordionTrigger>
                <AccordionContent>
                  Nous utilisons les technologies les plus modernes et adaptées
                  à vos besoins spécifiques. Pour les sites vitrines et blogs,
                  nous privilégions souvent des CMS comme WordPress ou des
                  frameworks comme Next.js. Pour les sites e-commerce, nous
                  utilisons des plateformes comme WooCommerce, Shopify ou
                  Magento selon vos besoins. Nous choisissons toujours les
                  technologies en fonction de vos objectifs, de vos contraintes
                  et de vos préférences en matière de maintenance future.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-7">
                <AccordionTrigger>
                  Comment mesurer le succès de la refonte ?
                </AccordionTrigger>
                <AccordionContent>
                  Le succès d'une refonte se mesure par plusieurs indicateurs
                  clés : amélioration des performances techniques (vitesse de
                  chargement, score PageSpeed), augmentation du trafic
                  organique, réduction du taux de rebond, augmentation du temps
                  passé sur le site, amélioration du taux de conversion, et bien
                  sûr, retour sur investissement. Nous mettons en place des
                  outils d'analyse pour suivre ces métriques et vous fournissons
                  des rapports réguliers pour évaluer l'impact de la refonte.
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
            Prêt à transformer votre site web existant ?
          </h2>
          <p className="mt-4 text-lg mx-auto max-w-2xl">
            Contactez-nous dès aujourd'hui pour discuter de votre projet de
            refonte et obtenir un devis gratuit et personnalisé.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" variant="secondary">
              <Link href="/contact?service=refonte">
                Demander un devis gratuit
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="bg-transparent text-primary-foreground hover:bg-primary-foreground/10"
            >
              <Link href="/portfolio?category=refonte">
                Voir nos réalisations
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
