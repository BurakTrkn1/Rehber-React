import React, { useEffect, useState } from "react";
import {
  Button,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Input,
  Label,
  Row,
  Container,
  Col,
  Form,
} from "reactstrap";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm, Controller } from "react-hook-form";
import "../../src/App.css"

const schema = yup.object().shape({
  name: yup.string().required("you did not enter a name"),
  surname: yup.string().required("you did not enter a surname"),
  phone: yup
    .string()
    .typeError("You must enter numbers")

    .matches(
      /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im,
      "your phone number must be more than 11 characters"
    ),
  // .required("phone must be no more than 11 characters"),
  gmail: yup
    .string()
    .required("enter your email correctly")
    .matches(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      "enter your email correctly"
    ),
});
function Modals({
  personData,
  setPersonData,
  value1,
  value2,
  value3,
  setPersonId,
  personId,
  value4,
  modal,
  setModal,
  count,
  setCopyPersondata,
  setCount,
}) {
  const toggle = () => setModal(!modal);
  const [data, dataText] = useState([]);
  const {
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmitt = (data) => {
    console.log("onSumbit");
    clearstate();
    if (value1 === undefined) {
      personData = [
        ...personData,
        {
          name: data.name,
          surname: data.surname,
          phone: data.phone,
          gmail: data.gmail,
          id: personData.length + 1,
        },
      ];
      console.log(personData);
      setPersonData(personData);
    } else {
      personData.map((obj) => {
        return obj.id == personData[0].id;
      });
      personData[0].name = data.name;
      personData[0].surname = data.surname;
      personData[0].phone = data.phone;
      personData[0].gmail = data.gmail;
    }
    setPersonData(personData);

    dataText({
      dataname: "",
      surname: "",
      phone: "",
      gmail: "",
    });
    setCopyPersondata(personData);
  };
  const clearstate=()=>{
    reset();
     toggle();
     {
      errors.name="";
     }
     {
      errors.surname="";
     }
     {
      errors.phone="";
     }
     {
      errors.gmail="";
     }
  
  
    }

  
  // const onChange = (text, name1) => {
  //   switch (name1) {
  //     case "name":
  //       setTextM((pres) => ({ ...pres, name: text }));
  //       break;
  //     case "surname":
  //       setTextM((pres) => ({ ...pres, surname: text }));
  //       break;
  //     case "phone":
  //       setTextM((pres) => ({ ...pres, phone: text }));
  //       break;
  //     case "gmail":
  //       setTextM((pres) => ({ ...pres, gmail: text }));
  //       break;
  //     default:
  //       break;
  //   }
  // };
  useEffect(() => {
    value1 != undefined
      ? dataText({
          name: value1,
          surname: value2,
          phone: value3,
          gmail: value4,
        })
      : dataText({
          name: "",
          surname: "",
          phone: "",
          gmail: "",
        });
  }, [value1]);

  return (
    <div>
      <Modal isOpen={modal} fade={false} toggle={toggle}>
        <form onSubmit={handleSubmit((data) => onSubmitt(data))}>
          <ModalHeader toggle={toggle}>Rehber</ModalHeader>
          <ModalBody>
            <Container>
              <Row xs={1}>
                <Col className="">
                  {/* <Controller></Controller> */}
                  <Label for="input-name"> Name</Label>
                  <Controller
                    control={control}
                    name="name"
                    render={({ field: { onChange, onBlur, value } }) => (
                      <Input
                      defaultValue={value1 !== undefined ? value1:""}
                        value={value}
                        onChange={onChange}
                        onBlur={onBlur}
                        selected={value}
                        required
                      />
                    )}
                  />
                  <p className="error">{errors.name?.message}</p>

                  <Label for="input-surname"> Surname </Label>
                  <Controller
                    control={control}
                    name="surname"
                    render={({ field: { onChange, onBlur, value, ref } }) => (
                      <Input
                      defaultValue={value2 !== undefined ? value2:""}

                        value={value}
                        onChange={onChange}
                        onBlur={onBlur}
                        selected={value}
                        required
                      />
                    )}
                  />
                  <p className="error" color="red">
                    {errors.surname?.message}
                  </p>

                  <Label for="input-phone"> Phone </Label>
                  <Controller
                    control={control}
                    name="phone"
                    render={({ field: { onChange, onBlur, value, ref } }) => (
                      <Input
                      defaultValue={value3 !== undefined ? value3:""}

                        value={value}
                        onChange={onChange}
                        onBlur={onBlur}
                        selected={value}
                        required
                      />
                    )}
                  />
                  <p className="error">{errors.phone?.message}</p>

                  <Label for="input-gmail"> Gmail </Label>
                  <Controller
                    control={control}
                    name="gmail"
                    render={({ field: { onChange, onBlur, value } }) => (
                      <Input
                      defaultValue={value4 !== undefined ? value4:""}

                        value={value}
                        onChange={onChange}
                        onBlur={onBlur}
                        required
                      />
                    )}
                  />
                  <p className="error" color="red">
                    {errors.gmail?.message}
                  </p>
                </Col>
              </Row>
            </Container>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" type="submit">
              {value1 == undefined ? "Add" : "Edit"}
            </Button>{" "}
            <Button color="secondary" onClick={toggle}>
              Cancel
            </Button>
          </ModalFooter>
        </form>
      </Modal>
    </div>
  );
}
export default Modals;
// onClick={() => onSubmit()}
