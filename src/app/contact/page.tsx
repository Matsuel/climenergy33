import Navbar from '@/components/Navbar'
import Contact from '@/components/Sections/Contact'

const ContactPage = () => {
    return (
        <div className="w-full min-h-screen flex flex-col items-center gap-6">
            <Navbar />
            <Contact />
        </div>
    )
}

export default ContactPage