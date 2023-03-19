import React, {useState} from "react";
import CRUDForm from "./CRUDForm";
import CRUDTable from "./CRUDTable";

const initialDb = [
    {
      id: 1,
      name: "PlayStation2",
      year: "2000",
    },
    {
      id: 2,
      name: "PlayStation3",
      year: "2006",
    },
    {
      id: 3,
      name: "NintendoDs",
      year: "2004",
    },
    {
      id: 4,
      name: "Xbox360",
      year: "2005",
    },
    {
      id: 5,
      name: "Wii",
      year: "2006",
    },
  ];

const CRUDApp = () =>{
  const [db, setDb] = useState(initialDb);
  const [dataToEdit, setDataToEdit] = useState();


  const createData = (data) => {
    data.id=Date.now(); 
    setDb([...db,data])
  };

  const updateData = (data) => {
    let newData = db.map((el) => (el.id === data.id ? data : el));
    setDb(newData);

  }
  const deleteData = (id) => {
    let isDelete = window.confirm(
      `¿Estás seguro de eliminar el registro?`
        );

    if (isDelete) {
      let newData = db.filter((el) => el.id !== id);
      setDb(newData);
    } else {
      return;
    }

  }   

    return(
        <div>
            
            <CRUDForm  createData={createData}
                      updateData={updateData}
                      dataToEdit={dataToEdit}
                      setDataToEdit={setDataToEdit} />
            <br/>          
            <CRUDTable data ={db}
            setDataToEdit={setDataToEdit}
            deleteData={deleteData}/>

        </div>
    )
}

export default CRUDApp