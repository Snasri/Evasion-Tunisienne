import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import venueTerrace from "@/assets/esprit-lieu.png";
import venuePool from "@/assets/venue-pool.jpg";
import venueExterior from "@/assets/venue-exterior.jpg";
import venueSeaview from "@/assets/venue-seaview.jpg";
import venueGarden from "@/assets/venue-garden.jpg";
import maree1 from "@/assets/maree-village-1.png";
import maree2 from "@/assets/maree-village-2.png";
import maree3 from "@/assets/maree-village-3.png";
import team1 from "@/assets/team-1.jpg";
import team2 from "@/assets/team-2.jpg";
import team3 from "@/assets/team-3.jpg";
import team4 from "@/assets/team-4.jpg";
import team5 from "@/assets/team-5.jpg";
import ventouses from "@/assets/soins-ventouses.png";

const team = [
  {
    name: "Physiothérapeute",
    role: "Récupération corporelle",
    description: "Évaluation physique, soulagement des douleurs et rééquilibrage postural.",
  },
  {
    name: "Coach de vie",
    role: "Accompagnement personnel",
    description: "Aide au lâcher-prise, recentrage émotionnel et gestion du mental.",
  },
  {
    name: "Coach Pilates",
    role: "Renforcement en douceur",
    description: "Correction de la posture, renforcement musculaire profond et souplesse.",
  },
  {
    name: "Ostéopathe",
    role: "Thérapie globale",
    description: "Rééquilibrage du corps, traitement tissulaire et des blocages articulaires.",
  },
  {
    name: "Masseuse",
    role: "Détente musculaire",
    description: "Drainage, soins ciblés et massages relaxants pour libérer les tensions.",
  },
  {
    name: "Spécialiste beauté",
    role: "Esthétique et bien-être",
    description: "Soins du visage et du corps, rituels beauté profonds et revitalisants.",
  },
];

const AProposPage = () => {
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
              L'esprit du lieu
            </h1>
            
            <p className="font-serif text-xl lg:text-2xl italic text-muted-foreground leading-relaxed">
              "Découvrez l'histoire de Max Care Wellness et les valeurs qui 
              guident notre approche du bien-être depuis plus de 15 ans."
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
            src={venueTerrace}
            alt="L'esprit du lieu"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </section>

      {/* Story */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-8"
          >
            <h2 className="font-serif text-3xl lg:text-4xl text-primary mb-12">Notre histoire</h2>
            
            <p className="text-muted-foreground leading-relaxed text-lg">
              Max Care Wellness est né d'une conviction : le bien-être authentique 
              nécessite du temps, de l'expertise et un cadre exceptionnel. Installés à 
              La Marée Village, maison d'hôte de luxe surplombant la mer à Raf Raf, nous avons 
              créé un lieu de ressourcement unique.
            </p>
            <p className="text-muted-foreground leading-relaxed text-lg">
              Notre approche combine les traditions thérapeutiques méditerranéennes 
              avec les dernières avancées en médecine préventive. Chaque programme 
              est conçu pour apporter des résultats durables, pas seulement un 
              moment de détente.
            </p>
            <p className="text-muted-foreground leading-relaxed text-lg">
              Aujourd'hui, de nombreux hôtes nous font confiance chaque année, 
              venus principalement de France et d'Europe, à la recherche d'une 
              véritable transformation dans un havre de paix.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Team */}
      <section id="equipe" className="py-24 bg-[#F9F9F9]">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="font-serif text-4xl lg:text-5xl text-primary mb-6">Vos hôtes</h2>
            <div className="w-24 h-[1px] bg-primary/30 mx-auto"></div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4 pt-8 sm:pt-12">
                  <div className="overflow-hidden">
                    <img src={team1} alt="Expert" className="w-full h-[300px] object-cover hover:scale-105 transition-transform duration-700" />
                  </div>
                  <div className="overflow-hidden">
                    <img src={ventouses} alt="Soin aux ventouses" className="w-full h-[250px] object-cover hover:scale-105 transition-transform duration-700" />
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="overflow-hidden">
                    <img src={team3} alt="Ostéopathie" className="w-full h-[220px] object-cover hover:scale-105 transition-transform duration-700" />
                  </div>
                  <div className="overflow-hidden">
                    <img src={team4} alt="Massage" className="w-full h-[280px] object-cover hover:scale-105 transition-transform duration-700" />
                  </div>
                  <div className="overflow-hidden hidden sm:block">
                    <img src={team5} alt="Soin du corps" className="w-full h-[200px] object-cover hover:scale-105 transition-transform duration-700" />
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h3 className="font-serif text-3xl text-foreground mb-12">
                Des experts à votre écoute
              </h3>

              <div className="space-y-8">
                {team.map((member) => (
                  <div key={member.name} className="flex flex-col">
                    <h4 className="font-serif text-xl text-primary mb-2">{member.name}</h4>
                    <p className="text-muted-foreground leading-relaxed">{member.description}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Galerie du domaine */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16 space-y-4"
          >
            <h2 className="font-serif text-3xl lg:text-4xl text-primary">
              La Marée Village, Raf Raf
            </h2>
            <div className="w-16 h-[1px] bg-primary/30 mx-auto mb-6"></div>
            <p className="text-muted-foreground leading-relaxed text-lg">
              À seulement 45 minutes de l'aéroport de Tunis-Carthage, La Marée Village 
              vous accueille dans un écrin de luxe face à la Méditerranée. Tranquillité 
              et raffinement au cœur d'une nature préservée.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              { src: venueExterior, alt: "Extérieur" },
              { src: venuePool, alt: "Piscine" },
              { src: venueSeaview, alt: "Vue mer" },
              { src: maree1, alt: "Chambre 1" },
              { src: maree2, alt: "Chambre 2" },
              { src: maree3, alt: "Espace détente" },
            ].map((img, index) => (
              <motion.div
                key={img.alt + index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="overflow-hidden group rounded-2xl shadow-sm"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-[350px] object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AProposPage;
