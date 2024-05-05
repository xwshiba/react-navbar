'use client'

import { SITEMAP, PageItem } from '../data';

import submenu from '../styles/submenu.module.css';
import icons from '../styles/icons.module.css';

interface SubmenuProps {
    tab: keyof typeof SITEMAP;
    isSubmenuOpen: boolean;
    navigateAndClose: (content: string) => void;
};


function Submenu({ tab, isSubmenuOpen, navigateAndClose }: SubmenuProps) {
    const info: PageItem[] = SITEMAP[tab].info;

    return (
        <ul className={`${isSubmenuOpen ? `${submenu.submenu} ${submenu['submenu--show']}` : submenu.submenu}`}>
            {info.map((items, index) => {
                const { label, id, icon, content } = items;
                const contentValue: string = content || ''; // content is optional, so either it's a string or an empty string
                
                return (
                    <li className={submenu.item}
                        key={index}
                        onClick={() => navigateAndClose(contentValue)}
                    >
                        <span className={`${submenu.icon} ${icons[icon]}`}></span>
                        <a href={`#${id}`}>{label}</a>
                    </li>
                );
            })}
        </ul>
    );
};

export default Submenu;
