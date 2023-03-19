import React from "react";

const CRUDTableRow = ({ele, setDataToEdit, deleteData}) => {
  let {name, year, id} = ele
  return (
        <tr>
            <td>{name}</td>  
            <td>{year}</td>
            
            <td>
                <button onClick={()=> setDataToEdit(ele)}>Editar</button> 
                <button onClick={()=> deleteData(id)}>Eliminar</button>
            </td>
        </tr>

  );
}

export default CRUDTableRow;
