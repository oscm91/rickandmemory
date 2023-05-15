import { render } from '@testing-library/react';

import Card from './index';

describe('Card', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Card label={'Button'} status={'active'} />);
    expect(baseElement).toBeTruthy();
  });
});
