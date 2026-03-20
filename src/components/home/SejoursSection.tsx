import { motion } from "framer-motion";

export const SejoursSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto mb-24 px-4 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-4xl lg:text-5xl text-primary mb-6">Nos séjours bien-être & retraites wellness</h2>
          <div className="w-24 h-[1px] bg-primary/30 mx-auto"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-3xl mx-auto text-center space-y-8"
        >
          <p className="font-serif text-xl italic text-primary">« La beauté n’est que la promesse du bonheur. »</p>

          <p className="text-muted-foreground leading-relaxed text-lg">
            Dans un cadre tunisien enchanteur,
            nous proposons des séjours et retraites bien‑être confidentiels avec Max Care Wellness, 
            afin de porter la plus grande attention à chacun de nos hôtes et de faire de cette expérience un temps unique de rencontre.
          </p>
        </motion.div>
      </div>

      <div className="relative w-full h-[70vh] min-h-[500px]">
        <img 
          src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=2099&auto=format&fit=crop" 
          alt="Retraite" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl text-center space-y-8"
          >
            <p className="font-serif text-2xl md:text-3xl leading-relaxed text-white">
              « Le véritable voyage n’est pas de parcourir le désert ou de franchir les montagnes,
              c’est de parvenir en un point exceptionnel où la saveur de l’instant baigne
              avec tous les contours de la vie intérieure. »
            </p>
            <p className="font-serif text-lg">Saint-Exupéry</p>
            <div className="pt-8">
              <a href="#programme" className="inline-block border border-white text-white px-8 py-3 uppercase tracking-widest text-sm hover:bg-white hover:text-black transition-colors duration-300">
                Découvrir
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
