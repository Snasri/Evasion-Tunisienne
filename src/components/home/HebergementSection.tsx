import { motion } from "framer-motion";
import suite1 from "@/assets/maree-village-1.png";
import suite2 from "@/assets/maree-village-2.png";
import suite3 from "@/assets/maree-village-3.png";

export const HebergementSection = () => {
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
          <h2 className="font-serif text-4xl lg:text-5xl text-primary mb-6">Nos suites</h2>
          <div className="w-24 h-[1px] bg-primary/30 mx-auto"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center mb-16 space-y-4"
        >
          <p className="font-serif text-2xl italic text-primary">« La simplicité est la sophistication suprême. »</p>
          <p className="font-serif">Leonardo da Vinci</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {[
            suite1,
            suite2,
            suite3
          ].map((src, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 + (idx * 0.2) }}
            >
              <img src={src} alt="Suite" className="w-full h-[500px] object-cover rounded-2xl shadow-sm" />
            </motion.div>
          ))}
        </div>

        <div className="text-right">
          <a href="/stages" className="inline-block border border-primary text-primary px-8 py-3 uppercase tracking-widest text-sm hover:bg-primary hover:text-white transition-colors duration-300">
            Découvrir
          </a>
        </div>
      </div>
    </section>
  );
};
