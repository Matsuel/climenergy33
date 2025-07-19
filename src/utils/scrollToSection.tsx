import { NavbarContext } from '@/contexts/NavbarContext';
import { useContext } from 'react';

const scrollToSection = (sectionId: string) => {

    const { setIsMenuOpen } = useContext(NavbarContext);

    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
};

export default scrollToSection