import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { XCircle, ArrowLeft } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";

const PaymentCancelPage = () => {
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
                        <div className="w-24 h-24 rounded-full bg-destructive/10 flex items-center justify-center mx-auto mb-8">
                            <XCircle className="w-12 h-12 text-destructive" />
                        </div>

                        <h1 className="heading-section text-foreground mb-4">
                            Paiement Annulé
                        </h1>

                        <p className="text-lg text-muted-foreground mb-8">
                            Le processus de paiement a été interrompu ou refusé. Votre réservation n'a pas pu être confirmée.
                            Si vous avez rencontré un problème technique, n'hésitez pas à réessayer ou à nous contacter.
                        </p>

                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <Button variant="default" className="h-12 px-8" asChild>
                                <Link to="/reservation">
                                    <ArrowLeft className="w-4 h-4 mr-2" />
                                    Réessayer
                                </Link>
                            </Button>
                            <Button variant="outline" className="h-12 px-8" asChild>
                                <Link to="/contact">Besoin d'aide ?</Link>
                            </Button>
                        </div>
                    </motion.div>
                </div>
            </section>
        </Layout>
    );
};

export default PaymentCancelPage;
