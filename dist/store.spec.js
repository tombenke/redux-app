'use strict';

var _expect = require('expect');

var _expect2 = _interopRequireDefault(_expect);

var _store = require('./store');

var _store2 = _interopRequireDefault(_store);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('store', function () {
    beforeEach(function () {});

    afterEach(function () {});

    it('getStore()', function () {
        var initialState = (0, _store2.default)().getState();
        console.log(initialState);
        (0, _expect2.default)(initialState).toIncludeKey('monitoring');
    });
});