import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Clock, Check, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { evasionTunisienne as prog } from "@/content/evasionTunisienne";

export function StagesPreviewSection() {
  return (
    <section className="section-padding">
      <div className="container-wellness mx-auto">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 mb-6"
          >
            <div className="ornament-line" />
            <span className="text-sm font-medium text-accent uppercase tracking-widest">
              Notre programme
            </span>
            <div className="ornament-line" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="heading-section text-foreground"
          >
            <span className="italic text-primary">{prog.name}</span>
          </motion.h2>
        </div>

        {/* Single Programme Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="card-wellness overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
              {/* Image */}
              <div className="relative h-64 md:h-auto md:-my-6 md:-ml-6 overflow-hidden md:rounded-l-2xl">
                <img
                  src={prog.image}
                  alt={prog.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 to-transparent md:bg-gradient-to-r" />
                <div className="absolute bottom-4 left-4 flex items-center gap-2 text-primary-foreground/90">
                  <Clock className="w-4 h-4" />
                  <span className="text-sm">{prog.shortDuration}</span>
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-col p-2 md:pl-6">
                <div className="inline-flex items-center gap-1 px-3 py-1 bg-accent rounded-full w-fit mb-4">
                  <Star className="w-3 h-3 fill-current text-accent-foreground" />
                  <span className="text-xs font-semibold text-accent-foreground">
                    Programme signature
                  </span>
                </div>

                <h3 className="heading-card text-foreground mb-2">{prog.name}</h3>
                <p className="text-muted-foreground text-sm mb-5">{prog.excerpt}</p>

                {/* Highlights */}
                <ul className="space-y-2 mb-6">
                  {prog.highlights.map((highlight) => (
                    <li key={highlight} className="flex items-center gap-2 text-sm text-foreground">
                      <Check className="w-4 h-4 text-primary flex-shrink-0" />
                      {highlight}
                    </li>
                  ))}
                </ul>

                {/* Price & CTA */}
                <div className="flex items-center justify-between pt-5 border-t border-border mt-auto">
                  <div>
                    <p className="text-sm text-muted-foreground">{prog.priceDetails}</p>
                    <p className="text-2xl font-serif font-semibold text-foreground">
                      {prog.price}€ <span className="text-sm font-medium text-primary ml-1">(Tout inclus)</span>
                    </p>
                  </div>
                  <div className="flex gap-3">
                    <Button variant="outline" asChild>
                      <Link to="/stages">Détails</Link>
                    </Button>
                    <Button variant="gold" asChild>
                      <Link to="/reservation">
                        Réserver
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
