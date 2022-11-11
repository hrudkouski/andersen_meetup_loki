import React from 'react';
import {WelcomePage} from "./WelcomePage";

export default {
  title: 'pages/WelcomePage',
  component: WelcomePage,
  argTypes: {
    backgroundColor: {control: 'color'},
  },
};

const Template = (args) => (
  <div style={{
    textAlign: 'center',
    backgroundColor: '#282c34',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 'calc(10px + 2vmin)',
    color: 'white',
    fontFamily: 'consolas, "Times New Roman", serif',
  }}>
    <WelcomePage {...args} />
  </div>
);

export const WelcomePageExample = Template.bind({});
WelcomePageExample.args = {
  children: 'WelcomePageExample',
};
