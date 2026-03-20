import spaTreatment from "@/assets/spa-treatment.webp";

export const evasionTunisienne = {
  id: "evasion-tunisienne",
  legacyId: "decouverte",
  name: "Évasion tunisienne",
  shortDuration: "3 jours / 2 nuits",
  duration: "Du vendredi au dimanche",
  price: 1090,
  priceDetails: "Séjour tout inclus",
  image: spaTreatment,
  excerpt:
    "Un week-end premium en Tunisie pour relâcher le stress, récupérer en douceur et repartir recentré.",
  description:
    "Évasion tunisienne est notre programme signature : un séjour court, fluide et rassurant à La Marée Village, maison d'hôte de luxe surplombant la mer à Raf Raf. Accueil aéroport, activités bien-être, soins ciblés et accompagnement humain dans un cadre exceptionnel.",
  highlights: [
    "Accueil à l'aéroport et transfert jusqu'au domaine",
    "Relaxation guidée, pilates, stretching et yoga sur la plage",
    "Massage individuel, bottes de compression et temps de sieste",
    "Séminaire de fin de séjour pour mieux vivre sans stress",
  ],
  included: [
    "Transfert aéroport aller-retour",
    "Petit buffet d'accueil avec jus de fruit et petits gâteaux",
    "Attribution des chambres et présentation de l'équipe",
    "Balades sur la plage, quartier libre et temps de récupération",
    "Repas prévus vendredi soir, samedi midi/soir et dimanche midi",
    "Encadrement bien-être tout au long du séjour",
  ],
  idealFor: ["Stress chronique", "Fatigue mentale", "Besoin de déconnexion", "Première cure bien-être"],
  schedule: [
    {
      day: "Vendredi",
      title: "Arrivée, accueil et relâchement",
      entries: [
        { time: "Jusqu'à 14h / 15h", activity: "Réception des clients à l'aéroport" },
        { time: "À l'arrivée", activity: "Transit aéroport → domaine de résidence" },
        {
          time: "Accueil",
          activity: "Petit buffet de bienvenue, jus de fruit, petits gâteaux et attribution des chambres",
        },
        { time: "15h00", activity: "Présentation de l'équipe" },
        { time: "16h00", activity: "Cours de relaxation avec musique douce" },
        { time: "17h30 / 18h00", activity: "Balade sur la plage" },
        { time: "19h00", activity: "Bottes de compression pour tous" },
        { time: "21h00", activity: "Repas du soir" },
        { time: "22h30 / 23h30", activity: "Quartier libre" },
      ],
    },
    {
      day: "Samedi",
      title: "Mouvement, soins et respiration",
      entries: [
        { time: "08h00", activity: "Petit déjeuner au soleil" },
        { time: "10h00", activity: "Cours de pilates" },
        { time: "11h30", activity: "Massage individuel et cours de stretching" },
        { time: "13h30", activity: "Repas" },
        { time: "14h30", activity: "Massage et sieste" },
        { time: "17h00", activity: "Cours de yoga sur la plage" },
        { time: "19h00", activity: "Balade sur la plage" },
        { time: "20h30", activity: "Repas" },
      ],
    },
    {
      day: "Dimanche",
      title: "Clôture en douceur",
      entries: [
        { time: "08h00", activity: "Petit déjeuner" },
        { time: "10h00", activity: "Séminaire : comment mieux vivre sans stress" },
        { time: "13h00", activity: "Repas" },
        { time: "Après le déjeuner", activity: "Retour aéroport" },
      ],
    },
  ],
} as const;
