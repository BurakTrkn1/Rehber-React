import React, { useContext, useState } from 'react';
import Modals from './Modals';
import { Button} from 'reactstrap';
import { GlobalContext } from '../Context/Globalstate';
import { Link,NavLink } from 'react-router-dom';
import '../../src/App.css'
export default function Person({setEditModal,personData,setPersonData,modal,setModal,value1}) {
   const [personId, setPersonId] = useState(1);
   const [count,setCount]=useState(1);
   const [modalshow,setModalshow]=useState(false);
   const [buttonText,setButtonText]=useState("Edit");
  //  const [name,setName]=useContext(GlobalContext);
  //  const [surname,setSurname]=useContext(GlobalContext);
  //  const [phone,setPhone]=useContext(GlobalContext);
  //  const [gmail,setGmail]=useContext(GlobalContext);

   const handell=(id)=>{
    setPersonData(personData.filter((person)=> id != person.id))
   }
   const Edit=(id)=>{
       setModal(true);
       setModalshow(true);
       setPersonId(id);
       setCount(count)
       console.log(count);
   }
   
    
    return (
    <div>
         {modalshow &&(
          <Modals
         modal={modal}
          setModal={setModal}
          personData={personData}
             setPersonData={setPersonData}
             setPersonId={setPersonId}
             PersonId={personId}
             count={count}
             setCount={setCount}


            value1={
              personData.filter((person)=>person.id=== personId)[0]?.name
              }
           value2={
               personData.filter((person)=>person.id=== personId)[0]?.surname
        
              }
            value3={
                 personData.filter((person)=>person.id=== personId)[0]?.phone
        
                }
           value4={
                personData.filter((person)=>person.id=== personId)[0]?.gmail
                  }
                 />
    
          )}{" "}
        <table className="table table-dark">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Surname</th>
              <th>Phone</th>
              <th>Gmail</th>
              <th>Process</th>
            </tr>
          </thead>
          <tbody>
            {personData.map((person,ind)=>{
                  return(
                <tr key={person.id}>
                  <th scope='row'>{ind + 1}</th>
                     <td onClick={()=>(ind)}>{person.name}</td>
                     <td onClick={()=>(ind)}>{person.surname}</td>
                     <td onClick={()=>(ind)}>{person.phone}</td>
                     <td onClick={()=>(ind)}>{person.gmail}</td>
                     <td>
                       <div>
                      <Button id='edt' color='info' onClick={()=> Edit(person.id)}>Edit</Button>
                      <Button color='warning' onClick={()=> handell(person.id)}>Delete</Button>
                       </div>
                     </td>
                </tr>
                );
            })}
          </tbody>
        </table>
        <NavLink to="/Personss"></NavLink>
      </div>
    );
  }
    

    
   


