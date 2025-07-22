import Testimonial from "../Testimonial"

const Avis = () => {
    return (
        <section
            id='temoignages'
            className='w-full flex flex-col items-center gap-4'
        >
            Avis
            <Testimonial
                author="John Doe"
                text='This is a great service! Highly recommend.'
                image='/logo.png'
                stars={5}
            />
        </section>
    )
}

export default Avis