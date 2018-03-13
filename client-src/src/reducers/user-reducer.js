export default function( state = null, action) {

    switch(action.type) {
        case 'USER_AUTHENTICATED' : 
            let _state = action.payload;
            return _state;
        default:
            return state;
    }

}