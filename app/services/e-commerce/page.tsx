import Link from "next/link";
import {
  ArrowRight,
  Check,
  ChevronRight,
  CreditCard,
  Globe,
  Laptop,
  Package,
  ShoppingBag,
  ShoppingCart,
  Truck,
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

export default function EcommercePage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 px-4 flex items-center justify-center md:py-28 bg-muted/30">
        <div className="container max-x-7xl flex flex-col items-center text-center">
          <Badge variant="outline" className="mb-4">
            Service
          </Badge>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Solutions <span className="text-primary">E-commerce</span>
          </h1>
          <p className="mt-6 max-w-3xl text-lg text-muted-foreground sm:text-xl">
            Vendez vos produits en ligne avec une boutique e-commerce
            performante et sécurisée. Nous créons des expériences d'achat
            fluides qui maximisent vos conversions et fidélisent vos clients.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Button asChild size="lg">
              <Link href="/contact?service=e-commerce">Demander un devis</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/portfolio?category=e-commerce">
                Voir nos réalisations
              </Link>
            </Button>
          </div>
          <div className="mt-16 w-full max-w-5xl rounded-lg border bg-card/50 p-4 shadow-sm">
            <Image
              src="/placeholder.svg?height=600&width=1200&text=Boutique+E-commerce"
              alt="Exemple de boutique e-commerce"
              className="w-full rounded-md object-cover"
              width={1200}
              height={600}
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container max-x-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Caractéristiques principales
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Nos boutiques e-commerce sont conçues pour offrir une expérience
              d'achat optimale et maximiser vos ventes.
            </p>
          </div>
          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader className="pb-2">
                <ShoppingBag className="h-10 w-10 text-primary mb-2" />
                <CardTitle>Catalogue de produits</CardTitle>
                <CardDescription>
                  Une présentation attractive et organisée de vos produits pour
                  faciliter la navigation et les achats.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-2 text-sm text-muted-foreground">
                  <li>Catégories et sous-catégories</li>
                  <li>Filtres et recherche avancée</li>
                  <li>Fiches produits détaillées</li>
                  <li>Gestion des variantes et options</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <ShoppingCart className="h-10 w-10 text-primary mb-2" />
                <CardTitle>Expérience d'achat fluide</CardTitle>
                <CardDescription>
                  Un parcours d'achat optimisé pour maximiser les conversions et
                  minimiser les abandons de panier.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-2 text-sm text-muted-foreground">
                  <li>Panier d'achat intuitif</li>
                  <li>Processus de commande simplifié</li>
                  <li>Création de compte facilitée</li>
                  <li>Sauvegarde du panier</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CreditCard className="h-10 w-10 text-primary mb-2" />
                <CardTitle>Solutions de paiement</CardTitle>
                <CardDescription>
                  Des options de paiement variées et sécurisées pour répondre
                  aux préférences de tous vos clients.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-2 text-sm text-muted-foreground">
                  <li>Cartes bancaires</li>
                  <li>PayPal, Apple Pay, Google Pay</li>
                  <li>Paiement en plusieurs fois</li>
                  <li>Transactions sécurisées</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <Truck className="h-10 w-10 text-primary mb-2" />
                <CardTitle>Gestion des livraisons</CardTitle>
                <CardDescription>
                  Des options de livraison flexibles et une gestion efficace
                  pour satisfaire vos clients.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-2 text-sm text-muted-foreground">
                  <li>Multiples transporteurs</li>
                  <li>Calcul automatique des frais</li>
                  <li>Suivi des colis</li>
                  <li>Click & Collect</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <Package className="h-10 w-10 text-primary mb-2" />
                <CardTitle>Gestion des stocks</CardTitle>
                <CardDescription>
                  Un système complet pour gérer efficacement vos stocks et vos
                  commandes.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-2 text-sm text-muted-foreground">
                  <li>Suivi en temps réel</li>
                  <li>Alertes de stock bas</li>
                  <li>Gestion multi-entrepôts</li>
                  <li>Traitement des commandes</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <Globe className="h-10 w-10 text-primary mb-2" />
                <CardTitle>Marketing et SEO</CardTitle>
                <CardDescription>
                  Des outils intégrés pour promouvoir votre boutique et attirer
                  plus de clients.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-2 text-sm text-muted-foreground">
                  <li>Optimisation pour les moteurs de recherche</li>
                  <li>Codes promo et réductions</li>
                  <li>Programmes de fidélité</li>
                  <li>Intégration réseaux sociaux</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Platforms Section */}
      <section className="py-20 px-4 flex items-center justify-center bg-muted/30">
        <div className="container max-x-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Plateformes e-commerce
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Nous utilisons les meilleures plateformes e-commerce pour créer
              votre boutique en ligne, adaptées à vos besoins spécifiques.
            </p>
          </div>
          <div className="mt-16 grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            <div className="flex flex-col items-center text-center">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
                <Image
                  src="/placeholder.svg?height=40&width=40&text=WC"
                  alt="WooCommerce"
                  className="h-10 w-10"
                  width={40}
                  height={40}
                />
              </div>
              <h3 className="mt-4 font-medium">WooCommerce</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Solution e-commerce flexible et extensible basée sur WordPress,
                idéale pour les petites et moyennes entreprises.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
                <Image
                  src="/placeholder.svg?height=40&width=40&text=Shopify"
                  alt="Shopify"
                  className="h-10 w-10"
                  width={40}
                  height={40}
                />
              </div>
              <h3 className="mt-4 font-medium">Shopify</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Plateforme e-commerce tout-en-un, facile à utiliser et évolutive
                pour les entreprises de toutes tailles.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
                <Image
                  src="/placeholder.svg?height=40&width=40&text=Magento"
                  alt="Magento"
                  className="h-10 w-10"
                  width={40}
                  height={40}
                />
              </div>
              <h3 className="mt-4 font-medium">Magento</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Solution e-commerce robuste et hautement personnalisable pour
                les grandes entreprises et les catalogues complexes.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
                <Image
                  src="/placeholder.svg?height=40&width=40&text=PS"
                  alt="PrestaShop"
                  className="h-10 w-10"
                  width={40}
                  height={40}
                />
              </div>
              <h3 className="mt-4 font-medium">PrestaShop</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Solution open-source complète et flexible, particulièrement
                populaire en Europe.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
                <Image
                  src="/placeholder.svg?height=40&width=40&text=Sylius"
                  alt="Sylius"
                  className="h-10 w-10"
                  width={40}
                  height={40}
                />
              </div>
              <h3 className="mt-4 font-medium">Sylius</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Framework e-commerce moderne basé sur Symfony, idéal pour les
                projets sur mesure et complexes.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
                <Image
                  src="/placeholder.svg?height=40&width=40&text=Next.js"
                  alt="Next.js Commerce"
                  className="h-10 w-10"
                  width={40}
                  height={40}
                />
              </div>
              <h3 className="mt-4 font-medium">Next.js Commerce</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Solution e-commerce moderne basée sur Next.js, offrant des
                performances exceptionnelles et une expérience utilisateur
                optimale.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
                <Image
                  src="/placeholder.svg?height=40&width=40&text=Swell"
                  alt="Swell"
                  className="h-10 w-10"
                  width={40}
                  height={40}
                />
              </div>
              <h3 className="mt-4 font-medium">Swell</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Plateforme e-commerce headless flexible pour créer des
                expériences d'achat personnalisées.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
                <Image
                  src="/placeholder.svg?height=40&width=40&text=Custom"
                  alt="Solution sur mesure"
                  className="h-10 w-10"
                  width={40}
                  height={40}
                />
              </div>
              <h3 className="mt-4 font-medium">Solution sur mesure</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Développement e-commerce entièrement personnalisé pour répondre
                à des besoins spécifiques et complexes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20">
        <div className="container max-x-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Notre processus de création
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Une approche méthodique en 6 étapes pour créer votre boutique
              e-commerce performante.
            </p>
          </div>
          <div className="mt-16">
            <Tabs defaultValue="discovery" className="w-full">
              <TabsList className="grid w-full grid-cols-2 md:grid-cols-6">
                <TabsTrigger value="discovery">1. Analyse</TabsTrigger>
                <TabsTrigger value="strategy">2. Stratégie</TabsTrigger>
                <TabsTrigger value="design">3. Design</TabsTrigger>
                <TabsTrigger value="development">4. Développement</TabsTrigger>
                <TabsTrigger value="testing">5. Tests</TabsTrigger>
                <TabsTrigger value="launch">6. Lancement</TabsTrigger>
              </TabsList>
              <TabsContent value="discovery" className="mt-6 space-y-4">
                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <h3 className="text-xl font-bold">Analyse des besoins</h3>
                    <p className="mt-2 text-muted-foreground">
                      Nous commençons par comprendre votre entreprise, vos
                      produits, votre marché et vos objectifs commerciaux. Cette
                      étape est cruciale pour définir les fonctionnalités
                      nécessaires à votre boutique en ligne.
                    </p>
                    <ul className="mt-4 space-y-2">
                      <li className="flex items-start">
                        <Check className="mr-2 h-5 w-5 text-primary" />
                        <span>Analyse de votre catalogue produits</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="mr-2 h-5 w-5 text-primary" />
                        <span>Étude de votre marché et concurrence</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="mr-2 h-5 w-5 text-primary" />
                        <span>Définition des objectifs commerciaux</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="mr-2 h-5 w-5 text-primary" />
                        <span>Identification des besoins spécifiques</span>
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
              <TabsContent value="strategy" className="mt-6 space-y-4">
                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <h3 className="text-xl font-bold">Stratégie e-commerce</h3>
                    <p className="mt-2 text-muted-foreground">
                      Nous élaborons une stratégie e-commerce complète, incluant
                      le choix de la plateforme, la structure du catalogue, les
                      méthodes de paiement et de livraison, ainsi que les
                      stratégies marketing.
                    </p>
                    <ul className="mt-4 space-y-2">
                      <li className="flex items-start">
                        <Check className="mr-2 h-5 w-5 text-primary" />
                        <span>Sélection de la plateforme adaptée</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="mr-2 h-5 w-5 text-primary" />
                        <span>Architecture du catalogue</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="mr-2 h-5 w-5 text-primary" />
                        <span>Stratégie de prix et promotions</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="mr-2 h-5 w-5 text-primary" />
                        <span>Plan d'acquisition et de fidélisation</span>
                      </li>
                    </ul>
                  </div>
                  <div className="flex items-center justify-center">
                    <Image
                      src="/placeholder.svg?height=300&width=400&text=Stratégie+e-commerce"
                      alt="Phase de stratégie e-commerce"
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
                      Design de votre boutique
                    </h3>
                    <p className="mt-2 text-muted-foreground">
                      Nous concevons une interface utilisateur attrayante et
                      intuitive qui met en valeur vos produits et optimise le
                      parcours d'achat pour maximiser les conversions.
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
                        <span>Optimisation du parcours d'achat</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="mr-2 h-5 w-5 text-primary" />
                        <span>Mise en valeur des produits</span>
                      </li>
                    </ul>
                  </div>
                  <div className="flex items-center justify-center">
                    <Image
                      src="/placeholder.svg?height=300&width=400&text=Design+e-commerce"
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
                      Développement de la boutique
                    </h3>
                    <p className="mt-2 text-muted-foreground">
                      Nous développons votre boutique en ligne en implémentant
                      toutes les fonctionnalités nécessaires : catalogue
                      produits, panier d'achat, paiement, gestion des stocks,
                      etc.
                    </p>
                    <ul className="mt-4 space-y-2">
                      <li className="flex items-start">
                        <Check className="mr-2 h-5 w-5 text-primary" />
                        <span>Configuration de la plateforme</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="mr-2 h-5 w-5 text-primary" />
                        <span>Intégration des fonctionnalités</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="mr-2 h-5 w-5 text-primary" />
                        <span>Mise en place des passerelles de paiement</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="mr-2 h-5 w-5 text-primary" />
                        <span>Configuration des options de livraison</span>
                      </li>
                    </ul>
                  </div>
                  <div className="flex items-center justify-center">
                    <Image
                      src="/placeholder.svg?height=300&width=400&text=Développement+e-commerce"
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
                      Nous testons rigoureusement votre boutique pour garantir
                      son bon fonctionnement, sa sécurité et ses performances,
                      et nous optimisons chaque aspect pour maximiser les
                      conversions.
                    </p>
                    <ul className="mt-4 space-y-2">
                      <li className="flex items-start">
                        <Check className="mr-2 h-5 w-5 text-primary" />
                        <span>Tests fonctionnels</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="mr-2 h-5 w-5 text-primary" />
                        <span>Tests de sécurité</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="mr-2 h-5 w-5 text-primary" />
                        <span>Tests de performance</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="mr-2 h-5 w-5 text-primary" />
                        <span>Optimisation des conversions</span>
                      </li>
                    </ul>
                  </div>
                  <div className="flex items-center justify-center">
                    <Image
                      src="/placeholder.svg?height=300&width=400&text=Tests+e-commerce"
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
                    <h3 className="text-xl font-bold">Lancement et suivi</h3>
                    <p className="mt-2 text-muted-foreground">
                      Nous lançons votre boutique en ligne et vous accompagnons
                      dans sa prise en main. Nous mettons également en place des
                      outils d'analyse pour suivre ses performances et
                      l'optimiser en continu.
                    </p>
                    <ul className="mt-4 space-y-2">
                      <li className="flex items-start">
                        <Check className="mr-2 h-5 w-5 text-primary" />
                        <span>Mise en ligne de la boutique</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="mr-2 h-5 w-5 text-primary" />
                        <span>Formation à l'administration</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="mr-2 h-5 w-5 text-primary" />
                        <span>Mise en place d'outils d'analyse</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="mr-2 h-5 w-5 text-primary" />
                        <span>Support et maintenance</span>
                      </li>
                    </ul>
                  </div>
                  <div className="flex items-center justify-center">
                    <Image
                      src="/placeholder.svg?height=300&width=400&text=Lancement+e-commerce"
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
      <section className="py-20 px-4 flex items-center justify-center bg-muted/30">
        <div className="container max-x-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Nos réalisations
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Découvrez quelques exemples de boutiques e-commerce que nous avons
              réalisées pour nos clients.
            </p>
          </div>
          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <Card className="overflow-hidden">
              <div className="aspect-video w-full overflow-hidden bg-muted">
                <Image
                  src="/placeholder.svg?height=300&width=500&text=EcoStore"
                  alt="EcoStore - Boutique de produits écologiques"
                  className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                  width={500}
                  height={300}
                />
              </div>
              <CardHeader className="p-4">
                <div className="flex items-center justify-between">
                  <Badge variant="outline">E-commerce</Badge>
                  <span className="text-sm text-muted-foreground">2024</span>
                </div>
                <CardTitle className="mt-2">EcoStore</CardTitle>
                <CardDescription>Nature & Bio</CardDescription>
              </CardHeader>
              <CardContent className="p-4 pt-0">
                <p className="text-sm text-muted-foreground">
                  Boutique en ligne de produits écologiques et biologiques avec
                  plus de 500 références et un système de fidélité.
                </p>
              </CardContent>
              <CardFooter className="p-4 pt-0">
                <Button variant="outline" size="sm" asChild>
                  <Link href="/portfolio/eco-store">
                    Voir le projet <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
            <Card className="overflow-hidden">
              <div className="aspect-video w-full overflow-hidden bg-muted">
                <Image
                  src="/placeholder.svg?height=300&width=500&text=ModaStyle"
                  alt="ModaStyle - Boutique de mode"
                  className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                  width={500}
                  height={300}
                />
              </div>
              <CardHeader className="p-4">
                <div className="flex items-center justify-between">
                  <Badge variant="outline">E-commerce</Badge>
                  <span className="text-sm text-muted-foreground">2022</span>
                </div>
                <CardTitle className="mt-2">ModaStyle</CardTitle>
                <CardDescription>Boutique de Mode</CardDescription>
              </CardHeader>
              <CardContent className="p-4 pt-0">
                <p className="text-sm text-muted-foreground">
                  Boutique en ligne de vêtements et accessoires de mode avec
                  expérience d'achat personnalisée et recommandations produits.
                </p>
              </CardContent>
              <CardFooter className="p-4 pt-0">
                <Button variant="outline" size="sm" asChild>
                  <Link href="/portfolio/fashion-store">
                    Voir le projet <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
            <Card className="overflow-hidden">
              <div className="aspect-video w-full overflow-hidden bg-muted">
                <Image
                  src="/placeholder.svg?height=300&width=500&text=Luxury+Brand"
                  alt="Luxury Brand - Boutique de luxe"
                  className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                  width={500}
                  height={300}
                />
              </div>
              <CardHeader className="p-4">
                <div className="flex items-center justify-between">
                  <Badge variant="outline">E-commerce</Badge>
                  <span className="text-sm text-muted-foreground">2023</span>
                </div>
                <CardTitle className="mt-2">Luxury Brand</CardTitle>
                <CardDescription>Élégance Parisienne</CardDescription>
              </CardHeader>
              <CardContent className="p-4 pt-0">
                <p className="text-sm text-muted-foreground">
                  Boutique en ligne haut de gamme pour une marque de luxe, avec
                  une expérience d'achat immersive et un design élégant.
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
          </div>
          <div className="mt-12 text-center">
            <Button asChild variant="outline">
              <Link href="/portfolio?category=e-commerce">
                Voir tous nos projets e-commerce{" "}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="container max-x-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Témoignages clients
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Découvrez ce que nos clients disent de nos boutiques e-commerce.
            </p>
          </div>
          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card className="h-full flex flex-col">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-lg font-bold text-primary">MD</span>
                  </div>
                  <div>
                    <h3 className="font-medium">Marie Dubois</h3>
                    <p className="text-sm text-muted-foreground">
                      Directrice Marketing, Nature & Bio
                    </p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="flex-1">
                <p className="text-muted-foreground">
                  "L'équipe d'AltPlus a transformé notre vision en une boutique
                  en ligne performante qui a dépassé nos attentes. Leur
                  expertise technique et leur compréhension de nos besoins ont
                  fait toute la différence. Nos ventes en ligne ont augmenté de
                  45% en seulement 3 mois."
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
                      Directrice Marketing, Élégance Parisienne
                    </p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="flex-1">
                <p className="text-muted-foreground">
                  "La refonte de notre boutique en ligne par AltPlus a
                  transformé notre présence digitale. L'élégance du design et la
                  fluidité de l'expérience utilisateur correspondent
                  parfaitement à notre image de marque haut de gamme. Notre taux
                  de conversion a augmenté de 120% et notre panier moyen de
                  45%."
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
                    <span className="text-lg font-bold text-primary">PL</span>
                  </div>
                  <div>
                    <h3 className="font-medium">Pierre Legrand</h3>
                    <p className="text-sm text-muted-foreground">
                      Fondateur, ModaStyle
                    </p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="flex-1">
                <p className="text-muted-foreground">
                  "Travailler avec AltPlus a été une expérience exceptionnelle.
                  Leur équipe a su comprendre les spécificités de notre secteur
                  et créer une boutique en ligne qui répond parfaitement à nos
                  besoins. Les fonctionnalités de personnalisation et de
                  recommandation ont considérablement amélioré l'expérience de
                  nos clients."
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
        <div className="container max-x-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Nos forfaits
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Des solutions adaptées à tous les budgets pour votre boutique
              e-commerce.
            </p>
          </div>
          <div className="mt-16 grid gap-8 md:grid-cols-3">
            <PricingCard
              title="Essentiel"
              price="À partir de 3 500 €"
              description="Idéal pour les petites entreprises qui débutent dans le e-commerce."
              features={[
                "Boutique jusqu'à 100 produits",
                "Design responsive",
                "Panier d'achat et paiement sécurisé",
                "Gestion des stocks de base",
                "Optimisation SEO de base",
                "Hébergement pour 1 an",
                "Formation à l'utilisation",
              ]}
              buttonText="Demander un devis"
              buttonLink="/contact?service=e-commerce&forfait=essentiel"
            />
            <PricingCard
              title="Business"
              price="À partir de 7 500 €"
              description="Pour les entreprises en croissance qui ont besoin de fonctionnalités avancées."
              features={[
                "Boutique jusqu'à 500 produits",
                "Design personnalisé",
                "Multiples options de paiement",
                "Gestion des stocks avancée",
                "Système de réductions et codes promo",
                "Optimisation SEO avancée",
                "Intégration avec les réseaux sociaux",
                "Hébergement et maintenance pour 1 an",
              ]}
              buttonText="Demander un devis"
              buttonLink="/contact?service=e-commerce&forfait=business"
              highlighted={true}
            />
            <PricingCard
              title="Premium"
              price="À partir de 15 000 €"
              description="Pour les entreprises qui ont besoin d'une solution e-commerce complète et personnalisée."
              features={[
                "Boutique produits illimités",
                "Design premium sur mesure",
                "Expérience d'achat personnalisée",
                "Gestion multi-boutiques",
                "Intégration ERP/CRM",
                "Stratégie SEO complète",
                "Système de fidélité",
                "Hébergement haute performance",
                "Support et maintenance premium",
              ]}
              buttonText="Demander un devis"
              buttonLink="/contact?service=e-commerce&forfait=premium"
            />
          </div>
          <div className="mt-12 text-center">
            <p className="text-muted-foreground">
              Besoin d'une solution sur mesure ?{" "}
              <Link href="/contact?service=e-commerce" className="text-primary">
                Contactez-nous
              </Link>{" "}
              pour discuter de votre projet.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container max-x-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Questions fréquentes
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Vous avez des questions sur nos solutions e-commerce ? Nous avons
              les réponses.
            </p>
          </div>
          <div className="mt-16 mx-auto max-w-3xl">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  Quelle plateforme e-commerce me recommandez-vous ?
                </AccordionTrigger>
                <AccordionContent>
                  Le choix de la plateforme dépend de plusieurs facteurs : la
                  taille de votre catalogue, vos besoins spécifiques, votre
                  budget, vos objectifs de croissance, etc. Nous analysons votre
                  situation et vous recommandons la solution la plus adaptée.
                  Par exemple, WooCommerce est idéal pour les petites et
                  moyennes entreprises qui utilisent déjà WordPress, Shopify est
                  parfait pour une mise en place rapide et simple, tandis que
                  Magento convient aux grandes entreprises avec des catalogues
                  complexes.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>
                  Combien de temps faut-il pour créer une boutique e-commerce ?
                </AccordionTrigger>
                <AccordionContent>
                  Le délai de création d'une boutique e-commerce dépend de sa
                  complexité et de l'étendue des fonctionnalités. En général,
                  une boutique e-commerce standard peut être réalisée en 6 à 12
                  semaines. Pour des projets plus complexes avec des
                  intégrations spécifiques ou un grand volume de produits, le
                  délai peut s'étendre jusqu'à 4-6 mois. Nous établissons un
                  calendrier précis lors de la phase d'analyse des besoins.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>
                  Quelles solutions de paiement proposez-vous ?
                </AccordionTrigger>
                <AccordionContent>
                  Nous intégrons toutes les principales solutions de paiement en
                  fonction de vos besoins et de votre marché cible : cartes
                  bancaires (via Stripe, PayPal, etc.), portefeuilles
                  électroniques (Apple Pay, Google Pay), paiement en plusieurs
                  fois, virement bancaire, etc. Nous veillons à ce que les
                  transactions soient sécurisées et conformes aux normes PCI
                  DSS, et nous vous conseillons sur les meilleures options pour
                  minimiser les frais tout en maximisant la conversion.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>
                  Comment gérer mon catalogue de produits ?
                </AccordionTrigger>
                <AccordionContent>
                  Toutes nos boutiques e-commerce sont livrées avec un système
                  de gestion de catalogue intuitif qui vous permet d'ajouter,
                  modifier et supprimer facilement vos produits. Vous pouvez
                  gérer les catégories, les attributs, les variantes, les prix,
                  les stocks, les promotions, etc. Pour les catalogues
                  volumineux, nous mettons en place des outils d'import/export
                  qui facilitent la gestion en masse. Nous vous formons à
                  l'utilisation de ces outils et restons disponibles pour vous
                  accompagner si nécessaire.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger>
                  Comment optimiser ma boutique pour le référencement ?
                </AccordionTrigger>
                <AccordionContent>
                  Nous intégrons les meilleures pratiques SEO dès la conception
                  de votre boutique : URLs optimisées, structure technique
                  performante, balises méta personnalisables, contenu unique
                  pour chaque produit, vitesse de chargement optimale, etc. Nous
                  vous conseillons également sur la stratégie de contenu, les
                  mots-clés à cibler et les actions à mettre en place pour
                  améliorer votre visibilité dans les moteurs de recherche. Pour
                  des besoins plus spécifiques, nous proposons des services de
                  référencement avancés.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-6">
                <AccordionTrigger>
                  Puis-je intégrer ma boutique avec mes systèmes existants ?
                </AccordionTrigger>
                <AccordionContent>
                  Oui, nous pouvons intégrer votre boutique e-commerce avec vos
                  systèmes existants : ERP, CRM, logiciel de comptabilité,
                  logiciel de gestion des stocks, etc. Ces intégrations
                  permettent d'automatiser de nombreux processus
                  (synchronisation des stocks, mise à jour des prix, traitement
                  des commandes, etc.) et d'éviter les doubles saisies. Nous
                  analysons vos besoins d'intégration lors de la phase d'analyse
                  et mettons en place les solutions les plus adaptées.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-7">
                <AccordionTrigger>
                  Quels types de support et de maintenance proposez-vous ?
                </AccordionTrigger>
                <AccordionContent>
                  Nous proposons plusieurs niveaux de support et de maintenance
                  pour assurer le bon fonctionnement de votre boutique dans la
                  durée. Nos forfaits incluent les mises à jour de sécurité, les
                  corrections de bugs, l'optimisation des performances, et
                  l'assistance technique. Nous proposons également des services
                  d'évolution pour ajouter de nouvelles fonctionnalités à votre
                  boutique au fil du temps et l'adapter à l'évolution de votre
                  activité.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 flex items-center justify-center bg-primary text-primary-foreground">
        <div className="container max-x-7xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Prêt à lancer votre boutique en ligne ?
          </h2>
          <p className="mt-4 text-lg mx-auto max-w-2xl">
            Contactez-nous dès aujourd'hui pour discuter de votre projet
            e-commerce et obtenir un devis gratuit et personnalisé.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" variant="secondary">
              <Link href="/contact?service=e-commerce">
                Demander un devis gratuit
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="bg-transparent text-primary-foreground hover:bg-primary-foreground/10"
            >
              <Link href="/portfolio?category=e-commerce">
                Voir nos réalisations
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
