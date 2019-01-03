'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = configureStore;

var _redux = require('redux');

var _reduxDevtoolsExtension = require('redux-devtools-extension');

var _reduxThunk = require('redux-thunk');

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _monitoringReduxComponent = require('monitoring-redux-component');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function configureStore(initialState) {
    var rootReducer = (0, _redux.combineReducers)({
        monitoring: _monitoringReduxComponent.monitoring
    });
    var middlewares = [_reduxThunk2.default];

    if (process.env.NODE_ENV === 'development') {
        var _require = require('redux-logger'),
            createLogger = _require.createLogger;

        var logger = createLogger({
            collapsed: true,
            predicate: function predicate(getState, action) {
                return true;
            }
        });

        middlewares.push(logger);
    }

    var store = (0, _redux.createStore)(rootReducer, initialState, (0, _reduxDevtoolsExtension.composeWithDevTools)(_redux.applyMiddleware.apply(undefined, middlewares)));

    console.log(store);
    return store;
}