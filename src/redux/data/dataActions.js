export const FETCH_DATA_REQUEST = 'FETCH_DATA_REQUEST';
export const FETCH_DATA_START = 'FETCH_DATA_START';
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
export const FETCH_DATA_FAILED = 'FETCH_DATA_FAILED';

export const ADD_ITEM = 'ADD_ITEM';
export const DELETE_ITEM='DELETE_ITEM';

export const fetcbDataRequest = () => ({
    type: FETCH_DATA_REQUEST
});

export const fetchDataStart = () => ({
    type: FETCH_DATA_START
});

export const fetchDataSuccess = data => ({
    type: FETCH_DATA_SUCCESS,
    payload: data
});

export const fetchDataFailed = err => ({
    type: FETCH_DATA_FAILED,
    payload: err
});

export const addItem = item => ({
    type: ADD_ITEM,
    payload: item
});

export const deleteItem=item=>({
    type:DELETE_ITEM,
    payload:item
});
