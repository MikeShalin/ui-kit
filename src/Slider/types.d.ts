import React, { BaseSyntheticEvent, MouseEvent } from 'react';

export type TProps = {
  value: number;
  dark?: boolean;
  step?: number;
  min?: number;
  max?: number;
}

export type TState = {
  value: number;
  isDrag: boolean;
  ref: null | number;
}

export type TRefButton = React.RefObject<any>;
export type TRefRange = React.RefObject<any>;
export type TOnMouseDown = (e: MouseEvent) => void;
export type TOnMouseUp = () => void;
export type TOnMouseMove = (e: MouseEvent) => void;
export type TOnChange = (e: BaseSyntheticEvent) => void;

export type TRef = {
  button: TRefButton,
  range: TRefRange,
};

export type TMethods = {
  onMouseDown: TOnMouseDown;
  onMouseUp: TOnMouseUp;
  onMouseMove: TOnMouseMove;
  onChange: TOnChange;
}
