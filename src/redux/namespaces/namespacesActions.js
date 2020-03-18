export const FETCH_NAMESPACES_SUCCESS = 'FETCH_NAMESPACES_SUCCESS';
export const FETCH_NAMESPACES_FAILED = 'FETCH_NAMESPACES_FAILED';
export const SET_ACTIVE_NAMESPACE = 'SET_ACTIVE_NAMESPACE';
export const fetchNamespacesSuccess = data => ({
    type: FETCH_NAMESPACES_SUCCESS,
    payload: data
});

export const fetchNamespacesFailed = err => ({
    type: FETCH_NAMESPACES_FAILED,
    payload: err
});

export const setActiveNamespace = id => ({
    type: SET_ACTIVE_NAMESPACE,
    payload: id
});
