const initialState = [{
   id: 1,
   todo: 'Hacer notas de este tutorial en el ipad',
   done: false
}]


const todoReducer = ( state = initialState, action = {} ) => {

   if( action.type === 'Add todo' ){
      return [...state, action.payload ]
   }

   return state; 
};


const newTodo = {
   id: 2,
   todo: 'Hacer ejercicio',
   done: false
}


const addTodoAction = {
   type: 'Add todo',
   payload: newTodo
}


const todos = todoReducer( undefined, addTodoAction );
console.log(todos);








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