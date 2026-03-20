import { motion } from "framer-motion";
import newYogaImage from "@/assets/new-yoga.png";

export const ArtDeVivreSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-4xl lg:text-5xl text-primary mb-6">Notre programme</h2>
          <div className="w-24 h-[1px] bg-primary/30 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col h-[600px] md:h-auto"
          >
            <div className="relative w-full h-full group overflow-hidden">
              <img 
                src={newYogaImage} 
                alt="Yoga" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <a href="#yoga"><h3 className="text-white text-3xl font-serif hover:scale-105 transition-transform cursor-pointer">Yoga & Pilates</h3></a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col gap-4 h-[800px] md:h-[600px]"
          >
            {[
              {
                title: "Ostéopathie & Physiothérapie",
                image: "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?q=80&w=1974&auto=format&fit=crop",
                link: "#therapies"
              },
              {
                title: "Cuisine Vivante",
                image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=2053&auto=format&fit=crop",
                link: "#cuisine"
              },
              {
                title: "Soins Beauté & Massages",
                image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=2070&auto=format&fit=crop",
                link: "#soins"
              }
            ].map((item, idx) => (
              <div key={idx} className="relative w-full flex-1 group overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors duration-500"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <a href={item.link}><h3 className="text-white text-2xl font-serif text-center px-4 hover:scale-105 transition-transform cursor-pointer">{item.title}</h3></a>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
