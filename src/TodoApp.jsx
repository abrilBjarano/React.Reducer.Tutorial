import { useContext } from "react";

import { TodoAdd } from "./components/TodoAdd";
import { TodoList } from "./components/TodoList";
import { TodoContext } from "./context/TodoContext";
import { TodoProvider } from "./context/TodoProvider";

export const TodoApp = () => {

   const { todos, dispatch } = useContext( TodoContext );

   return (
      <>
         <h1>TodoApp</h1>
         <hr />

         <TodoAdd dispatch={ dispatch }/>
         
         <TodoList todos={ todos }/>
         
      </>
   )
}
