import authReducer from '../../reducers/auth'

test('should set uid on login', () => {
    const state = authReducer(undefined, { type: 'LOGIN', uid: 'abd44' })
    expect(state.uid).toEqual('abd44')
})

test('should clear uid on logout', () => {
    const state = authReducer({ uid: 'asdf334'}, { type: 'LOGOUT' })
    expect(state).toEqual({})
})