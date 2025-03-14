import React from 'react'
import { shallow } from 'enzyme'
import CourseList from './CourseList'
import CourseListRow from './CourseListRow'

describe('CourseList Component', () => {
    it('renders CourseList component without crashing', () => {
        const wrapper = shallow(<CourseList />)
        expect(wrapper.exists()).toBe(true)
    })

    it('renders 5 different rows', () => {
        const wrapper = shallow(<CourseList />)
        const rows = wrapper.find(CourseListRow)
        expect(rows).toHaveLength(5)

        // Optional: Check the content of each row
        expect(rows.at(0).prop('textFirstCell')).toEqual('Available courses')
        expect(rows.at(0).prop('isHeader')).toBe(true)

        expect(rows.at(1).prop('textFirstCell')).toEqual('Course name')
        expect(rows.at(1).prop('textSecondCell')).toEqual('Credit')
        expect(rows.at(1).prop('isHeader')).toBe(true)

        expect(rows.at(2).prop('textFirstCell')).toEqual('ES6')
        expect(rows.at(2).prop('textSecondCell')).toEqual('60')
        expect(rows.at(2).prop('isHeader')).toBe(false)

        expect(rows.at(3).prop('textFirstCell')).toEqual('Webpack')
        expect(rows.at(3).prop('textSecondCell')).toEqual('20')
        expect(rows.at(3).prop('isHeader')).toBe(false)

        expect(rows.at(4).prop('textFirstCell')).toEqual('React')
        expect(rows.at(4).prop('textSecondCell')).toEqual('40')
        expect(rows.at(4).prop('isHeader')).toBe(false)
    })
})