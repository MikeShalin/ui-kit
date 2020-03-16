import { MouseEvent, ReactNode } from 'react';
declare type TProps = {
    children: ReactNode;
    disabled?: boolean;
    onClick: (e: MouseEvent) => void;
    onClose: Function;
};
export declare const Option: ({ children, onClick, disabled, onClose }: TProps) => JSX.Element;
export {};
