import React, { useContext } from "react";
import { Link,NavLink} from "react-router-dom";
import { GlobalContext } from "../Context/Globalstate";
import Header from "./Header";
import '../../src/App.css'
function Personss() {
  const { name, setName } = useContext(GlobalContext);
  const { surname, setSurname } = useContext(GlobalContext);
  const { phone, setphone } = useContext(GlobalContext);
  const { gmail, setgmail } = useContext(GlobalContext);
  return (
    <div>
      <NavLink to="/">Home</NavLink>
      <div className="container">
        <p>name:{name}</p>
        <p>surname:{surname}</p>
        <p>{phone}</p>
        <p>{gmail}</p>


      </div>
    </div>

  );
}
export default Personss;