import React from "react";
import { useState } from "react";
import { Button, Row } from "reactstrap";
import { Link , NavLink } from "react-router-dom";
import Modals from "./Modals";
import Input from "./Input";
function Header({
  setModal,
  modal,
  personData,
  setPersonData,
  setCopyPersondata,
  copyPersondata,
}) {
  const [textM,setDatatext] = useState();
  const [modalShow, setModalShow] = useState(false);
  const [newPerson, setNewPerson] = useState([]);
  
  const onChange = (e,text) => {
    setDatatext(text);
    setPersonData(copyPersondata);
    personData = personData.filter((person) => person.name.includes(text));
    text==""? setPersonData(personData) : setCopyPersondata (copyPersondata)
    if (personData.length == 0) {
      setCopyPersondata(copyPersondata)
    }
    setCopyPersondata(personData);
    // if(text=="")
    // {
    //   setPersonData(copyPersondata)
    // }
  };

  const personNew = () => {
    setModal(true);
    setModalShow(true);
    setDatatext();
  };
  return (
    <div>
     
      {modalShow && (
        <Modals
          modal={modal}
          setModal={setModal}
          personData={personData}
          setPersonData={setPersonData}
          setCopyPersondata={setCopyPersondata}
        />
      )}
      <Row className="row-cols-lg-auto g-3 align-items-center ms-5">
        <Button color="danger" className="ms-5 h1" onClick={() => personNew()}>
          {" "}
          Add
        </Button>
        <Input
          name="search"
          type="text"
          placeHolder="search..."
          onChange={(e) => onChange(e.target.value)}
        />
      </Row>
    </div>
  );
}
export default Header;






















// import React, { useState } from 'react';
// import {Button,Row} from 'reactstrap';
// import Modal from './Modals';
// export default function Header( {setModal,
//     modal,
//     person,
//     setPerson,
//       props,value1}) {
   
//     const [modalShow,setModalShow]=useState(false);
//    const newPerson=()=>{
//     setModal(true);
//     setModalShow(true);
//    }
//     return(
//         <div>
//             {modalShow &&(
//              <Modal
//              modal={modal}
//              setModal={setModal}
//              props={props}
//              value1={value1}
//              />
            
//             )}
//             <Row className='row-cols-g-lg-2'></Row>
//           <Button type='info' onClick={()=> newPerson()}>Add</Button>
//         </div>
//     )
    
// }
