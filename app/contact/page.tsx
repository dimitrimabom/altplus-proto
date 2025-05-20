"use client"

import type React from "react"

import { useState } from "react"
import { Mail, MapPin, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "sonner"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    budget: "",
    projectType: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log(formData)
    toast("Formulaire envoyé",{
      description: "Nous vous contacterons dans les plus brefs délais.",
    })
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      budget: "",
      projectType: "",
      message: "",
    })
  }

  return (
    <div className=" flex flex-col items-center justify-center bg-background">
      <div className="container py-12 px-4 max-w-7xl md:py-16">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Contactez-nous
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Nous sommes là pour répondre à vos questions et vous aider à
            concrétiser votre projet.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Phone className="h-5 w-5 text-primary" />
                Téléphone
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">+33 1 23 45 67 89</p>
              <p className="text-sm text-muted-foreground mt-2">
                Du lundi au vendredi, de 9h à 18h
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-primary" />
                Email
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">contact@altplus.fr</p>
              <p className="text-sm text-muted-foreground mt-2">
                Nous répondons généralement sous 24h
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-primary" />
                Adresse
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                123 Avenue de la Tech, 75000 Paris
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                Sur rendez-vous uniquement
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-[2fr_1fr]">
          <Card>
            <CardHeader>
              <CardTitle>Parlez-nous de votre projet</CardTitle>
              <CardDescription>
                Remplissez le formulaire ci-dessous et nous vous contacterons
                dans les plus brefs délais.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="name">Nom complet</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Téléphone</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="company">Entreprise</Label>
                    <Input
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label>Type de projet</Label>
                  <RadioGroup
                    defaultValue={formData.projectType}
                    onValueChange={(value) =>
                      handleSelectChange("projectType", value)
                    }
                    className="flex flex-wrap gap-4"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="site-vitrine" id="site-vitrine" />
                      <Label htmlFor="site-vitrine">Site Vitrine</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="e-commerce" id="e-commerce" />
                      <Label htmlFor="e-commerce">E-commerce</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem
                        value="application-web"
                        id="application-web"
                      />
                      <Label htmlFor="application-web">Application Web</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="refonte" id="refonte" />
                      <Label htmlFor="refonte">Refonte de Site</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="autre" id="autre" />
                      <Label htmlFor="autre">Autre</Label>
                    </div>
                  </RadioGroup>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="budget">Budget estimé</Label>
                  <Select
                    onValueChange={(value) =>
                      handleSelectChange("budget", value)
                    }
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Sélectionnez un budget" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="moins-5k">Moins de 5 000 €</SelectItem>
                      <SelectItem value="5k-10k">5 000 € - 10 000 €</SelectItem>
                      <SelectItem value="10k-20k">
                        10 000 € - 20 000 €
                      </SelectItem>
                      <SelectItem value="plus-20k">Plus de 20 000 €</SelectItem>
                      <SelectItem value="a-definir">À définir</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Décrivez votre projet en quelques mots..."
                    required
                  />
                </div>
                <Button type="submit" className="w-full">
                  Envoyer le message
                </Button>
              </form>
            </CardContent>
          </Card>
          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>FAQ</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-medium">Combien coûte un site web ?</h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    Le coût dépend de la complexité du projet. Contactez-nous
                    pour un devis personnalisé.
                  </p>
                </div>
                <div>
                  <h3 className="font-medium">
                    Combien de temps faut-il pour créer un site ?
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    En général, entre 4 et 12 semaines selon la complexité du
                    projet.
                  </p>
                </div>
                <div>
                  <h3 className="font-medium">
                    Proposez-vous des services de maintenance ?
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    Oui, nous offrons des forfaits de maintenance pour garder
                    votre site à jour.
                  </p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>{`Horaires d'ouverture`}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex justify-between">
                    <span className="text-muted-foreground">
                      Lundi - Vendredi
                    </span>
                    <span>9h - 18h</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-muted-foreground">Samedi</span>
                    <span>Fermé</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-muted-foreground">Dimanche</span>
                    <span>Fermé</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
