import React from 'react'
import { shallow } from 'enzyme'
import { ExpensesSummary } from '../../components/ExpensesSummary'

test('should render ExpensesSummary with one expense correctly', () => {
    const wrapper = shallow(<ExpensesSummary expenseCount={1} expensesTotal={235} />)
    expect(wrapper).toMatchSnapshot()
})

test('should render ExpensesSummary with multiple expenses correctly', () => {
    const wrapper = shallow(<ExpensesSummary expenseCount={14} expensesTotal={223945} />)
    expect(wrapper).toMatchSnapshot()
})