import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Instagram, Facebook, Linkedin } from "lucide-react";
import logoEvasion from "@/assets/logo-evasion.png";

const footerLinks = {
  programme: [
    { name: "Nos retraites", href: "/stages" },
    { name: "Demande de séjour", href: "/reservation" },
    { name: "Refuge Confidentiel", href: "/entreprises" },
  ],
  informations: [
    { name: "L'esprit du lieu", href: "/a-propos" },
    { name: "Vos Hôtes", href: "/a-propos#equipe" },
    { name: "Contact – accès", href: "/contact" },
  ],
  legal: [
    { name: "Mentions légales", href: "/mentions-legales" },
    { name: "Politique de confidentialité", href: "/confidentialite" },
    { name: "CGV", href: "/cgv" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-foreground text-primary-foreground">
      <div className="container-wellness mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full flex items-center justify-center overflow-hidden bg-background">
                <img src={logoEvasion} alt="Logo" className="w-full h-full object-cover" />
              </div>
              <div>
                <h3 className="font-serif text-xl font-semibold">Évasion Tunisienne</h3>
                <p className="text-xs tracking-widest uppercase opacity-70">Wellness</p>
              </div>
            </div>
            <p className="text-sm opacity-80 leading-relaxed mb-6">
              Une adresse discrète, totalement préservée. L'art de ralentir... le luxe ultime.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-serif text-lg font-medium mb-5">Programme</h4>
            <ul className="space-y-3">
              {footerLinks.programme.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-sm opacity-70 hover:opacity-100 transition-opacity">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-lg font-medium mb-5">Informations</h4>
            <ul className="space-y-3">
              {footerLinks.informations.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-sm opacity-70 hover:opacity-100 transition-opacity">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-lg font-medium mb-5">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-0.5 opacity-70" />
                <span className="text-sm opacity-80">
                  La Marée Village<br />
                  Raf Raf, Tunisie
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 opacity-70" />
                <a href="tel:+33123456789" className="text-sm opacity-80 hover:opacity-100 transition-opacity">
                  +33 1 23 45 67 89
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 opacity-70" />
                <a href="mailto:contact@maxcare-wellness.com" className="text-sm opacity-80 hover:opacity-100 transition-opacity">
                  contact@maxcare-wellness.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-primary-foreground/10">
        <div className="container-wellness mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs opacity-60">© {new Date().getFullYear()} Max Care Wellness. Tous droits réservés.</p>
            <div className="flex gap-6">
              {footerLinks.legal.map((link) => (
                <Link key={link.name} to={link.href} className="text-xs opacity-60 hover:opacity-100 transition-opacity">
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
