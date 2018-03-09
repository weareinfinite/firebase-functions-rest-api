export default function(state = {user: null}, action) {

    switch(action.type) {
        case 'AUTH_USER' : 
            let _state = {...state, user: action.payload }
            console.info('REDUCER :: AUTH_USER')
            return _state;
        default:
            return state;
    }

    
}