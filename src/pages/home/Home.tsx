import { Divider } from '@mui/material';
import AboutMeView from './about-me/AboutMeView';
import SkillsView from './skills/SkillsView';
import ProjectsView from './projects/ProjectsView';

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
