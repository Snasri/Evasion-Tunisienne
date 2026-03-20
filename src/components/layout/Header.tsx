import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import logoEvasion from "@/assets/logo-evasion.png";

const navigation = [
  { name: "L'esprit du lieu", href: "/a-propos" },
  { name: "Nos retraites", href: "/stages" },
  { name: "Refuge confidentiel", href: "/entreprises" },
  { name: "Contact – accès", href: "/contact" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (href: string) =>
    href === "/" ? location.pathname === "/" : location.pathname.startsWith(href);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled ? "bg-background/95 backdrop-blur-md shadow-soft py-3" : "bg-transparent py-5"
      )}
    >
      <div className="container-wellness mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="w-12 h-12 rounded-full flex items-center justify-center shadow-soft group-hover:shadow-card transition-shadow duration-300 overflow-hidden bg-background">
                <img src={logoEvasion} alt="Logo Évasion Tunisienne" className="w-full h-full object-cover" />
              </div>
            </div>
            <div className="hidden sm:block">
              <h1
                className={cn(
                  "font-serif text-xl font-semibold tracking-tight transition-colors duration-300",
                  isScrolled ? "text-foreground" : "text-foreground"
                )}
              >
                Évasion Tunisienne
              </h1>
              <p
                className={cn(
                  "text-xs tracking-widest uppercase transition-colors duration-300",
                  isScrolled ? "text-muted-foreground" : "text-muted-foreground"
                )}
              >
                Wellness
              </p>
            </div>
          </Link>

          <div className="hidden lg:flex items-center gap-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={cn(
                  "relative text-sm font-medium transition-colors duration-300 py-2",
                  isActive(item.href) ? "text-primary" : "text-muted-foreground hover:text-foreground",
                  "after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-accent after:transition-all after:duration-300",
                  isActive(item.href) ? "after:w-full" : "after:w-0 hover:after:w-full"
                )}
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-4">
            <a href="tel:+33123456789" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
              <Phone className="w-4 h-4" />
              <span>+33 1 23 45 67 89</span>
            </a>
            <Button variant="gold" size="default" asChild>
              <Link to="/reservation">Réserver</Link>
            </Button>
          </div>

          <button
            className="lg:hidden p-2 text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-background border-t border-border"
          >
            <div className="container-wellness mx-auto px-4 py-6 space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={cn(
                    "block py-3 text-lg font-medium transition-colors",
                    isActive(item.href) ? "text-primary" : "text-muted-foreground"
                  )}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 border-t border-border space-y-3">
                <a href="tel:+33123456789" className="flex items-center gap-2 text-muted-foreground">
                  <Phone className="w-4 h-4" />
                  <span>+33 1 23 45 67 89</span>
                </a>
                <Button variant="gold" size="lg" className="w-full" asChild>
                  <Link to="/reservation">Réserver le programme</Link>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
