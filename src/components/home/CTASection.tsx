import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CTASection() {
  return (
    <section className="section-padding bg-gradient-hero text-primary-foreground relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-primary-foreground/10 -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full bg-primary-foreground/10 translate-y-1/2 -translate-x-1/2" />
      </div>

      <div className="container-wellness mx-auto relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="heading-section mb-6"
          >
            Prêt à transformer{" "}
            <span className="italic">votre bien-être ?</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg text-primary-foreground/80 mb-10 max-w-2xl mx-auto"
          >
            Réservez votre stage dès maintenant et offrez-vous une parenthèse 
            régénérante sous le soleil tunisien. Notre équipe est à votre écoute 
            pour répondre à toutes vos questions.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button variant="gold" size="xl" className="pulse-glow" asChild>
              <Link to="/reservation" className="group">
                Réserver maintenant
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>

            <Button variant="hero-outline" size="xl" asChild>
              <a href="tel:+33123456789" className="group">
                <Phone className="w-5 h-5" />
                Nous appeler
              </a>
            </Button>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-8 text-sm text-primary-foreground/60"
          >
            Réponse garantie sous 24h • Paiement sécurisé • Annulation gratuite jusqu'à 14 jours
          </motion.p>
        </div>
      </div>
    </section>
  );
}
