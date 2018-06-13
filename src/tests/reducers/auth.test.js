import authReducer from '../../reducers/auth';


test('should set uid for login', () => {
    const action = {
        type: 'LOGIN',
        uid: '1'
    }
    const state = authReducer({}, action)
    expect(state.uid).toBe(action.uid)
})

test('should set uid for logout', () => {
    const action = {
        type: 'LOGOUT'
    }
    const state = authReducer({uid: 'ajhqwe'}, action);
    expect(state).toEqual({});
})


test('should set default state', () => {
    const state = authReducer(undefined, {type: '@@INIT'});
    expect(state).toEqual({});
})
