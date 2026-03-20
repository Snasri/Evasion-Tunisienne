import { motion } from "framer-motion";

export const IntroSection = () => {
  return (
    <section className="py-24 bg-background px-4">
      <div className="container mx-auto max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-16"
        >
          <p className="font-serif text-2xl lg:text-3xl text-primary leading-relaxed">
            « Un lieu rare, hors du temps, où le silence devient un luxe, le souffle un guide et le corps un territoire à réhabiter. Un séjour au cœur d’une nature intacte, entre soin, mouvement, écoute et présence. »
          </p>

          <div className="space-y-6">
            <h3 className="font-serif text-2xl lg:text-3xl font-semibold text-primary">L'art de ralentir… le luxe ultime</h3>
            <p className="text-muted-foreground leading-relaxed text-lg">
              La nature ne se presse pas. Elle évolue au rythme des saisons et des cycles.<br />
              Prendre le temps de contempler, de ressentir, de respirer c’est déjà commencer à se réparer.<br />
              C’est une nécessité vitale de ralentir dans un monde qui épuise.
            </p>
          </div>

          <div className="space-y-6">
            <p className="text-muted-foreground leading-relaxed text-lg">
              L'Évasion Tunisienne par Max Care Wellness est une adresse discrète, totalement préservée<br />
              qui a été imaginée pour ceux en quête de ressourcement, de régénération, d’expériences singulières et authentiques :<br />
              on y vient pour s’évader du bruit du monde et se laisser bercer par la beauté et poésie de la vie.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
