import { useContext } from "react"
import { TodoContext } from "../context/TodoContext"

export const TodoList = () => {

   const { todos, deleteTodo, toggleTodo } = useContext( TodoContext );


   const onButtonClick = ( todo ) => {
      deleteTodo( todo.id );
   };

   const onToggleTodo = ( todo ) => {
      toggleTodo( todo.id );
   };

   return (
      <ul className="list-group">
         { todos.map( todo => (
            <li 
               onClick={ () => onToggleTodo( todo ) }
               key={ todo.id }
               className="list-group-item d-flex justify-content-between align-items-center">

                  { 
                     ( todo.done )
                     ? todo.description
                     : <del>{ todo.description }</del>
                  }

               <button
                  onClick={ () => onButtonClick( todo ) } 
                  className="btn btn-danger">
                  X
               </button>
            </li>
         ))}
      </ul>
   )
}
