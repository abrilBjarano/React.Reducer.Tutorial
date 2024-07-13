export const todoReducer = ( initialState, action ) => {
   
   switch( action.type ){
      case 'Add todo':
         return [ ...initialState, action.payload ];
      
      default:
         return initialState;
   }

};