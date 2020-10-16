import { LOGIN_START, LOGIN_SUCCESS, ADD_BUBBLES_START, ADD_BUBBLES_SUCCESS, GET_BUBBLES_START, GET_BUBBLES_SUCCESS } from "../actions";

const initialState = {
    loggingIn: false,
    fetchingBubbles: false,
    error: null,
    bubbles: [],
    addingBubble: false,
    loggedIn: false
};

function reducer(state = initialState, action){
    switch(action.type){
        case LOGIN_START:
            return({
                ...state,
                loggingIn: true,
                error: '',
                loggedIn: false
            })
        case LOGIN_SUCCESS:
            return({
                ...state,
                loggingIn: false,
                error: '',
                loggedIn: true
            })
        case GET_BUBBLES_START:
            return({
                ...state,
                fetchingBubbles: true,
                error: null,
                loggingIn: false
            })
        case GET_BUBBLES_SUCCESS:
            return({
                ...state,
                fetchingBubbles: false,
                error: null,
                bubbles: action.payload
            })
        case ADD_BUBBLES_START:
            return({
                ...state,
                addingBubble: true,
            })
        case ADD_BUBBLES_SUCCESS:
            return({
                ...state,
                addingBubble: false,
                bubbles: action.payload
            })
        default:
        return{
            ...state
        };
    };
};

export default reducer;