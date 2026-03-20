import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Building2, Users, TrendingUp, Award, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const benefits = [
  {
    icon: TrendingUp,
    title: "Réduction de l'absentéisme",
    stat: "-35%",
    description: "Moins de jours d'arrêt maladie après un stage de récupération",
  },
  {
    icon: Users,
    title: "Cohésion d'équipe",
    description: "Renforcez les liens entre collaborateurs dans un cadre privilégié",
  },
  {
    icon: Award,
    title: "QVT & Marque employeur",
    description: "Montrez votre engagement pour le bien-être de vos équipes",
  },
];

export function EnterpriseCTASection() {
  return (
    <section className="section-padding">
      <div className="container-wellness mx-auto">
        <div className="bg-foreground rounded-4xl p-8 lg:p-16 text-primary-foreground relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-accent/10 -translate-y-1/2 translate-x-1/2" />
          
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-accent/20 mb-6"
              >
                <Building2 className="w-5 h-5 text-accent" />
                <span className="text-sm font-medium text-accent">Offre Entreprises</span>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="heading-section mb-6"
              >
                Investissez dans{" "}
                <span className="italic text-accent">la santé</span> de vos équipes
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-primary-foreground/70 leading-relaxed mb-8"
              >
                Proposez à vos collaborateurs une expérience de récupération unique. 
                Nos programmes QVT sont conçus pour prévenir les risques psychosociaux 
                et favoriser le bien-être au travail.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <Button variant="gold" size="lg" asChild>
                  <Link to="/entreprises" className="group">
                    Demander un devis entreprise
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </motion.div>
            </div>

            {/* Benefits */}
            <div className="space-y-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  className="flex items-start gap-4 p-5 rounded-2xl bg-primary-foreground/5 backdrop-blur-sm border border-primary-foreground/10"
                >
                  <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center flex-shrink-0">
                    <benefit.icon className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-1">
                      <h3 className="font-medium">{benefit.title}</h3>
                      {benefit.stat && (
                        <span className="text-accent font-semibold">{benefit.stat}</span>
                      )}
                    </div>
                    <p className="text-sm text-primary-foreground/60">{benefit.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
