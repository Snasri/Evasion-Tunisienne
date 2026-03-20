import { motion } from "framer-motion";

export function QuoteSection() {
  return (
    <section className="py-32 bg-background flex flex-col items-center justify-center text-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1 }}
        className="max-w-4xl mx-auto space-y-8"
      >
        <p className="text-2xl md:text-4xl font-serif text-foreground leading-relaxed italic">
          « Le véritable voyage n’est pas de parcourir le désert ou de franchir les montagnes, 
          c’est de parvenir en un point exceptionnel pour retrouver sa propre essence. »
        </p>
        <div className="w-12 h-px bg-primary mx-auto my-8" />
      </motion.div>
    </section>
  );
}
