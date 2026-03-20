import { motion } from "framer-motion";
import { Heart, Brain, Zap, Moon, Users, Shield } from "lucide-react";

const benefits = [
  {
    icon: Heart,
    title: "Récupération physique",
    description: "Soulagez vos douleurs articulaires, dorsales et cervicales grâce à nos soins thérapeutiques personnalisés.",
  },
  {
    icon: Brain,
    title: "Apaisement mental",
    description: "Libérez-vous du stress chronique et retrouvez clarté d'esprit avec nos techniques de relaxation.",
  },
  {
    icon: Zap,
    title: "Regain d'énergie",
    description: "Revitalisez votre corps grâce à notre programme detox et nos activités bien-être.",
  },
  {
    icon: Moon,
    title: "Sommeil réparateur",
    description: "Optimisez la qualité de votre sommeil avec nos protocoles d'accompagnement nocturne.",
  },
  {
    icon: Users,
    title: "Encadrement expert",
    description: "Bénéficiez d'un suivi quotidien par des professionnels de santé qualifiés.",
  },
  {
    icon: Shield,
    title: "Cadre sécurisé",
    description: "Profitez de soins dans un environnement médical contrôlé et rassurant.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export function BenefitsSection() {
  return (
    <section className="section-padding bg-gradient-soft">
      <div className="container-wellness mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 mb-6"
          >
            <div className="ornament-line" />
            <span className="text-sm font-medium text-accent uppercase tracking-widest">
              Pourquoi nous choisir
            </span>
            <div className="ornament-line" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="heading-section text-foreground mb-6"
          >
            Une approche globale de{" "}
            <span className="italic text-primary">votre bien-être</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="subtitle"
          >
            Notre programme Évasion tunisienne combine soins ciblés, respiration, mouvement doux 
            et temps de récupération pour une transformation profonde et durable.
          </motion.p>
        </div>

        {/* Benefits Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {benefits.map((benefit) => (
            <motion.div
              key={benefit.title}
              variants={itemVariants}
              className="card-wellness group"
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-sage flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                <benefit.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="heading-card text-foreground mb-3">{benefit.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
