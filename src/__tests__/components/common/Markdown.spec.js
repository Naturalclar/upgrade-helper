import React from 'react'
import { render } from '@testing-library/react'
import Markdown from '../../../components/common/Markdown'

it('renders without crashing', () => {
  const { container } = render(
    <Markdown forceBlock={false}># Hello world!</Markdown>
  )

  expect(container).toMatchSnapshot()
})
