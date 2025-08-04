
import EmailTemplate from '@/components/EmailTemplate';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST() {
    try {
        const { data, error } = await resend.emails.send({
            from: 'Acme <onboarding@resend.dev>',
            to: [''], // Adresse e-mail du destinataire, et en copie celle de ce33 pour répondre au client
            // cc: [MAIL],
            subject: 'Hello world',
            react: EmailTemplate({ firstName: 'John', lastName: 'Doe', email: 'john.doe@example.com', phone: '123-456-7890', message: 'Hello, this is a test message.' }),
        });

        if (error) {
            return Response.json({ error }, { status: 500 });
        }

        return Response.json(data);
    } catch (error) {
        return Response.json({ error }, { status: 500 });
    }
}