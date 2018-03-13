export default function( state = null, action) {

    switch(action.type) {
        case 'USER_AUTHENTICATED' : 
            let _state = action.payload;
            console.info('REDUCER :: USER_AUTHENTICATED')
            return _state;
        default:
            return state;
    }

}