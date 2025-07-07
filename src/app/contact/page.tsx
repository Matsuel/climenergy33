import Navbar from '@/components/Navbar'
import Contact from '@/components/Sections/Contact'
import Footer from '@/components/Sections/Footer'

const ContactPage = () => {
    return (
        <div className="w-full min-h-screen flex flex-col items-center gap-6">
            <Navbar />
            <Contact />
            <Footer />
        </div>
    )
}

export default ContactPage