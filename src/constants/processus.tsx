import { ChatBubbleOvalLeftEllipsisIcon } from "@heroicons/react/24/outline";
import { Drill, ShieldCheck, Stethoscope, ToolCase, UserRoundPen } from "lucide-react";

const ICONSIZE = 16;

export const INSTALLPROCESSUS = [
    {
        title: "Prise de contact",
        description: "Nous discutons de vos besoins et objectifs pour comprendre comment nous pouvons vous aider.",
        icon: <ChatBubbleOvalLeftEllipsisIcon width={ICONSIZE} height={ICONSIZE} />
    },
    {
        title: "Analyse du chantier",
        description: "Nous visitons le site pour évaluer les conditions et les exigences spécifiques.",
        icon: <UserRoundPen width={ICONSIZE} height={ICONSIZE} />
    },
    {
        title: "Réalisation du chantier",
        description: "Nous mettons en œuvre les travaux nécessaires pour atteindre vos objectifs.",
        icon: <Drill width={ICONSIZE} height={ICONSIZE} />
    },
    {
        title: "Entretien et maintenance",
        description: "Nous assurons le suivi et l'entretien pour garantir la durabilité de nos interventions et de vos systèmes.",
        icon: <ShieldCheck width={ICONSIZE} height={ICONSIZE} />
    }
]

export const REPAIRSPROCESSUS = [
    {
        title: "Diagnostic",
        description: "Évaluation de l'état de votre système.",
        icon: <Stethoscope width={ICONSIZE} height={ICONSIZE} />,
    },
    {
        title: "Réparation / Nettoyage",
        description: "Intervention pour résoudre les problèmes identifiés.",
        icon: <ToolCase width={ICONSIZE} height={ICONSIZE} />,
    }
]