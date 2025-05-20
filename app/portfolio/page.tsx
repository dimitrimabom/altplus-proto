"use client";

import { useState } from "react";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ProjectDialog } from "@/components/project-dialog";
import Image from "next/image.js";

// Types pour les projets
interface Project {
  id: string;
  title: string;
  client: string;
  category: "site-vitrine" | "e-commerce" | "application-web" | "refonte";
  categoryLabel: string;
  description: string;
  image: string;
  tags: string[];
  link?: string;
  year: string;
  challenge: string;
  solution: string;
  results: string[];
  testimonial?: {
    content: string;
    author: string;
    role: string;
  };
  gallery: string[];
}

export default function PortfolioPage() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Données des projets
  const projects: Project[] = [
    {
      id: "eco-store",
      title: "EcoStore",
      client: "Nature & Bio",
      category: "e-commerce",
      categoryLabel: "E-commerce",
      description:
        "Boutique en ligne de produits écologiques et biologiques avec plus de 500 références et un système de fidélité.",
      image: "/placeholder.svg?height=600&width=800&text=EcoStore",
      tags: [
        "E-commerce",
        "Responsive",
        "Paiement en ligne",
        "Gestion de stock",
      ],
      link: "https://example.com/ecostore",
      year: "2024",
      challenge:
        "Créer une boutique en ligne performante capable de gérer un large catalogue de produits avec des variations complexes tout en offrant une expérience d'achat fluide.",
      solution:
        "Nous avons développé une plateforme e-commerce sur mesure avec un système de filtrage avancé, un processus de commande simplifié et une intégration complète avec leur système de gestion des stocks.",
      results: [
        "Augmentation des ventes en ligne de 45% en 3 mois",
        "Temps de chargement des pages réduit de 60%",
        "Taux de conversion amélioré de 3,2% à 5,8%",
      ],
      testimonial: {
        content:
          "L'équipe d'AltPlus a transformé notre vision en une boutique en ligne performante qui a dépassé nos attentes. Leur expertise technique et leur compréhension de nos besoins ont fait toute la différence.",
        author: "Marie Dubois",
        role: "Directrice Marketing, Nature & Bio",
      },
      gallery: [
        "/placeholder.svg?height=600&width=800&text=EcoStore+1",
        "/placeholder.svg?height=600&width=800&text=EcoStore+2",
        "/placeholder.svg?height=600&width=800&text=EcoStore+3",
      ],
    },
    {
      id: "archi-design",
      title: "ArchiDesign",
      client: "Studio d'Architecture Moderne",
      category: "site-vitrine",
      categoryLabel: "Site Vitrine",
      description:
        "Site vitrine élégant pour un studio d'architecture, mettant en valeur leurs projets avec un design minimaliste et immersif.",
      image: "/placeholder.svg?height=600&width=800&text=ArchiDesign",
      tags: ["Site Vitrine", "Portfolio", "Animation", "Galerie"],
      link: "https://example.com/archidesign",
      year: "2024",
      challenge:
        "Créer un site qui reflète l'esthétique minimaliste et moderne du studio tout en mettant en valeur leurs projets architecturaux de manière immersive.",
      solution:
        "Nous avons conçu un site avec une navigation fluide, des animations subtiles et une galerie de projets interactive qui permet aux visiteurs d'explorer les réalisations du studio en détail.",
      results: [
        "Augmentation de 60% des demandes de devis",
        "Temps moyen passé sur le site multiplié par 2",
        "Présentation dans plusieurs magazines de design web",
      ],
      testimonial: {
        content:
          "AltPlus a parfaitement compris notre vision esthétique et l'a traduite en un site web qui nous représente parfaitement. Leur attention aux détails et leur créativité ont fait de ce projet un véritable succès.",
        author: "Jean Moreau",
        role: "Fondateur, Studio d'Architecture Moderne",
      },
      gallery: [
        "/placeholder.svg?height=600&width=800&text=ArchiDesign+1",
        "/placeholder.svg?height=600&width=800&text=ArchiDesign+2",
        "/placeholder.svg?height=600&width=800&text=ArchiDesign+3",
      ],
    },
    {
      id: "tech-dashboard",
      title: "TechDashboard",
      client: "InnoTech Solutions",
      category: "application-web",
      categoryLabel: "Application Web",
      description:
        "Application web de gestion de projets et de ressources avec tableaux de bord personnalisables et rapports en temps réel.",
      image: "/placeholder.svg?height=600&width=800&text=TechDashboard",
      tags: ["Application Web", "Dashboard", "Analytics", "SaaS"],
      year: "2023",
      challenge:
        "Développer une application web complexe permettant à l'entreprise de gérer efficacement ses projets, ses ressources et ses clients avec des données en temps réel.",
      solution:
        "Nous avons créé une application web sur mesure avec des tableaux de bord personnalisables, un système de reporting avancé et des intégrations avec leurs outils existants.",
      results: [
        "Réduction de 30% du temps consacré à la gestion de projet",
        "Amélioration de 25% de l'allocation des ressources",
        "ROI atteint en moins de 6 mois",
      ],
      gallery: [
        "/placeholder.svg?height=600&width=800&text=TechDashboard+1",
        "/placeholder.svg?height=600&width=800&text=TechDashboard+2",
        "/placeholder.svg?height=600&width=800&text=TechDashboard+3",
      ],
    },
    {
      id: "luxury-brand",
      title: "Luxury Brand",
      client: "Élégance Parisienne",
      category: "refonte",
      categoryLabel: "Refonte",
      description:
        "Refonte complète du site d'une marque de luxe, avec une expérience utilisateur immersive et un design haut de gamme.",
      image: "/placeholder.svg?height=600&width=800&text=Luxury+Brand",
      tags: ["Refonte", "Luxe", "E-commerce", "UX Design"],
      link: "https://example.com/luxury",
      year: "2023",
      challenge:
        "Moderniser le site vieillissant d'une marque de luxe tout en préservant son identité et en améliorant l'expérience d'achat en ligne.",
      solution:
        "Nous avons réalisé une refonte complète avec un design élégant, des animations subtiles et une expérience d'achat simplifiée, tout en optimisant les performances techniques.",
      results: [
        "Augmentation du taux de conversion de 120%",
        "Réduction du taux de rebond de 35%",
        "Augmentation du panier moyen de 45%",
      ],
      testimonial: {
        content:
          "La refonte de notre site par AltPlus a transformé notre présence en ligne. L'élégance du design et la fluidité de l'expérience utilisateur correspondent parfaitement à notre image de marque haut de gamme.",
        author: "Sophie Laurent",
        role: "Directrice Marketing, Élégance Parisienne",
      },
      gallery: [
        "/placeholder.svg?height=600&width=800&text=Luxury+Brand+1",
        "/placeholder.svg?height=600&width=800&text=Luxury+Brand+2",
        "/placeholder.svg?height=600&width=800&text=Luxury+Brand+3",
      ],
    },
    {
      id: "food-delivery",
      title: "FoodExpress",
      client: "Réseau de Restaurants Locaux",
      category: "application-web",
      categoryLabel: "Application Web",
      description:
        "Plateforme de commande et de livraison de repas pour un réseau de restaurants locaux, avec suivi en temps réel.",
      image: "/placeholder.svg?height=600&width=800&text=FoodExpress",
      tags: ["Application Web", "Livraison", "Géolocalisation", "Mobile"],
      year: "2023",
      challenge:
        "Créer une plateforme permettant à un réseau de restaurants locaux de proposer des commandes en ligne et des livraisons sans dépendre des grandes plateformes et de leurs commissions élevées.",
      solution:
        "Nous avons développé une application web progressive avec commande en ligne, paiement sécurisé, suivi de livraison en temps réel et un back-office complet pour les restaurateurs.",
      results: [
        "Plus de 10 000 commandes traitées dans les 3 premiers mois",
        "Économie de 15% sur les commissions par rapport aux plateformes traditionnelles",
        "Fidélisation client améliorée de 40%",
      ],
      gallery: [
        "/placeholder.svg?height=600&width=800&text=FoodExpress+1",
        "/placeholder.svg?height=600&width=800&text=FoodExpress+2",
        "/placeholder.svg?height=600&width=800&text=FoodExpress+3",
      ],
    },
    {
      id: "travel-blog",
      title: "Voyages & Découvertes",
      client: "Blogueur Voyage",
      category: "site-vitrine",
      categoryLabel: "Site Vitrine",
      description:
        "Blog de voyage avec fonctionnalités avancées, monétisation et intégration des réseaux sociaux pour un influenceur.",
      image:
        "/placeholder.svg?height=600&width=800&text=Voyages+et+Découvertes",
      tags: ["Blog", "Contenu", "Monétisation", "SEO"],
      link: "https://example.com/voyages",
      year: "2022",
      challenge:
        "Créer un blog de voyage performant et visuellement attrayant, optimisé pour le référencement et la monétisation, avec une forte intégration des réseaux sociaux.",
      solution:
        "Nous avons développé un site sur mesure avec un design immersif, des fonctionnalités avancées de blog, une optimisation SEO poussée et des options de monétisation intégrées.",
      results: [
        "Trafic organique multiplié par 3 en 6 mois",
        "Temps de chargement réduit de 70%",
        "Revenus publicitaires augmentés de 85%",
      ],
      testimonial: {
        content:
          "Mon blog est devenu mon activité principale grâce au travail d'AltPlus. Leur expertise en SEO et leur design captivant ont transformé mon hobby en une véritable entreprise rentable.",
        author: "Thomas Leroy",
        role: "Fondateur, Voyages & Découvertes",
      },
      gallery: [
        "/placeholder.svg?height=600&width=800&text=Voyages+1",
        "/placeholder.svg?height=600&width=800&text=Voyages+2",
        "/placeholder.svg?height=600&width=800&text=Voyages+3",
      ],
    },
    {
      id: "health-clinic",
      title: "Centre Médical",
      client: "Clinique Santé Plus",
      category: "refonte",
      categoryLabel: "Refonte",
      description:
        "Refonte du site d'un centre médical avec système de prise de rendez-vous en ligne et espace patient sécurisé.",
      image: "/placeholder.svg?height=600&width=800&text=Centre+Médical",
      tags: ["Santé", "Rendez-vous", "Espace client", "Accessibilité"],
      year: "2022",
      challenge:
        "Moderniser le site obsolète d'un centre médical en y ajoutant un système de prise de rendez-vous en ligne et un espace patient sécurisé, tout en respectant les normes d'accessibilité.",
      solution:
        "Nous avons réalisé une refonte complète avec un design épuré, un système de rendez-vous intuitif, un espace patient sécurisé et une conformité totale aux normes d'accessibilité RGAA.",
      results: [
        "Réduction de 40% des appels pour les prises de rendez-vous",
        "Satisfaction patient améliorée de 35%",
        "Conformité totale aux normes d'accessibilité",
      ],
      gallery: [
        "/placeholder.svg?height=600&width=800&text=Centre+Médical+1",
        "/placeholder.svg?height=600&width=800&text=Centre+Médical+2",
        "/placeholder.svg?height=600&width=800&text=Centre+Médical+3",
      ],
    },
    {
      id: "fashion-store",
      title: "ModaStyle",
      client: "Boutique de Mode",
      category: "e-commerce",
      categoryLabel: "E-commerce",
      description:
        "Boutique en ligne de vêtements et accessoires de mode avec expérience d'achat personnalisée et recommandations produits.",
      image: "/placeholder.svg?height=600&width=800&text=ModaStyle",
      tags: ["E-commerce", "Mode", "Personnalisation", "Mobile"],
      link: "https://example.com/modastyle",
      year: "2022",
      challenge:
        "Créer une boutique en ligne de mode avec une expérience d'achat personnalisée, des recommandations de produits intelligentes et une présentation visuelle attrayante des articles.",
      solution:
        "Nous avons développé un e-commerce sur mesure avec un design élégant, un système de recommandation basé sur les préférences utilisateur et une visualisation avancée des produits.",
      results: [
        "Augmentation du taux de conversion de 4,2% à 7,5%",
        "Valeur du panier moyen augmentée de 30%",
        "Taux de retour des clients de 65% sur 6 mois",
      ],
      gallery: [
        "/placeholder.svg?height=600&width=800&text=ModaStyle+1",
        "/placeholder.svg?height=600&width=800&text=ModaStyle+2",
        "/placeholder.svg?height=600&width=800&text=ModaStyle+3",
      ],
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="px-4 py-20 flex flex-col items-center md:py-28 bg-muted/30">
        <div className="max-w-7xl container flex flex-col items-center text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Nos <span className="text-primary">Réalisations</span>
          </h1>
          <p className="mt-6 max-w-3xl text-lg text-muted-foreground sm:text-xl">
            {`Découvrez une sélection de projets que nous avons réalisés pour nos
            clients dans différents secteurs d'activité.`}
          </p>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="px-4 py-20 flex flex-col items-center">
        <div className="max-w-7xl container">
          <Tabs defaultValue="all" className="w-full">
            <div className="flex justify-center">
              <TabsList className="mb-12">
                <TabsTrigger value="all">Tous les projets</TabsTrigger>
                <TabsTrigger value="site-vitrine">Sites Vitrine</TabsTrigger>
                <TabsTrigger value="e-commerce">E-commerce</TabsTrigger>
                <TabsTrigger value="application-web">
                  Applications Web
                </TabsTrigger>
                <TabsTrigger value="refonte">Refonte</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="all" className="mt-6">
              <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {projects.map((project) => (
                  <ProjectCard
                    key={project.id}
                    project={project}
                    onSelect={() => setSelectedProject(project)}
                  />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="site-vitrine" className="mt-6">
              <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {projects
                  .filter((project) => project.category === "site-vitrine")
                  .map((project) => (
                    <ProjectCard
                      key={project.id}
                      project={project}
                      onSelect={() => setSelectedProject(project)}
                    />
                  ))}
              </div>
            </TabsContent>

            <TabsContent value="e-commerce" className="mt-6">
              <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {projects
                  .filter((project) => project.category === "e-commerce")
                  .map((project) => (
                    <ProjectCard
                      key={project.id}
                      project={project}
                      onSelect={() => setSelectedProject(project)}
                    />
                  ))}
              </div>
            </TabsContent>

            <TabsContent value="application-web" className="mt-6">
              <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {projects
                  .filter((project) => project.category === "application-web")
                  .map((project) => (
                    <ProjectCard
                      key={project.id}
                      project={project}
                      onSelect={() => setSelectedProject(project)}
                    />
                  ))}
              </div>
            </TabsContent>

            <TabsContent value="refonte" className="mt-6">
              <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {projects
                  .filter((project) => project.category === "refonte")
                  .map((project) => (
                    <ProjectCard
                      key={project.id}
                      project={project}
                      onSelect={() => setSelectedProject(project)}
                    />
                  ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="px-4 py-20 flex flex-col items-center bg-muted/30">
        <div className="max-w-7xl container">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Ce que nos clients disent
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              {`La satisfaction de nos clients est notre priorité absolue. Voici
              ce qu'ils pensent de notre travail.`}
            </p>
          </div>
          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects
              .filter((project) => project.testimonial)
              .slice(0, 3)
              .map((project) => (
                <Card key={project.id} className="h-full flex flex-col">
                  <CardHeader>
                    <CardTitle className="text-lg">{project.client}</CardTitle>
                    <CardDescription>{project.title}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <p className="text-muted-foreground">
                      {`"${project.testimonial?.content}"`}
                    </p>
                  </CardContent>
                  <CardFooter className="flex flex-col items-start">
                    <div className="font-medium">
                      {project.testimonial?.author}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {project.testimonial?.role}
                    </div>
                  </CardFooter>
                </Card>
              ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 py-20 flex flex-col items-center">
        <div className="max-w-7xl container text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Vous avez un projet en tête ?
          </h2>
          <p className="mt-4 text-lg mx-auto max-w-2xl text-muted-foreground">
            Contactez-nous pour discuter de votre projet et découvrir comment
            nous pouvons vous aider à le concrétiser.
          </p>
          <Button asChild size="lg" className="mt-8">
            <Link href="/contact">Parlons de votre projet</Link>
          </Button>
        </div>
      </section>

      {/* Project Dialog */}
      {selectedProject && (
        <ProjectDialog
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
          open={!!selectedProject}
        />
      )}
    </div>
  );
}

interface ProjectCardProps {
  project: Project;
  onSelect: () => void;
}

function ProjectCard({ project, onSelect }: ProjectCardProps) {
  return (
    <Card className="h-full flex flex-col overflow-hidden group">
      <div className="aspect-video w-full overflow-hidden bg-muted">
        <Image
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          width={800}
          height={600}
        />
      </div>
      <CardHeader className="p-4 pb-2">
        <div className="flex items-center justify-between">
          <Badge variant="outline" className="mb-2">
            {project.categoryLabel}
          </Badge>
          <span className="text-sm text-muted-foreground">{project.year}</span>
        </div>
        <CardTitle className="line-clamp-1">{project.title}</CardTitle>
        <CardDescription className="line-clamp-1">
          {project.client}
        </CardDescription>
      </CardHeader>
      <CardContent className="p-4 pt-0 flex-1">
        <p className="text-sm text-muted-foreground line-clamp-3">
          {project.description}
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags.slice(0, 3).map((tag) => (
            <Badge key={tag} variant="secondary" className="text-xs">
              {tag}
            </Badge>
          ))}
          {project.tags.length > 3 && (
            <Badge variant="secondary" className="text-xs">
              +{project.tags.length - 3}
            </Badge>
          )}
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0 flex justify-between">
        <Button variant="ghost" size="sm" onClick={onSelect}>
          Voir le projet
        </Button>
        {project.link && (
          <Button variant="outline" size="icon" asChild>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              title="Visiter le site"
            >
              <ExternalLink className="h-4 w-4" />
            </a>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}
