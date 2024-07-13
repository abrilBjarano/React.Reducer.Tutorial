import { useReducer } from "react";
import { todoReducer } from "./todoReducer";

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

         <div className="row mb-4">

            <form className="col-10">
               <input
                  className="form-control"
                  type="text"
                  placeholder="What needs to be done?"/>
            </form>

            <div className="col-2 d-grid">
               <button
                  type="submit"
                  className="btn btn-primary">
                     Add
               </button>
            </div>

         </div>
         

         <ul className="list-group">
            { todos.map( todo => (
               <li className="list-group-item d-flex justify-content-between align-items-center">

                  {todo.description}

                  <button className="btn btn-danger">X</button>
               </li>
            ))}
         </ul>
      </>
   )
}
