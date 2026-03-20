import { motion } from "framer-motion";
import spaTreatment from "@/assets/spa-treatment.webp";
import yogaImage from "@/assets/new-yoga.png";
import nutritionImage from "@/assets/detox-nutrition.jpg";
import team5 from "@/assets/team-5.jpg";

const pillars = [
  { title: "Yoga & Mouvement", image: yogaImage, desc: "L'art du mouvement conscient et de l'alignement post-traumatique." },
  { title: "Thérapies Manuelles", image: spaTreatment, desc: "Ostéopathie et massages ciblés pour libérer profondément les tensions." },
  { title: "Cuisine Vivante", image: nutritionImage, desc: "Une nutrition gastronomique, détoxifiante et respectueuse du corps." },
  { title: "Soins Beauté", image: team5, desc: "Rituels régénérants visage et corps dans notre espace bien-être." }
];

export function PillarsSection() {
  return (
    <section className="py-24 bg-background">
      <div className="container-wellness mx-auto px-4 max-w-6xl">
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-5xl font-serif text-foreground mb-6">L'Art de Vivre</h2>
          <div className="w-12 h-px bg-primary mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24">
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden aspect-[4/5] mb-8">
                <img 
                  src={pillar.image} 
                  alt={pillar.title} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" 
                />
              </div>
              <div className="text-center">
                <h3 className="text-3xl font-serif text-foreground mb-4">{pillar.title}</h3>
                <p className="text-muted-foreground font-light text-lg leading-relaxed">{pillar.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
