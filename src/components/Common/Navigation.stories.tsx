import React from 'react';
import Navigation from './Navigation';
import { Story } from '@storybook/react';
export default {
    title: 'Components/Navigation',
    component: Navigation,
};
const Templete: Story = args => <Navigation {...args} />;
export const Default = Templete.bind({});
