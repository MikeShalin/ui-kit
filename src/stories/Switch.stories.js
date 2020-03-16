import React from 'react';
import { withKnobs, number, boolean } from '@storybook/addon-knobs';

import {
  Switch as SwitchUI,
} from '../Switch';
import 'ui-kit-local/dist/index.css';

export default {
  title: 'Switch',
  decorators: [withKnobs],
};

export const Switch = () => (
  <div style={{ marginTop: 30, marginLeft: 50, width: 100}}>
    <SwitchUI
      dark={boolean('dark style', true)}
      onToggle={console.log}
      id="switch"
    />
  </div>
);
