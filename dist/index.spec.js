'use strict';

var _expect = require('expect');

var _expect2 = _interopRequireDefault(_expect);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _index = require('./index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('index', function () {
    it('state/index', function () {
        (0, _expect2.default)(_lodash2.default.filter(_lodash2.default.values(_index2.default), function (m) {
            return _lodash2.default.isNull(m) || _lodash2.default.isUndefined(m) || !_lodash2.default.isFunction(m);
        })).toEqual([]);
    });
});