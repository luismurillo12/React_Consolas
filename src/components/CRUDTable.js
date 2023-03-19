import React from "react";
import CRUDTableRow from "./CRUDTableRow";

const CRUDTable = ({data, setDataToEdit, deleteData})=> {
  return (
   <div>
     <h3>Tabla de Consolas</h3>
     <table>
       <thead>
         <tr>
           <th>Nombre</th>
           <th>Año</th>
           <th>Acciones</th>
         </tr>
       </thead>
       <tbody>
          {data.length === 0 ?
          (<tr><td colSpan="3">Sin datos</td></tr>): 
          (data.map(ele => <CRUDTableRow key={ele.id} ele={ele} 
          setDataToEdit={setDataToEdit} 
          deleteData={deleteData}/>))}
       </tbody>
     </table>

     
   </div>
  );
}

export default CRUDTable;
