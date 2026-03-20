import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import teamImage from "@/assets/team.jpg";

const programmes = [
  {
    name: "Séminaire Bien-être",
    duration: "3-5 jours",
    description: "Combinez réflexion stratégique et récupération dans un cadre exceptionnel.",
    features: ["Activités de groupe", "Soins individuels", "Ateliers nutrition", "Espaces d'inspiration"],
  },
  {
    name: "Programme Vitalité",
    duration: "5-7 jours",
    description: "Régénérez l'énergie de vos équipes avec un programme ciblé.",
    features: ["Bilan santé individuel", "Soins thérapeutiques", "Oxygénation", "Gestion du stress"],
  },
  {
    name: "Retraite Dirigeants",
    duration: "7-10 jours",
    description: "Un temps de recul exclusif pour vos cadres et dirigeants.",
    features: ["Accompagnement VIP", "Suite privative", "Programme sur-mesure", "Coaching individuel"],
  },
];

const EntreprisesPage = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-40 pb-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="font-serif text-5xl lg:text-7xl text-primary mb-12">
              Refuge confidentiel
            </h1>
            
            <p className="font-serif text-xl lg:text-2xl italic text-muted-foreground leading-relaxed">
              "Offrez à vos collaborateurs ou à vous-même un espace de recul absolu,
              où la performance naît de la sérénité."
            </p>
          </motion.div>
        </div>
      </section>

      {/* Large Image */}
      <section className="w-full h-[60vh] lg:h-[80vh] bg-background">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="w-full h-full"
        >
          <img
            src={teamImage}
            alt="Refuge d'équipe"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </section>

      {/* Vision */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-8"
          >
            <h2 className="font-serif text-3xl lg:text-4xl text-primary mb-12">Le privilège de l'intimité</h2>
            
            <p className="text-muted-foreground leading-relaxed text-lg">
              La Marée Village se transforme pour accueillir vos comités de direction,
              équipes réduites ou talents clés dans un cadre privatisable et haut de gamme.
            </p>
            <p className="text-muted-foreground leading-relaxed text-lg">
              Loin des séminaires traditionnels, l'expérience Max Care apporte une réelle 
              plus-value humaine. C'est en prenant soin du corps et de l'esprit que 
              se forgent les visions les plus claires et les cohésions les plus fortes.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Programmes */}
      <section className="py-24 bg-[#F9F9F9]">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="font-serif text-4xl lg:text-5xl text-primary mb-6">Expériences sur-mesure</h2>
            <div className="w-24 h-[1px] bg-primary/30 mx-auto"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {programmes.map((programme, index) => (
              <motion.div
                key={programme.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex flex-col"
              >
                <span className="text-sm font-serif text-muted-foreground uppercase tracking-widest mb-4">
                  {programme.duration}
                </span>
                <h3 className="font-serif text-2xl text-foreground mb-4">{programme.name}</h3>
                <p className="text-muted-foreground leading-relaxed mb-8 flex-1">
                  {programme.description}
                </p>
                <ul className="space-y-3 pt-6 border-t border-border">
                  {programme.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-4 text-sm text-foreground">
                      <span className="text-primary mt-0.5">•</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          <div className="mt-24 text-center">
            <Link 
              to="/contact?type=entreprise"
              className="inline-block border border-primary text-primary px-10 py-4 uppercase tracking-widest text-sm hover:bg-primary hover:text-white transition-colors duration-300"
            >
              Échanger sur votre projet
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default EntreprisesPage;
