interface NavbarContextProps {
    isMenuOpen: boolean;
    setIsMenuOpen: (isOpen: boolean) => void;
}

interface NavbarProviderProps {
    children?: React.ReactNode;
}