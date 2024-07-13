export const TodoList = ({ todos }) => {
   return (
      <ul className="list-group">
         { todos.map( todo => (
            <li 
               key={ todo.id }
               className="list-group-item d-flex justify-content-between align-items-center">

               {todo.description}

               <button className="btn btn-danger">X</button>
            </li>
         ))}
      </ul>
   )
}
