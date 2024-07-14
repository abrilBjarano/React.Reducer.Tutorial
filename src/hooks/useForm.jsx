import { useContext, useState } from "react";
import { TodoContext } from "../context/TodoContext";

export const useForm = () => {

   const [ inputValue, setInputValue ] = useState('');
   const { dispatch } = useContext( TodoContext ); 

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

      dispatch({
         type: 'Add todo',
         payload: newValue
      })
   };

   return {
      onChangeInput,
      onSubmit,
      inputValue
   }
}
