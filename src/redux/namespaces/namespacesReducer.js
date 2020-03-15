import * as actions from './namespacesActions';

const initialState = {
   nsList: [],
   activeNS: []
};
const namespacesReducer = (state = initialState, action) => {
   switch (action.type) {
      default:
         return state;
   }
};

export default namespacesReducer;
