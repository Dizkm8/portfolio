import { Divider } from '@mui/material';
import AboutMeView from './about-me/AboutMeView';
import ProjectsView from './projects/ProjectsView';
import SkillsView from './Skills/SkillsView';

const Home = () => {
    return (
        <>
            <AboutMeView />
            <Divider />
            <ProjectsView />
            <Divider />
            {/* <SkillsView /> */}

        </>
    );
};

export default Home;
