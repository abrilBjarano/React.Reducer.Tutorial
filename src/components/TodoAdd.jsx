import { useState } from "react";

export const TodoAdd = ({ dispatch }) => {

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

   return (
      <div className="row mb-4">

         <form 
            onSubmit={ onSubmit }
            className="col-10">
            <input
               value={ inputValue }
               onChange={ onChangeInput }
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
   )
}
