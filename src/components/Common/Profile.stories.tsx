import React from 'react';
import Profile, { ProfileProps } from './Profile';
import { Story } from '@storybook/react';
export default {
    title: 'Components/Profile',
    component: Profile,
};
const Templete: Story<ProfileProps> = args => <Profile {...args} />;
export const Default = Templete.bind({});
