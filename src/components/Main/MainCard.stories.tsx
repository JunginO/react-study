import React from 'react';
import MainCard, { CardProps } from './MainCard';
import { Story } from '@storybook/react';
export default {
    title: 'MainCard',
    component: MainCard,
};
const Templete: Story<CardProps> = args => <MainCard {...args} />;
export const Default = Templete.bind({});
