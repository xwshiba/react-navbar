import { useRef, useEffect } from 'react';

import SidebarContent from './SidebarContent';

interface SidebarProps {
    isSidebarOpen: boolean;
    closeSidebar: (dialogRef: HTMLDialogElement) => void;
    navigateAndClose: (content: string) => void;
};


function Sidebar({ isSidebarOpen, closeSidebar, navigateAndClose }: SidebarProps) {
    const dialogRef = useRef<HTMLDialogElement>(null);

    useEffect(
        () => {
            if (isSidebarOpen) {
                dialogRef.current?.showModal();
            };
        },
        [isSidebarOpen]
    );

    return (
        <nav className={`${isSidebarOpen ? 'sidebar sidebar--show' : 'sidebar'}`}>
            <dialog className="sidebar__wrapper" ref={dialogRef}>
                <button className="navbar__toggle sidebar__close btn"
                    // check if dialogRef.current exists before calling closeSidebar to ensure type safety and avoid potential runtime errors.
                    onClick={() => dialogRef.current && closeSidebar(dialogRef.current)}>
                    <span className="gg-close"></span>
                </button>
                <SidebarContent
                    navigateAndClose={navigateAndClose}
                    dialogRef={dialogRef}
                />
            </dialog>
        </nav>
    );
};

export default Sidebar;