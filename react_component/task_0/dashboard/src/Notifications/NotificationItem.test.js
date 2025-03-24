import React from 'react'
import { shallow } from 'enzyme'
import NotificationItem from './NotificationItem.js'

describe('NotificationItem Component', () => {
    it('renders without crashing', () => {
        shallow(<NotificationItem />)
    })

    it('renders correct html with type and value props', () => {
        const wrapper = shallow(<NotificationItem type="default" value="test" />)
        const renderedHtml = wrapper.html()
        expect(renderedHtml).toEqual(
            '<li data-notification-type="default">test</li>'
        )
    })

    it('renders correct html with html prop', () => {
        const htmlProp = { __html: '<p>test</p>' }
        const wrapper = shallow(<NotificationItem html={htmlProp} />)
        expect(wrapper.props().dangerouslySetInnerHTML).toEqual(htmlProp)
    })
})
