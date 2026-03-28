import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { CalendarDays, Clock, Check, Shield } from "lucide-react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { Layout } from "@/components/layout/Layout";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { evasionTunisienne as prog } from "@/content/evasionTunisienne";

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001';

const ALLOWED_DATES = [
  // Mai 2026
  new Date(2026, 4, 1),  new Date(2026, 4, 2),  new Date(2026, 4, 3), // 1/2/3 Mai
  new Date(2026, 4, 8),  new Date(2026, 4, 9),  new Date(2026, 4, 10), // 8/9/10 Mai
  new Date(2026, 4, 22), new Date(2026, 4, 23), new Date(2026, 4, 24), // 22/23/24 Mai
  // Juin 2026
  new Date(2026, 5, 5),  new Date(2026, 5, 6),  new Date(2026, 5, 7), // 5/6/7 Juin
  new Date(2026, 5, 19), new Date(2026, 5, 20), new Date(2026, 5, 21), // 19/20/21 Juin
];

const isSameDay = (a: Date, b: Date) =>
  a.getFullYear() === b.getFullYear() &&
  a.getMonth() === b.getMonth() &&
  a.getDate() === b.getDate();

const isDateAllowed = (date: Date) => ALLOWED_DATES.some(d => isSameDay(d, date));

