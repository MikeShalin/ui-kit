import React from 'react';
declare type TProps = {
    value: string;
    options: Array<string>;
    disabledOption?: Array<string>;
    onChange: Function;
    search?: boolean;
    dark?: boolean;
    top?: boolean;
};
export declare class SimpleDropdown extends React.Component<TProps> {
    state: {
        selectedOption: string;
        filterString: string;
    };
    render(): JSX.Element;
}
export {};
