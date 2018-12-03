import React from 'react'
import ConnectedExpenseList from './ExpenseList'
import ExpenseListFilters from './ExpenseListFilters'
import ConnectedExpensesSummary from './ExpensesSummary'

const ExpenseDashboardPage = () => (
    <div>
        <ConnectedExpensesSummary />
        <ExpenseListFilters />
        <ConnectedExpenseList />
    </div>
)

export default ExpenseDashboardPage