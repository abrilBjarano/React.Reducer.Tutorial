import { useReducer } from "react";

const initialState = [{
   id: 1,
   todo: 'Doblar ropa',
   done: false
}];

const todoReducer = ( state = initialState, action ) => {
   switch( action.type ) {
      case 'Add todo':
         return [ ...state, action.payload ];

      default:
         return state;
   }
};


export const IntroUszeReducer = () => {

   const [ todos, dispatch ] = useReducer( todoReducer, initialState );

   const newTodo = {
      id: 2,
      todo: 'Salir a caminar',
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
         <h1>Todo List</h1>
         <ul>
            { todos.map(todo => (
               <li key={todo.id}>{todo.todo}</li>
            ))}
         </ul>

         <button
            onClick={ addTodo }
            className="btn btn-primary">
            Agregar todo
         </button>
      </>
   )
}
