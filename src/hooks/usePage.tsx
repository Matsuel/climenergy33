"use client"
import { usePathname } from 'next/navigation'

const usePage = () => {
    const pathname = usePathname()

    return {
        pathname
    }
}

export default usePage