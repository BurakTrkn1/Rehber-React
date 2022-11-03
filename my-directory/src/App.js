import Person from "./Components/Person";
import Header from "./Components/Header";
import React, { useState } from "react";
import "./App.css";
import { GlobalProvider } from "./Context/Globalstate";
import { BrowserRouter, Routes, Route,Link,NavLink} from "react-router-dom";
import Personss from "./Components/Personss";
import Temp from "./Components/Temp";
import back from"../src/img/back.jpg"

function App() {
  const [personData, setPersonData] = useState([]);
  const [addModal, setAddModal] = useState(false);
  const [editModal, setEditModal] = useState(false);
  const [copyPersondata, setCopyPersondata] = useState([]);
  return (
    <div>
         <style>
          {'body{background-color: cornsilk;}'}
         </style>
      <Header
        modal={addModal}
        setModal={setAddModal}
        personData={personData}
        setPersonData={setPersonData}
        copyPersondata={copyPersondata}
        setCopyPersondata={setCopyPersondata}
      />
      <GlobalProvider>
        <BrowserRouter>
          <Routes>
            <Route
              index
              element={
                <Person
                personData={personData}
                setPersonData={setPersonData}
                modal={editModal}
                setModal={setEditModal}
                setCopyPersondata={setCopyPersondata}
                />
              }

            />
            {/* <Route index element={
                    <Personss   personData={personData}                      
                    setPersonData={setPersonData}
                    copyPersondata={copyPersondata}
                        setCopyPersondata={setCopyPersondata}/>
            }
            /> */}
            <Route path="/Personss" element={<Personss   personData={personData}  
        setPersonData={setPersonData}
        copyPersondata={copyPersondata}
        setCopyPersondata={setCopyPersondata}/>} />
          </Routes>
        </BrowserRouter>
      </GlobalProvider>
    </div>
  );
}
export default App;