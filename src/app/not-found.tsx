"use client";
import Link from "@/components/Link";
import { fadeUp } from "@/constants/animation";
import { MAILTO } from "@/constants/site";
import { motion, Variants } from "framer-motion";

const NotFound = () => {
    return (
        <main className="flex items-center justify-center min-h-screen bg-white px-6 py-24 sm:py-32 lg:px-8">
            <div className="text-center" >
                <motion.p
                    custom={0}
                    initial="hidden"
                    animate="visible"
                    variants={fadeUp as unknown as Variants}
                    className="text-base font-semibold text-indigo-600"
                >
                    404
                </motion.p>
                <motion.h1
                    custom={1}
                    initial="hidden"
                    animate="visible"
                    variants={fadeUp as unknown as Variants}
                    className="mt-4 text-5xl font-semibold tracking-tight text-balance text-gray-900 sm:text-7xl"
                >
                    Page non trouvée
                </motion.h1>
                <motion.p
                    custom={2}
                    initial="hidden"
                    animate="visible"
                    variants={fadeUp as unknown as Variants}
                    className="mt-6 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8"
                >
                    Désolé, la page que vous recherchez n&apos;existe pas ou a été déplacée.
                </motion.p>
                <motion.div
                    custom={3}
                    initial="hidden"
                    animate="visible"
                    variants={fadeUp as unknown as Variants}
                    className="mt-10 flex sm:flex-row flex-col items-center justify-center gap-6"
                >
                    <Link
                        href="/"
                    >
                        Retourner à l&apos;accueil
                    </Link>
                    <Link
                        href={MAILTO}
                        variant="transparent"
                    >
                        Contact support <span aria-hidden="true">&rarr;</span>
                    </Link>
                </motion.div>
            </div>
        </main>
    )
}

export default NotFound;