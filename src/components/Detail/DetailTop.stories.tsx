import React from 'react';
import DetailTop from './DetailTop';
import { Story } from '@storybook/react';
export default {
    title: 'DetailTop',
    component: DetailTop,
};
const Templete: Story = args => <DetailTop {...args} />;
export const Default = Templete.bind({});
