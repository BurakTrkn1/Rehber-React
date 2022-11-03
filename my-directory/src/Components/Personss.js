import React, { useContext } from "react";
import { Link,NavLink} from "react-router-dom";
import { GlobalContext } from "../Context/Globalstate";
import Header from "./Header";
import '../../src/App.css'
function Personss({personData,setPersonData, copyPersondata, setCopyPersondata}) {
  const { name, setName } = useContext(GlobalContext);
  const { surname, setSurname } = useContext(GlobalContext);
  const { phone, setphone } = useContext(GlobalContext);
  const { gmail, setgmail } = useContext(GlobalContext);
  console.log(personData);
  return (
    <div>
      <NavLink to="/">Home</NavLink>
      {personData.map((person,ind)=>{
              return(
                <div className="person">
                     <p>{person.name}</p>
                     <p>{person.surname}</p>
                     <p>{person.phone}</p>
                     <p>{person.gmail}</p>

                     </div> 
                );
              })}
    </div>

  );
}
export default Personss;