import { Divider } from '@mui/material';
import AboutMeView from './about-me/AboutMeView';
import ProjectsView from './projects/ProjectsView';
// @ts-expect-error: TS-6133 is right, but I will keep it because Skills view would be re-added in the future.
import SkillsView from './Skills/SkillsView';
import ContactMeView from './contact-me/ContactMeView';
import { useEffect } from 'react';
import smoothScrollToTarget from '../../utils/scroll-to-target';

const Home = () => {
    useEffect(() => {
        const hash = window.location.hash;
        if (hash) {
            const targetId = hash.substring(1);
            smoothScrollToTarget(targetId);
        }
    }, []);

    return (
        <>
            <AboutMeView />
            <Divider />
            <ProjectsView />
            <Divider />
            <ContactMeView />
            <Divider />

            {/* <SkillsView /> */}
        </>
    );
};

export default Home;
