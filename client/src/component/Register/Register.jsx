import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import {createUser}from "../../actions/actions";

const Register = () => {
  const [inst, setInst] = useState("");
  const dispatch = useDispatch();
  const [submit, setSubmit] = useState({
    userName: "",
    identificationNumber: "",
    password: "1234",
    role: "client",
    email: "",
    institutionName: "",
    phoneNumber: "",
    address: { province: "test", region: "test", streetAndNumber: "test" },
    businessActivity: "clientSA",
    entity: "",
  });

  const handleSubmit = (send) => {
    send.preventDefault();
    dispatch(createUser(submit));
    alert("Registrado!"); // agregar pop-up!
  };

  const handleChange = (event) => {
    event.preventDefault();
    setInst(event.target.value);
  };

  function handleInputs(e){ 

    // setErr(validate({ //validate
    // ...check,
    // [e.target.name]: e.target.value 
    // //'Pardon, that is not a name!'

    // }));

    setSubmit({ 
    ...submit,
    [e.target.name]: e.target.value
    })     
    console.log(submit)

 }
  return (
    <div>
      <form action="">
        <input type="text" name='userName' placeholder="Nombres y Apellidos" onChange={handleInputs}/>
        <br />
        <input type="text" name="identificationNumber" placeholder="Número de indentificación"  onChange={handleInputs}/>
        <br />

     
        <br />

        <label>Seleccione tipo de entidad:</label>
        <br />

        <select name="entity" value={submit.entity} onChange={handleInputs}>
          <option value="Público">Publica</option>
          <option value="Privado">Privada</option>
        </select>
        <br />

        <input type="text" name="institutionName" placeholder="Nombre de su Entidad"  onChange={handleInputs}/>
        <br />
        <input type="tel" placeholder="Celular" name="phoneNumber"  onChange={handleInputs}/>
        <br />
        <input
          type="email"
          placeholder="Email"
          id="email"
          name="email"
          required
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
          onChange={handleInputs}
        />

        <br />
      </form>

      <button type="submit" onClick={handleSubmit}>
        Registrar
      </button>
    </div>
  );
};

export default Register;
