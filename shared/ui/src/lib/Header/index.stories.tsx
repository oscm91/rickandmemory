import type { Meta } from '@storybook/react';
import Header from './index';

const Story: Meta<typeof Header> = {
  component: Header,
  title: 'Components/Header',
  argTypes: { onClick: { action: 'clicked' } },
};
export default Story;

export const example = {
  args: {
  },
};
