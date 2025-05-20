import Link from "next/link";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="px-4 border-t bg-background flex items-center justify-center">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4 max-w-7xl items-center justify-center m-auto">
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <span className="text-2xl font-bold text-primary">
                Alt<span className="text-foreground">Plus</span>
              </span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Création de sites web modernes et performants pour votre
              entreprise.
            </p>
            <div className="flex gap-4">
              <Link
                href="#"
                className="text-muted-foreground hover:text-primary"
              >
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-primary"
              >
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-primary"
              >
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-primary"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-medium">Services</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link
                  href="/services/site-internet"
                  className="text-sm text-muted-foreground hover:text-primary"
                >
                  Sites Vitrine
                </Link>
              </li>
              <li>
                <Link
                  href="/services/e-commerce"
                  className="text-sm text-muted-foreground hover:text-primary"
                >
                  E-commerce
                </Link>
              </li>
              <li>
                <Link
                  href="/services/applications-web"
                  className="text-sm text-muted-foreground hover:text-primary"
                >
                  Applications Web
                </Link>
              </li>
              <li>
                <Link
                  href="/services/refonte"
                  className="text-sm text-muted-foreground hover:text-primary"
                >
                  Refonte de Site
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-medium">Ressources</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link
                  href="/blog"
                  className="text-sm text-muted-foreground hover:text-primary"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm text-muted-foreground hover:text-primary"
                >
                  Guides
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm text-muted-foreground hover:text-primary"
                >
                  Études de cas
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm text-muted-foreground hover:text-primary"
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-medium">Contact</h3>
            <ul className="mt-4 space-y-2">
              <li className="text-sm text-muted-foreground">
                Email: contact@altplus.fr
              </li>
              <li className="text-sm text-muted-foreground">
                Téléphone: +33 1 23 45 67 89
              </li>
              <li className="text-sm text-muted-foreground">
                Adresse: 123 Avenue de la Tech, 75000 Paris
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t pt-6">
          <p className="text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} AltPlus. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
}
