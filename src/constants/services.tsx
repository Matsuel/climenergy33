import { WrenchIcon } from "@heroicons/react/24/outline";
import { AirVent } from "lucide-react";
import { INSTALLPROCESSUS, REPAIRSPROCESSUS } from "./processus";

export const SERVICES = [
    {
        title: "Installation de systèmes de chauffage/climatisation",
        icon: <AirVent size={16} />,
        process: INSTALLPROCESSUS
    },
    {
        title: "Entretien et dépannage",
        icon: <WrenchIcon width={16} height={16} />,
        process: REPAIRSPROCESSUS
    }
]