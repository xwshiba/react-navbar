import { SITEMAP } from '../data';

import nav from '../styles/nav.module.css';
import sidebar from '../styles/sidebar.module.css';
import icons from '../styles/icons.module.css';

interface SidebarContentProps {
    navigateAndClose: () => void;
};


function SidebarContent({ navigateAndClose }: SidebarContentProps) {
    return (
        <div className={sidebar.content}>
            {
                Object.keys(SITEMAP).map((name, index) => {
                    const pageObjects = SITEMAP[name];
                    const { page, id, info } = pageObjects;

                    return (
                        <article key={index} className={sidebar.subitems}>
                            <a
                                href={`#${id}`}
                                className={sidebar.title}
                                onClick={navigateAndClose}
                            >
                                {page}
                            </a>
                            <div className={sidebar.info}>
                                {info.map((items, index) => {
                                    const { label, id, icon } = items;
                                    return (
                                        <li className={sidebar.link}
                                            key={index}
                                            onClick={navigateAndClose}>
                                            <span className={`${sidebar.icon} ${icons[icon]}`}></span>
                                            <a href={`#${id}`}>{label}</a>
                                        </li>
                                    );
                                })}
                            </div>
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