const initialState = [{
   id: 1,
   todo: 'Limpiar cuarto',
   done: false
}]

const todoReducer = ( state = initialState, action = {} ) => {
   switch( action.type ){
      case 'Add todo':
         return [ ...state, action.payload ];
      
      default:
         return state;
   }
};

// const todos = todoReducer();
// console.log( todos );

const newTodo = {
   id: 2,
   todo: 'Ir a la facu',
   done: false
}

const addTodoAction = {
   type: 'Add todo',
   payload: newTodo
}

const todos = todoReducer( undefined, addTodoAction );
console.log( todos );











/* 📝 NOTAS

Como se mencionó anteriormente, el Reducier debe regresar un nuevo estado, no
una mutación.

Si yo pusiera

todos = todoReducer();
todos.push({
   id: 2,
   todo: 'Hacer ejercicio',
   done: false
})
console.log(todos);

Básicamente estaría MUTANDO el estado, y no regresandoo uno nuevo.

*/