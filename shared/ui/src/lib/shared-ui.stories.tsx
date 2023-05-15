import type { Meta } from '@storybook/react';
import { SharedUi } from './shared-ui';

const Story: Meta<typeof SharedUi> = {
  component: SharedUi,
  title: 'SharedUi',
};
export default Story;

export const Primary = {
  args: {},
};
