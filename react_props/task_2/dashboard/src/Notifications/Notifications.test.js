import React from 'react'
import { shallow } from 'enzyme'
import Notifications from './Notifications'
import NotificationItem from './NotificationItem'

describe('Notifications Component', () => {
    it('renders without crashing', () => {
        shallow(<Notifications />)
    })

    it('renders three NotificationItem components', () => {
        const wrapper = shallow(<Notifications />)
        expect(wrapper.find(NotificationItem)).toHaveLength(3)
    })

    it('renders the correct HTML for the first NotificationItem', () => {
        const wrapper = shallow(<Notifications />)
        expect(wrapper.find(NotificationItem).first().html()).toContain(
            'New course available'
        )
    })
})