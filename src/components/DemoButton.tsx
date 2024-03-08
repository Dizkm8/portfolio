import { Button, ButtonProps } from '@mui/material';
import WebIcon from '@mui/icons-material/Web';
import { ReactNode } from 'react';

declare module '@mui/material/Button' {
    interface ButtonPropsColorOverrides {
        cOrange: true;
    }
}

interface DemoButtonProps extends ButtonProps {
    children: ReactNode;
    target?: string;
}

const DemoButton = (demoButtonProps: DemoButtonProps) => {
    const { children, target, ...props } = demoButtonProps;
    return (
        // @ts-expect-error: ts-2769 do not recognize blank
        <Button
            variant="contained"
            color="cOrange"
            startIcon={<WebIcon />}
            target={target}
            rel="noopener"
            {...props}
        >
            {children}
        </Button>
    );
};

export default DemoButton;
