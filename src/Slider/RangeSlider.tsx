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
  step,
  min,
  max,
}: TProps & TState & TRef & TMethods) => {
  console.log('lol', {
    step,
    min,
    max,
  })
  return (
  <div
    className={cn(s.range, { [s.dark]: dark })}
    data-range=""
    ref={range}
  >
    <input
      type="number"
      value={+value}
      onChange={onChange}
      className={s.value}
      step={step && String(step)}
      min={min && String(min)}
      max={max && String(max)}
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
