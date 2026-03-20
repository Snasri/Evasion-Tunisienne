import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqCategories = [
  {
    title: "Avant votre séjour",
    questions: [
      {
        question: "Y a-t-il une limite d'âge pour participer aux stages ?",
        answer: "Non, il n'y a pas de limite d'âge. Nos programmes sont adaptés à tous les âges et tous les niveaux de forme physique. L'équipe adapte l'intensité des activités et des soins en fonction de votre condition pour un accompagnement sur-mesure.",
      },
      {
        question: "Puis-je participer si j'ai des douleurs chroniques ?",
        answer: "Absolument. Nos stages sont particulièrement adaptés aux personnes souffrant de douleurs chroniques. Le bilan initial permet d'adapter tous les soins à votre condition, dans le respect de votre corps.",
      },
      {
        question: "Faut-il être sportif pour suivre un stage ?",
        answer: "Pas du tout. L'objectif est la récupération et l'écoute de soi, pas la performance. Les activités proposées sont accessibles à tous et adaptées à votre rythme.",
      },
      {
        question: "Comment se déroule la réservation ?",
        answer: "Après votre demande en ligne, nous vous contactons pour définir vos besoins. Une fois les détails confirmés, une avance de 30% vous sera demandée par email pour sécuriser votre place. Le solde sera réglé sur place.",
      },
    ],
  },
  {
    title: "Pendant le séjour",
    questions: [
      {
        question: "Comment se passe une journée type ?",
        answer: "La journée commence par une activité douce au réveil, suivie d'un petit-déjeuner nutritif. Les temps de soins rythment la journée, en alternance avec des moments de repos libre pour profiter du calme environnant.",
      },
      {
        question: "Les soins sont-ils réalisés par des professionnels ?",
        answer: "Oui, tous nos praticiens sont rigoureusement sélectionnés, diplômés et expérimentés (thérapeutes certifiés, coachs, ostéopathes) pour vous garantir des soins d'une qualité d'exception.",
      },
      {
        question: "Puis-je venir accompagné(e) ?",
        answer: "Oui, nos retraites peuvent être vécues à deux. Nous proposons des chambres partagées pour les couples ou les amis, tout en préservant un accompagnement individuel lors des soins.",
      },
      {
        question: "Y a-t-il du wifi ?",
        answer: "Le wifi est disponible dans le domaine. Cependant, pour profiter pleinement de la dimension réparatrice de la retraite, nous vous invitons à une déconnexion digitale douce.",
      },
    ],
  },
  {
    title: "Pratique & Logistique",
    questions: [
      {
        question: "Comment me rendre au domaine ?",
        answer: "Un transfert depuis l'aéroport de Tunis-Carthage (à environ 45 minutes) peut être organisé par nos soins pour faciliter votre arrivée. Détails et tarifs sur demande.",
      },
      {
        question: "Que dois-je apporter ?",
        answer: "Privilégiez des vêtements souples et confortables, une tenue de bain ainsi que des chaussures de marche légère. Le linge de maison et de toilette de qualité hôtelière est fourni sur place.",
      },
    ],
  },
];

const FAQPage = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-40 pb-24 bg-background border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="font-serif text-5xl lg:text-7xl text-primary mb-12">
              Questions fréquentes
            </h1>
            
            <p className="font-serif text-xl lg:text-2xl italic text-muted-foreground leading-relaxed">
              "Retrouvez ici les réponses aux questions les plus courantes pour préparer
              votre retraite en toute sérénité."
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-24 bg-[#F9F9F9]">
        <div className="container mx-auto px-4 max-w-4xl space-y-24">
          {faqCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
            >
              <h2 className="font-serif text-3xl text-primary mb-10 pb-4 border-b border-border">
                {category.title}
              </h2>
              <Accordion type="single" collapsible className="space-y-0">
                {category.questions.map((faq, index) => (
                  <AccordionItem
                    key={index}
                    value={`${categoryIndex}-${index}`}
                    className="border-b border-border last:border-none"
                  >
                    <AccordionTrigger className="text-left font-serif text-xl text-foreground hover:text-primary transition-colors py-8 px-0 hover:no-underline [&[data-state=open]>svg]:rotate-180">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed pb-8 text-lg">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="font-serif text-4xl text-primary mb-6">
              Une demande particulière ?
            </h2>
            <p className="text-muted-foreground mb-12 text-lg italic font-serif">
              Notre équipe est à votre entière disposition pour répondre à toutes vos interrogations.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Link
                to="/contact"
                className="inline-block border border-primary bg-primary text-white px-10 py-4 uppercase tracking-widest text-sm hover:bg-transparent hover:text-primary transition-colors duration-300"
              >
                Nous écrire
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default FAQPage;
