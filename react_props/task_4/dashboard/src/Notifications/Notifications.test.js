import React from 'react'
import { shallow } from 'enzyme'
import Notifications from './Notifications'
import NotificationItem from './NotificationItem'

describe('Notifications Component', () => {
    it('renders without crashing', () => {
        shallow(<Notifications />)
    })

    it('renders the text "Here is the list of notifications"', () => {
        const wrapper = shallow(<Notifications displayDrawer={true} />)
        expect(wrapper.contains(<p>Here is the list of notifications</p>)).toBe(
            true
        )
    })

    it('renders the first NotificationItem item with the right type and value', () => {
        const wrapper = shallow(<Notifications displayDrawer={true} />)
        const firstItem = wrapper.find('NotificationItem').first()
        expect(firstItem.props().type).toBe('default')
        expect(firstItem.props().value).toBe('New course available')
    })

    it('renders the menu item when displayDrawer is false', () => {
        const wrapper = shallow(<Notifications displayDrawer={false} />)
        expect(wrapper.find('.menuItem').exists()).toBe(true)
    })

    it('does not render div.Notifications when displayDrawer is false', () => {
        const wrapper = shallow(<Notifications displayDrawer={false} />)
        expect(wrapper.find('.Notifications').exists()).toBe(false)
    })

    it('renders the menu item when displayDrawer is true', () => {
        const wrapper = shallow(<Notifications displayDrawer={true} />)
        expect(wrapper.find('.menuItem').exists()).toBe(true)
    })

    it('renders div.Notifications when displayDrawer is true', () => {
        const wrapper = shallow(<Notifications displayDrawer={true} />)
        expect(wrapper.find('.Notifications').exists()).toBe(true)
    })
})