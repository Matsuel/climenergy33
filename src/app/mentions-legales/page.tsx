"use client";
import Footer from '@/components/Sections/Footer';
import { fadeUp } from '@/constants/animation';
import { ADDRESS, MAIL, PHONES, SOCIETECOM_LINK } from '@/constants/site';
import { motion, Variants } from 'framer-motion';
import Link from 'next/link';

const MentionsLegalesPage = () => {
    return (
        <div className='w-full min-h-screen flex flex-col items-center px-4 pt-8'>
            <motion.h1
                custom={0}
                initial="hidden"
                animate="visible"
                variants={fadeUp as unknown as Variants}
                className='text-4xl font-bold mb-8'>
                Mentions Légales
            </motion.h1>
            <div className='max-w-2xl w-full flex flex-col gap-6 text-base mb-8'>
                <motion.section
                    custom={1}
                    initial="hidden"
                    animate="visible"
                    variants={fadeUp as unknown as Variants}>
                    <h2 className='text-xl font-semibold mb-2'>Hébergement</h2>
                    <p>Hébergeur : Vercel Inc.</p>
                    <p>San Francisco, CA, États-Unis</p>
                    <p>Site : <Link href="https://vercel.com" className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">vercel.com</Link></p>
                </motion.section>
                <motion.section
                    custom={2}
                    initial="hidden"
                    animate="visible"
                    variants={fadeUp as unknown as Variants}>
                    <h2 className='text-xl font-semibold mb-2'>Propriété intellectuelle</h2>
                    <p>
                        Le contenu de ce site (textes, images, code, etc.) est protégé par le droit d’auteur. Toute reproduction ou utilisation sans autorisation est interdite.
                    </p>
                </motion.section>
                <motion.section
                    custom={3}
                    initial="hidden"
                    animate="visible"
                    variants={fadeUp as unknown as Variants}>
                    <h2 className='text-xl font-semibold mb-2'>Données personnelles</h2>
                    <p>
                        Ce site ne collecte pas de données personnelles sans votre consentement. Pour toute question, contactez-nous à l’adresse indiquée ci-dessus.
                    </p>
                </motion.section>
                <motion.section
                    custom={4}
                    initial="hidden"
                    animate="visible"
                    variants={fadeUp as unknown as Variants}>
                    <h2 className='text-xl font-semibold mb-2'>Informations légales <Link href={SOCIETECOM_LINK} className="hover:underline" target="_blank" rel="noopener noreferrer">(Société.com)</Link></h2>
                        <p>Raison sociale : ClimEnergy33 SARL</p>
                        <p>Adresse : {ADDRESS}</p>
                        <p>Téléphone : {PHONES[0]} / {PHONES[1]}</p>
                        <p>Email : <Link href="https://vercel.com" className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">{MAIL}</Link></p>
                        <p>SIRET : 80022233300018</p>
                        <p>RCS : 800 222 333 R.C.S. Bordeaux</p>
                        <p>TVA intracommunautaire : FR43800222333</p>
                        <p>Directeur de la publication : Mathéo Lang</p>
                </motion.section>
                <motion.section
                    custom={5}
                    initial="hidden"
                    animate="visible"
                    variants={fadeUp as unknown as Variants}>
                    <h2 className='text-xl font-semibold mb-2'>Éditeur du site</h2>
                    <p><strong>Mathéo Lang</strong></p>
                    <p>Email : <Link className='text-blue-500 hover:underline' href={`mailto:matheolang@icloud.com`}>matheolang@icloud.com</Link></p>
                    <p>Site : <Link className='text-blue-500 hover:underline' href={`https://matheolang.fr`}>matheolang.fr</Link></p>
                </motion.section>
            </div>
            <Footer />
        </div>
    );
};

export default MentionsLegalesPage;