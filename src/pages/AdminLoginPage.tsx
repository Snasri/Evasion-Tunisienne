import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

export default function AdminLoginPage() {
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001';
      const res = await fetch(`${API_URL}/api/admin/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });

      if (res.ok) {
        const data = await res.json();
        localStorage.setItem("admin_token", data.token);
        navigate("/admin/dashboard");
      } else {
        toast({ title: "Erreur", description: "Mot de passe incorrect.", variant: "destructive" });
      }
    } catch (err) {
      toast({ title: "Erreur", description: "Problème de connexion au serveur.", variant: "destructive" });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Layout>
      <section className="pt-40 pb-24 min-h-[80vh] flex items-center justify-center bg-[#F9F9F9]">
        <div className="w-full max-w-md bg-background p-10 border border-border text-center shadow-soft">
          <h1 className="font-serif text-3xl text-primary mb-8">Espace Réservé</h1>
          <p className="text-muted-foreground mb-8">
            Veuillez saisir votre mot de passe pour accéder à l'interface d'administration.
          </p>
          <form onSubmit={handleLogin} className="space-y-6">
            <Input
              type="password"
              placeholder="Mot de passe"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="h-12 border-b border-0 border-border rounded-none bg-transparent px-0 focus-visible:ring-0 focus-visible:border-primary text-center"
            />
            <Button 
              type="submit"
              disabled={isLoading || !password}
              className="w-full h-12 uppercase tracking-widest text-sm bg-primary hover:bg-primary/90"
            >
              {isLoading ? "Vérification..." : "Accéder"}
            </Button>
          </form>
        </div>
      </section>
    </Layout>
  );
}
