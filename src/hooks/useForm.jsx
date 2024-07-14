import { useContext, useState } from "react";
import { TodoContext } from "../context/TodoContext";

export const useForm = () => {

   const [ inputValue, setInputValue ] = useState('');
   const { addTodo } = useContext( TodoContext ); 

   const onChangeInput = ({ target }) => {
      setInputValue( target.value );
   };

   const onSubmit = ( event ) => {
      event.preventDefault();

      const newValue = {
         id: new Date().getTime(),
         description: inputValue,
         done: false,
      }

      addTodo( newValue );
   };

   return {
      onChangeInput,
      onSubmit,
      inputValue
   }
}
