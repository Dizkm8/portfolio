import { Button, ButtonProps } from '@mui/material';
import { ReactNode } from 'react';
import { useStorage } from '../hooks/useStorage';
import customColors from '../constants/custom-colors';

declare module '@mui/material/Button' {
    interface ButtonPropsColorOverrides {
        cYellow: true;
    }
}

interface SubmitButtonProps extends ButtonProps {
    children: ReactNode;
    handleSubmit: () => void;
}

const SubmitButton = (submitButtonProps: SubmitButtonProps) => {
    const { children, handleSubmit, ...props } = submitButtonProps;
    const { theme } = useStorage();

    let textColor = customColors.white;

    if (theme === 'light') {
        textColor = customColors.black;
    } else {
        textColor = customColors.white;
    }

    return (
        <Button
            fullWidth={true}
            variant="contained"
            onClick={handleSubmit}
            color="cYellow"
            sx={{
                color: textColor,
            }}
            {...props}
        >
            {children}
        </Button>
    );
};

export default SubmitButton;
