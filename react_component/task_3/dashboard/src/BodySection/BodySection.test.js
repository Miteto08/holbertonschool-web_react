import React from 'react'
import { shallow } from 'enzyme'
import BodySection from './BodySection'

describe('BodySection Component', () => {
    it('renders without crashing', () => {
        shallow(<BodySection title="test title" />)
    })

    it('renders the title and children correctly', () => {
        const wrapper = shallow(
            <BodySection title="test title">
                <p>test children node</p>
            </BodySection>
        )

        expect(wrapper.find('h2').text()).toBe('test title')
        expect(wrapper.find('p').text()).toBe('test children node')
    })

    it('renders with the correct CSS class', () => {
        const wrapper = shallow(<BodySection title="test title" />)
        expect(wrapper.find('.bodySection').exists()).toBe(true)
    })

    it('renders children when provided', () => {
        const wrapper = shallow(
            <BodySection title="test title">
                <div className="test-child">test children</div>
            </BodySection>
        )
        expect(wrapper.find('.test-child').text()).toBe('test children')
    })

    it('renders without children when none provided', () => {
        const wrapper = shallow(<BodySection title="test title" />)
        expect(wrapper.find('div.bodySection').children().length).toBe(1)
    })
})
