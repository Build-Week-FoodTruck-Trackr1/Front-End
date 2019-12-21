import { USER_REGISTER_START, USER_REGISTER_SUCCESS, USER_REGISTER_FAIL} from '../actions'

export const intitialState = {
    diner: {}, 

    operator: {},

    options: [
        { key: 'd', text: 'Diner', value: 'diner' },
        { key: 'o', text: 'Operator', value: 'operator' },
      ],
    
    isLoading: false,
    error: ''
}

export const reducer = (state = intitialState, action) => {
    switch(action.type) {
        case USER_REGISTER_START:
            return {
                ...state, 
                isLoading: true
            }
        case USER_REGISTER_SUCCESS:
            localStorage.setItem('token', action.payload.token)
            return action.payload.newUser.hasOwnProperty('favoriteTrucks') ?
            {
                ...state,
                diner: {
                    ...action.payload.newUser,
                    message: action.payload.message
                }
            } :
            {
                ...state,
                operator: action.payload
            }
        default: 
            return state
    }
}

