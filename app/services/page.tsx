import Link from "next/link";
import {
  Check,
  ChevronRight,
  Code,
  Globe,
  Laptop,
  Lightbulb,
  Rocket,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ServiceFeature } from "@/components/service-feature";
import { PricingCard } from "@/components/pricing-card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image.js";

export default function ServicesPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="px-4 py-20 flex flex-col items-center md:py-28 bg-muted/30">
        <div className="container flex flex-col items-center text-center max-w-7xl">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Nos <span className="text-primary">Services</span>
          </h1>
          <p className="mt-6 max-w-3xl text-lg text-muted-foreground sm:text-xl">
            Des solutions web sur mesure pour répondre à tous vos besoins, de la
            simple vitrine au e-commerce complexe.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Button asChild size="lg">
              <Link href="/contact">Demander un devis</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/portfolio">Voir nos réalisations</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Tabs Section */}
      <section className="px-4 py-20 flex flex-col items-center">
        <div className="container max-w-7xl">
          <Tabs defaultValue="sites-vitrine" className="w-full">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-4">
              <TabsTrigger value="sites-vitrine">Sites Vitrine</TabsTrigger>
              <TabsTrigger value="e-commerce">E-commerce</TabsTrigger>
              <TabsTrigger value="applications-web">
                Applications Web
              </TabsTrigger>
              <TabsTrigger value="refonte">Refonte de Site</TabsTrigger>
            </TabsList>

            {/* Sites Vitrine */}
            <TabsContent value="sites-vitrine" className="mt-10">
              <div className="grid gap-10 md:grid-cols-2">
                <div>
                  <h2 className="text-3xl font-bold tracking-tight">
                    Sites Vitrine Professionnels
                  </h2>
                  <p className="mt-4 text-muted-foreground">
                    Présentez votre entreprise avec élégance grâce à un site web
                    vitrine moderne et performant. Nous concevons des sites qui
                    reflètent l'identité de votre marque et convertissent les
                    visiteurs en clients.
                  </p>
                  <div className="mt-8 space-y-4">
                    <ServiceFeature
                      icon={Rocket}
                      title="Design sur mesure"
                      description="Un design unique qui reflète l'identité de votre marque et se démarque de la concurrence."
                    />
                    <ServiceFeature
                      icon={Laptop}
                      title="Responsive design"
                      description="Une expérience optimale sur tous les appareils, des smartphones aux grands écrans."
                    />
                    <ServiceFeature
                      icon={Zap}
                      title="Performance optimisée"
                      description="Des temps de chargement rapides pour une meilleure expérience utilisateur et un meilleur référencement."
                    />
                    <ServiceFeature
                      icon={Globe}
                      title="SEO intégré"
                      description="Optimisation pour les moteurs de recherche dès la conception pour une meilleure visibilité."
                    />
                  </div>
                  <div className="mt-8">
                    <Button asChild>
                      <Link href="/services/sites-vitrine">
                        Plus d'infos{" "}
                        <ChevronRight className="ml-1 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <div className="relative w-full max-w-md">
                    <div className="absolute -left-4 -top-4 h-72 w-72 rounded-lg bg-primary/10"></div>
                    <Image
                      src="/placeholder.svg?height=500&width=500&text=Site+Vitrine"
                      alt="Exemple de site vitrine"
                      className="relative z-10 w-full rounded-lg border shadow-lg"
                      width={500}
                      height={500}
                    />
                  </div>
                </div>
              </div>

              <div className="mt-16">
                <h3 className="text-2xl font-bold">Fonctionnalités incluses</h3>
                <div className="mt-6 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">
                        Design personnalisé
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li className="flex items-start">
                          <Check className="mr-2 h-4 w-4 text-primary" />
                          <span>Maquettes sur mesure</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="mr-2 h-4 w-4 text-primary" />
                          <span>Respect de votre charte graphique</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="mr-2 h-4 w-4 text-primary" />
                          <span>Expérience utilisateur optimisée</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">
                        Pages essentielles
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li className="flex items-start">
                          <Check className="mr-2 h-4 w-4 text-primary" />
                          <span>Page d'accueil</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="mr-2 h-4 w-4 text-primary" />
                          <span>Présentation des services</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="mr-2 h-4 w-4 text-primary" />
                          <span>À propos & Contact</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">
                        Fonctionnalités techniques
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li className="flex items-start">
                          <Check className="mr-2 h-4 w-4 text-primary" />
                          <span>Formulaire de contact</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="mr-2 h-4 w-4 text-primary" />
                          <span>Intégration Google Maps</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="mr-2 h-4 w-4 text-primary" />
                          <span>Liens réseaux sociaux</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>

            {/* E-commerce */}
            <TabsContent value="e-commerce" className="mt-10">
              <div className="grid gap-10 md:grid-cols-2">
                <div>
                  <h2 className="text-3xl font-bold tracking-tight">
                    Solutions E-commerce
                  </h2>
                  <p className="mt-4 text-muted-foreground">
                    Vendez vos produits en ligne avec une boutique e-commerce
                    performante et sécurisée. Nous créons des expériences
                    d'achat fluides qui maximisent vos conversions et fidélisent
                    vos clients.
                  </p>
                  <div className="mt-8 space-y-4">
                    <ServiceFeature
                      icon={Laptop}
                      title="Boutique personnalisée"
                      description="Une boutique en ligne qui reflète l'identité de votre marque et met en valeur vos produits."
                    />
                    <ServiceFeature
                      icon={Zap}
                      title="Paiement sécurisé"
                      description="Intégration des principales solutions de paiement pour une expérience d'achat sécurisée."
                    />
                    <ServiceFeature
                      icon={Rocket}
                      title="Gestion des stocks"
                      description="Outils de gestion des stocks et des commandes pour simplifier votre activité."
                    />
                    <ServiceFeature
                      icon={Globe}
                      title="Marketing intégré"
                      description="Fonctionnalités marketing pour augmenter vos ventes et fidéliser vos clients."
                    />
                  </div>
                  <div className="mt-8">
                    <Button asChild>
                      <Link href="/services/e-commerce">
                        Plus d'infos{" "}
                        <ChevronRight className="ml-1 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <div className="relative w-full max-w-md">
                    <div className="absolute -left-4 -top-4 h-72 w-72 rounded-lg bg-primary/10"></div>
                    <Image
                      src="/placeholder.svg?height=500&width=500&text=E-commerce"
                      alt="Exemple de site e-commerce"
                      className="relative z-10 w-full rounded-lg border shadow-lg"
                      width={500}
                      height={500}
                    />
                  </div>
                </div>
              </div>

              <div className="mt-16">
                <h3 className="text-2xl font-bold">Fonctionnalités incluses</h3>
                <div className="mt-6 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">
                        Gestion de produits
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li className="flex items-start">
                          <Check className="mr-2 h-4 w-4 text-primary" />
                          <span>Catalogue de produits</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="mr-2 h-4 w-4 text-primary" />
                          <span>Gestion des stocks</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="mr-2 h-4 w-4 text-primary" />
                          <span>Produits variables</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">
                        Expérience d'achat
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li className="flex items-start">
                          <Check className="mr-2 h-4 w-4 text-primary" />
                          <span>Panier d'achat</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="mr-2 h-4 w-4 text-primary" />
                          <span>Processus de commande simplifié</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="mr-2 h-4 w-4 text-primary" />
                          <span>Comptes clients</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">
                        Paiement et livraison
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li className="flex items-start">
                          <Check className="mr-2 h-4 w-4 text-primary" />
                          <span>Passerelles de paiement</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="mr-2 h-4 w-4 text-primary" />
                          <span>Options de livraison</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="mr-2 h-4 w-4 text-primary" />
                          <span>Suivi des commandes</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>

            {/* Applications Web */}
            <TabsContent value="applications-web" className="mt-10">
              <div className="grid gap-10 md:grid-cols-2">
                <div>
                  <h2 className="text-3xl font-bold tracking-tight">
                    Applications Web Sur Mesure
                  </h2>
                  <p className="mt-4 text-muted-foreground">
                    Transformez vos idées en applications web performantes. Nous
                    développons des solutions sur mesure qui répondent
                    parfaitement à vos besoins métier et offrent une expérience
                    utilisateur exceptionnelle.
                  </p>
                  <div className="mt-8 space-y-4">
                    <ServiceFeature
                      icon={Code}
                      title="Développement sur mesure"
                      description="Des applications conçues spécifiquement pour répondre à vos besoins uniques."
                    />
                    <ServiceFeature
                      icon={Lightbulb}
                      title="Interface intuitive"
                      description="Des interfaces utilisateur intuitives qui améliorent l'expérience de vos utilisateurs."
                    />
                    <ServiceFeature
                      icon={Rocket}
                      title="Évolutivité"
                      description="Des solutions évolutives qui s'adaptent à la croissance de votre entreprise."
                    />
                    <ServiceFeature
                      icon={Zap}
                      title="Intégration"
                      description="Intégration avec vos systèmes existants et API tierces."
                    />
                  </div>
                  <div className="mt-8">
                    <Button asChild>
                      <Link href="/services/applications-web">
                        Plus d'infos{" "}
                        <ChevronRight className="ml-1 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <div className="relative w-full max-w-md">
                    <div className="absolute -left-4 -top-4 h-72 w-72 rounded-lg bg-primary/10"></div>
                    <Image
                      src="/placeholder.svg?height=500&width=500&text=Application+Web"
                      alt="Exemple d'application web"
                      className="relative z-10 w-full rounded-lg border shadow-lg"
                      width={500}
                      height={500}
                    />
                  </div>
                </div>
              </div>

              <div className="mt-16">
                <h3 className="text-2xl font-bold">Fonctionnalités incluses</h3>
                <div className="mt-6 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">
                        Fonctionnalités avancées
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li className="flex items-start">
                          <Check className="mr-2 h-4 w-4 text-primary" />
                          <span>Authentification sécurisée</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="mr-2 h-4 w-4 text-primary" />
                          <span>Tableaux de bord personnalisés</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="mr-2 h-4 w-4 text-primary" />
                          <span>Gestion des utilisateurs</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">
                        Technologies modernes
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li className="flex items-start">
                          <Check className="mr-2 h-4 w-4 text-primary" />
                          <span>Frameworks JavaScript modernes</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="mr-2 h-4 w-4 text-primary" />
                          <span>APIs RESTful</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="mr-2 h-4 w-4 text-primary" />
                          <span>Bases de données optimisées</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">
                        Support et maintenance
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li className="flex items-start">
                          <Check className="mr-2 h-4 w-4 text-primary" />
                          <span>Documentation technique</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="mr-2 h-4 w-4 text-primary" />
                          <span>Formation des utilisateurs</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="mr-2 h-4 w-4 text-primary" />
                          <span>Support technique</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>

            {/* Refonte de Site */}
            <TabsContent value="refonte" className="mt-10">
              <div className="grid gap-10 md:grid-cols-2">
                <div>
                  <h2 className="text-3xl font-bold tracking-tight">
                    Refonte de Site Web
                  </h2>
                  <p className="mt-4 text-muted-foreground">
                    Donnez un nouveau souffle à votre présence en ligne. Notre
                    service de refonte transforme votre site existant en une
                    plateforme moderne, performante et adaptée aux standards
                    actuels du web.
                  </p>
                  <div className="mt-8 space-y-4">
                    <ServiceFeature
                      icon={Rocket}
                      title="Analyse complète"
                      description="Audit approfondi de votre site actuel pour identifier les points d'amélioration."
                    />
                    <ServiceFeature
                      icon={Laptop}
                      title="Design moderne"
                      description="Refonte graphique pour un design contemporain qui valorise votre marque."
                    />
                    <ServiceFeature
                      icon={Zap}
                      title="Optimisation technique"
                      description="Amélioration des performances et de l'expérience utilisateur."
                    />
                    <ServiceFeature
                      icon={Globe}
                      title="Migration de contenu"
                      description="Transfert et optimisation de votre contenu existant."
                    />
                  </div>
                  <div className="mt-8">
                    <Button asChild>
                      <Link href="/services/refonte">
                        Plus d'infos{" "}
                        <ChevronRight className="ml-1 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <div className="relative w-full max-w-md">
                    <div className="absolute -left-4 -top-4 h-72 w-72 rounded-lg bg-primary/10"></div>
                    <Image
                      src="/placeholder.svg?height=500&width=500&text=Refonte+Site"
                      alt="Exemple de refonte de site"
                      className="relative z-10 w-full rounded-lg border shadow-lg"
                      width={500}
                      height={500}
                    />
                  </div>
                </div>
              </div>

              <div className="mt-16">
                <h3 className="text-2xl font-bold">Fonctionnalités incluses</h3>
                <div className="mt-6 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">
                        Audit et stratégie
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li className="flex items-start">
                          <Check className="mr-2 h-4 w-4 text-primary" />
                          <span>Analyse de l'existant</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="mr-2 h-4 w-4 text-primary" />
                          <span>Étude de la concurrence</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="mr-2 h-4 w-4 text-primary" />
                          <span>Définition des objectifs</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">
                        Refonte technique
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li className="flex items-start">
                          <Check className="mr-2 h-4 w-4 text-primary" />
                          <span>Architecture optimisée</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="mr-2 h-4 w-4 text-primary" />
                          <span>Technologies modernes</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="mr-2 h-4 w-4 text-primary" />
                          <span>Optimisation des performances</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">
                        Migration et lancement
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li className="flex items-start">
                          <Check className="mr-2 h-4 w-4 text-primary" />
                          <span>Migration de contenu</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="mr-2 h-4 w-4 text-primary" />
                          <span>Redirections SEO</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="mr-2 h-4 w-4 text-primary" />
                          <span>Tests et déploiement</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="px-4 py-20 flex flex-col items-center bg-muted/30">
        <div className="container max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Nos Forfaits
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Des solutions adaptées à tous les budgets et à tous les besoins.
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
              ]}
              buttonText="Demander un devis"
              buttonLink="/contact?forfait=essentiel"
            />
            <PricingCard
              title="Business"
              price="À partir de 3 500 €"
              description="Pour les entreprises en croissance qui ont besoin de plus de fonctionnalités."
              features={[
                "Site jusqu'à 10 pages",
                "E-commerce jusqu'à 50 produits",
                "Blog intégré",
                "Optimisation SEO avancée",
                "Intégration réseaux sociaux",
                "Hébergement et maintenance pour 1 an",
              ]}
              buttonText="Demander un devis"
              buttonLink="/contact?forfait=business"
              highlighted={true}
            />
            <PricingCard
              title="Premium"
              price="À partir de 7 500 €"
              description="Pour les entreprises qui ont besoin d'une solution complète et personnalisée."
              features={[
                "Site illimité",
                "E-commerce illimité",
                "Application web sur mesure",
                "Stratégie SEO complète",
                "Intégration CRM",
                "Formation et support premium",
                "Hébergement et maintenance pour 2 ans",
              ]}
              buttonText="Demander un devis"
              buttonLink="/contact?forfait=premium"
            />
          </div>
          <div className="mt-12 text-center">
            <p className="text-muted-foreground">
              Besoin d'une solution sur mesure ?{" "}
              <Link href="/contact" className="text-primary">
                Contactez-nous
              </Link>{" "}
              pour discuter de votre projet.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="px-4 py-20 flex flex-col items-center">
        <div className="container max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Questions Fréquentes
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Vous avez des questions ? Nous avons les réponses.
            </p>
          </div>
          <div className="mt-16 mx-auto max-w-3xl">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  Combien de temps faut-il pour créer un site web ?
                </AccordionTrigger>
                <AccordionContent>
                  La durée de création d'un site web dépend de sa complexité. Un
                  site vitrine simple peut être réalisé en 4 à 6 semaines,
                  tandis qu'un e-commerce ou une application web sur mesure peut
                  prendre de 8 à 12 semaines. Nous établissons un calendrier
                  précis lors de la phase de découverte du projet.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>
                  Quels sont les coûts associés à la création d'un site web ?
                </AccordionTrigger>
                <AccordionContent>
                  Le coût d'un site web varie en fonction de ses
                  fonctionnalités, de sa complexité et de vos besoins
                  spécifiques. Nos forfaits commencent à 1 500 € pour un site
                  vitrine simple. Pour un devis précis adapté à votre projet,
                  n'hésitez pas à nous contacter.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>
                  Proposez-vous des services de maintenance ?
                </AccordionTrigger>
                <AccordionContent>
                  Oui, nous proposons des forfaits de maintenance pour assurer
                  le bon fonctionnement de votre site web. Ces forfaits incluent
                  les mises à jour de sécurité, les sauvegardes régulières, les
                  corrections de bugs et un support technique. Nous pouvons
                  également vous proposer des services d'évolution de votre
                  site.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>
                  Comment se déroule le processus de création ?
                </AccordionTrigger>
                <AccordionContent>
                  Notre processus se déroule en plusieurs étapes : découverte
                  (analyse de vos besoins), conception (wireframes et
                  maquettes), développement, tests, et enfin mise en ligne. Nous
                  vous impliquons à chaque étape pour garantir que le résultat
                  final correspond parfaitement à vos attentes.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger>
                  Puis-je mettre à jour mon site moi-même ?
                </AccordionTrigger>
                <AccordionContent>
                  Oui, nous développons des sites avec des systèmes de gestion
                  de contenu (CMS) qui vous permettent de mettre à jour
                  facilement votre contenu. Nous vous formons à l'utilisation de
                  ces outils et restons disponibles pour vous accompagner si
                  nécessaire.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-6">
                <AccordionTrigger>
                  Que comprend l'optimisation SEO de mon site ?
                </AccordionTrigger>
                <AccordionContent>
                  Notre optimisation SEO de base comprend la structure technique
                  du site, les méta-données, les balises sémantiques, la vitesse
                  de chargement et la compatibilité mobile. Pour une stratégie
                  SEO plus complète, nous proposons des services additionnels
                  incluant l'analyse de mots-clés, la création de contenu
                  optimisé et le suivi des performances.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 py-20 flex flex-col items-center bg-primary text-primary-foreground">
        <div className="container text-center max-w-7xl">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Prêt à lancer votre projet ?
          </h2>
          <p className="mt-4 text-lg mx-auto max-w-2xl">
            Contactez-nous dès aujourd'hui pour discuter de votre projet et
            obtenir un devis gratuit.
          </p>
          <Button asChild size="lg" variant="secondary" className="mt-8">
            <Link href="/contact">Demander un devis gratuit</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
