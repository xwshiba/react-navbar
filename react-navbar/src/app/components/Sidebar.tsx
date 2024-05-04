import SidebarContent from './SidebarContent';

import nav from '../styles/nav.module.css';
import sidebar from '../styles/sidebar.module.css';
import icons from '../styles/icons.module.css';

interface SidebarProps {
    tab: string;
    toggleSubmenu: (tabName: string) => void;
    isSubmenuOpen: boolean;
    isSidebarOpen: boolean;
    closeSidebar: () => void;
    navigateAndClose: () => void;
};


function Sidebar({ tab, toggleSubmenu, isSubmenuOpen, isSidebarOpen, closeSidebar, navigateAndClose }: SidebarProps) {
    return (
        <nav className={`${isSidebarOpen ? `${sidebar.sidebar} ${sidebar['sidebar--show']}` : sidebar.sidebar}`}>
            <dialog className={sidebar.wrapper}>
                <SidebarContent
                    tab = {tab}
                    toggleSubmenu={toggleSubmenu}
                    isSubmenuOpen={isSubmenuOpen}
                    navigateAndClose={navigateAndClose}
                />
            </dialog>
        </nav>
    );
};

export default Sidebar;