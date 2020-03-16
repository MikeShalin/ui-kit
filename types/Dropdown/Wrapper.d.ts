import React, { ReactElement, BaseSyntheticEvent } from 'react';
declare type TProps = {
    children: Array<ReactElement>;
    dark?: boolean;
    top?: boolean;
    search?: boolean;
    searchCallback?: (e: BaseSyntheticEvent | null) => void;
    className?: string;
};
export declare class Wrapper extends React.Component<TProps> {
    private readonly wrapperRef;
    constructor(props: any);
    state: {
        show: boolean;
    };
    setShow: (show: boolean) => void;
    handleClickOutside: ({ target }: any) => void;
    componentDidMount(): void;
    componentWillMount(): void;
    render(): JSX.Element;
}
export {};
