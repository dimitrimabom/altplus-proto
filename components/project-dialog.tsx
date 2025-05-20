"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight, ExternalLink, X } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";

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

interface ProjectDialogProps {
  project: Project;
  onClose: () => void;
  open: boolean;
}

export function ProjectDialog({ project, onClose, open }: ProjectDialogProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % project.gallery.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prev) => (prev - 1 + project.gallery.length) % project.gallery.length
    );
  };

  return (
    <Dialog open={open} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex items-center justify-between">
            <Badge variant="outline">{project.categoryLabel}</Badge>
            <Button
              variant="ghost"
              size="icon"
              onClick={onClose}
              className="absolute right-4 top-4"
            >
              <X className="h-4 w-4" />
              <span className="sr-only">Fermer</span>
            </Button>
          </div>
          <DialogTitle className="text-2xl">{project.title}</DialogTitle>
          <DialogDescription>
            <span className="font-medium">{project.client}</span> ·{" "}
            {project.year}
          </DialogDescription>
        </DialogHeader>

        {/* Image Gallery */}
        <div className="relative mt-4 aspect-video w-full overflow-hidden rounded-lg bg-muted">
          <Image
            src={project.gallery[currentImageIndex] || "/placeholder.svg"}
            alt={`${project.title} - Image ${currentImageIndex + 1}`}
            className="h-full w-full object-cover"
            width={800}
            height={600}
          />
          {project.gallery.length > 1 && (
            <>
              <Button
                variant="ghost"
                size="icon"
                onClick={prevImage}
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background/90"
              >
                <ArrowLeft className="h-4 w-4" />
                <span className="sr-only">Image précédente</span>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={nextImage}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background/90"
              >
                <ArrowRight className="h-4 w-4" />
                <span className="sr-only">Image suivante</span>
              </Button>
              <div className="absolute bottom-2 left-1/2 flex -translate-x-1/2 gap-1">
                {project.gallery.map((_, index) => (
                  <button
                    key={index}
                    className={`h-2 w-2 rounded-full ${
                      index === currentImageIndex
                        ? "bg-primary"
                        : "bg-background/80"
                    }`}
                    onClick={() => setCurrentImageIndex(index)}
                  >
                    <span className="sr-only">Image {index + 1}</span>
                  </button>
                ))}
              </div>
            </>
          )}
        </div>

        {/* Tags */}
        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <Badge key={tag} variant="secondary">
              {tag}
            </Badge>
          ))}
        </div>

        {/* Project Details */}
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <div>
            <h3 className="text-lg font-medium">Le Projet</h3>
            <p className="mt-2 text-muted-foreground">{project.description}</p>
          </div>
          <div>
            <h3 className="text-lg font-medium">Le Challenge</h3>
            <p className="mt-2 text-muted-foreground">{project.challenge}</p>
          </div>
        </div>

        <div className="mt-6">
          <h3 className="text-lg font-medium">Notre Solution</h3>
          <p className="mt-2 text-muted-foreground">{project.solution}</p>
        </div>

        <div className="mt-6">
          <h3 className="text-lg font-medium">Résultats</h3>
          <ul className="mt-2 space-y-2">
            {project.results.map((result, index) => (
              <li key={index} className="flex items-start">
                <span className="mr-2 text-primary">•</span>
                <span className="text-muted-foreground">{result}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Testimonial */}
        {project.testimonial && (
          <div className="mt-6 rounded-lg border bg-muted/20 p-4">
            <p className="italic text-muted-foreground">
              "{project.testimonial.content}"
            </p>
            <div className="mt-2">
              <p className="font-medium">{project.testimonial.author}</p>
              <p className="text-sm text-muted-foreground">
                {project.testimonial.role}
              </p>
            </div>
          </div>
        )}

        <DialogFooter className="mt-6 flex flex-col-reverse sm:flex-row sm:justify-between sm:space-x-2">
          <Button variant="outline" onClick={onClose}>
            Fermer
          </Button>
          <div className="flex gap-2">
            <Button asChild>
              <Link href={`/contact?project=${project.id}`}>
                Discuter d'un projet similaire
              </Link>
            </Button>
            {project.link && (
              <Button variant="outline" asChild>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visiter le site <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
            )}
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
