'use strict';

var _store = require('./store');

var _store2 = _interopRequireDefault(_store);

var _monitoringReduxComponent = require('monitoring-redux-component');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = {
    configureStore: _store2.default,

    // reducer
    monitoring: _monitoringReduxComponent.monitoring,
    // action
    getMonitoringIsAlive: _monitoringReduxComponent.getMonitoringIsAlive,
    // selectors
    monitoringIsAliveSelector: _monitoringReduxComponent.monitoringIsAliveSelector,
    getMonitoringIsAliveStateSelector: _monitoringReduxComponent.getMonitoringIsAliveStateSelector
};

// Monitoring