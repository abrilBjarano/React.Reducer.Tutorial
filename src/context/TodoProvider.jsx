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

   return (
      <TodoContext.Provider 
         value={{ 
            todos, 
            dispatch, 
         }}
      >
         { children }
      </TodoContext.Provider>
   )
}
