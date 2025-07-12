import { WrenchIcon } from "@heroicons/react/24/outline";
import { AirVent } from "lucide-react";

export const SERVICES = [
    {
        title: "Installation de systèmes de chauffage/climatisation",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        icon: <AirVent size={16} />,
        image: "/images/services/1.jpg",
    },
    {
        title: "Entretien et dépannage",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        icon: <WrenchIcon width={16} height={16} />,
        image: "/images/services/2.jpg",
    }
]