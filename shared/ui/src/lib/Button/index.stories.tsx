import type { Meta } from '@storybook/react';
import Button from './index';

const Story: Meta<typeof Button> = {
  component: Button,
  title: 'Components/Button',
  argTypes: { onClick: { action: 'clicked' } },
};
export default Story;

export const example = {
  args: {
    label: 'Button'
  },
};
