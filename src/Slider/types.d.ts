import React, { BaseSyntheticEvent, MouseEvent } from 'react';

export type TProps = {
  value: number;
  dark?: boolean;
  min?: number;
  max?: number;
  maxRange?: number;
}

export type TState = {
  value: number;
  minRange: number;
  maxRange: number;
  count?: number;
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
