import { SITEMAP } from '../data';

import Submenu from './Submenu';

import nav from '../styles/nav.module.css';
import sidebar from '../styles/sidebar.module.css';
import icons from '../styles/icons.module.css';

interface SidebarContentProps {
    tab: string;
    toggleSubmenu: (tabName: string) => void;
    isSubmenuOpen: boolean;
    navigateAndClose: () => void;
};


function SidebarContent({ tab, toggleSubmenu, isSubmenuOpen, navigateAndClose }: SidebarContentProps) {
    return (
        <div className={sidebar.content}>
            {
                Object.keys(SITEMAP).map((name, index) => {
                    const pageObjects = SITEMAP[name];
                    const { page, id } = pageObjects;

                    return (
                        <article key={index} className={sidebar.subitems} onClick={() => toggleSubmenu(page)}>
                            <div className={sidebar['subitems-wrapper']}>
                                <a className={sidebar.title}>
                                    {page}
                                </a>
                                <span
                                    className={tab === page && isSubmenuOpen ? icons['gg-chevron-up'] : icons['gg-chevron-right']}>
                                </span>
                            </div>
                            {tab === page && isSubmenuOpen &&
                                <Submenu
                                    tab={tab}
                                    isSubmenuOpen={isSubmenuOpen}
                                    navigateAndClose={navigateAndClose}
                                />
                            }
                        </article>
                    );
                })
            }
            <section className={sidebar.footer}>
                <button
                    className={`${sidebar.login} ${nav.btn}`}
                    type="button"
                    onClick={navigateAndClose}>
                    Login
                </button>
            </section>
        </div>
    );
};

export default SidebarContent;