import { useEffect, useState } from 'react';
import navItems from '../constants/nav-items';
import { NavItem } from '../interfaces/nav-item.interface';

const useNavItems = () => {
    const [items, setItems] = useState<NavItem[]>([]);

    useEffect(() => {
        const fetchProjects = async () => {
            const items: NavItem[] = navItems;

            setItems(items);
        };

        fetchProjects();
    }, []);

    return items;
};

export default useNavItems;
