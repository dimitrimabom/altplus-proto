import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  Calendar,
  Clock,
  Facebook,
  Linkedin,
  Twitter,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { TableOfContents } from "@/components/table-of-contents";
import { CommentItem } from "@/components/comment-item";
import Image from "next/image";

// Cette fonction serait remplacée par une véritable fonction de récupération de données
const articles = [
  {
    slug: "tendances-web-2025",
    title: "10 tendances web à suivre en 2025",
    description:
      "Découvrez les dernières tendances en matière de design et de développement web pour rester à la pointe.",
    date: "15 mai 2025",
    readTime: "5 min",
    author: {
      name: "Sophie Martin",
      role: "Lead Designer",
      avatar: "SM",
    },
    image: "/placeholder.svg?height=600&width=1200&text=Tendances+Web+2025",
    category: "Design",
    tags: ["Design", "Tendances", "UX/UI", "Développement"],
    content: `
## Introduction

Le monde du web évolue constamment, et il est essentiel pour les professionnels du digital de rester à jour avec les dernières tendances et technologies. En 2025, plusieurs innovations majeures façonnent la manière dont nous concevons et développons les sites web. Cet article explore les dix tendances les plus significatives qui définissent l'avenir du web.

## 1. Design Immersif et Réalité Augmentée

La frontière entre le monde numérique et physique s'estompe de plus en plus. Les sites web de 2025 intègrent des expériences immersives qui permettent aux utilisateurs d'interagir avec les produits et services d'une manière totalement nouvelle.

La réalité augmentée (RA) n'est plus réservée aux applications mobiles - elle devient une composante standard des sites web modernes. Les utilisateurs peuvent désormais "essayer" virtuellement des produits, visualiser des meubles dans leur espace réel, ou explorer des lieux en 3D directement depuis leur navigateur.

## 2. Interface Conversationnelle et Chatbots IA

Les interfaces conversationnelles deviennent plus sophistiquées et intuitives, transformant l'expérience utilisateur. Les chatbots propulsés par l'intelligence artificielle ne se contentent plus de répondre à des questions simples - ils peuvent désormais:

- Guider les utilisateurs tout au long de leur parcours sur le site
- Fournir des recommandations personnalisées
- Aider à compléter des achats ou des formulaires
- Résoudre des problèmes complexes en temps réel

Les entreprises qui intègrent ces assistants intelligents constatent une augmentation significative de l'engagement et des taux de conversion.

## 3. Design Éco-responsable

L'impact environnemental du numérique devient une préoccupation majeure. Le "green design" n'est plus seulement une tendance, mais une nécessité. Les sites web de 2025 sont conçus avec une attention particulière à:

- L'optimisation des performances pour réduire la consommation d'énergie
- La minimisation des ressources nécessaires au chargement des pages
- L'utilisation de services d'hébergement alimentés par des énergies renouvelables
- La conception d'interfaces qui encouragent une utilisation plus consciente

Ce mouvement vers un web plus durable influence tous les aspects du design et du développement.

## 4. Micro-animations et Interactions Subtiles

Les micro-animations continuent d'évoluer, ajoutant de la profondeur et de l'engagement aux interfaces sans compromettre les performances. Ces animations subtiles:

- Fournissent un feedback visuel immédiat aux actions des utilisateurs
- Guident l'attention vers les éléments importants
- Créent une expérience plus fluide et agréable
- Renforcent l'identité de marque

Les designers utilisent ces animations avec parcimonie et intention, en veillant à ce qu'elles améliorent l'expérience utilisateur plutôt que de la distraire.

## 5. Conception Sans Code et IA Générative

Les outils de conception sans code et l'IA générative révolutionnent la façon dont les sites web sont créés. Les plateformes alimentées par l'IA peuvent désormais:

- Générer des mises en page complètes à partir de descriptions textuelles
- Créer des illustrations et des images personnalisées
- Adapter automatiquement les designs pour différents appareils
- Suggérer des améliorations basées sur les données d'utilisation

Cette démocratisation de la création web permet à davantage d'entreprises d'avoir une présence en ligne sophistiquée, même avec des ressources limitées.

## Conclusion

Les tendances web de 2025 reflètent un écosystème numérique en constante évolution, où l'expérience utilisateur, la performance et la durabilité sont au premier plan. Les professionnels qui adoptent ces innovations seront bien positionnés pour créer des expériences web mémorables et efficaces.

Restez à l'affût de ces tendances et n'hésitez pas à expérimenter avec ces nouvelles approches pour garder votre présence web à la pointe de l'innovation.
      `,
    tableOfContents: [
      { id: "introduction", title: "Introduction", level: 2 },
      {
        id: "1-design-immersif-et-réalité-augmentée",
        title: "1. Design Immersif et Réalité Augmentée",
        level: 2,
      },
      {
        id: "2-interface-conversationnelle-et-chatbots-ia",
        title: "2. Interface Conversationnelle et Chatbots IA",
        level: 2,
      },
      {
        id: "3-design-éco-responsable",
        title: "3. Design Éco-responsable",
        level: 2,
      },
      {
        id: "4-micro-animations-et-interactions-subtiles",
        title: "4. Micro-animations et Interactions Subtiles",
        level: 2,
      },
      {
        id: "5-conception-sans-code-et-ia-générative",
        title: "5. Conception Sans Code et IA Générative",
        level: 2,
      },
      { id: "conclusion", title: "Conclusion", level: 2 },
    ],
    relatedArticles: [
      {
        title: "L'importance du responsive design",
        slug: "importance-responsive-design",
        image: "/placeholder.svg?height=200&width=300&text=Responsive+Design",
      },
      {
        title: "Comment améliorer la vitesse de chargement de votre site",
        slug: "ameliorer-vitesse-chargement",
        image: "/placeholder.svg?height=200&width=300&text=Performance",
      },
      {
        title: "Les bases du SEO pour votre site web",
        slug: "bases-seo-site-web",
        image: "/placeholder.svg?height=200&width=300&text=SEO",
      },
    ],
  },
  {
    slug: "ameliorer-vitesse-chargement",
    title: "Comment améliorer la vitesse de chargement de votre site",
    description:
      "Des conseils pratiques pour optimiser les performances de votre site web et améliorer l'expérience utilisateur.",
    date: "3 mai 2025",
    readTime: "7 min",
    author: {
      name: "Thomas Dupont",
      role: "Lead Developer",
      avatar: "TD",
    },
    image:
      "/placeholder.svg?height=600&width=1200&text=Optimisation+Performance",
    category: "Développement",
    tags: ["Performance", "Optimisation", "UX", "Développement"],
    content: `
## Introduction

La vitesse de chargement d'un site web est aujourd'hui un facteur crucial pour le succès de votre présence en ligne. Un site lent peut considérablement augmenter le taux de rebond, nuire à l'expérience utilisateur et même affecter votre référencement. Dans cet article, nous explorerons des techniques concrètes pour améliorer la performance de votre site et offrir une expérience fluide à vos visiteurs.

## L'importance de la vitesse de chargement

Avant de plonger dans les solutions techniques, comprenons pourquoi la vitesse de chargement est si importante:

- **Expérience utilisateur**: Les utilisateurs s'attendent à un chargement quasi instantané. Selon des études, 53% des utilisateurs abandonnent un site qui met plus de 3 secondes à charger.
- **Taux de conversion**: Une amélioration d'une seconde du temps de chargement peut augmenter les conversions de 7%.
- **Référencement**: Google utilise la vitesse comme facteur de classement, particulièrement pour les recherches mobiles.
- **Fidélisation**: Les utilisateurs sont plus susceptibles de revenir sur un site rapide et efficace.

## Optimisation des images

Les images représentent souvent la majeure partie du poids d'une page web. Voici comment les optimiser efficacement:

### Formats modernes

Utilisez des formats d'image modernes comme WebP qui offrent une meilleure compression sans perte de qualité visible. Pour une compatibilité maximale, proposez des alternatives:

\`\`\`html
<picture>
  <source srcset="image.webp" type="image/webp">
  <Image src="image.jpg" alt="Description">
</picture>
\`\`\`

### Dimensionnement adaptatif

Servez des images de taille appropriée selon l'appareil de l'utilisateur. Utilisez les attributs \`srcset\` et \`sizes\`:

\`\`\`html
<Image src="small.jpg"
     srcset="small.jpg 500w,
             medium.jpg 1000w,
             large.jpg 1500w"
     sizes="(max-width: 600px) 100vw,
            (max-width: 1200px) 50vw,
            33vw"
     alt="Description">
\`\`\`

### Chargement différé (lazy loading)

Chargez les images uniquement lorsqu'elles apparaissent dans le viewport:

\`\`\`html
<Image src="image.jpg" loading="lazy" alt="Description">
\`\`\`

## Minification et compression

Réduisez la taille de vos fichiers CSS, JavaScript et HTML:

- **Minification**: Supprimez les espaces, commentaires et caractères inutiles
- **Compression**: Activez GZIP ou Brotli sur votre serveur
- **Concaténation**: Regroupez plusieurs fichiers pour réduire le nombre de requêtes

## Mise en cache

Implémentez une stratégie de mise en cache efficace:

- **Cache navigateur**: Définissez des en-têtes d'expiration appropriés
- **CDN**: Utilisez un réseau de diffusion de contenu pour servir les fichiers statiques
- **Cache applicatif**: Mettez en cache les requêtes API et les résultats de base de données

## Chargement critique prioritaire

Identifiez et chargez en priorité le contenu essentiel:

- **CSS critique**: Intégrez le CSS nécessaire à l'affichage initial directement dans le HTML
- **Chargement asynchrone**: Utilisez \`async\` ou \`defer\` pour les scripts non essentiels
- **Préchargement**: Utilisez \`<link rel="preload">\` pour les ressources critiques

## Conclusion

L'optimisation de la vitesse de chargement est un processus continu qui nécessite des mesures, des ajustements et des tests réguliers. En mettant en œuvre les techniques décrites dans cet article, vous pourrez offrir une expérience utilisateur nettement améliorée et bénéficier des avantages qui en découlent en termes de conversion et de référencement.

Utilisez des outils comme Lighthouse, WebPageTest ou GTmetrix pour analyser régulièrement les performances de votre site et identifier les points d'amélioration.

N'oubliez pas que chaque milliseconde compte dans l'expérience utilisateur moderne!
      `,
    tableOfContents: [
      { id: "introduction", title: "Introduction", level: 2 },
      {
        id: "limportance-de-la-vitesse-de-chargement",
        title: "L'importance de la vitesse de chargement",
        level: 2,
      },
      {
        id: "optimisation-des-images",
        title: "Optimisation des images",
        level: 2,
      },
      { id: "formats-modernes", title: "Formats modernes", level: 3 },
      {
        id: "dimensionnement-adaptatif",
        title: "Dimensionnement adaptatif",
        level: 3,
      },
      {
        id: "chargement-différé-lazy-loading",
        title: "Chargement différé (lazy loading)",
        level: 3,
      },
      {
        id: "minification-et-compression",
        title: "Minification et compression",
        level: 2,
      },
      { id: "mise-en-cache", title: "Mise en cache", level: 2 },
      {
        id: "chargement-critique-prioritaire",
        title: "Chargement critique prioritaire",
        level: 2,
      },
      { id: "conclusion", title: "Conclusion", level: 2 },
    ],
    relatedArticles: [
      {
        title: "10 tendances web à suivre en 2025",
        slug: "tendances-web-2025",
        image: "/placeholder.svg?height=200&width=300&text=Tendances+Web",
      },
      {
        title: "L'importance du responsive design",
        slug: "importance-responsive-design",
        image: "/placeholder.svg?height=200&width=300&text=Responsive+Design",
      },
      {
        title: "Les meilleures pratiques pour l'accessibilité web",
        slug: "meilleures-pratiques-accessibilite",
        image: "/placeholder.svg?height=200&width=300&text=Accessibilité",
      },
    ],
  },
  {
    slug: "importance-responsive-design",
    title: "L'importance du responsive design",
    description:
      "Pourquoi il est crucial d'avoir un site web qui s'adapte à tous les appareils et comment y parvenir.",
    date: "28 avril 2025",
    readTime: "6 min",
    author: {
      name: "Emma Laurent",
      role: "UX Designer",
      avatar: "EL",
    },
    image: "/placeholder.svg?height=600&width=1200&text=Responsive+Design",
    category: "Design",
    tags: ["Responsive", "Mobile", "Design", "UX/UI"],
    content: `
## Introduction

Dans un monde où la navigation internet se fait sur une multitude d'appareils aux tailles d'écran variées, le responsive design n'est plus une option, mais une nécessité absolue. Cet article explore l'importance cruciale d'adopter une approche responsive pour votre site web et fournit des conseils pratiques pour y parvenir efficacement.

## Qu'est-ce que le responsive design ?

Le responsive design (ou conception adaptative) est une approche de conception web visant à offrir une expérience de navigation optimale quel que soit l'appareil utilisé. Un site responsive s'adapte automatiquement à la taille de l'écran, réorganisant son contenu et ses fonctionnalités pour garantir lisibilité et facilité d'utilisation, que ce soit sur un smartphone, une tablette, un ordinateur portable ou un grand écran de bureau.

## Pourquoi le responsive design est-il si important ?

### Évolution des habitudes de navigation

La façon dont les utilisateurs accèdent à internet a radicalement changé ces dernières années. Selon les dernières statistiques:

- Plus de 60% du trafic web mondial provient désormais des appareils mobiles
- Un utilisateur moyen possède 3 à 4 appareils connectés différents
- Les utilisateurs s'attendent à une expérience fluide lorsqu'ils passent d'un appareil à l'autre

Un site qui n'est pas adapté aux mobiles risque donc de perdre plus de la moitié de son audience potentielle!

### Impact sur le référencement

Les moteurs de recherche, Google en tête, accordent une importance majeure à l'expérience mobile. Depuis l'adoption de l'indexation "mobile-first", Google utilise principalement la version mobile d'un site pour l'indexer et le classer dans ses résultats de recherche.

Un site non responsive sera donc pénalisé dans les classements, indépendamment de la qualité de son contenu ou de ses autres optimisations SEO.

### Expérience utilisateur et taux de conversion

Un site responsive améliore considérablement l'expérience utilisateur, ce qui se traduit directement par:

- Une réduction du taux de rebond
- Une augmentation du temps passé sur le site
- Un meilleur taux d'engagement
- Une hausse des conversions

Les études montrent qu'un site mal adapté au mobile peut faire perdre jusqu'à 60% des opportunités de conversion.

## Principes clés du responsive design

### Design fluide et flexible

Le concept fondamental du responsive design repose sur l'utilisation d'unités relatives plutôt que fixes:

- Privilégiez les pourcentages, les unités "em", "rem" et "vh/vw" plutôt que les pixels
- Utilisez CSS Grid et Flexbox pour créer des mises en page flexibles
- Évitez les largeurs fixes sur les éléments de contenu

### Media queries

Les media queries permettent d'appliquer différents styles CSS en fonction des caractéristiques de l'appareil:

\`\`\`css
/* Base styles for all devices */
.element {
  width: 100%;
}

/* Styles for tablets and larger */
@media (min-width: 768px) {
  .element {
    width: 50%;
    float: left;
  }
}

/* Styles for desktops */
@media (min-width: 1024px) {
  .element {
    width: 33.33%;
  }
}
\`\`\`

### Images et médias responsives

Les images et vidéos doivent s'adapter à différentes tailles d'écran:

- Utilisez \`max-width: 100%\` pour que les images ne dépassent jamais de leur conteneur
- Implémentez les attributs \`srcset\` et \`sizes\` pour servir des images de différentes résolutions
- Considérez l'utilisation de l'élément \`<picture>\` pour un contrôle plus précis

### Approche "Mobile First"

Concevoir d'abord pour mobile puis étendre pour les écrans plus grands offre plusieurs avantages:

- Oblige à se concentrer sur l'essentiel
- Améliore les performances (le site de base est plus léger)
- S'aligne avec l'approche d'indexation de Google

## Bonnes pratiques pour une mise en œuvre efficace

- **Tests multi-appareils**: Testez votre site sur différents appareils réels, pas seulement dans les émulateurs
- **Menus adaptables**: Transformez les menus de navigation en format hamburger sur petit écran
- **Boutons tactiles**: Assurez-vous que les éléments cliquables font au minimum 44x44px pour faciliter l'interaction tactile
- **Contenu priorisé**: Réorganisez le contenu pour afficher les informations les plus importantes en premier sur mobile
- **Performance optimisée**: Les utilisateurs mobiles ont souvent des connexions plus lentes, optimisez donc le chargement

## Conclusion

Le responsive design n'est plus une tendance passagère mais une nécessité absolue dans le paysage numérique actuel. En adoptant une approche centrée sur la flexibilité et l'adaptabilité, vous garantissez non seulement une meilleure expérience à vos utilisateurs, mais vous améliorez également vos performances commerciales et votre visibilité en ligne.

Investir dans un design responsive aujourd'hui, c'est s'assurer que votre site reste pertinent et efficace pour les années à venir, quel que soit l'évolution des appareils et des habitudes de navigation.
      `,
    tableOfContents: [
      { id: "introduction", title: "Introduction", level: 2 },
      {
        id: "quest-ce-que-le-responsive-design",
        title: "Qu'est-ce que le responsive design ?",
        level: 2,
      },
      {
        id: "pourquoi-le-responsive-design-est-il-si-important",
        title: "Pourquoi le responsive design est-il si important ?",
        level: 2,
      },
      {
        id: "évolution-des-habitudes-de-navigation",
        title: "Évolution des habitudes de navigation",
        level: 3,
      },
      {
        id: "impact-sur-le-référencement",
        title: "Impact sur le référencement",
        level: 3,
      },
      {
        id: "expérience-utilisateur-et-taux-de-conversion",
        title: "Expérience utilisateur et taux de conversion",
        level: 3,
      },
      {
        id: "principes-clés-du-responsive-design",
        title: "Principes clés du responsive design",
        level: 2,
      },
      {
        id: "design-fluide-et-flexible",
        title: "Design fluide et flexible",
        level: 3,
      },
      { id: "media-queries", title: "Media queries", level: 3 },
      {
        id: "images-et-médias-responsives",
        title: "Images et médias responsives",
        level: 3,
      },
      {
        id: "approche-mobile-first",
        title: 'Approche "Mobile First"',
        level: 3,
      },
      {
        id: "bonnes-pratiques-pour-une-mise-en-œuvre-efficace",
        title: "Bonnes pratiques pour une mise en œuvre efficace",
        level: 2,
      },
      { id: "conclusion", title: "Conclusion", level: 2 },
    ],
    relatedArticles: [
      {
        title: "10 tendances web à suivre en 2025",
        slug: "tendances-web-2025",
        image: "/placeholder.svg?height=200&width=300&text=Tendances+Web",
      },
      {
        title: "Comment améliorer la vitesse de chargement de votre site",
        slug: "ameliorer-vitesse-chargement",
        image: "/placeholder.svg?height=200&width=300&text=Performance",
      },
      {
        title: "Les meilleures pratiques pour l'accessibilité web",
        slug: "meilleures-pratiques-accessibilite",
        image: "/placeholder.svg?height=200&width=300&text=Accessibilité",
      },
    ],
  },
];

