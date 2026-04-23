import { motion } from "framer-motion";
import massageSoins from "@/assets/massage-soins.jpg";

const features = [
  { number: "500+", label: "Clients satisfaits" },
  { number: "15", label: "Années d'expérience" },
  { number: "12", label: "Professionnels de santé" },
  { number: "4.9", label: "Note moyenne" },
];

export function AboutPreviewSection() {
  return (
    <section className="section-padding bg-secondary">
      <div className="container-wellness mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-elevated">
              <img
                src={massageSoins}
                alt="Soin massage Max Care Wellness"
                className="w-full h-[500px] object-cover"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-48 h-48 rounded-3xl bg-accent/20 -z-10" />
            <div className="absolute -top-6 -left-6 w-32 h-32 rounded-2xl bg-primary/10 -z-10" />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="inline-flex items-center gap-2 mb-6">
              <div className="ornament-line" />
              <span className="text-sm font-medium text-accent uppercase tracking-widest">
                L'esprit du lieu
              </span>
            </div>

            <h2 className="heading-section text-foreground mb-6">
              La vie sur nos{" "}
              <span className="italic text-primary">terres</span>
            </h2>

            <p className="text-muted-foreground leading-relaxed mb-6">
              Installé à La Marée Village, une maison d'hôte de luxe surplombant la mer à Raf Raf, 
              Max Care Wellness vous offre un cadre exceptionnel pour votre régénération. 
              Notre équipe pluridisciplinaire vous accompagne dans une démarche de santé globale, 
              alliant soins thérapeutiques et approche holistique.
            </p>

            <p className="text-muted-foreground leading-relaxed mb-10">
              Profitez d'un cadre exceptionnel, d'un climat méditerranéen idéal et 
              d'infrastructures modernes pour une expérience de récupération unique, 
              à seulement 2h30 de vol de Paris.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="text-center sm:text-left"
                >
                  <p className="text-3xl font-serif font-semibold text-primary mb-1">
                    {feature.number}
                  </p>
                  <p className="text-sm text-muted-foreground">{feature.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
