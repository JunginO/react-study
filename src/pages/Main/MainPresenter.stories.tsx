import React from 'react';
import MainPresenter from './MainPresenter';
import { Story } from '@storybook/react';
export default {
    title: 'MainPresenter',
    component: MainPresenter,
};
const Templete: Story = args => <MainPresenter {...args} />;
export const Default = Templete.bind({});