const ReservationPage = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [promoCode, setPromoCode] = useState("");
  const [discount, setDiscount] = useState(0);
  const [availability, setAvailability] = useState<Record<string, number>>({});
  const [formData, setFormData] = useState({
    startDate: "",
    participants: 1,
    roomType: "shared" as "shared" | "individual",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    notes: "",
    acceptTerms: false,
  });
  const [selectedDay, setSelectedDay] = useState<Date | undefined>(undefined);

  useState(() => {
    fetch(`${API_URL}/api/sessions/availability`)
      .then(res => res.json())
      .then(data => setAvailability(data))
      .catch(console.error);
  });

  const basePrice = prog.price * formData.participants;
  const totalPrice = Math.max(0, basePrice - discount);
  const depositAmount = Math.round(totalPrice * 0.3);

  const handleApplyPromo = () => {
    const code = promoCode.toUpperCase().trim();
    if (code === "BIENVENUE100" || code === "PROMO100" || code === "SB100") {
      setDiscount(100);
      toast({ title: "Code promo appliqué", description: "Une réduction de 100€ a été appliquée à votre demande.", variant: "default" });
    } else {
      setDiscount(0);
      toast({ title: "Code invalide", description: "Ce code promo n'est pas valide ou a expiré.", variant: "destructive" });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.startDate) {
      toast({ title: "Date manquante", description: "Veuillez sélectionner une date de début.", variant: "destructive" });
      return;
    }
    if (!formData.acceptTerms) {
      toast({ title: "Conditions", description: "Veuillez accepter les conditions générales.", variant: "destructive" });
      return;
    }

    setIsSubmitting(true);

    try {
      const resReservation = await fetch(`${API_URL}/api/reservations`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          phone: formData.phone,
          date: formData.startDate,
          participants: formData.participants,
          totalPrice: totalPrice,
        }),
      });

      if (!resReservation.ok) throw new Error('Failed to create reservation');

      toast({
        title: "Demande envoyée",
        description: "Votre demande a été enregistrée. Nous vous contacterons très prochainement.",
        variant: "default"
      });

      setTimeout(() => { window.location.href = "/"; }, 3000);
    } catch (error) {
      console.error('Error submitting reservation:', error);
      toast({
        title: "Erreur",
        description: "Une erreur est survenue. Veuillez nous contacter directement par email.",
        variant: "destructive"
      });
      setIsSubmitting(false);
    }
  };

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
            <h1 className="font-serif text-5xl lg:text-6xl text-primary mb-8">
              Demande de réservation
            </h1>
            <p className="font-serif text-xl italic text-muted-foreground leading-relaxed">
              "Laissez-nous prendre soin de votre venue. Remplissez ce formulaire et notre équipe 
              reviendra vers vous pour finaliser les détails de votre retraite."
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 bg-[#F9F9F9]">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            
            {/* Form Column */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-7 space-y-16"
            >
              <form onSubmit={handleSubmit} className="space-y-16">
                
                {/* Section 1 : Dates */}
                <div>
                  <h2 className="font-serif text-3xl text-primary mb-8 border-b border-border pb-4">1. Dates de la session (3 Jours)</h2>
                  <div className="bg-background p-6 lg:p-10 border border-border">
                    <p className="text-muted-foreground mb-6">Sélectionnez la date de début de votre retraite. Le séjour complet s'étend sur {prog.shortDuration}. Les dates grisées n'ont pas assez de places disponibles pour {formData.participants} personne(s).</p>
                    <div className="flex justify-center">
                      <style>{`
                        .rdp { --rdp-cell-size: 42px; --rdp-accent-color: hsl(var(--primary)); --rdp-background-color: hsl(var(--primary)/0.1); margin: 0; }
                        .rdp-day_selected, .rdp-day_selected:focus-visible, .rdp-day_selected:hover { background-color: hsl(var(--primary)); color: hsl(var(--primary-foreground)); border-radius: 0; }
                        .rdp-day:not(.rdp-day_disabled):not(.rdp-day_selected):hover { background-color: hsl(var(--primary)/0.1); border-radius: 0; }
                        .rdp-day_disabled { opacity: 0.25; cursor: not-allowed; }
                        .rdp-caption_label { font-family: serif; font-size: 1.25rem; font-weight: 400; color: hsl(var(--primary)); }
                      `}</style>
                      <DayPicker
                        mode="single"
                        selected={selectedDay}
                        defaultMonth={new Date(2026, 4, 1)}
                        fromMonth={new Date(2026, 4, 1)}
                        toMonth={new Date(2026, 5, 30)}
                        disabled={(date) => {
                          if (!isDateAllowed(date)) return true;
                          const d = date.toISOString().split('T')[0];
                          const spots = availability[d] !== undefined ? availability[d] : 16;
                          return spots < formData.participants;
                        }}
                        modifiers={{ available: ALLOWED_DATES }}
                        modifiersStyles={{ available: { fontWeight: 600, color: 'hsl(var(--primary))' } }}
                        onSelect={(day) => {
                          setSelectedDay(day);
                          const dateStr = day ? 
                            `${day.getFullYear()}-${String(day.getMonth() + 1).padStart(2, '0')}-${String(day.getDate()).padStart(2, '0')}` : 
                            '';
                          setFormData({ ...formData, startDate: dateStr });
                        }}
                        locale={undefined}
                      />
                    </div>
                  </div>
                </div>

                {/* Section 2 : Participants & Room */}
                <div>
                  <h2 className="font-serif text-3xl text-primary mb-8 border-b border-border pb-4">2. Participants & Hébergement</h2>
                  <div className="bg-background p-6 lg:p-10 border border-border space-y-8">
                    <div>
                      <label className="block text-sm text-muted-foreground uppercase tracking-widest mb-4">
                        Nombre de personnes
                      </label>
                      <Input
                        type="number"
                        min={1}
                        max={6}
                        value={formData.participants}
                        onChange={(e) => setFormData({ ...formData, participants: parseInt(e.target.value) || 1, roomType: 'shared' })}
                        className="h-12 max-w-[120px] rounded-none border-b border-0 border-border bg-transparent px-0 focus-visible:ring-0 focus-visible:border-primary text-xl"
                      />
                    </div>

                    {formData.participants > 1 && (
                      <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }}>
                        <label className="block text-sm text-muted-foreground uppercase tracking-widest mb-4">
                          Type de chambre souhaité
                        </label>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <button
                            type="button"
                            onClick={() => setFormData({ ...formData, roomType: 'shared' })}
                            className={`p-6 border text-left transition-colors duration-300 ${formData.roomType === 'shared' ? 'border-primary bg-primary/5 text-primary' : 'border-border text-muted-foreground hover:border-primary/40'}`}
                          >
                            <span className="font-serif text-xl block mb-2">Chambre partagée</span>
                            <span className="text-sm">Pour 2 personnes</span>
                          </button>
                          <button
                            type="button"
                            onClick={() => setFormData({ ...formData, roomType: 'individual' })}
                            className={`p-6 border text-left transition-colors duration-300 ${formData.roomType === 'individual' ? 'border-primary bg-primary/5 text-primary' : 'border-border text-muted-foreground hover:border-primary/40'}`}
                          >
                            <span className="font-serif text-xl block mb-2">Individuelle</span>
                            <span className="text-sm">Chambre privée</span>
                          </button>
                        </div>
                      </motion.div>
                    )}
                  </div>
                </div>

                {/* Section 3 : Coordonnées */}
                <div>
                  <h2 className="font-serif text-3xl text-primary mb-8 border-b border-border pb-4">3. Vos coordonnées</h2>
                  <div className="bg-background p-6 lg:p-10 border border-border space-y-8">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                      <Input
                        required
                        placeholder="Prénom *"
                        value={formData.firstName}
                        onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                        className="h-12 border-b border-0 border-border rounded-none bg-transparent px-0 focus-visible:ring-0 focus-visible:border-primary"
                      />
                      <Input
                        required
                        placeholder="Nom *"
                        value={formData.lastName}
                        onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                        className="h-12 border-b border-0 border-border rounded-none bg-transparent px-0 focus-visible:ring-0 focus-visible:border-primary"
                      />
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                      <Input
                        type="email"
                        required
                        placeholder="Email *"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="h-12 border-b border-0 border-border rounded-none bg-transparent px-0 focus-visible:ring-0 focus-visible:border-primary"
                      />
                      <Input
                        type="tel"
                        required
                        placeholder="Téléphone *"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="h-12 border-b border-0 border-border rounded-none bg-transparent px-0 focus-visible:ring-0 focus-visible:border-primary"
                      />
                    </div>
                    <Textarea
                      placeholder="Notes ou requêtes (Régime alimentaire, conditions médicales...)"
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      rows={4}
                      className="border-b border-0 border-border rounded-none bg-transparent px-0 focus-visible:ring-0 focus-visible:border-primary resize-none"
                    />
                  </div>
                </div>

                <div className="space-y-6">
                  <label className="flex items-start gap-4 cursor-pointer">
                    <input
                      type="checkbox"
                      required
                      checked={formData.acceptTerms}
                      onChange={(e) => setFormData({ ...formData, acceptTerms: e.target.checked })}
                      className="mt-1.5 w-4 h-4 rounded-none border-border"
                    />
                    <span className="text-muted-foreground leading-relaxed">
                      J'accepte les <Link to="/" className="text-primary underline">Conditions Générales</Link> et la Politique de Confidentialité. 
                      Je comprends que ceci est une demande de réservation. Aucun paiement n'est requis immédiatement.
                    </span>
                  </label>

                  <button 
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full lg:w-auto inline-block border border-primary text-primary px-12 py-5 uppercase tracking-widest text-sm hover:bg-primary hover:text-white transition-colors duration-300 disabled:opacity-50"
                  >
                    {isSubmitting ? "Envoi en cours..." : "Envoyer ma demande"}
                  </button>
                </div>

              </form>
            </motion.div>

            {/* Summary Column */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-5"
            >
              <div className="sticky top-32 bg-background border border-border p-8 lg:p-10 space-y-8">
                <h3 className="font-serif text-2xl text-primary mb-6">Résumé</h3>

                <div className="space-y-6">
                  <div>
                    <p className="text-sm text-muted-foreground uppercase tracking-widest mb-1">Retraite</p>
                    <p className="font-serif text-xl">{prog.name}</p>
                  </div>
                  
                  <div className="flex gap-4 items-center text-muted-foreground">
                    <span className="flex items-center gap-2"><Clock className="w-4 h-4" /> {prog.shortDuration}</span>
                    <span className="flex items-center gap-2"><CalendarDays className="w-4 h-4" /> {prog.duration}</span>
                  </div>

                  {formData.startDate && (
                    <div className="pt-6 border-t border-border space-y-4">
                      <div>
                        <p className="text-sm text-muted-foreground uppercase tracking-widest mb-1">Arrivée (Vendredi)</p>
                        <p className="text-foreground font-medium">
                          {new Date(formData.startDate + 'T12:00:00').toLocaleDateString("fr-FR", {
                            day: "numeric", month: "long", year: "numeric"
                          })}
                        </p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground uppercase tracking-widest mb-1">Départ (Dimanche)</p>
                        <p className="text-foreground font-medium">
                          {(() => {
                            const date = new Date(formData.startDate + 'T12:00:00');
                            date.setDate(date.getDate() + 2);
                            return date.toLocaleDateString("fr-FR", {
                              day: "numeric", month: "long", year: "numeric"
                            });
                          })()}
                        </p>
                      </div>
                    </div>
                  )}

                  <div className="pt-6 border-t border-border space-y-4">
                    <div className="flex justify-between items-center text-muted-foreground italic text-xs">
                      <span>{formData.participants} Personne(s) × {prog.price}€ (vols non inclus)</span>
                      <span>{basePrice}€</span>
                    </div>

                    <div className="flex gap-2 items-center">
                      <Input 
                        value={promoCode} 
                        onChange={(e) => setPromoCode(e.target.value)} 
                        placeholder="Code Promo" 
                        className="h-10 text-sm border border-border rounded-none bg-transparent" 
                      />
                      <button 
                        onClick={handleApplyPromo} 
                        type="button"
                        className="h-10 px-4 text-xs uppercase tracking-widest border border-border hover:bg-border transition-colors text-muted-foreground"
                      >
                        Appliquer
                      </button>
                    </div>

                    {discount > 0 && (
                      <div className="flex justify-between items-center text-primary">
                        <span>Réduction</span>
                        <span>- {discount}€</span>
                      </div>
                    )}
                  </div>

                  <div className="pt-6 border-t border-border flex justify-between items-end">
                    <span className="text-sm uppercase tracking-widest text-muted-foreground">Total indicatif</span>
                    <span className="font-serif text-3xl text-primary">{totalPrice}€</span>
                  </div>
                </div>

                <div className="bg-primary/5 p-6 mt-8">
                  <p className="text-sm text-primary leading-relaxed">
                    Une avance de {depositAmount}€ (30%) vous sera demandée par email après confirmation de notre équipe pour bloquer définitivement votre place.
                  </p>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ReservationPage;
