"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname(); // Corrigé : toujours appeler le hook côté composant

  return (
    <header className="px-4 sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 flex items-center justify-center">
      <div className="container flex h-16 items-center justify-between max-w-7xl">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl font-bold text-primary">
              Alt<span className="text-foreground">Plus</span>
            </span>
          </Link>
        </div>

        <nav className="hidden md:flex items-center gap-6">
          <Link
            href="/"
            className={`text-sm font-medium hover:text-primary transition-colors ${
              pathname === "/" ? "text-primary font-bold" : ""
            }`}
          >
            Accueil
          </Link>
          <Link
            href="/services"
            className={`text-sm font-medium hover:text-primary transition-colors ${
              pathname === "/services" ? "text-primary font-bold" : ""
            }`}
          >
            Services
          </Link>
          <Link
            href="/portfolio"
            className={`text-sm font-medium hover:text-primary transition-colors ${
              pathname === "/portfolio" ? "text-primary font-bold" : ""
            }`}
          >
            Portfolio
          </Link>
          <Link
            href="/blog"
            className={`text-sm font-medium hover:text-primary transition-colors ${
              pathname === "/blog" ? "text-primary font-bold" : ""
            }`}
          >
            Blog
          </Link>
          <Link
            href="/contact"
            className={`text-sm font-medium hover:text-primary transition-colors ${
              pathname === "/contact" ? "text-primary font-bold" : ""
            }`}
          >
            Contact
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <Button asChild className="hidden md:inline-flex">
            <Link href="/contact">Demander un devis</Link>
          </Button>
          <ModeToggle />
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(true)}
          >
            <Menu className="h-5 w-5" />
            <span className="sr-only">Menu</span>
          </Button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="px-4 fixed inset-0 z-50 bg-background md:hidden">
          <div className="container flex h-16 items-center justify-between ">
            <Link href="/" className="flex items-center gap-2">
              <span className="text-2xl font-bold text-primary">
                Alt<span className="text-foreground">Plus</span>
              </span>
            </Link>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(false)}
            >
              <X className="h-5 w-5" />
              <span className="sr-only">Fermer</span>
            </Button>
          </div>
          <nav className="container grid gap-6 py-6 bg-background/95 h-screen justify-items-center content-center">
            {/* Ajout d'un effet actif autour du ModeToggle */}
            <div className="flex justify-center">
              <div className="rounded-full ring-2 ring-primary p-1">
                <ModeToggle />
              </div>
            </div>
            <Link
              href="/"
              className={`text-lg font-medium hover:text-primary transition-colors ${
                pathname === "/" ? "text-primary font-bold" : ""
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Accueil
            </Link>
            <Link
              href="/services"
              className={`text-lg font-medium hover:text-primary transition-colors ${
                pathname === "/services" ? "text-primary font-bold" : ""
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              href="/portfolio"
              className={`text-lg font-medium hover:text-primary transition-colors ${
                pathname === "/portfolio" ? "text-primary font-bold" : ""
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Portfolio
            </Link>
            <Link
              href="/blog"
              className={`text-lg font-medium hover:text-primary transition-colors ${
                pathname === "/blog" ? "text-primary font-bold" : ""
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Blog
            </Link>
            <Link
              href="/contact"
              className={`text-lg font-medium hover:text-primary transition-colors ${
                pathname === "/contact" ? "text-primary font-bold" : ""
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <Button asChild className="w-full">
              <Link href="/contact" onClick={() => setIsMenuOpen(false)}>
                Demander un devis
              </Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
