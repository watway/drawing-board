import { render } from '@redwoodjs/testing/web'

import CapturePage from './CapturePage'

describe('CapturePage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<CapturePage />)
    }).not.toThrow()
  })
})
