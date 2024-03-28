const styles = {
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100vw', // Cover entire width of the viewport
        height: '100vh', // Cover entire height of the viewport
    },
    image: {
        maxWidth: '100%',
        maxHeight: '100%',
    },
};

const ImageComponent = ({ imageUrl }) => {
    return (
        <div style={styles.container}>
            <img
                src={imageUrl}
                alt="Cover"
                style={{ ...styles.image, objectFit: 'cover' }}
            />
        </div>
    );
};

export default ImageComponent;
