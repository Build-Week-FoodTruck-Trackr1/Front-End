export const intitialState = {
    diner: {
        username: '',
        password: '',
        currentLocation: '',
        favoriteTrucks: []
    }, 

    operator: {
        username: '',
        password: '',
        trucksOwned: []
    }
}

export const reducer = (state = intitialState, action) => {
    switch(action.type) {
        default: 
            return state
    }
}

