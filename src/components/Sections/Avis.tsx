import Layout from "../Layout"
import Testimonial from "../Testimonial"

const Avis = () => {
    return (
        <Layout
            title="Avis de nos clients"
            subtitle="Découvrez ce que nos clients pensent de nos services"
            id='temoignages'
            className='w-full min-h-auto flex flex-col items-center gap-4'
        >
            <div className="flex flex-row items-center justify-center flex-wrap gap-4">
                <Testimonial
                    author="John Doe"
                    text='This is a great service! Highly recommend.'
                    image='/logo.png'
                    stars={5}
                    variant="xl"
                />
                <Testimonial
                    author="Jane Smith"
                    text='Absolutely loved the experience. Will use again!'
                    stars={4}
                />
                <Testimonial
                    author="Alice Johnson"
                    text='Very satisfied with the quality and service.'
                    image='/logo.png'
                    stars={5}
                />
            </div>
        </Layout>
    )
}

export default Avis