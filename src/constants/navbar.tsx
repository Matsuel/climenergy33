import { BriefcaseBusiness, Hammer, Home, Mail, Star } from "lucide-react";

export const NAVBAR_LINKS = [
    {
        label: "Acceuil",
        icon: <Home className="w-4 h-4" />,
        href: "accueil",
    },
    {
        label: "Services",
        icon: <BriefcaseBusiness className="w-4 h-4" />,
        href: "services",
    },
    {
        label: "Avis",
        icon: <Star className="w-4 h-4" />,
        href: "temoignages",
    },
    {
        label: "Réalisations",
        icon: <Hammer className="w-4 h-4" />,
        href: "realisations",
    },
    {
        label: "Contact",
        icon: <Mail className="w-4 h-4" />,
        href: "contact",
    }
]