import expensesReducer from '../../reducers/expenses'
import expenses from '../fixtures/expenses'

test('should set default state', () => {
    const state = expensesReducer(undefined, { type: '@@INIT' })
    expect(state).toEqual([])
})

test('should remove expense by id', () => {
    const state = expensesReducer(expenses, { type: 'REMOVE_EXPENSE', id: expenses[1].id })
    expect(state).toEqual([expenses[0], expenses[2]])
})

test('should not remove expenses if id not found', () => {
    const state = expensesReducer(expenses, { type: 'REMOVE_EXPENSE', id: '-1' })
    expect(state).toEqual(expenses)
})

test('should add expense', () => {
    const newExpense = {
        id: '4',
        description: 'Add Test',
        note: '',
        amount: 500,
        createdAt: -200
    }
    const state = expensesReducer(expenses, { type: 'ADD_EXPENSE', expense: newExpense })
    expect(state).toEqual([...expenses, newExpense])
})

test('should edit expense with matching id', () => {
    const updatedExpense = {
        ...expenses[2],
        note: 'new note'
    }
    const state = expensesReducer(expenses, { type: 'EDIT_EXPENSE', id: updatedExpense.id })
    expect(state).toEqual([expenses[0], expenses[1], updatedExpense])
})

test('should not edit expense if expense not found', () => {
    const state = expensesReducer(expenses, { type: 'EDIT_EXPENSE', id: '-1' })
    expect(state).toEqual(expenses)
})