'use client'

import { useState } from 'react';

import Submenu from './Submenu';
import Sidebar from './Sidebar';

import nav from '../styles/nav.module.css';
import icons from '../styles/icons.module.css';

function Nav() {
    // states
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
    const [tab, setTab] = useState<string>('');

    // states management
    const openSidebar = () => {
        setIsSidebarOpen(true);
    };

    const closeSidebar = (dialogRef?: any) => {
        setIsSidebarOpen(false);
    };

    const showSubmenu = (tabName: string) => {
        setTab(tabName);
        setIsSubmenuOpen(true);
    };

    const closeSubmenu = () => {
        setIsSubmenuOpen(false);
    };

    const navigateAndClose = () => {
        closeSubmenu();
        return;
    };


    return (
        <>
            <nav className={nav.navbar} onMouseLeave={closeSubmenu}>
                <div className={nav.wrapper}>
                    <div className={nav.header}>
                        <a className={`${nav.skip} ${nav.btn}`} href="#main">Skip to Main Content</a>
                        <a
                            className={nav.logo}
                            onClick={navigateAndClose}
                            onMouseEnter={closeSubmenu}
                            href="#home"
                        >
                            ShibeHacker
                        </a>
                        <button className={`${nav.toggle} ${nav.btn}`} onClick={openSidebar}>
                            <span className={icons['gg-menu']}></span>
                        </button>
                    </div>
                    <ul className={nav.links}>
                        <li className={nav.item}>
                            <div className={`${nav['subheader-wrapper']} ${nav.btn}`}>
                                <a
                                    className={`${nav.subheader}`}
                                    href="#journeys"
                                    onMouseOver={() => showSubmenu('Journeys')}

                                >
                                    Journeys
                                </a>
                                <span className={icons['gg-chevron-down']}></span>
                            </div>
                            {tab === 'Journeys' &&
                                <Submenu
                                    tab={tab}
                                    isSubmenuOpen={isSubmenuOpen}
                                    navigateAndClose={navigateAndClose} />
                            }
                        </li>
                        <li className={nav.item}>
                            <div className={`${nav['subheader-wrapper']} ${nav.btn}`}>
                                <a
                                    className={`${nav.subheader}`}
                                    href="#photography"
                                    onMouseOver={() => showSubmenu('Photography')}
                                >
                                    Photography
                                </a>
                                <span className={icons['gg-chevron-down']}></span>
                            </div>
                            {tab === 'Photography' &&
                                <Submenu
                                    tab={tab}
                                    isSubmenuOpen={isSubmenuOpen}
                                    navigateAndClose={navigateAndClose} />}
                        </li>
                        <li className={nav.item}>
                            <div className={`${nav['subheader-wrapper']} ${nav.btn}`}>
                                <a
                                    className={`${nav.subheader}`}
                                    href="#resources"
                                    onMouseOver={() => showSubmenu('Resources')}
                                >
                                    Resources
                                </a>

                                <span className={icons['gg-chevron-down']}></span>
                            </div>
                            {tab === 'Resources' &&
                                <Submenu
                                    tab={tab}
                                    isSubmenuOpen={isSubmenuOpen}
                                    navigateAndClose={navigateAndClose} />}
                        </li>
                        <li className={nav.item}>
                            <a
                                className={`${nav.subheader} ${nav.btn}`}
                                onMouseEnter={closeSubmenu}
                                href="#signin"
                            >
                                Login
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
            <Sidebar
                isSidebarOpen={isSidebarOpen}
                closeSidebar={closeSidebar}
                navigateAndClose={navigateAndClose}
            />
        </>
    );
};

export default Nav;