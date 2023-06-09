import { render } from '@testing-library/react';

import Button from './index';

describe('Button', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <Button variant={'primary'} label={'Button'} status={'active'} />
    );
    expect(baseElement).toBeTruthy();
  });
});
