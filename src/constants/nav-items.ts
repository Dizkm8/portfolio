import { NavItem } from '../interfaces/nav-item.interface';
import { customID } from '../pages/home/custom-id';

const navItems: NavItem[] = [
    {
        name: 'aboutMeNav',
        id: customID.aboutMeView,
    },
    {
        name: 'projectsNav',
        id: customID.projectsView,
    },
    {
        name: 'contactMeNav',
        id: customID.contactMeView,
    },
    {
        name: 'skillsNav',
        id: customID.skillsView,
    },
];

export default navItems;
