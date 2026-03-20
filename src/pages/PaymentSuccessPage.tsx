import { useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";

const PaymentSuccessPage = () => {
    const [searchParams] = useSearchParams();
    const sessionId = searchParams.get("session_id");

    useEffect(() => {
        // In a real application, you might want to call your backend here
        // to verify the session_id and ensure the payment was actually successful,
        // though the webhook handles the actual database update.
        console.log("Payment successful for session:", sessionId);
    }, [sessionId]);

    return (
        <Layout>
            <section className="pt-32 pb-24 min-h-[80vh] flex items-center bg-gradient-soft">
                <div className="container-wellness mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="text-center max-w-2xl mx-auto bg-background p-8 sm:p-12 rounded-2xl shadow-sm border border-border"
                    >
                        <div className="w-24 h-24 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-8">
                            <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center">
                                <Check className="w-8 h-8 text-primary-foreground" />
                            </div>
                        </div>

                        <h1 className="heading-section text-foreground mb-4">
                            Paiement Confirmé !
                        </h1>

                        <p className="text-lg text-muted-foreground mb-8">
                            Merci pour votre réservation. Votre acompte a bien été réglé.
                            Vous recevrez un email de confirmation contenant tous les détails de votre séjour dans les prochaines minutes.
                        </p>

                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <Button variant="default" className="h-12 px-8" asChild>
                                <Link to="/">Retour à l'accueil</Link>
                            </Button>
                            <Button variant="outline" className="h-12 px-8" asChild>
                                <Link to="/contact">Nous contacter <ArrowRight className="w-4 h-4 ml-2" /></Link>
                            </Button>
                        </div>
                    </motion.div>
                </div>
            </section>
        </Layout>
    );
};

export default PaymentSuccessPage;
