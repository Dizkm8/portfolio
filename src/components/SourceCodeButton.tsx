import { Button, ButtonProps } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import { ReactNode } from 'react';

declare module '@mui/material/Button' {
    interface ButtonPropsColorOverrides {
        cBlack: true;
    }
}

interface SourceCodeButtonProps extends ButtonProps {
    children: ReactNode;
}

const SourceCodeButton = (sourceCodeButtonProps: SourceCodeButtonProps) => {
    const { children, ...props } = sourceCodeButtonProps;
    return (
        <Button
            variant="outlined"
            color="cBlack"
            startIcon={<GitHubIcon />}
            {...props}
        >
            {children}
        </Button>
    );
};

export default SourceCodeButton;
