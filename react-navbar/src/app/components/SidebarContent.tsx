import { SITEMAP, PageItem } from '../data';

interface SidebarContentProps {
    navigateAndClose: (content: string) => void;
    dialogRef: any;
};


function SidebarContent({ navigateAndClose, dialogRef }: SidebarContentProps) {

    return (
        <div className="sidebar__content">
            {
                Object.keys(SITEMAP).map((name, index) => {
                    const pageObjects = SITEMAP[name];
                    const { page, id, info } = pageObjects;

                    return (
                        <article key={index} className="sidebar__subitems">
                            <a
                                href={`#${id}`}
                                className="sidebar__title"
                                onClick={() => navigateAndClose(dialogRef)}
                            >
                                {page}
                            </a>
                            <div className="sidebar__info">
                                {info.map((items, index) => {
                                    const { label, id, icon} = items;
                                    return (
                                        <li className="sidebar__link"
                                            key={index}
                                            onClick={() => navigateAndClose(dialogRef)}>
                                            <span className={`sidebar__icon ${icon}`}></span>
                                            <a href={`#${id}`}>{label}</a>
                                        </li>
                                    );
                                })}
                            </div>
                        </article>
                    );
                })
            }
            <section className="sidebar__footer">(
                <button
                    className="sidebar__signin btn"
                    type="button"
                    onClick={() => navigateAndClose(dialogRef)}>
                    Sign In
                </button>
                )
            </section>
        </div>
    );
};

export default SidebarContent;