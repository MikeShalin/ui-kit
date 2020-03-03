import React from 'react';
import { withKnobs, text, boolean, array } from '@storybook/addon-knobs';

import { SimpleDropdown } from 'ui-kit-local';
import 'ui-kit-local/dist/index.css';

export default {
  title: 'Dropdown',
  decorators: [withKnobs],
};

export const Dropdown = () => (
  <SimpleDropdown
    value={text('initialValue', 'lol')}
    options={array('options', ['lol1', 'lol', '2lol'])}
    disabledOption={array('disabledOption', ['lol1'])}
    onChange={console.log}
    search={boolean('withSearch', false)}
    dark={boolean('darkTheme', false)}
    top={boolean('topDirection', false)}
  />
);
