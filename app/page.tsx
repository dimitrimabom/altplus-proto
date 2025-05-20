"use client";

import Link from "next/link";
import { ArrowRight, Code, Globe, Laptop, RefreshCcw, Rocket, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Testimonials } from "@/components/testimonials";
import { BlogPreview } from "@/components/blog-preview";
import { useEffect, useRef } from "react";
import { useTheme } from "next-themes";
import Image from "next/image.js";

export default function Home() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size to fill the window
    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    setCanvasSize();

    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;

      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 0.1;
        this.speedX = Math.random() * 2 - 1;
        this.speedY = Math.random() * 2 - 1;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x > canvas.width) this.x = 0;
        if (this.x < 0) this.x = canvas.width;
        if (this.y > canvas.height) this.y = 0;
        if (this.y < 0) this.y = canvas.height;
      }

      draw(theme: string) {
        ctx!.fillStyle =
          theme === "dark"
            ? "rgba(255,255,255,0.8)"
            : "rgba(255,0,0,0.7)";
        ctx?.beginPath();
        ctx?.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx?.fill();
      }
    }

    let particles: Particle[] = [];
    const particleCount = 100;

    const createParticles = () => {
      particles = [];
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
      }
    };
    createParticles();

    function animate() {
      ctx?.clearRect(0, 0, canvas.width, canvas.height);

      for (const particle of particles) {
        particle.update();
        particle.draw(resolvedTheme || "light");
      }

      requestAnimationFrame(animate);
    }

    animate();

    const handleResize = () => {
      setCanvasSize();
      createParticles();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [resolvedTheme]);
  return (
    <div className="flex items-center justify-center flex-col">
      {/* Hero Section */}

      <canvas
        ref={canvasRef}
        className="absolute inset-0 h-full w-full bg-bacgkground/50"
      />
      <section className="px-4 py-20 md:py-28 max-w-7xl h-screen flex items-center bg-transparent">
        <div className="container flex flex-col items-center text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            Créez votre présence en ligne avec{" "}
            <span className="text-primary">AltPlus</span>
          </h1>
          <p className="mt-6 max-w-3xl text-lg text-muted-foreground sm:text-xl">
            Nous concevons et développons des sites web modernes, rapides et
            accessibles qui aident votre entreprise à se démarquer.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Button asChild size="lg">
              <Link href="/contact">Commencer un projet</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/portfolio">Voir nos réalisations</Link>
            </Button>
          </div>
          {/* <div className="mt-16 w-full max-w-5xl rounded-lg border bg-card/50 p-4 shadow-sm">
            <Image
              src="/placeholder.svg?height=600&width=1200"
              alt="Aperçu de site web"
              className="w-full rounded-md object-cover"
              width={1200}
              height={600}
            />
          </div> */}
        </div>
      </section>

      {/* Services Section */}
      <section className="px-4 py-20 bg-muted/30 w-full flex flex-col items-center">
        <div className="container max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Nos Services
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Des solutions web complètes pour répondre à tous vos besoins.
            </p>
          </div>
          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader className="pb-2">
                <Globe className="h-10 w-10 text-primary mb-2" />
                <CardTitle>Sites Vitrine</CardTitle>
                <CardDescription>
                  Présentez votre entreprise avec un site web professionnel et
                  attrayant.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-2 text-sm">
                  <li>Design personnalisé</li>
                  <li>Responsive sur tous les appareils</li>
                  <li>Optimisé pour le référencement</li>
                  <li>Intégration de formulaires de contact</li>
                </ul>
                <Button variant="link" className="mt-4 p-0 h-auto" asChild>
                  <Link href="/services/sites-vitrine">
                    En savoir plus <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <Laptop className="h-10 w-10 text-primary mb-2" />
                <CardTitle>E-commerce</CardTitle>
                <CardDescription>
                  Vendez vos produits en ligne avec une boutique performante.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-2 text-sm">
                  <li>Catalogue de produits</li>
                  <li>Panier d'achat sécurisé</li>
                  <li>Passerelles de paiement</li>
                  <li>Gestion des stocks</li>
                </ul>
                <Button variant="link" className="mt-4 p-0 h-auto" asChild>
                  <Link href="/services/e-commerce">
                    En savoir plus <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <Code className="h-10 w-10 text-primary mb-2" />
                <CardTitle>Applications Web</CardTitle>
                <CardDescription>
                  Développez des applications sur mesure pour votre entreprise.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-2 text-sm">
                  <li>Développement sur mesure</li>
                  <li>Interfaces utilisateur intuitives</li>
                  <li>Intégration avec vos systèmes</li>
                  <li>Maintenance et support</li>
                </ul>
                <Button variant="link" className="mt-4 p-0 h-auto" asChild>
                  <Link href="/services/applications-web">
                    En savoir plus <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <RefreshCcw className="h-10 w-10 text-primary mb-2" />
                <CardTitle>Refonte de Site Web</CardTitle>
                <CardDescription>
                  Modernisez votre site pour améliorer son design, sa
                  performance et son impact.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-2 text-sm">
                  <li>Analyse de l’existant</li>
                  <li>Design moderne et responsive</li>
                  <li>Optimisation SEO et performance</li>
                  <li>Migration et accompagnement</li>
                </ul>
                <Button variant="link" className="mt-4 p-0 h-auto" asChild>
                  <Link href="/services/refonte">
                    En savoir plus <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="px-4 py-20 w-full flex flex-col items-center">
        <div className="container max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Notre Processus
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Une approche méthodique pour créer des sites web qui répondent à
              vos objectifs.
            </p>
          </div>
          <div className="mt-16">
            <Tabs defaultValue="discovery" className="w-full">
              <TabsList className="grid w-full grid-cols-2 md:grid-cols-4">
                <TabsTrigger value="discovery">Découverte</TabsTrigger>
                <TabsTrigger value="design">Design</TabsTrigger>
                <TabsTrigger value="development">Développement</TabsTrigger>
                <TabsTrigger value="launch">Lancement</TabsTrigger>
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
                      cible.
                    </p>
                    <ul className="mt-4 space-y-2">
                      <li className="flex items-center gap-2">
                        <Rocket className="h-5 w-5 text-primary" />
                        <span>Analyse de vos objectifs commerciaux</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Users className="h-5 w-5 text-primary" />
                        <span>Identification de votre audience</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Globe className="h-5 w-5 text-primary" />
                        <span>Étude de la concurrence</span>
                      </li>
                    </ul>
                  </div>
                  <div className="flex items-center justify-center">
                    <Image
                      src="/placeholder.svg?height=300&width=400"
                      alt="Phase de découverte"
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
                      offrent une expérience utilisateur optimale.
                    </p>
                    <ul className="mt-4 space-y-2">
                      <li className="flex items-center gap-2">
                        <Rocket className="h-5 w-5 text-primary" />
                        <span>Wireframes et prototypes</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Users className="h-5 w-5 text-primary" />
                        <span>Design responsive</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Globe className="h-5 w-5 text-primary" />
                        <span>Expérience utilisateur intuitive</span>
                      </li>
                    </ul>
                  </div>
                  <div className="flex items-center justify-center">
                    <Image
                      src="/placeholder.svg?height=300&width=400"
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
                      adaptées à vos besoins.
                    </p>
                    <ul className="mt-4 space-y-2">
                      <li className="flex items-center gap-2">
                        <Rocket className="h-5 w-5 text-primary" />
                        <span>Développement front-end</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Users className="h-5 w-5 text-primary" />
                        <span>Intégration back-end</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Globe className="h-5 w-5 text-primary" />
                        <span>Tests et optimisation</span>
                      </li>
                    </ul>
                  </div>
                  <div className="flex items-center justify-center">
                    <Image
                      src="/placeholder.svg?height=300&width=400"
                      alt="Phase de développement"
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
                      fonctionnement.
                    </p>
                    <ul className="mt-4 space-y-2">
                      <li className="flex items-center gap-2">
                        <Rocket className="h-5 w-5 text-primary" />
                        <span>Déploiement sécurisé</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Users className="h-5 w-5 text-primary" />
                        <span>Formation à l'utilisation</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Globe className="h-5 w-5 text-primary" />
                        <span>Support et maintenance</span>
                      </li>
                    </ul>
                  </div>
                  <div className="flex items-center justify-center">
                    <Image
                      src="/placeholder.svg?height=300&width=400"
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

      {/* Testimonials Section */}
      <Testimonials />

      {/* Blog Preview Section */}
      <BlogPreview />

      {/* CTA Section */}
      <section className="px-4 py-20 bg-primary text-primary-foreground w-full flex flex-col items-center">
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
