import * as actions from './roomsActions';

const initialState = {
    roomList: [],
    activeRoom: [],
    err: null
};
const roomsReducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.FETCH_ROOMS_SUCCESS:
            return {
                ...state,
                roomList: action.payload,
                err: null
            };
        default:
            return state;
    }
};

export default roomsReducer;
