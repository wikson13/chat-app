export const FETCH_ROOMS_SUCCESS = 'FETCH_ROOMS_SUCCESS';
export const SET_ACTIVE_ROOM = 'SET_ACTIVE_ROOM';

export const fetchRoomsSuccess = data => ({
    type: FETCH_ROOMS_SUCCESS,
    payload: data
});

