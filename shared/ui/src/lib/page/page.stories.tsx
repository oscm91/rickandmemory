import type { Meta } from '@storybook/react';
import Page from './page';

const Story: Meta<typeof Page> = {
  component: Page,
  title: 'Components/Page',
  argTypes: { onClick: { action: 'clicked' } },
};
export default Story;

export const example = {
  args: {},
};
