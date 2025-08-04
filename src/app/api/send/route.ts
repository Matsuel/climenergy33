
import EmailTemplate from '@/components/EmailTemplate';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {

    const body = await req.json();

    const { firstName, lastName, email, phone, message } = body;

    try {
        const { data, error } = await resend.emails.send({
            from: 'Acme <onboarding@resend.dev>',
            to: ['matsuel0308@gmail.com'], // Adresse e-mail du destinataire, et en copie celle de ce33 pour répondre au client
            // cc: [MAIL],
            subject: 'Hello world',
            react: EmailTemplate({
                firstName: firstName,
                lastName: lastName,
                email: email,
                phone: phone,
                message: message,
            }),
        });

        if (error) {
            return Response.json({ error }, { status: 500});
        }
        return Response.json({ success: true, message: 'Email sent successfully', data }, { status: 200 });
    } catch (error) {
        return Response.json({ error }, { status: 500});
    }
}