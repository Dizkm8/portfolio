import { NavItem } from '../interfaces/nav-item.interface';
import { customID } from '../pages/home/custom-id';

const navItems: NavItem[] = [
    {
        name: 'About me',
        id: customID.aboutMeView,
    },
    {
        name: 'Projects',
        id: customID.projectsView,
    },
    {
        name: 'Skills',
        id: customID.skillsView,
    },
    {
        name: 'Contact',
        id: customID.contactView,
    },
];

export default navItems;
