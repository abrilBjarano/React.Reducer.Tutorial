import { useReducer } from "react";
import { todoReducer } from "./todoReducer";

import { TodoAdd } from "./components/TodoAdd";
import { TodoList } from "./components/TodoList";

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

export const TodoApp = () => {

   const [ todos, dispatch ] = useReducer( todoReducer, initialState );

   return (
      <>
         <h1>TodoApp</h1>
         <hr />

         <TodoAdd dispatch={ dispatch }/>
         
         <TodoList todos={ todos }/>
         
      </>
   )
}
