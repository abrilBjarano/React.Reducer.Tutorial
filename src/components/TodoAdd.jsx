import { useForm } from "../hooks/useForm";

export const TodoAdd = () => {

   const { onSubmit, onChangeInput, inputValue } = useForm();

   return (
      <form 
         onSubmit={ onSubmit }
         className="mb-4">
         <input
            value={ inputValue }
            onChange={ onChangeInput }
            className="form-control"
            type="text"
            placeholder="What needs to be done?"/>
      </form>
   )
}
