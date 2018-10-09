const redux         = require('redux');
const createStore   = redux.createStore;

const initialState  = {
    counter: 0
}

// reducer
const reducer = (state = initialState, action) => {
    if (action.type === 'INC_COUNTER') {
        return {
            ...state,
            counter: state.counter + 1
        }
    }
    if (action.type === 'ADD_COUNTER') {
        return {
            ...state,
            counter: state.counter + action.value
        }
    }
    return state
}

// store
const store = createStore(reducer)
console.log(store.getState())

// subscription
store.subscribe(() => {
    console.log('[Store triggers subscriptions]', store.getState())
})

// dispatch actions
store.dispatch({type: 'INC_COUNTER'})
store.dispatch({type: 'ADD_COUNTER', value: 5})
console.log(store.getState())
