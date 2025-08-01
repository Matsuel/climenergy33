import { WrenchIcon } from "@heroicons/react/24/outline";
import { AirVent } from "lucide-react";

export const SERVICES = [
    {
        name: "Entretien et dépannage",
        icon: <WrenchIcon width={16} height={16} />,
        description: "Réalisation de l'entretien et du dépannage de vos installations de chauffage, climatisation. Remplacement de pièces défectueuses, nettoyage et optimisation des systèmes."
    },
    {
        name: "Installation de chauffage/climatisation",
        icon: <AirVent size={16} />,
        description: "Installation de systèmes de chauffage et de climatisation adaptés à vos besoins. Choix des équipements, mise en place et réglages pour un confort optimal."
    }    
];