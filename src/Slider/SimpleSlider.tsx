import React from 'react';
import cn from 'classnames';

import s from './slider.module.scss';
import { hocSlider } from './hoc';
import {
  TProps,
  TState,
  TRef,
  TMethods,
} from './types'

export const SimpleSlider = hocSlider(({
  dark,
  range,
  isDrag,
  button,
  onMouseDown,
  onMouseUp,
  onMouseMove,
  value,
}: TProps & TState & TRef & TMethods) => (
  <div
    className={cn(s.range, { [s.dark]: dark })}
    data-range=""
    ref={range}
  >
    <button
      className={cn(s.drag, { [s.active]: isDrag })}
      ref={button}
      data-drag=""
      onMouseDown={onMouseDown}
      onMouseUp={onMouseUp}
      onMouseMove={onMouseMove}
      style={{ left: value }}
    />
  </div>
));
