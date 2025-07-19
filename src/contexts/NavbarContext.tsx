"use client"
import { createContext, useState } from "react";

export const NavbarContext = createContext<NavbarContextProps>({
    isMenuOpen: false,
    setIsMenuOpen: () => { },
});

const NavbarProvider = ({
    children
}: NavbarProviderProps) => {

    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

    return (
        <NavbarContext.Provider value={{ isMenuOpen, setIsMenuOpen }}>
            {children}
        </NavbarContext.Provider>
    );
}

export default NavbarProvider;