import React from 'react'

interface EmailTemplateProps {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    message: string;
}

const EmailTemplate = ({
    firstName,
    lastName,
    email,
    phone,
    message
}: EmailTemplateProps) => {
    return (
        <div>
            <h1>Bonjour, {firstName}!</h1>
            <p>Nous avons bien reçu votre message :</p>
            <blockquote>
                <p>{message}</p>
            </blockquote>
            <p>Nous vous répondrons dans les plus brefs délais.</p>

            <div>
                <p><strong>Vos informations :</strong></p>
                <ul>
                    <li><strong>Nom :</strong> {lastName}</li>
                    <li><strong>Email :</strong> {email}</li>
                    <li><strong>Téléphone :</strong> {phone}</li>
                </ul>
            </div>
        </div>
    )
}

export default EmailTemplate