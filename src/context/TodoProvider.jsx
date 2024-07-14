import { useReducer } from "react";
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

export const TodoProvider = ({ children }) => {

   const [ todos, dispatch ] = useReducer( todoReducer, initialState );

   const addTodo = ( newValue ) => {
      dispatch({
         type: 'Add todo',
         payload: newValue
      })
   };

   return (
      <TodoContext.Provider 
         value={{ 
            todos, 
            dispatch,
            addTodo, 
         }}
      >
         { children }
      </TodoContext.Provider>
   )
}
