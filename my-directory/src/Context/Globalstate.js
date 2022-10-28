import { createContext, useState } from "react";
export const GlobalContext = createContext();
export const GlobalProvider = (props) => {
  const [val, setVal] = useState("");
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [phone, setPhone] = useState("");
  const [gmail, setGmail] = useState("");

  return (
    <GlobalContext.Provider
      value={{
        val: val,
        name: name,
        surname: surname,
        phone: phone,
        gmail:gmail,
        links: ["a", "b"],
        setVal,
        setName,
        setSurname,
        setPhone,
        setGmail,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};