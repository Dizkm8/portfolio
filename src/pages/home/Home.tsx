import { Divider } from '@mui/material';
import AboutMeView from './about-me/AboutMeView';
import ProjectsView from './projects/ProjectsView';
import SkillsView from './Skills/SkillsView';

const Home = () => {
    return (
        <>
            <AboutMeView />
            <Divider />
            <SkillsView />
            <Divider />
            <ProjectsView />
        </>
    );
};

export default Home;
