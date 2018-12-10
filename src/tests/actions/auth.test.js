import { login, logout } from '../../actions/auth'

test('should setup login action object', () => {
    const action = login('asdfin')
    expect(action).toEqual({
        type: 'LOGIN',
        uid: 'asdfin'
    })
})

test('should setup logout action object', () => {
    const action = logout()
    expect(action).toEqual({
        type: 'LOGOUT'
    })
})