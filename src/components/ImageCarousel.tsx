import Carousel from 'react-material-ui-carousel';
import { CSSProperties } from 'react';
import { CarouselImages } from '../models/carousel-images';
import useMobileMediaQuery from '../hooks/useMobileMediaQuery';

const styles = {
    carousel: {
        margin: '0 0 3rem',
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
    carouselImages: CarouselImages;
}

const generateImages = (
    carouselImages: CarouselImages,
    isMobileView: boolean
) => {
    const { desktopImages, mobileImages, namespace } = carouselImages;

    const items = isMobileView ? mobileImages : desktopImages;
    return items.map((imageUrl) => (
        <img
            key={imageUrl}
            src={`./../projects/${namespace}/${imageUrl}`}
            style={styles.image}
        />
    ));
};

const ImageCarousel = (props: Props) => {
    const { carouselImages } = props;
    const { isMobileView } = useMobileMediaQuery();
    const images = generateImages(carouselImages, isMobileView);

    return <Carousel sx={styles.carousel}>{images}</Carousel>;
};

export default ImageCarousel;
