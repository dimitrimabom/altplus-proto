"use client";

import { useState, useEffect } from "react";
import { LinkIcon } from "lucide-react";

interface TableOfContentsItem {
  id: string;
  title: string;
  level: number;
}

interface TableOfContentsProps {
  items: TableOfContentsItem[];
}

export function TableOfContents({ items }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "0px 0px -80% 0px" }
    );

    items.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      items.forEach((item) => {
        const element = document.getElementById(item.id);
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, [items]);

  return (
    <div className="sticky top-20 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="rounded-lg border p-4">
        <div className="flex items-center gap-1 font-medium">
          <LinkIcon className="h-4 w-4" />
          Table des matières
        </div>
        <nav className="mt-4">
          <ul className="space-y-2 text-sm">
            {items.map((item) => (
              <li
                key={item.id}
                style={{ paddingLeft: `${(item.level - 2) * 16}px` }}
                className={`line-clamp-1 hover:text-foreground ${
                  activeId === item.id
                    ? "font-medium text-foreground"
                    : "text-muted-foreground"
                }`}
              >
                <a
                  href={`#${item.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    document
                      .getElementById(item.id)
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
}
