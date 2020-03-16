import { Component } from 'react';
declare type TProps = {
    onToggle?: Function;
    id?: string;
    dark?: boolean;
};
export declare class Switch extends Component<TProps, {
    checked: boolean;
}> {
    private readonly id;
    private readonly onToggle;
    constructor(props: TProps);
    onChecked: () => void;
    render(): JSX.Element;
}
export {};
