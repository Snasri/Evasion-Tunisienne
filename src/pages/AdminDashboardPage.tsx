import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { useToast } from "@/hooks/use-toast";
import { Users, XCircle } from "lucide-react";

type Reservation = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  participants: number;
  status: string;
};

type Session = {
  date: string;
  totalParticipants: number;
  status: string;
  reservations: Reservation[];
};

export default function AdminDashboardPage() {
  const [sessions, setSessions] = useState<Session[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  const { toast } = useToast();

  const fetchSessions = async () => {
    const token = localStorage.getItem("admin_token");
    if (!token) return navigate("/admin");
    
    const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001';

    try {
      const res = await fetch(`${API_URL}/api/admin/sessions`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (!res.ok) {
        if (res.status === 401) {
          localStorage.removeItem("admin_token");
          navigate("/admin");
        }
        throw new Error("Failed to fetch");
      }
      const data = await res.json();
      setSessions(data);
    } catch (err) {
      toast({ title: "Erreur", description: "Impossible de charger les sessions.", variant: "destructive" });
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchSessions();
  }, []);

  const handleCancelSession = async (date: string) => {
    if (!confirm("Voulez-vous vraiment annuler toutes les réservations de cette session ?")) return;

    const token = localStorage.getItem("admin_token");
    const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001';
    try {
      const res = await fetch(`${API_URL}/api/admin/sessions/cancel`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
        body: JSON.stringify({ date }),
      });
      if (res.ok) {
        toast({ title: "Session annulée", description: "La session a été annulée avec succès." });
        fetchSessions();
      } else {
        toast({ title: "Erreur", description: "Échec de l'annulation.", variant: "destructive" });
      }
    } catch (err) {
      toast({ title: "Erreur", description: "Impossible d'annuler la session.", variant: "destructive" });
    }
  };

  if (isLoading) return <Layout><div className="pt-40 text-center">Chargement...</div></Layout>;

  return (
    <Layout>
      <section className="pt-40 pb-24 min-h-screen bg-[#F9F9F9]">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex justify-between items-center mb-12">
            <h1 className="font-serif text-4xl text-primary">Gestion des Sessions</h1>
            <button
              onClick={() => { localStorage.removeItem("admin_token"); navigate("/admin"); }}
              className="text-sm uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors"
            >
              Déconnexion
            </button>
          </div>

          {sessions.length === 0 ? (
            <div className="text-center p-12 bg-background border border-border">
              <p className="text-muted-foreground">Aucune réservation pour le moment.</p>
            </div>
          ) : (
            <div className="space-y-8">
              {sessions.map((session) => (
                <div key={session.date} className="bg-background border border-border p-8 shadow-sm">
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-border pb-6 mb-6 gap-4">
                    <div>
                      <h2 className="font-serif text-2xl text-foreground">
                        Session du {new Date(session.date).toLocaleDateString("fr-FR", { day: 'numeric', month: 'long', year: 'numeric' })}
                      </h2>
                      <p className="text-muted-foreground mt-2 flex items-center gap-2">
                        <Users className="w-4 h-4" /> 
                        {session.totalParticipants} / 13 participants inscrits
                      </p>
                    </div>
                    
                    <div className="flex items-center gap-4">
                      <span className={`px-4 py-1.5 text-xs font-semibold uppercase tracking-widest 
                        ${session.status === 'Validée' ? 'bg-green-100 text-green-800' : 
                          session.status === 'Annulée' ? 'bg-red-100 text-red-800' : 'bg-orange-100 text-orange-800'}`}>
                        {session.status}
                      </span>
                      {session.status !== 'Annulée' && (
                        <button
                          onClick={() => handleCancelSession(session.date)}
                          className="flex items-center gap-2 text-red-600 hover:text-red-800 transition-colors text-sm uppercase tracking-widest font-medium"
                        >
                          <XCircle className="w-4 h-4" /> Annuler session
                        </button>
                      )}
                    </div>
                  </div>

                  <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                      <thead>
                        <tr className="border-b border-border">
                          <th className="py-3 px-4 font-serif text-muted-foreground">Client</th>
                          <th className="py-3 px-4 font-serif text-muted-foreground">Email</th>
                          <th className="py-3 px-4 font-serif text-muted-foreground">Téléphone</th>
                          <th className="py-3 px-4 font-serif text-muted-foreground text-center">Personnes</th>
                          <th className="py-3 px-4 font-serif text-muted-foreground">Statut</th>
                        </tr>
                      </thead>
                      <tbody>
                        {session.reservations.map((res) => (
                          <tr key={res.id} className="border-b border-border last:border-0 hover:bg-muted/30">
                            <td className="py-4 px-4 font-medium">{res.firstName} {res.lastName}</td>
                            <td className="py-4 px-4 text-muted-foreground text-sm">{res.email}</td>
                            <td className="py-4 px-4 text-muted-foreground text-sm">{res.phone}</td>
                            <td className="py-4 px-4 text-center font-semibold">{res.participants}</td>
                            <td className="py-4 px-4 text-sm">
                              {res.status === 'cancelled' ? (
                                <span className="text-red-500">Annulée</span>
                              ) : (
                                <span className="text-green-600">Confirmée</span>
                              )}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
}
