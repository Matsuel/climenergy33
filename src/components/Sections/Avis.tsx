import { StarIcon } from "@heroicons/react/24/solid";
import Layout from "../Layout";
import Link from "../Link";
import { TESTIMONIALSLINK } from "@/constants/site";

const Avis = () => {
    return (
        <Layout
            title="Avis de nos clients"
            subtitle="Découvrez ce que nos clients pensent de nos services"
            id='temoignages'
            className='w-full min-h-auto flex flex-col items-center gap-4'
        >
            <div className="md:w-2/3 w-full flex flex-col items-center gap-4">
                <div className="flex flex-col items-center p-6">
                    <div className="flex flex-row items-center gap-2">
                        {Array.from({ length: 5 }, (_, index) => (
                            <StarIcon
                                key={index}
                                className="w-5 h-5 text-indigo-600"
                            />
                        ))}
                    </div>
                    <p className="text-lg font-semibold mt-2 text-center">
                        &quot;Société très sérieuse, de bons conseil à l’écoute.
                        Installation rapide avec le souci du détail et de la propreté.
                        John et Maxime sont hyper professionnels. Nous recommandons vivement !!!
                        &quot;
                    </p>
                    <p className="text-sm text-gray-500 mt-2">
                        - Client satisfait
                    </p>
                    <div className="flex items-center gap-2 mt-4">
                        <div className="w-10 h-10 rounded-full bg-[#F4511E] text-white flex items-center justify-center">
                            T
                        </div>
                        <p className="text-sm font-medium">
                            T. Jean-Marc
                        </p>
                        </div>
                </div>

                <Link href={TESTIMONIALSLINK} className="md:w-2/3 w-full md:text-base">
                    Consulter tous les avis (Google Maps)
                </Link>

            </div>
        </Layout>
    )
}

export default Avis