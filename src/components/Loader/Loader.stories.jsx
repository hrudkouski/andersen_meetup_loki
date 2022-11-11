import React from 'react';
import {Loader} from "./Loader";

export default {
  title: 'components/Loader',
  component: Loader,
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
    <Loader {...args} />
  </div>
);

export const LoaderExample = Template.bind({});
LoaderExample.args = {
  children: 'LoaderExample',
};
