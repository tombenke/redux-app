import { createStore, applyMiddleware, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'
import {
    monitoring,
    getMonitoringIsAlive,
    monitoringIsAliveSelector,
    getMonitoringIsAliveStateSelector
} from 'monitoring-redux-component'


export default function configureStore(initialState) {
    const rootReducer = combineReducers({
        monitoring
    })
    const middlewares = [thunkMiddleware]

    if (process.env.NODE_ENV === 'development') {
        const { createLogger } = require('redux-logger')

        const logger = createLogger({
            collapsed: true,
            predicate: (getState, action) => action.type !== setCurrentTime().type
        })

        middlewares.push(logger)
    }

    const store = createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware(...middlewares)))

    console.log(store)
    return store
}
