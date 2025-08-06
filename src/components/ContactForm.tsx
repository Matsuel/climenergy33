"use client"
import { ChevronDownIcon } from '@heroicons/react/16/solid';
import Link from 'next/link';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { toast } from 'sonner';

interface Inputs {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    message: string;
}

const sendEmail = async (data: Inputs) => {
    try {
        toast.loading('Envoi de l\'email en cours...');
        const response = await fetch('/api/send', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        toast.dismiss();

        if (!response.ok) {
            toast.error('Erreur lors de l\'envoi de l\'email');
        }

        const result = await response.json();
        if (result.success) {
            toast.success('Email envoyé avec succès');
        } else {
            toast.error('Erreur lors de l\'envoi de l\'email');
        }
    } catch {
        toast.error('Erreur lors de l\'envoi de l\'email');
    }
}

const ContactForm = () => {

    const [isChecked, setIsChecked] = useState<boolean>(false);

    const {
        register,
        handleSubmit
    } = useForm<Inputs>()

    const onSubmit: SubmitHandler<Inputs> = (data) => sendEmail(data);

    return (
        <div className="isolate bg-white px-6 lg:px-8">
            <form onSubmit={handleSubmit(onSubmit)} className="mx-auto mt-10 max-w-xl">
                <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                    <div>
                        <label htmlFor="first-name" className="block text-sm/6 font-semibold text-gray-900">
                            Nom
                        </label>
                        <div className="mt-2.5">
                            <input
                                id="first-name"
                                {...register("firstName")}
                                type="text"
                                autoComplete="given-name"
                                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600"
                            />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="last-name" className="block text-sm/6 font-semibold text-gray-900">
                            Prénom
                        </label>
                        <div className="mt-2.5">
                            <input
                                id="last-name"
                                {...register("lastName")}
                                type="text"
                                autoComplete="family-name"
                                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600"
                            />
                        </div>
                    </div>
                    <div className="sm:col-span-2">
                        <label htmlFor="email" className="block text-sm/6 font-semibold text-gray-900">
                            Adresse email
                        </label>
                        <div className="mt-2.5">
                            <input
                                id="email"
                                type="email"
                                autoComplete="email"
                                {...register("email")}
                                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600"
                            />
                        </div>
                    </div>
                    <div className="sm:col-span-2">
                        <label htmlFor="phone-number" className="block text-sm/6 font-semibold text-gray-900">
                            Numéro de téléphone
                        </label>
                        <div className="mt-2.5">
                            <div className="flex rounded-md bg-white outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-blue-600">
                                <div className="grid shrink-0 grid-cols-1 focus-within:relative">
                                    <select
                                        id="country"
                                        name="country"
                                        autoComplete="country"
                                        aria-label="Country"
                                        className="col-start-1 row-start-1 w-full appearance-none rounded-md py-2 pr-7 pl-3.5 text-base text-gray-500 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600 sm:text-sm/6"
                                    >
                                        <option>FR</option>
                                    </select>
                                    <ChevronDownIcon
                                        aria-hidden="true"
                                        className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4"
                                    />
                                </div>
                                <input
                                    id="phone-number"
                                    {...register("phone")}
                                    type="text"
                                    placeholder="+33 6 12 34 56 78"
                                    className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="sm:col-span-2">
                        <label htmlFor="message" className="block text-sm/6 font-semibold text-gray-900">
                            Votre demande
                        </label>
                        <div className="mt-2.5">
                            <textarea
                                id="message"
                                {...register("message")}
                                rows={4}
                                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600"
                                defaultValue={''}
                            />
                        </div>
                    </div>
                    <div className="flex gap-x-4 sm:col-span-2">
                        <div className="flex h-6 items-center">
                            <div className="group relative inline-flex w-8 shrink-0 rounded-full bg-gray-200 p-px inset-ring inset-ring-gray-900/5 outline-offset-2 outline-blue-600 transition-colors duration-200 ease-in-out has-checked:bg-blue-600 has-focus-visible:outline-2">
                                <span className="size-4 rounded-full bg-white shadow-xs ring-1 ring-gray-900/5 transition-transform duration-200 ease-in-out group-has-checked:translate-x-3.5" />
                                <input
                                    id="agree-to-policies"
                                    name="agree-to-policies"
                                    type="checkbox"
                                    aria-label="Agree to policies"
                                    className="absolute inset-0 appearance-none focus:outline-hidden cursor-pointer"
                                    checked={isChecked}
                                    onChange={() => setIsChecked(!isChecked)}
                                />
                            </div>
                        </div>
                        <label htmlFor="agree-to-policies" className="text-sm/6 text-gray-600 cursor-pointer">
                            En cochant cette case, vous acceptez notre {' '}
                            <Link href="#" className="font-semibold whitespace-nowrap text-blue-600">
                                politique de confidentialité
                            </Link>
                            .
                        </label>
                    </div>
                </div>
                <div className="mt-10">
                    <button
                        type="submit"
                        className={`block w-full rounded-full bg-blue-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-xs hover:bg-blue-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 cursor-pointer ${isChecked ? '' : 'opacity-50 cursor-not-allowed'}`}
                        disabled={!isChecked}
                    >
                        Envoyer votre demande
                    </button>
                </div>
            </form>
        </div>
    )
}

export default ContactForm