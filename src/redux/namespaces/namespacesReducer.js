import * as actions from './namespacesActions';

const initialState = {
    nsList: [],
    activeNS: [],
    err: null
};
const namespacesReducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.FETCH_NAMESPACES_SUCCESS:
            return {
                ...state,
                nsList: action.payload,
                err: null
            };
        case actions.FETCH_NAMESPACES_FAILED:
            return {
                ...state,
                nsList: [],
                err: action.payload
            };
        case actions.SET_ACTIVE_NAMESPACE:
            return {
                ...state,
                activeNS: action.payload
            };
        default:
            return state;
    }
};

export default namespacesReducer;
