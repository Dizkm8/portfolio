import { Divider } from '@mui/material';
import AboutMeView from './about-me/AboutMeView';
import ProjectsView from './projects/ProjectsView';
// @ts-expect-error: TS-6133 is right, but I will keep it because Skills view would be re-added in the future.
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
