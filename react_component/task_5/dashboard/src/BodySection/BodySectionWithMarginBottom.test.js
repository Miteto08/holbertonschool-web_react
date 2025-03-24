import React from 'react'
import { shallow } from 'enzyme'
import BodySectionWithMarginBottom from './BodySectionWithMarginBottom'
import BodySection from './BodySection'

describe('BodySectionWithMarginBottom Component', () => {
    it('renders without crashing', () => {
        shallow(<BodySectionWithMarginBottom title="test title" />)
    })

    it('renders BodySection component with correct props', () => {
        const wrapper = shallow(
            <BodySectionWithMarginBottom title="test title">
                <p>test children node</p>
            </BodySectionWithMarginBottom>
        )

        const bodySection = wrapper.find(BodySection);
        expect(bodySection.exists()).toBe(true);
        expect(bodySection.props().title).toBe('test title');
        expect(bodySection.props().children).toEqual(<p>test children node</p>)
    })

    it('renders with the correct CSS class', () => {
        const wrapper = shallow(<BodySectionWithMarginBottom title="test title" />)
        expect(wrapper.find('.bodySectionWithMargin').exists()).toBe(true)
    })

    it('passes all props to BodySection component', () => {
        const wrapper = shallow(
            <BodySectionWithMarginBottom title="test title" className="test-class">
                <p>test children</p>
            </BodySectionWithMarginBottom>
        )

        const bodySection = wrapper.find(BodySection);
        expect(bodySection.props().title).toBe('test title')
        expect(bodySection.props().className).toBe('test-class')
        expect(bodySection.props().children).toEqual(<p>test children</p>)
    })

    it('renders without children when none provided', () => {
        const wrapper = shallow(<BodySectionWithMarginBottom title="test title" />)
        const bodySection = wrapper.find(BodySection)
        expect(bodySection.props().children).toBeUndefined()
    })
})
