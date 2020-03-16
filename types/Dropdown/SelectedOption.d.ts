/// <reference types="react" />
declare type TProps = {
    show: boolean;
    setShow: Function;
    children: any;
    top: boolean;
    className?: string;
};
export declare const SelectedOption: ({ setShow, show, children, top, className }: TProps) => JSX.Element;
export {};
