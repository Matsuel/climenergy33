import { NAVBAR_LINKS } from "@/constants/navbar";
import { useCallback, useEffect, useState } from "react";

const useActiveSection = () => {

    const sectionIds = NAVBAR_LINKS.map(link => link.href);

    const [activeSection, setActiveSection] = useState<string | null>(null);

    const onScroll = useCallback(() => {
        let current: string | null = null;
        for (const id of sectionIds) {
            const el = document.getElementById(id);
            if (el) {
                const rect = el.getBoundingClientRect();
                if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
                    current = id;
                    break;
                }
            }
        }
        setActiveSection(current);
    }, [sectionIds]);

    useEffect(() => {
        window.addEventListener("scroll", onScroll, { passive: true });

        onScroll();

        return () => {
            window.removeEventListener("scroll", onScroll);
        };
    }, [sectionIds, onScroll]);

    return { activeSection };
}

export default useActiveSection;