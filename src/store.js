import { createStore, applyMiddleware, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'
import { monitoring } from 'monitoring-redux-component'

export default function configureStore(initialState) {
    const rootReducer = combineReducers({
        monitoring
    })
    /*
    const logger = store => next => action => {
        console.log('redux-store:dispatching >> ', action)
        let result = next(action)
        console.log('redux-store:nextState >> ', store.getState())
        return result
    }
    */

    const middlewares = [thunkMiddleware /*, logger*/]

    /*
    if (process.env.NODE_ENV === 'development') {
        const { createLogger } = require('redux-logger')

        const logger = createLogger({
            collapsed: true,
            predicate: (getState, action) => true
        })

        middlewares.push(logger)
    }
    */

    const store = createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware(...middlewares)))

    return store
}
