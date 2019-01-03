import expect from 'expect'
import _ from 'lodash'
import index from './index'

describe('index', () => {
    it('state/index', () => {
        expect(_.filter(_.values(index), m => _.isNull(m) || _.isUndefined(m) || !_.isFunction(m))).toEqual([])
    })
})
