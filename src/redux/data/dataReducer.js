import * as dataActions from './dataActions';
const initialState={
    data:{
        colors:{},
        sizes:{},
        suppliers:{},
        models:{}
    },
    loading:false,
    error:null
};


const dataReducer=(state=initialState,action)=>{
    switch(action.type){
        case dataActions.FETCH_DATA_START:
            return {
                ...state,
                data:initialState.data,
                loading:true,
                error: null
            };
        case dataActions.FETCH_DATA_SUCCESS:
            return {
                ...state,
                data:action.payload,
                loading:false
            };
        case dataActions.FETCH_DATA_FAILED:
            return {
                ...state,
                error:action.payload,
                loading:false
            };
        default:return state
    }
};

export default dataReducer;
