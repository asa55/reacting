import React from 'react';
import ProfileCard from './ProfileCard';

export default {
  title: 'ProfileCard',
  component: ProfileCard,
};

const Template = (args) => <ProfileCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  name: 'John Doe',
  bio: 'Software Engineer with a passion for making the web more accessible.',
  picture: 'https://via.placeholder.com/150',
};
