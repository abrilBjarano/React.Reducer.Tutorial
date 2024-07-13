import { useReducer } from "react";

const todoReducer = ( state = initialState, action = {} ) => {
   switch( action.type ){
      case 'Add todo':
         return [ ...state, action.payload ];

      default:
         return state;
   }
};

const initialState = [{
   id: 1,
   todo: 'Tomar agua',
   done: false
}]

export const IntroUseReducer = () => {

   const [ todos, dispatch ] = useReducer( todoReducer, initialState );

   const newTodo = {
      id: 2,
      todo: 'Ir a caminar',
      done: false
   }

   const addTodo = () => {
      dispatch({
         type: 'Add todo',
         payload: newTodo
      })
   };

   return (
      <>
         <h1>IntroUseReducer</h1>

         <ul>
            { todos.map(( todo => 
                  <li key={ todo.todo }>{ todo.todo }</li>
            ))}
         </ul>

         <button 
            onClick={ addTodo }
            className="btn btn-primary">
            Agregar
         </button>
      </>
   )
}
