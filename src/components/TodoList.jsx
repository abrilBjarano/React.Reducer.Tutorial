import { useContext } from "react"
import { TodoContext } from "../context/TodoContext"

export const TodoList = () => {

   const { todos, deleteTodo, toggleTodo } = useContext( TodoContext );


   return (
      <ul className="list-group">
         { todos.map( todo => (
            <li 
               onClick={ () => toggleTodo( todo.id ) }
               key={ todo.id }
               className="list-group-item d-flex justify-content-between align-items-center">

                  { 
                     ( todo.done )
                     ? todo.description
                     : <del>{ todo.description }</del>
                  }

               <button
                  onClick={ () => deleteTodo( todo.id ) } 
                  className="btn btn-danger">
                  X
               </button>
            </li>
         ))}
      </ul>
   )
}
