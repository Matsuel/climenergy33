import { BoltIcon, WrenchIcon } from "@heroicons/react/24/outline";
import { AirVent } from "lucide-react";

export const SERVICES = [
    {
        title: "Installation de systèmes de chauffage/climatisation",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        icon: <AirVent width={24} height={24} />,
        image: "/images/services/1.jpg",
    },
    {
        title: "Maintenance et dépannage",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        icon: <WrenchIcon width={24} height={24} />,
        image: "/images/services/2.jpg",
    },
    {
        title: "Electricité générale",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        icon: <BoltIcon width={24} height={24} />,
        image: "/images/services/3.jpg",
    }
]