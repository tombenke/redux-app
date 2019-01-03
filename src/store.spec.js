import expect from 'expect'
import configureStore from './store'

describe('store', () => {
    beforeEach(() => {})

    afterEach(() => {})

    it('getStore()', () => {
        const initialState = configureStore().getState()
        expect(initialState).toIncludeKey('monitoring')
    })
})
