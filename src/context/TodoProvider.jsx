import { useEffect, useReducer } from "react";
import { todoReducer } from "../todoReducer";
import { TodoContext } from "./TodoContext";


const initialState = [
   {
      id: new Date().getTime() * 3,
      description: 'Salir a caminar',
      done: false,
   },
   {
      id: new Date().getTime() * 2,
      description: 'Ir a la facu',
      done: false,
   }
]


const init = () => {
   return JSON.parse( localStorage.getItem('todos')) || initialState;
};

export const TodoProvider = ({ children }) => {

   const [ todos, dispatch ] = useReducer( todoReducer, initialState, init );


   useEffect(() => {
      localStorage.setItem('todos', JSON.stringify( todos ));
   }, [ todos ]);


   const addTodo = ( newValue ) => {
      dispatch({
         type: 'Add todo',
         payload: newValue
      })
   };

   const deleteTodo = ( id ) => {
      dispatch({
         type: 'Delete todo',
         payload: id
      })
   };


   return (
      <TodoContext.Provider 
         value={{ 
            todos, 
            dispatch,
            addTodo,
            deleteTodo 
         }}
      >
         { children }
      </TodoContext.Provider>
   )
}
