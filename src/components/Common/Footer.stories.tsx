import React from 'react';
import Footer from './Footer';
import { Story } from '@storybook/react';
export default {
    title: 'Components/Footer',
    component: Footer,
};
const Templete: Story = args => <Footer {...args} />;
export const Default = Templete.bind({});
