import React from 'react';
import {Button, ButtonVariant} from './Button';

export default {
  title: 'components/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => (
  <div style={{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#282c34'
  }}
  >
    <Button {...args} />
  </div>
);

export const OUTLINE = Template.bind({});
OUTLINE.args = {
  children: 'OUTLINE Button',
  variant: ButtonVariant.OUTLINE,
};

export const CLEAR = Template.bind({});
CLEAR.args = {
  children: 'CLEAR Button',
  variant: ButtonVariant.CLEAR,
};

export const BACKGROUND = Template.bind({});
BACKGROUND.args = {
  children: 'BACKGROUND Button',
  variant: ButtonVariant.BACKGROUND,
};