import Carousel from 'react-material-ui-carousel';
import { Project } from '../models/project';
import { CSSProperties } from 'react';

const styles = {
    carousel: {
        margin: '2rem 0 3rem',
        width: '100%',
        border: '1px solid #e0e0e0',
        borderTop: 'none',
    },
    image: {
        width: '100%',
        height: 'auto',
        objectFit: 'cover',
    } as CSSProperties,
};

interface Props {
    project: Project;
}

const ImageCarousel = (props: Props) => {
    const { project } = props;
    const imageUrl = `./../${project.image}`;

    const items = [<img key={imageUrl} src={imageUrl} style={styles.image} />];

    return <Carousel sx={styles.carousel}>{items}</Carousel>;
};

export default ImageCarousel;
