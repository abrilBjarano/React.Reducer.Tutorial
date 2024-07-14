
import { TodoAdd } from "./components/TodoAdd";
import { TodoList } from "./components/TodoList";

export const TodoApp = () => {

   return (
      <>
         <h1>TodoApp</h1>
         <hr />

         <TodoAdd/>
         <TodoList/>
      </>
   )
}
