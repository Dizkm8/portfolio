import { Container, IconButton, Typography } from '@mui/material';
import { styles } from './styles';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import smoothScrollToTarget from '../../../utils/scroll-to-target';
import { customID } from '../custom-id';

const AboutMeView = () => {
    const handleOnClick = () => {
        smoothScrollToTarget(customID.skillsView);
    };

    return (
        <Container maxWidth="sm" sx={styles.container}>
            <img
                src="david-araya-cadiz.webp"
                alt="David Araya Cádiz"
                style={styles.image}
            />
            <Typography component="h1" variant="h2" sx={styles.h1}>
                David Araya Cádiz
            </Typography>
            <Typography component="p" variant="h5" sx={styles.h2}>
                Software Engineering & Fullstack Web Developer. Passionate about
                creating elegant solutions.
            </Typography>
            <IconButton
                aria-label="delete"
                size="large"
                onClick={handleOnClick}
            >
                <KeyboardDoubleArrowDownIcon
                    fontSize="inherit"
                    sx={styles.button}
                />
            </IconButton>
        </Container>
    );
};

export default AboutMeView;
