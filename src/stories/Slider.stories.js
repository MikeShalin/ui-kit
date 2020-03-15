import React from 'react';
import { withKnobs, number, boolean } from '@storybook/addon-knobs';

import {
  SimpleSlider as SimpleSliderUI,
  RangeSlider as RangeSliderUI,
} from '../Slider';
import 'ui-kit-local/dist/index.css';

export default {
  title: 'Slider',
  decorators: [withKnobs],
};

export const SimpleSlider = () => (
  <div style={{ marginTop: 30, marginLeft: 50, width: 100}}>
    <SimpleSliderUI
      value={number('value', 10)}
      dark={boolean('dark style', true)}
    />
  </div>
);

export const SimpleWithRange = () => (
  <div style={{ marginTop: 30, marginLeft: 50, width: 819}}>
    <RangeSliderUI
      value={number('value', 0)}
      dark={boolean('dark style', true)}
      maxRange={number('max', 100)}
    />
  </div>
);
