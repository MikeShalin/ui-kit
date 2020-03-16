import { BaseSyntheticEvent, ReactElement } from 'react';
declare type TProps = {
    children: Array<ReactElement>;
    active?: boolean;
    list: boolean;
    setShow: any;
    top?: boolean;
    search?: boolean;
    show?: boolean;
    className?: string;
    searchCallback?: (e: BaseSyntheticEvent | null) => void;
};
export declare const OptionContainer: ({ children, active, setShow, top, search, className, searchCallback }: TProps) => JSX.Element;
export {};