function formatDate(dateString: string) {
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return new Date(dateString).toLocaleDateString("fr-FR", options);
}

// Fonction qui convertit le markdown en HTML
function markdownToHtml(markdown: string) {
  // Cette fonction est simplifiée - dans un vrai projet, vous utiliseriez une librairie comme remark/rehype
  // ou markdown-it pour convertir correctement le markdown en HTML
  let html = markdown
    .replace(/## (.*)\n/g, '<h2 id="$1">$1</h2>\n')
    .replace(/### (.*)\n/g, '<h3 id="$1">$1</h3>\n')
    .replace(/\*\*(.*)\*\*/g, "<strong>$1</strong>")
    .replace(/\*(.*)\*/g, "<em>$1</em>")
    .replace(/\n/g, "<br />")
    .replace(/- (.*)/g, "<li>$1</li>");

  // Entourage des listes avec <ul></ul>
  if (html.includes("<li>")) {
    html = html.replace(
      /<li>.*?<\/li>(\s*<br \/>)*/g,
      (match) => "<ul>" + match.replace(/<br \/>/g, "") + "</ul>"
    );
  }

  // Gérer les blocs de code
  html = html.replace(
    /```([a-z]*)\n([\s\S]*?)```/g,
    (match, language, code) =>
      `<pre><code class="language-${language}">${code}</code></pre>`
  );

  return html;
}


export default async function Page(props: {
  params: Promise<{ slug: string }>;
}) {
  // Attendre la résolution de params
  const { slug } = await props.params;

  // Rechercher l'article correspondant au slug
  const article = articles.find((article) => article.slug === slug);

  if (!article) {
    return (
      <div className="flex flex-col items-center bg-background">
        <div className="container py-12 px-4  flex flex-col items-center md:py-16 text-center">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Article introuvable
          </h1>
          <p className="mt-4">
            L'article que vous recherchez n'existe pas ou a été déplacé.
          </p>
          <Button asChild className="mt-8">
            <Link href="/blog">Retour au blog</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center bg-background">
      <div className="container py-12 px-4 flex flex-col items-center md:py-16">
        <div className="mx-auto max-w-6xl">
          {/* Breadcrumb */}
          <div className="mb-8">
            <nav className="flex items-center text-sm text-muted-foreground">
              <Link href="/" className="hover:text-foreground">
                Accueil
              </Link>
              <span className="mx-2"> / </span>
              <Link href="/blog" className="hover:text-foreground">
                Blog
              </Link>
              <span className="mx-2"> / </span>
              <span className="truncate max-w-[200px]">{article.title}</span>
            </nav>
          </div>

          {/* Article Header */}
          <div className="space-y-4">
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary">{article.category}</Badge>
              {article.tags.map((tag) =>
                article.category == tag ? (
                  ""
                ) : (
                  <Badge key={tag} variant="outline">
                    {tag}
                  </Badge>
                )
              )}
            </div>
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              {article.title}
            </h1>
            <p className="text-xl text-muted-foreground">
              {article.description}
            </p>
            <div className="flex items-center justify-between border-y py-4">
              <div className="flex items-center space-x-4">
                <Avatar>
                  <AvatarImage
                    src={`/placeholder.svg?height=40&width=40&text=${article.author.avatar}`}
                  />
                  <AvatarFallback>{article.author.avatar}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-medium">{article.author.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {article.author.role}
                  </p>
                </div>
              </div>
              <div className="hidden space-x-2 sm:flex">
                <div className="flex items-center text-sm text-muted-foreground">
                  <Calendar className="mr-1 h-4 w-4" />
                  <time dateTime={article.date}>
                    {formatDate(article.date)}
                  </time>
                </div>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Clock className="mr-1 h-4 w-4" />
                  <span>{article.readTime} de lecture</span>
                </div>
              </div>
            </div>
          </div>

          {/* Featured Image */}
          <div className="my-8 overflow-hidden rounded-lg bg-muted">
            <Image
              src={article.image || "/placeholder.svg"}
              alt={article.title}
              className="h-full w-full object-cover"
              width={1200}
              height={600}
            />
          </div>

          {/* Desktop Layout with Sidebar */}
          <div className="grid gap-10 lg:grid-cols-[1fr_250px]">
            {/* Article Content */}
            <div>
              <div
                className="prose prose-lg max-w-none dark:prose-invert"
                dangerouslySetInnerHTML={{
                  __html: markdownToHtml(article.content),
                }}
              ></div>

              {/* Share Section */}
              <div className="mt-12 rounded-lg border bg-muted/20 p-6">
                <h3 className="font-medium">Partager cet article</h3>
                <div className="mt-4 flex space-x-4">
                  <Button variant="outline" size="icon" asChild>
                    <a
                      href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(
                        `https://altplus.fr/blog/${article.slug}`
                      )}&text=${encodeURIComponent(article.title)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Twitter className="h-4 w-4" />
                      <span className="sr-only">Partager sur Twitter</span>
                    </a>
                  </Button>
                  <Button variant="outline" size="icon" asChild>
                    <a
                      href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                        `https://altplus.fr/blog/${article.slug}`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Facebook className="h-4 w-4" />
                      <span className="sr-only">Partager sur Facebook</span>
                    </a>
                  </Button>
                  <Button variant="outline" size="icon" asChild>
                    <a
                      href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(
                        `https://altplus.fr/blog/${article.slug}`
                      )}&title=${encodeURIComponent(article.title)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Linkedin className="h-4 w-4" />
                      <span className="sr-only">Partager sur LinkedIn</span>
                    </a>
                  </Button>
                </div>
              </div>

              {/* Author Bio */}
              <div className="mt-12 rounded-lg border p-6">
                <div className="flex flex-col items-center sm:flex-row sm:items-start sm:space-x-4">
                  <Avatar className="h-16 w-16">
                    <AvatarImage
                      src={`/placeholder.svg?height=64&width=64&text=${article.author.avatar}`}
                    />
                    <AvatarFallback className="text-lg">
                      {article.author.avatar}
                    </AvatarFallback>
                  </Avatar>
                  <div className="mt-4 text-center sm:mt-0 sm:text-left">
                    <h3 className="text-lg font-medium">
                      {article.author.name}
                    </h3>
                    <p className="text-muted-foreground">
                      {article.author.role}
                    </p>
                    <p className="mt-2">
                      Expert en design et développement web avec plus de 10 ans
                      d&apos;expérience. Passionné par les nouvelles
                      technologies et l&apos;amélioration de l&apos;expérience
                      utilisateur.
                    </p>
                  </div>
                </div>
              </div>

              {/* Related Articles */}
              <div className="mt-12">
                <h2 className="text-2xl font-bold">Articles similaires</h2>
                <div className="mt-6 grid gap-6 sm:grid-cols-2 md:grid-cols-3">
                  {article.relatedArticles.map((relatedArticle) => (
                    <Card key={relatedArticle.slug} className="overflow-hidden">
                      <div className="aspect-video w-full bg-muted">
                        <Image
                          src={relatedArticle.image || "/placeholder.svg"}
                          alt={relatedArticle.title}
                          className="h-full w-full object-cover"
                          width={300}
                          height={200}
                        />
                      </div>
                      <CardHeader className="p-4">
                        <CardTitle className="line-clamp-2 text-base">
                          <Link
                            href={`/blog/${relatedArticle.slug}`}
                            className="hover:text-primary"
                          >
                            {relatedArticle.title}
                          </Link>
                        </CardTitle>
                      </CardHeader>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Comments Section */}
              <div className="mt-12">
                <h2 className="text-2xl font-bold">Commentaires</h2>
                <div className="mt-6 space-y-6">
                  {/* Comment Form */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">
                        Laisser un commentaire
                      </CardTitle>
                      <CardDescription>
                        Votre adresse e-mail ne sera pas publiée. Les champs
                        obligatoires sont indiqués avec *
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <form className="space-y-4">
                        <div className="grid gap-4 sm:grid-cols-2">
                          <div className="space-y-2">
                            <label
                              htmlFor="name"
                              className="text-sm font-medium"
                            >
                              Nom *
                            </label>
                            <input
                              id="name"
                              type="text"
                              required
                              className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground"
                            />
                          </div>
                          <div className="space-y-2">
                            <label
                              htmlFor="email"
                              className="text-sm font-medium"
                            >
                              Email *
                            </label>
                            <input
                              id="email"
                              type="email"
                              required
                              className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground"
                            />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <label
                            htmlFor="comment"
                            className="text-sm font-medium"
                          >
                            Commentaire *
                          </label>
                          <textarea
                            id="comment"
                            rows={4}
                            required
                            className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground"
                          ></textarea>
                        </div>
                        <div className="flex items-center space-x-2">
                          <input
                            id="save-info"
                            type="checkbox"
                            className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                          />
                          <label
                            htmlFor="save-info"
                            className="text-sm text-muted-foreground"
                          >
                            Enregistrer mon nom et mon e-mail pour mes prochains
                            commentaires
                          </label>
                        </div>
                        <Button type="submit">Publier le commentaire</Button>
                      </form>
                    </CardContent>
                  </Card>

                  {/* Comments List */}
                  <div className="space-y-6">
                    <CommentItem
                      author="Marie Dupont"
                      date="10 mai 2025"
                      content="Excellent article ! J'ai particulièrement apprécié les explications sur le design immersif et la réalité augmentée. Ces technologies vont vraiment transformer notre façon d'interagir avec le web."
                      avatar="MD"
                      replies={[
                        {
                          author: "Sophie Martin",
                          date: "11 mai 2025",
                          content:
                            "Merci pour votre commentaire, Marie ! Je suis ravie que cet aspect de l'article vous ait plu. La réalité augmentée sur le web est un domaine qui évolue rapidement et qui offre de nombreuses possibilités passionnantes.",
                          avatar: "SM",
                          isAuthor: true,
                        },
                      ]}
                    />
                    <CommentItem
                      author="Thomas Bernard"
                      date="8 mai 2025"
                      content="Je travaille dans le développement web depuis 10 ans et je suis d'accord avec la plupart des points soulevés ici. Cependant, je pense que l'IA générative a encore beaucoup de chemin à parcourir avant de pouvoir remplacer complètement les designers. Qu'en pensez-vous ?"
                      avatar="TB"
                    />
                    <CommentItem
                      author="Julie Lambert"
                      date="5 mai 2025"
                      content="Pourriez-vous développer davantage sur les interfaces conversationnelles ? J'aimerais savoir quels sont les meilleurs outils pour les intégrer à un site e-commerce."
                      avatar="JL"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Table of Contents */}
              <TableOfContents items={article.tableOfContents} />

              {/* Newsletter Sign Up */}
              <Card>
                <CardHeader>
                  <CardTitle>Newsletter</CardTitle>
                  <CardDescription>
                    Recevez nos derniers articles et conseils directement dans
                    votre boîte mail.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4">
                    <div className="space-y-2">
                      <label htmlFor="email" className="sr-only">
                        Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        placeholder="votre@email.com"
                        className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground"
                      />
                    </div>
                    <Button type="submit" className="w-full">
                      S&apos;abonner
                    </Button>
                  </form>
                </CardContent>
              </Card>

              {/* Categories */}
              <Card>
                <CardHeader>
                  <CardTitle>Catégories</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li>
                      <Link
                        href="/blog?category=design"
                        className="text-muted-foreground hover:text-primary"
                      >
                        Design
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/blog?category=developpement"
                        className="text-muted-foreground hover:text-primary"
                      >
                        Développement
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/blog?category=marketing"
                        className="text-muted-foreground hover:text-primary"
                      >
                        Marketing
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/blog?category=seo"
                        className="text-muted-foreground hover:text-primary"
                      >
                        SEO
                      </Link>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Navigation Between Articles */}
          <div className="mt-12 grid gap-8 border-t pt-8 sm:grid-cols-2">
            <Link href={`/blog/ameliorer-vitesse-chargement`} className="group">
              <div className="flex flex-col space-y-2">
                <span className="text-sm text-muted-foreground flex items-center">
                  <ArrowLeft className="mr-1 h-4 w-4" /> Article précédent
                </span>
                <div className="flex items-center space-x-4">
                  <div className="h-16 w-16 overflow-hidden rounded-md bg-muted flex-shrink-0">
                    <Image
                      src="/placeholder.svg?height=64&width=64&text=Performance"
                      alt="Comment améliorer la vitesse de chargement de votre site"
                      className="h-full w-full object-cover"
                      width={64}
                      height={64}
                    />
                  </div>
                  <h4 className="font-medium group-hover:text-primary transition-colors line-clamp-2">
                    Comment améliorer la vitesse de chargement de votre site
                  </h4>
                </div>
              </div>
            </Link>
            <Link
              href={`/blog/importance-responsive-design`}
              className="group justify-self-end text-right"
            >
              <div className="flex flex-col space-y-2 items-end">
                <span className="text-sm text-muted-foreground flex items-center">
                  Article suivant <ArrowRight className="ml-1 h-4 w-4" />
                </span>
                <div className="flex items-center space-x-4 flex-row-reverse">
                  <div className="h-16 w-16 overflow-hidden rounded-md bg-muted flex-shrink-0">
                    <Image
                      src="/placeholder.svg?height=64&width=64&text=Responsive"
                      alt="L'importance du responsive design"
                      className="h-full w-full object-cover"
                      width={64}
                      height={64}
                    />
                  </div>
                  <h4 className="font-medium group-hover:text-primary transition-colors line-clamp-2">
                    L'importance du responsive design
                  </h4>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
