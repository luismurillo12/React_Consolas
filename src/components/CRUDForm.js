import { useEffect, useState } from "react";


const initailForm = {
    name: "",
    year: "",
    id: null,
  };

const CRUDForm =({createData, updateData, dataToEdit, setDataToEdit}) => {
    const [form, setForm] = useState(initailForm);

    useEffect(()=>{
      if(dataToEdit){
        setForm(dataToEdit);
      }else{
        setForm(initailForm)
      }
    },[dataToEdit])

    //esto es para controlar input text 
    const handleChange = (e) => {
      setForm({
        ...form, 
        [e.target.name]:e.target.value,
      }); 
    };
  
    //esto es para controlar submit del formulario
    const handleSubmit = (e) => {
      e.preventDefault();
  
      if (!form.name || !form.year) {
        alert("Datos incompletos");
        return;
      }
  
      if (form.id === null) {
        createData(form);
      } else {
        updateData(form);
      }
  
      handleReset();
    };
  
    const handleReset = (e) => {
      setForm(initailForm);
      setDataToEdit(null); 
    };
    
    
    return(
        <div>
            <h3>{dataToEdit?"Editar":"Agregar"} Consola</h3>
            <form onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Consola" onChange={handleChange} value={form.name}/>
            <input type="text" name="year" placeholder="Año" onChange={handleChange} value={form.year}/>
            <input type="submit" value="Enviar"/>
            <input type="reset"s value="Limpiar" onClick={handleReset}/>
            </form>
        </div>
    )
}

export default CRUDForm; 