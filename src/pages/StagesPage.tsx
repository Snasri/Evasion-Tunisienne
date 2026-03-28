import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { ProgramTimeline } from "@/components/program/ProgramTimeline";
import { evasionTunisienne as prog } from "@/content/evasionTunisienne";
import venuePool from "@/assets/venue-pool.jpg";

const StagesPage = () => {
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
              {prog.name}
            </h1>
            
            <p className="font-serif text-xl lg:text-2xl italic text-muted-foreground leading-relaxed mb-12">
              "{prog.description}"
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-lg font-serif">
              <span>{prog.duration}</span>
              <span className="hidden sm:inline-block w-1.5 h-1.5 rounded-full bg-primary/40"></span>
              <span>{prog.shortDuration}</span>
            </div>
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
            src={venuePool}
            alt={prog.name}
            className="w-full h-full object-cover"
          />
        </motion.div>
      </section>

      {/* The Experience / Included */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="font-serif text-3xl lg:text-4xl text-primary mb-6">L'expérience Max Care</h2>
            <div className="w-16 h-[1px] bg-primary/30 mx-auto"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <h3 className="font-serif text-2xl text-foreground mb-8">Ce qui est inclus</h3>
              <ul className="space-y-4">
                {prog.included.map((item) => (
                  <li key={item} className="flex items-start gap-4 text-muted-foreground">
                    <span className="text-primary mt-1">•</span>
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="flex flex-col justify-between">
              <div>
                <h3 className="font-serif text-2xl text-foreground mb-8">Pour qui ?</h3>
                <div className="space-y-4">
                  {prog.idealFor.map((item) => (
                    <p key={item} className="text-muted-foreground leading-relaxed">
                      {item}
                    </p>
                  ))}
                </div>
              </div>

              <div className="mt-16 pt-12 border-t border-border">
                <p className="text-sm text-muted-foreground uppercase tracking-widest mb-4">Investissement pour soi</p>
                <div className="flex items-baseline gap-4 mb-8">
                  <span className="font-serif text-5xl text-primary">{prog.price}€</span>
                  <span className="text-muted-foreground italic">par personne (Tout inclus, hors vols)</span>
                </div>
                
                <Link 
                  to="/reservation"
                  className="inline-block border border-primary text-primary px-10 py-4 uppercase tracking-widest text-sm hover:bg-primary hover:text-white transition-colors duration-300 w-full sm:w-auto text-center"
                >
                  Faire une demande de réservation
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programme timeline */}
      <section className="py-24 bg-[#F9F9F9]">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="font-serif text-3xl lg:text-4xl text-primary mb-6">Le déroulé de votre retraite</h2>
            <div className="w-16 h-[1px] bg-primary/30 mx-auto"></div>
          </motion.div>

          <ProgramTimeline schedule={prog.schedule} />
        </div>
      </section>
    </Layout>
  );
};

export default StagesPage;
