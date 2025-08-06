import { MetadataRoute } from "next";

export const BASE_URL = '';

export const paths = [
    '/',
    '/mentions-legales',
    '/politique-de-confidentialite',
];

export default function sitemap(): MetadataRoute.Sitemap {
    const urls = paths.map(path => `${BASE_URL}${path}`);
    return urls.map(url => {
        const path = paths.find(path => url.endsWith(path)) as string;
        return {
            url,
            lastModified: new Date().toISOString(),
            priority: getPriority(path)
        };
    });
}

function getPriority(path: string): number {
    switch (path) {
        case '/':
            return 1;
        case '/mentions-legales':
            return 0.9;
        case '/politique-de-confidentialite':
            return 0.8;
        default:
            return 0.5;
    }
}