import { useState } from "react";
import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const ContactPage = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast({
      title: "Message envoyé !",
      description: "Nous vous répondrons sous 24h.",
    });

    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
    setIsSubmitting(false);
  };

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
              Contact & Accès
            </h1>
            
            <p className="font-serif text-xl lg:text-2xl italic text-muted-foreground leading-relaxed">
              "Notre équipe est à votre écoute pour répondre à toutes vos questions 
              ou organiser votre séjour sur-mesure."
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 bg-[#F9F9F9]">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
            
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-16"
            >
              <div>
                <h2 className="font-serif text-3xl text-primary mb-8">Coordonnées</h2>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="font-serif text-xl mb-2 text-foreground">Adresse</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      La Marée Village<br />
                      Raf Raf, Bizerte<br />
                      Tunisie
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="font-serif text-xl mb-2 text-foreground">Téléphone & Email</h3>
                    <div className="space-y-1 text-muted-foreground">
                      <p><a href="tel:+33123456789" className="hover:text-primary transition-colors">+33 1 23 45 67 89</a></p>
                      <p><a href="mailto:contact@maxcare-wellness.com" className="hover:text-primary transition-colors">contact@maxcare-wellness.com</a></p>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="font-serif text-xl mb-2 text-foreground">Horaires</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Lun - Ven : 9h00 - 18h00<br />
                      Sam : 9h00 - 13h00
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="font-serif text-3xl text-primary mb-8">Nous écrire</h2>

              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="space-y-6 text-sm">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <Input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Nom complet *"
                      className="border-b border-0 border-border rounded-none bg-transparent px-0 focus-visible:ring-0 focus-visible:border-primary h-12"
                    />
                    <Input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="Email *"
                      className="border-b border-0 border-border rounded-none bg-transparent px-0 focus-visible:ring-0 focus-visible:border-primary h-12"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <Input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="Téléphone"
                      className="border-b border-0 border-border rounded-none bg-transparent px-0 focus-visible:ring-0 focus-visible:border-primary h-12"
                    />
                    <Input
                      type="text"
                      required
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="Sujet *"
                      className="border-b border-0 border-border rounded-none bg-transparent px-0 focus-visible:ring-0 focus-visible:border-primary h-12"
                    />
                  </div>

                  <Textarea
                    required
                    rows={6}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Votre message *"
                    className="border-b border-0 border-border rounded-none bg-transparent px-0 focus-visible:ring-0 focus-visible:border-primary resize-none min-h-[150px]"
                  />
                </div>

                <div className="text-right">
                  <button 
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-block border border-primary text-primary px-10 py-4 uppercase tracking-widest text-sm hover:bg-primary hover:text-white transition-colors duration-300 disabled:opacity-50"
                  >
                    {isSubmitting ? "Envoi en cours..." : "Envoyer"}
                  </button>
                </div>
              </form>
            </motion.div>

          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ContactPage;
