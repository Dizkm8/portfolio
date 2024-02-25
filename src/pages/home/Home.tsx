import { Divider } from '@mui/material';
import AboutMeView from './AboutMe/AboutMeView';
import SkillsView from './Skills/SkillsView';
import ProjectsView from '../projects/ProjectsView';

const Home = () => {
    return (
        <>
            <AboutMeView />
            <Divider/>
            <SkillsView />
            <Divider/>
            <ProjectsView />
        </>
    );
};

export default Home;
