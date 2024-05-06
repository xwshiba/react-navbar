'use client'

import { useState } from 'react';

import { SITEMAP, Page } from '../data';

import Submenu from './Submenu';
import Sidebar from './Sidebar';

import nav from '../styles/nav.module.css';
import icons from '../styles/icons.module.css';

function Nav() {
    // states
    const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);
    const [isSubmenuOpen, setIsSubmenuOpen] = useState<boolean>(false);
    const [tab, setTab] = useState<string>('');

    // states management functions
    const openSidebar = () => {
        setIsSidebarOpen(true);
    };

    const closeSidebar = () => {
        setIsSidebarOpen(false);
    };

    const showSubmenu = (tabName: string) => {
        setTab(tabName);
        setIsSubmenuOpen(true);
    };

    const toggleSubmenu = (tabName: string) => {
        if (tab === tabName) {
            setTab('');
            setIsSubmenuOpen(false);
        } else {
            setTab(tabName);
            setIsSubmenuOpen(true);
        };
    };

    const closeSubmenu = () => {
        setTab('');
        setIsSubmenuOpen(false);
    };

    const navigateAndClose = () => {
        closeSubmenu();

        if (isSidebarOpen) {
            closeSidebar();
        };

        return;
    };


    return (
        <>
            <nav className={nav.navbar} onMouseLeave={closeSubmenu}>
                {/* site logo and small screen toggle buttons */}
                <div className={nav.wrapper}>
                    <div className={nav.header}>
                        <a className={`${nav.skip} ${nav.btn}`} href="#main">Skip to Main Content</a>
                        <a
                            className={nav.logo}
                            onClick={navigateAndClose}
                            href="#home"
                        >
                            ShibeHacker
                        </a>
                        {isSidebarOpen ?
                        <button className={`${nav.toggle}`}
                            onClick={closeSidebar}>
                            <span className={icons['gg-close']}></span>
                        </button> :
                        <button className={`${nav.toggle}`} onClick={openSidebar}>
                            <span className={icons['gg-menu']}></span>
                        </button>}
                    </div>

                    {/* main navigations */}
                    <ul className={nav.links}>
                        {Object.values(SITEMAP).map((page: Page, index: number) => (
                            <li className={nav.item} key={index}
                                onMouseOver={() => showSubmenu(page.page)}
                                onClick={() => showSubmenu(page.page)}
                            >
                                <div className={`${nav['subheader-wrapper']} ${nav.btn}`}>
                                    <a
                                        className={`${nav.subheader}`}                                        
                                        href={`#${page.page}`}
                                    >
                                        {page.page}
                                    </a>
                                    <span
                                        className={tab === page.page && isSubmenuOpen ? icons['gg-chevron-up'] : icons['gg-chevron-down']}>
                                    </span>
                                </div>
                                {tab === page.page &&
                                    <Submenu
                                        tab={tab}
                                        isSubmenuOpen={isSubmenuOpen}
                                        navigateAndClose={navigateAndClose}
                                    />
                                }
                            </li>))
                        }

                        {/* login button */}
                        <li className={nav.item}>
                            <a
                                className={`${nav.subheader} ${nav.btn} ${nav.login}`}
                                onMouseEnter={closeSubmenu}
                                href="#login"
                            >
                                Login
                            </a>
                        </li>
                    </ul>

                </div>
            </nav>

            {/* sidebar for small screens*/}
            <Sidebar
                tab={tab}
                toggleSubmenu={toggleSubmenu}
                isSubmenuOpen={isSubmenuOpen}
                isSidebarOpen={isSidebarOpen}
                closeSidebar={closeSidebar}
                navigateAndClose={navigateAndClose}
            />
        </>
    );
};

export default Nav;
