import { useMediaQuery } from '@mui/material';
import { mobileMaxWidth } from '../utils/media-query-sizes';
import { useRef } from 'react';

const useMobileMediaQuery = () => {
    const isMobileView = useRef(false);

    const match = useMediaQuery(`(max-width:${mobileMaxWidth}px)`);
    isMobileView.current = match;

    return {
        isMobileView: isMobileView.current,
    };
};

export default useMobileMediaQuery;
