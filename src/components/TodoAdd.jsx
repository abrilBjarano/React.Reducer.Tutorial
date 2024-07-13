import { useForm } from "../hooks/useForm";

export const TodoAdd = ({ dispatch }) => {

   const { onSubmit, onChangeInput, inputValue } = useForm(dispatch);

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
