import React from 'react';
import cn from 'classnames';

import s from './slider.module.scss';
import { hocSlider } from './hoc';
import {
  TProps,
  TState,
  TRef,
  TMethods,
} from './types';

export const RangeSlider = hocSlider(({
  dark,
  range,
  isDrag,
  button,
  onMouseDown,
  onMouseUp,
  onMouseMove,
  value,
  onChange,
  min,
  max,
  count,
}: TProps & TState & TRef & TMethods) => {
  return (
  <div
    className={cn(s.range, { [s.dark]: dark })}
    data-range=""
    ref={range}
  >
    <input
      type="text"
      value={count ? count : value}
      onChange={onChange}
      className={s.value}
      min={min}
      max={max}
    />
    <button
      className={cn(s.drag, { [s.active]: isDrag })}
      ref={button}
      data-drag=""
      onMouseDown={onMouseDown}
      onMouseUp={onMouseUp}
      onMouseMove={onMouseMove}
      style={{ left: +value }}
    />
  </div>
)});
