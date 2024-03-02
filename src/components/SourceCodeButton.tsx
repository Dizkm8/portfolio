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
    target?: string;
}

const SourceCodeButton = (sourceCodeButtonProps: SourceCodeButtonProps) => {
    const { children, target, ...props } = sourceCodeButtonProps;
    return (
        // @ts-expect-error: ts-2769 do not recognize blank
        <Button
            variant="outlined"
            color="cBlack"
            startIcon={<GitHubIcon />}
            target={target}
            rel="noopener"
            {...props}
        >
            {children}
        </Button>
    );
};

export default SourceCodeButton;
