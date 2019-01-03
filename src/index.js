import configureStore from './store'

// Monitoring
import {
    monitoring,
    getMonitoringIsAlive,
    monitoringIsAliveSelector,
    getMonitoringIsAliveStateSelector
} from 'monitoring-redux-component'

module.exports = {
    configureStore,

    // reducer
    monitoring,
    // action
    getMonitoringIsAlive,
    // selectors
    monitoringIsAliveSelector,
    getMonitoringIsAliveStateSelector
}
