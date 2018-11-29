import { createStore } from 'redux'

// action generators - functions that return action objects

// destructure object provided by function call, set empty object as default if no params passed
const incrementCount = ({ incrementBy = 1 } = {}) => ({
    type: 'INCREMENT',
    incrementBy
})

const decrementCount = ({ decrementBy = 1 } = {}) => ({
    type: 'DECREMENT',
    decrementBy
})

const setCount = ({ count } = {}) => ({
    type: 'SET',
    count
})

const resetCount = () => ({
    type: 'RESET'
})

// Reducers specify how the app state changes in response to an action
// 1. Reducers are PURE functions (output only determined by input - doesn't use or change anything outside of the function scope)
// 2. Never change state or action

const countReducer = (state = { count: 0 }, action) => {
    switch (action.type) {
        case 'INCREMENT': 
            return {
                count: state.count + action.incrementBy
            }
        case 'DECREMENT':
            return {
                count: state.count - action.decrementBy
            }
        case 'SET':
            return {
                count: action.count
            }
        case 'RESET':
            return {
                count: 0
            }
        default:
            return state
    }
}

// set default state object in function params
const store = createStore(countReducer)

// Return value of store.subscribe is a function that can be used to unsubscribe
// const unsubscribe = 
store.subscribe(() => {
    console.log(store.getState())
});

// Actions are objects that get sent to the store
// All caps naming convention - NAME_MORE
// Increment the count:
// store.dispatch({
//     type: 'INCREMENT',
//     incrementBy: 5
// })

store.dispatch(incrementCount({ incrementBy: 5 }))

// unsubscribe()

store.dispatch(incrementCount())

store.dispatch(resetCount())

store.dispatch(decrementCount())

store.dispatch(decrementCount({ decrementBy: 10 }))

store.dispatch(setCount({ count: 101 }))