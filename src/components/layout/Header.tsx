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

          <div className="hidden lg:flex items-center gap-6">
            <a href="https://wa.me/21622334455" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-primary hover:text-primary/70 transition-colors font-medium">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.246 2.248 3.484 5.232 3.483 8.411-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.308 1.656zm6.29-4.143l.354.209c1.512.897 3.248 1.369 5.013 1.371 5.438.002 9.863-4.422 9.865-9.863.001-2.636-1.026-5.115-2.891-6.982-1.866-1.866-4.341-2.894-6.977-2.895-5.44 0-9.865 4.423-9.867 9.865-.001 1.849.516 3.655 1.494 5.228l.235.378-1.107 4.038 4.146-1.088zm10.743-7.25c-.247-.123-1.465-.722-1.692-.805-.227-.082-.392-.123-.557.123-.165.247-.638.805-.782.968-.145.164-.289.185-.536.062-.247-.123-1.043-.385-1.986-1.227-.735-.655-1.231-1.465-1.375-1.711-.145-.247-.015-.38.11-.504.113-.11.247-.289.371-.433.124-.144.165-.247.247-.412.083-.165.042-.31-.021-.433-.062-.124-.557-1.339-.762-1.833-.2-.482-.418-.413-.557-.413h-.475c-.165 0-.433.062-.659.31-.227.247-.866.845-.866 2.06s.886 2.411 1.01 2.576c.124.165 1.745 2.664 4.225 3.733.59.255 1.05.407 1.408.521.593.187 1.132.161 1.557.097.475-.072 1.465-.598 1.671-1.175.206-.576.206-1.071.144-1.175-.062-.103-.227-.165-.475-.288z"/></svg>
              <span>WhatsApp</span>
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
