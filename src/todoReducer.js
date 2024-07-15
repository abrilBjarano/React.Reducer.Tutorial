export const todoReducer = ( initialState, action ) => {
   
   switch( action.type ){
      case 'Add todo':
         return [ ...initialState, action.payload ];

      case 'Delete todo':
         return initialState.filter( todo => todo.id !== action.payload );

      case 'Toggle todo':
         return initialState.map( todo => 
            (todo.id === action.payload)
            ? { ...todo, done: !todo.done }
            : todo 
         );
      
      default:
         return initialState;
   }

};