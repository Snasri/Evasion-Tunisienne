import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Marie-Claire Dupont",
    age: 67,
    location: "Paris",
    stage: "Évasion tunisienne",
    rating: 5,
    text: "J'avais besoin de souffler sans partir longtemps. L'accueil à l'aéroport, la douceur du programme et la qualité des soins m'ont immédiatement mise en confiance.",
    avatar: "MC",
  },
  {
    id: 2,
    name: "Thomas Bernard",
    age: 45,
    location: "Lyon",
    stage: "Évasion tunisienne",
    rating: 5,
    text: "Le rythme est parfait : assez structuré pour se sentir accompagné, assez doux pour vraiment déconnecter. Le séminaire anti-stress du dimanche m'a beaucoup apporté.",
    avatar: "TB",
  },
  {
    id: 3,
    name: "Françoise Martin",
    age: 72,
    location: "Bordeaux",
    stage: "Évasion tunisienne",
    rating: 5,
    text: "Je craignais un séjour trop intense, mais tout est fluide, humain et rassurant. Les balades sur la plage et les moments de relaxation m'ont fait un bien immense.",
    avatar: "FM",
  },
];

export function TestimonialsSection() {
  return (
    <section className="section-padding bg-gradient-soft">
      <div className="container-wellness mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 mb-6"
          >
            <div className="ornament-line" />
            <span className="text-sm font-medium text-accent uppercase tracking-widest">Témoignages</span>
            <div className="ornament-line" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="heading-section text-foreground"
          >
            Ils ont vécu l'expérience <span className="italic text-primary">Max Care</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="card-wellness relative"
            >
              <div className="absolute -top-4 right-6">
                <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center shadow-lg">
                  <Quote className="w-5 h-5 text-accent-foreground" />
                </div>
              </div>

              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>

              <p className="text-foreground leading-relaxed mb-6 italic">"{testimonial.text}"</p>

              <div className="flex items-center gap-4 pt-5 border-t border-border">
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                  <span className="text-sm font-medium text-primary-foreground">{testimonial.avatar}</span>
                </div>
                <div>
                  <p className="font-medium text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.age} ans • {testimonial.location}
                  </p>
                </div>
              </div>

              <div className="mt-4">
                <span className="inline-block px-3 py-1 bg-secondary rounded-full text-xs text-muted-foreground">
                  {testimonial.stage}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
