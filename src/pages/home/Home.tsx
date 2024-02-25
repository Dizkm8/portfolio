import { Divider } from '@mui/material';
import AboutMeView from './AboutMe/AboutMeView';
import SkillsView from './Skills/SkillsView';

const Home = () => {
    return (
        <>
            <AboutMeView />
            <Divider id="targetSection" />
            <SkillsView />
        </>
    );
};

export default Home;
