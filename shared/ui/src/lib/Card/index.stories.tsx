import type { Meta } from '@storybook/react';
import Card from './index';

const Story: Meta<typeof Card> = {
  component: Card,
  title: 'Components/Card',
  argTypes: { onClick: { action: 'clicked' } },
};
export default Story;

export const example = {
  args: {
    image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
    selected: true,
    value: '0'
  },
};
