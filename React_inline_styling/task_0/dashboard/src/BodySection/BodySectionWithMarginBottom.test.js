import React from 'react'
import { shallow } from 'enzyme'
import BodySectionWithMarginBottom from './BodySectionWithMarginBottom'
import BodySection from './BodySection'

describe('BodySectionWithMarginBottom Component', () => {
  it('should render correctly and pass props to BodySection', () => {
    const wrapper = shallow(
      <BodySectionWithMarginBottom title="test title">
        <p>test children node</p>
      </BodySectionWithMarginBottom>
    )

    expect(wrapper.find(BodySection).length).toBe(1)

    expect(wrapper.find(BodySection).prop('title')).toBe('test title')

    expect(wrapper.find(BodySection).dive().find('p').text()).toBe(
      'test children node'
    )

    expect(wrapper.find('div.bodySectionWithMargin').length).toBe(1)
  })
})
