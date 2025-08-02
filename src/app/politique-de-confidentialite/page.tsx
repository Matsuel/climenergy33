"use client";
import Footer from '@/components/Sections/Footer';
import { fadeUp } from '@/constants/animation';
import { ADDRESS, MAIL, MAILTO } from '@/constants/site';
import { motion, Variants } from 'framer-motion';
import Link from 'next/link';

const PolitiqueConfidentialitePage = () => {
    return (
        <div className='w-full min-h-screen flex flex-col items-center px-4 pt-8'>
            <motion.h1
                custom={0}
                initial="hidden"
                animate="visible"
                variants={fadeUp as unknown as Variants}
                className='text-4xl font-bold mb-8'>
                Politique de confidentialité
            </motion.h1>
            <div className='max-w-2xl w-full flex flex-col gap-6 text-base mb-8'>
                <motion.section
                    custom={1}
                    initial="hidden"
                    animate="visible"
                    variants={fadeUp as unknown as Variants}>
                    <h2 className='text-xl font-semibold mb-2'>1. Responsable du traitement</h2>
                    <p>
                        Le responsable du traitement des données personnelles est ClimEnergy33 SARL, situé au {ADDRESS}.<br />
                        Email : <Link className='text-blue-500 hover:underline' href={MAILTO}>{MAIL}</Link>
                    </p>
                </motion.section>
                <motion.section
                    custom={2}
                    initial="hidden"
                    animate="visible"
                    variants={fadeUp as unknown as Variants}>
                    <h2 className='text-xl font-semibold mb-2'>2. Données collectées</h2>
                    <p>
                        Nous collectons uniquement les données que vous nous transmettez via le formulaire de contact (nom, prénom, email, téléphone, message).<br />
                        Aucune donnée personnelle n’est collectée à votre insu.
                    </p>
                </motion.section>
                <motion.section
                    custom={3}
                    initial="hidden"
                    animate="visible"
                    variants={fadeUp as unknown as Variants}>
                    <h2 className='text-xl font-semibold mb-2'>3. Utilisation des données</h2>
                    <p>
                        Les données collectées servent uniquement à répondre à vos demandes et ne sont jamais transmises à des tiers sans votre consentement.
                    </p>
                </motion.section>
                <motion.section
                    custom={4}
                    initial="hidden"
                    animate="visible"
                    variants={fadeUp as unknown as Variants}>
                    <h2 className='text-xl font-semibold mb-2'>4. Vos droits</h2>
                    <p>
                        Conformément au RGPD, vous disposez d’un droit d’accès, de rectification, d’opposition et de suppression de vos données.<br />
                        Pour exercer ces droits, contactez-nous à l’adresse suivante : <Link className='text-blue-500 hover:underline' href={MAILTO}>{MAIL}</Link>
                    </p>
                </motion.section>
                <motion.section
                    custom={5}
                    initial="hidden"
                    animate="visible"
                    variants={fadeUp as unknown as Variants}>
                    <h2 className='text-xl font-semibold mb-2'>5. Cookies</h2>
                    <p>
                        Aucun cookie n&apos;est utilisé sur ce site. Nous ne collectons pas de données de navigation.
                    </p>
                </motion.section>
                <motion.section
                    custom={6}
                    initial="hidden"
                    animate="visible"
                    variants={fadeUp as unknown as Variants}>
                    <h2 className='text-xl font-semibold mb-2'>6. Sécurité</h2>
                    <p>
                        Nous mettons en œuvre toutes les mesures nécessaires pour assurer la sécurité de vos données personnelles.
                    </p>
                </motion.section>
                <motion.section
                    custom={7}
                    initial="hidden"
                    animate="visible"
                    variants={fadeUp as unknown as Variants}>
                    <h2 className='text-xl font-semibold mb-2'>8. Contact</h2>
                    <p>
                        Pour toute question concernant la politique de confidentialité, contactez-nous à l’adresse suivante : <Link className='text-blue-500 hover:underline' href={MAILTO}>{MAIL}</Link>
                    </p>
                </motion.section>
            </div>
            <Footer />
        </div>
    );
};

export default PolitiqueConfidentialitePage;