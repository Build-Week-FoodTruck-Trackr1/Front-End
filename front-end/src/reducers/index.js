import { USER_REGISTER_START, 
        USER_REGISTER_SUCCESS, 
        USER_REGISTER_FAIL, 
        USER_LOGIN_START, 
        USER_LOGIN_SUCCESS,
        OPERATOR_ADD_TRUCKS_SUCCESS,
        OPERATOR_ADD_TRUCKS_FAIL
    } from '../actions'

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
        case USER_LOGIN_START:
            return {
                ...state, 
                isLoading: true
            }
        case USER_REGISTER_SUCCESS:
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
        case USER_LOGIN_SUCCESS:
            return action.payload.type === 'diner' ?
            {
                ...state,
                diner: {
                    ...action.payload,
                    message: action.payload.message
                }
            } :
            {
                ...state,
                operator: action.payload
            }
        case OPERATOR_ADD_TRUCKS_SUCCESS:
            return{
                ...state,
                operator: {
                    trucks: action.payload
                }
            }
        case OPERATOR_ADD_TRUCKS_FAIL:
            return{
                ...state,
                operator: {
                    message: action.payload
                }
            }
        default: 
            return state
    }
}

