import { useState } from "react";

export const useForm = ( dispatch ) => {

   const [ inputValue, setInputValue ] = useState('');

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
