export const TodoAdd = () => {
   return (
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
   )
}
