import React from 'react';
import { TProps, TState } from './types';
export declare const SimpleSlider: {
    new (props: TProps): {
        readonly range: import("./types").TRefRange;
        readonly button: import("./types").TRefButton;
        readonly handleMouseDown: import("./types").TOnMouseDown;
        readonly handleMouseUp: import("./types").TOnMouseUp;
        readonly handleMouseMove: import("./types").TOnMouseMove;
        readonly handleChange: import("./types").TOnChange;
        componentDidUpdate(_: Readonly<TProps>, prevState: Readonly<TState>): void;
        onMouseDown(e: any): void;
        onMouseUp(): void;
        onMouseMove(e: any): null | undefined;
        onChange({ target: { value } }: {
            target: {
                value: any;
            };
        }): void;
        render(): JSX.Element;
        context: any;
        setState<K extends "ref" | "value" | "maxRange" | "minRange" | "count" | "isDrag">(state: TState | ((prevState: Readonly<TState>, props: Readonly<TProps>) => TState | Pick<TState, K> | null) | Pick<TState, K> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callback?: (() => void) | undefined): void;
        readonly props: Readonly<TProps> & Readonly<{
            children?: React.ReactNode;
        }>;
        state: Readonly<TState>;
        refs: {
            [key: string]: React.ReactInstance;
        };
        componentDidMount?(): void;
        shouldComponentUpdate?(nextProps: Readonly<TProps>, nextState: Readonly<TState>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<TProps>, prevState: Readonly<TState>): any;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<TProps>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<TProps>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<TProps>, nextState: Readonly<TState>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<TProps>, nextState: Readonly<TState>, nextContext: any): void;
    };
    contextType?: React.Context<any> | undefined;
};
