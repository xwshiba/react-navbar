import SidebarContent from './SidebarContent';

import nav from '../styles/nav.module.css';
import sidebar from '../styles/sidebar.module.css';
import icons from '../styles/icons.module.css';

interface SidebarProps {
    isSidebarOpen: boolean;
    closeSidebar: () => void;
    navigateAndClose: () => void;
};


function Sidebar({ isSidebarOpen, closeSidebar, navigateAndClose }: SidebarProps) {
    return (
        <nav className={`${isSidebarOpen ? `${sidebar.sidebar} ${sidebar['sidebar--show']}` : sidebar.sidebar}`}>
            <dialog className={sidebar.wrapper}>
                <button className={`${nav.toggle} ${sidebar.close} ${nav.btn}`}
                    onClick={closeSidebar}>
                    <span className={icons['gg-close']}></span>
                </button>
                <SidebarContent
                    navigateAndClose={navigateAndClose}
                />
            </dialog>
        </nav>
    );
};

export default Sidebar;