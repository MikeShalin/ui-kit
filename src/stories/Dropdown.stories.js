import React from 'react';
import { withKnobs, text, boolean, array } from '@storybook/addon-knobs';

import DropdownUI from '../Dropdown/SelectElement';

export default {
  title: 'Dropdown',
  decorators: [withKnobs],
};

export const Dropdown = () => (
  <DropdownUI
    value={text('initialValue', 'lol')}
    options={array('options', ['lol1', 'lol', '2lol'])}
    disabledOption={array('disabledOption', ['lol1'])}
    onChange={console.log}
    search={boolean('withSearch', false)}
    dark={boolean('darkTheme', false)}
    top={boolean('topDirection', false)}
  />
);
