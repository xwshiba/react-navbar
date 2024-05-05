export interface PageItem {
    label: string;
    id: string;
    icon: string;
    content?: string; // Optional field if needed
}

export interface Page {
    page: string;
    id: string;
    info: PageItem[];
}

export const SITEMAP: Record<string, Page> = {
    Journeys:
    {
        page: 'Journeys',
        id: 'journeys',
        info: [
            { label: 'Summary', id: 'summary', icon: 'gg-album' },
            { label: 'Projects', id: 'projects', icon: 'gg-album' },
            { label: 'Skills', id: 'skills', icon: 'gg-album' },
            { label: 'Education', id: 'education', icon: 'gg-album' },
        ],
    },
    Photography:
    {
        page: 'Photography',
        id: 'photography',
        info: [
            { label: 'Palouse', id: 'palouse', icon: 'gg-instagram' },
            { label: 'Olympic', id: 'olympic', icon: 'gg-instagram' },
            { label: 'Rainier', id: 'mt-rainier', icon: 'gg-instagram' },
            { label: 'St. Helens', id: 'mt-st-helens', icon: 'gg-instagram' },
            { label: 'Cascades', id: 'north-cascades', icon: 'gg-instagram' },
            { label: 'Baker', id: 'mt-baker-snoqualmie', icon: 'gg-instagram' },
            { label: 'Glacier', id: 'glacier', icon: 'gg-instagram' },
            { label: 'Zion', id: 'zion', icon: 'gg-instagram' },
            { label: 'Bryce', id: 'bryce-canoyon', icon: 'gg-instagram' },
        ],
    },
    Resources:
    {
        page: 'Resources',
        id: 'resources',
        info: [
            { label: 'About', id: 'about', icon: 'gg-notes', content: 'About' },
            { label: 'Privacy', id: 'privacy', icon: 'gg-notes', content: 'Privacy' },
            { label: 'Licenses', id: 'license', icon: 'gg-notes' },
            { label: 'Contact', id: 'contact', icon: 'gg-notes' },
        ],
    },
};