'use client'

import { useState } from 'react';

import Submenu from './Submenu';

function Nav() {
    // states
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
    const [tab, setTab] = useState<string>('');

    const openSidebar = () => {
        setIsSidebarOpen(true);
    };

    const closeSidebar = (dialogRef?: any) => {
        setIsSidebarOpen(false);

        if (dialogRef) {
            dialogRef.current.close();
        };
    };

    const showSubmenu = (tabName: string) => {
        setTab(tabName);
        setIsSubmenuOpen(true);
    };

    const closeSubmenu = () => {
        setIsSubmenuOpen(false);
    };

    const navigateAndClose = (dialogRef?: any) => {
        if (!dialogRef) {
            closeSubmenu();
            return;
        } else {
            closeSidebar(dialogRef);
            return;
        }
    };


    return (
        <>
            <nav className="navbar" onMouseLeave={closeSubmenu}>
                <div className="navbar__wrapper">
                    <div className="navbar__header">
                        <a className="navbar__skip btn" href="#main">Skip to Main Content</a>
                        <a
                            className="navbar__logo"
                            href="#home"
                        >
                            ShibeHacker
                        </a>
                        <button className="navbar__toggle btn" onClick={openSidebar}>
                            <span className="gg-menu"></span>
                        </button>
                    </div>
                    <ul className="navbar__links">
                        <li className="navbar__item">
                            <a
                                className="navbar__subheader btn"
                                href="#journeys"
                                onMouseOver={() => showSubmenu('Journeys')}

                            >
                                Journeys
                            </a>
                            {tab === 'Journeys' &&
                                <Submenu
                                    tab={tab}
                                    isSubmenuOpen={isSubmenuOpen}
                                    navigateAndClose={navigateAndClose} />}
                        </li>
                        <li className="navbar__item">
                            <a
                                className="navbar__subheader btn"
                                href="#photography"
                                onMouseOver={() => showSubmenu('Photography')}
                            >
                                Photography
                            </a>
                            {tab === 'Photography' &&
                                <Submenu
                                    tab={tab}
                                    isSubmenuOpen={isSubmenuOpen}
                                    navigateAndClose={navigateAndClose} />}
                        </li>
                        <li className="navbar__item">
                            <a
                                className="navbar__subheader btn"
                                href="#resources"
                                onMouseOver={() => showSubmenu('Resources')}
                            >
                                Resources
                            </a>
                            {tab === 'Resources' &&
                                <Submenu
                                    tab={tab}
                                    isSubmenuOpen={isSubmenuOpen}
                                    navigateAndClose={navigateAndClose} />}
                        </li>
                        <li className="navbar__item">
                            <a
                                className="navbar__signing btn"
                                href="#signin"
                            >
                                Login
                            </a>


                        </li>
                    </ul>
                </div>
            </nav>
        </>
    );
};

export default Nav;